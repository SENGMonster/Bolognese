class AddSubtitleToSeminar < ActiveRecord::Migration
  def change
    add_column :seminars, :subtitle, :string
  end
end
