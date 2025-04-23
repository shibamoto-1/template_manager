class AddUserToCategory < ActiveRecord::Migration[7.2]
  def change
    add_reference :categories, :user, null: false, foreign_key: true
  end
end
