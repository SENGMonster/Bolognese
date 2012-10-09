class Seminar < ActiveRecord::Base
  attr_accessible :abschluss, :description, :title, :category_id, :infoitems_attributes, :termines_attributes
  has_many :infoitems
  has_many :termines
  has_many :pictures, :as => :picturable
  belongs_to :category

  accepts_nested_attributes_for :infoitems, :termines



end
