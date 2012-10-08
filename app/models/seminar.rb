class Seminar < ActiveRecord::Base
  attr_accessible :abschluss, :description, :title
  has_many :infoitems
  has_many :termines
end
