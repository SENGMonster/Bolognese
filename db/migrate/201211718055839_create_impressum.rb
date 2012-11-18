class CreateImpressum < ActiveRecord::Migration
 def change
    create_table :impressums do |t|
      t.text :text
      t.timestamps
    end
  end
end
