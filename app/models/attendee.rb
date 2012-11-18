class Attendee < ActiveRecord::Base
  attr_accessible :birthday, :city, :email, :firstname, :lastname, :plz, :streetnr, :tel
  has_many :reservations
  has_many :termines, :through => :reservations
  validates_presence_of :firstname, :lastname, :city, :plz, :streetnr, :email, :birthday

end
