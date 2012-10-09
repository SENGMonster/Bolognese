class Picture < ActiveRecord::Base
  attr_accessible :picturable_id, :picturable_type, :name, :item
  belongs_to :picturable, :polymorphic => true
  has_attached_file :item


end
