class CreateTemplates < ActiveRecord::Migration[7.2]
  def change
    create_table :templates do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.references :genre, null: false, foreign_key: true

      t.timestamps
    end
  end
end
