class AddSubtitleToTrainer < ActiveRecord::Migration
  def change
    add_column :trainers, :subtitle, :string
  end
end
