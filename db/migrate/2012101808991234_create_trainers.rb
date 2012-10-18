class CreateTrainers < ActiveRecord::Migration
  def change
    create_table :trainers do |t|
      t.text :description
      t.timestamps
    end
  end
end