class AddPriceToReservation < ActiveRecord::Migration
  def change
    add_column :reservations, :price_id, :integer
  end
end
