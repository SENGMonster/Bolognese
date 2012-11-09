class Seminar < ActiveRecord::Base
  attr_accessible :abschluss, :description, :title, :subtitle, :category_id, :infoitems_attributes, :termines_attributes, :pictures_attributes, :prices_attributes, :indexpic
  has_many :infoitems
  has_many :termines
  has_many :pictures, :as => :picturable
  has_many :prices
  belongs_to :category
  has_attached_file :indexpic

  accepts_nested_attributes_for :infoitems, :termines, :pictures, :prices



end
