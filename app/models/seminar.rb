class Seminar < ActiveRecord::Base


  attr_accessible :abschluss, :description, :title, :subtitle, :slug, :category_id, :infoitems_attributes, :termines_attributes, :pictures_attributes, :prices_attributes, :indexpic
  has_many :infoitems
  has_many :termines
  has_many :pictures, :as => :picturable
  has_many :prices
  belongs_to :category
  has_attached_file :indexpic, path: ":rails_root/public/seminar/:id/:style/:filename", url: "/seminar/:id/:style/:filename"

  accepts_nested_attributes_for :infoitems, :termines, :pictures, :prices


  extend FriendlyId
  friendly_id :title, use: :slugged

  # def should_generate_new_friendly_id?
  #   new_record?
  # end

end
