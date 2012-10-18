class CreatePaymentmodes < ActiveRecord::Migration
  def change
    create_table :paymentmodes do |t|
      t.string :name

      t.timestamps
    end
  end
end
