class Api::V1::Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController
  def create
    super do |resource|
      # サインアップ成功後に即座にログインさせる
      # ログイン用のトークンなどを返す処理
      if resource.persisted?
        render json: {
          data: resource,
          token: resource.create_new_auth_token
        }
        return
      else
        render json: { error: resource.errors.full_messages }, status: :unprocessable_entity
      end
    end
  end
  private

  def sign_up_params
    params.require(:registration).permit(:email, :password, :password_confirmation, :name)
  end
end
