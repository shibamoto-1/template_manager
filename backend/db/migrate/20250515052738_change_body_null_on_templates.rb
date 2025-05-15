class ChangeBodyNullOnTemplates < ActiveRecord::Migration[7.2]
  def change
    def change
      change_column_null :templates, :body, true
    end
  end
end
