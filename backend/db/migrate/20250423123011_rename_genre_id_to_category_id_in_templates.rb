class RenameGenreIdToCategoryIdInTemplates < ActiveRecord::Migration[7.2]
  def change
    rename_column :templates, :genre_id, :category_id
  end
end
