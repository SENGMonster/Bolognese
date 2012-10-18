class AddMenuToInfoItem < ActiveRecord::Migration
  def change
    add_column :infoitems, :menu_title, :string
  end
end
