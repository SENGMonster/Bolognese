class CreatePrices < ActiveRecord::Migration
  def change
    create_table :prices do |t|
      t.decimal :price
      t.integer :priceclass_id

      t.timestamps
    end
  end
end
