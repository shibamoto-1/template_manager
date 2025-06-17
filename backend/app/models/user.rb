class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :validatable,
  :omniauthable, omniauth_providers: [:google_oauth2]
  
  include DeviseTokenAuth::Concerns::User

  has_many :templates, dependent: :destroy
  has_many :categories, dependent: :destroy
end
