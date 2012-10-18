class AddContactdataToTrainer < ActiveRecord::Migration
  def change
    add_column :trainers, :contact_data, :string
  end
end
