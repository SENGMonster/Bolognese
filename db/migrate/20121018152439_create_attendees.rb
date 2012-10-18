class CreateAttendees < ActiveRecord::Migration
  def change
    create_table :attendees do |t|
      t.string :lastname
      t.string :firstname
      t.date :birthday
      t.string :streetnr
      t.string :city
      t.string :plz
      t.string :email
      t.string :tel

      t.timestamps
    end
  end
end
