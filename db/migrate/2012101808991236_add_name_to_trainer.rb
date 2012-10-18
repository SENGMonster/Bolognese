class AddNameToTrainer < ActiveRecord::Migration
  def change
    add_column :trainers, :name, :string
  end
end
