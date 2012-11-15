class CreateMessage < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.string :name
      t.text :body
      t.string :subject
      t.string :email
      t.timestamps
    end
  end
end
