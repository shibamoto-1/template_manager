class RenameGenresToCategories < ActiveRecord::Migration[7.2]
  def change
    rename_table :genres, :categories
  end
end
