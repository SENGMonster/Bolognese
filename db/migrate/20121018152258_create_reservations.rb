class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.date :day_of_payment
      t.text :comment
      t.integer :termine_id
      t.integer :attendee_id
      t.string :paymentmode_id

      t.timestamps
    end
  end
end
