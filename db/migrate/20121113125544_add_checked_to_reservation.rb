class AddCheckedToReservation < ActiveRecord::Migration
  def change
    add_column :reservations, :checked, :boolean
  end
end
