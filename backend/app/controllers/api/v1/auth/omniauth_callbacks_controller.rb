class Api::V1::Auth::OmniauthCallbacksController < DeviseTokenAuth::OmniauthCallbacksController

  # validate_email_uniquenessを使用するためにオーバーライドしています。
  def omniauth_success
    validate_email_uniqueness
    return if performed?
    
    get_resource_from_auth_hash
    set_token_on_resource
    create_auth_params

  
    if confirmable_enabled?
      @resource.skip_confirmation!
    end
  
    sign_in(:user, @resource, store: false, bypass: false)
  
    @resource.save!
  
    yield @resource if block_given?
  
    if DeviseTokenAuth.cookie_enabled
      set_token_in_cookie(@resource, @token)
    end
  
    render_data_or_redirect('deliverCredentials', @auth_params.as_json, @resource.as_json)
  end
  

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
    user = User.where(email: auth_hash['info']['email'])
               .where.not(provider: auth_hash['provider'])
    
    redirect_to "http://localhost:5173/signin?error=422", allow_other_host: true if user.present?
  end

end
