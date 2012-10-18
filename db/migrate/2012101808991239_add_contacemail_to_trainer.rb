class AddContacemailToTrainer < ActiveRecord::Migration
  def change
    add_column :trainers, :contact_email, :string
  end
end
