class Termine < ActiveRecord::Base
  attr_accessible :address_id, :amount, :end_date, :seminar_id, :start_date
  belongs_to :seminar
  belongs_to :address
end
