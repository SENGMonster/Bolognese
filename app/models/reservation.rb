class Reservation < ActiveRecord::Base
  attr_accessible :attendee_id, :comment, :day_of_payment, :paymentmode_id, :termin_id
  belongs_to :termine
  belongs_to :attendee
  belongs_to :paymentmode
end