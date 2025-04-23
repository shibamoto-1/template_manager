class Category < ApplicationRecord
  has_many :templates
  belongs_to :user
end
