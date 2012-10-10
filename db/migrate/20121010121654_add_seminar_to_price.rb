class AddSeminarToPrice < ActiveRecord::Migration
  def change
    add_column :prices, :seminar_id, :integer
  end
end
