class RenameTerminInReservation < ActiveRecord::Migration
  def up
    rename_column :reservations, :termin_id, :termine_id
  end
  
  def down
    rename_column :reservations, :termine_id, :termin_id
  end
end
