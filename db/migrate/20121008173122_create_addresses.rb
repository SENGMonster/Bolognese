class CreateAddresses < ActiveRecord::Migration
  def change
    create_table :addresses do |t|
      t.string :name
      t.string :street_nr
      t.string :city
      t.string :country
      t.string :plz
      t.string :web
      t.string :description
      t.integer :lng
      t.integer :lat

      t.timestamps
    end
  end
end
