class AddUserIdToTemplates < ActiveRecord::Migration[7.2]
  def change
    add_reference :templates, :user , null: false, foreign_key: true
  end
end
