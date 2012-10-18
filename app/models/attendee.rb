class Attendee < ActiveRecord::Base
  attr_accessible :birthday, :city, :email, :firstname, :lastname, :plz, :streetnr, :tel
  has_many :reservations
end
