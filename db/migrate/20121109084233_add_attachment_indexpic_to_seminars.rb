class AddAttachmentIndexpicToSeminars < ActiveRecord::Migration
  def self.up
    add_column :seminars, :indexpic_file_name, :string
    add_column :seminars, :indexpic_content_type, :string
    add_column :seminars, :indexpic_file_size, :integer
    add_column :seminars, :indexpic_updated_at, :datetime
  end

  def self.down
    remove_column :seminars, :indexpic_file_name
    remove_column :seminars, :indexpic_content_type
    remove_column :seminars, :indexpic_file_size
    remove_column :seminars, :indexpic_updated_at
  end
end
