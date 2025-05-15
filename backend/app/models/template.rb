class Template < ApplicationRecord
  belongs_to :user
  belongs_to :category

  validates :title, presence: true
  validates :category_id, presence: true

end
