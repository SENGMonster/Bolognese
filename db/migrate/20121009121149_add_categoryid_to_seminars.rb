class AddCategoryidToSeminars < ActiveRecord::Migration
  def change
    add_column :seminars, :category_id, :integer
  end
end
