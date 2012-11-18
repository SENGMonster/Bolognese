class Reservation < ActiveRecord::Base
  attr_accessible :attendee_id, :comment, :day_of_payment, :paymentmode_id, :termine_id, :checked, :price_id
  belongs_to :termine
  belongs_to :attendee
  belongs_to :paymentmode
  belongs_to :price

  validates_presence_of :checked, :price_id, :termine_id

  def to_s
    "#{r.termine.seminar.title} - #{r.termine.start_date.month} #{r.termine.start_date} : #{r.price.price} #{r.price.priceclass.name}"
  end
end
