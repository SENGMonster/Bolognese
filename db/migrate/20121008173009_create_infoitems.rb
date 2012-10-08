class CreateInfoitems < ActiveRecord::Migration
  def change
    create_table :infoitems do |t|
      t.string :title
      t.string :short_description
      t.text :description
      t.integer :seminar_id

      t.timestamps
    end
  end
end
