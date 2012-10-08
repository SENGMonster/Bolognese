class CreateTermines < ActiveRecord::Migration
  def change
    create_table :termines do |t|
      t.date :start_date
      t.date :end_date
      t.integer :amount
      t.integer :address_id
      t.integer :seminar_id

      t.timestamps
    end
  end
end
