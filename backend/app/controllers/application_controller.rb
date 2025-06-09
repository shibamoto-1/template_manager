class ApplicationController < ActionController::API
  include ActionController::Cookies
	include DeviseTokenAuth::Concerns::SetUserByToken

  private
  def authenticate_user_with_cookie!
    if cookies[:_templi_session].present?
      token = JSON.parse(cookies[:_templi_session])
      request.headers['access-token'] = token['access-token']
      request.headers['client'] = token['client']
      request.headers['uid'] = token['uid']
    end

    authenticate_user!
  end
end
