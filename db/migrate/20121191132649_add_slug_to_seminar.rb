class AddSlugToSeminar < ActiveRecord::Migration
  def change
    add_column :seminars, :slug, :string
    add_index :seminars, :slug
  end
end
