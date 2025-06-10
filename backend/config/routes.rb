Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post 'guest_login', to: 'guest_sessions#create'
    end
  end
  
  mount_devise_token_auth_for 'User', at: 'api/v1/auth'

  resources :templates, only: [:index, :create, :update, :destroy]
  resources :categories, only: [:update, :destroy]
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
