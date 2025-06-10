# app/controllers/overrides/omniauth_callbacks_controller.rb
class Api::V1::Auth::OmniauthCallbacksController < DeviseTokenAuth::OmniauthCallbacksController
  protected

  def redirect_to_auth_origin
    if @auth_origin_url.present?
      redirect_to(@auth_origin_url, allow_other_host: true)
    else
      render json: { error: 'Missing auth_origin_url' }, status: :unprocessable_entity
    end
  end
end
