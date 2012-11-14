class Reservation < ActiveRecord::Base
  attr_accessible :attendee_id, :comment, :day_of_payment, :paymentmode_id, :termin_id, :checked, :price_id
  has_one :termine, through: :termin_id
  belongs_to :attendee
  belongs_to :paymentmode
  belongs_to :price

  validates_presence_of :checked, :price_id, :termin_id
end
