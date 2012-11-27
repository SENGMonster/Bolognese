class AddSlugToTrainer < ActiveRecord::Migration
  def change
    add_column :trainers, :slug, :string
    add_index :trainers, :slug
  end
end
