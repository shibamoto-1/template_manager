class Api::V1::Auth::OmniauthCallbacksController < DeviseTokenAuth::OmniauthCallbacksController
  protected

  def render_data_or_redirect(message, data, user_data = {})
    if ['inAppBrowser', 'newWindow'].include?(omniauth_window_type)
      render_data(message, user_data.merge(data))
    elsif auth_origin_url
      p "通ってますよ！＠＃！＠＃！＠＃！＠＃"
      redirect_to DeviseTokenAuth::Url.generate(auth_origin_url, data.merge(blank: true).merge(redirect_options)), allow_other_host: true
    else
      fallback_render data[:error] || 'An error occurred'
    end
  end
end
