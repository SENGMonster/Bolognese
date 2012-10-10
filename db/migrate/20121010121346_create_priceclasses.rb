class CreatePriceclasses < ActiveRecord::Migration
  def change
    create_table :priceclasses do |t|
      t.string :name

      t.timestamps
    end
  end
end
