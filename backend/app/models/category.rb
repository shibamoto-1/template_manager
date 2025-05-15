class Category < ApplicationRecord
  has_many :templates, dependent: :destroy
  belongs_to :user

  validates :name, presence: true
end
