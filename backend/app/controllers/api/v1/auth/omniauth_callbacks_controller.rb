class Api::V1::Auth::OmniauthCallbacksController < DeviseTokenAuth::OmniauthCallbacksController
  def omniauth_success
    Rails.logger.debug request.env.inspect

  end
end