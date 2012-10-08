class CreateSeminars < ActiveRecord::Migration
  def change
    create_table :seminars do |t|
      t.string :title
      t.text :description
      t.string :abschluss

      t.timestamps
    end
  end
end
