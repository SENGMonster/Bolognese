class Address < ActiveRecord::Base
  attr_accessible :city, :country, :description, :lat, :lng, :name, :plz, :street_nr, :web
  has_one :termine
end
