class Api::V1::Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController
  before_action :validate_email_uniqueness, only: :create

  protected

  def render_data_or_redirect(message, data, user_data = {})
    if ['inAppBrowser', 'newWindow'].include?(omniauth_window_type)
      render_data(message, user_data.merge(data))
    elsif auth_origin_url
      redirect_to DeviseTokenAuth::Url.generate(auth_origin_url, data.merge(blank: true).merge(redirect_options)), allow_other_host: true
    else
      fallback_render data[:error] || 'An error occurred'
    end
  end

  def validate_email_uniqueness
    user = User.find_by(email: sign_up_params[:email])

    render_error(:unprocessable_entity, "既にユーザーが存在しています", status: 'error') if user.present?
  end
  
end
