class Termine < ActiveRecord::Base
  attr_accessible :address_id, :amount, :end_date, :seminar_id, :start_date
  belongs_to :seminar
  belongs_to :address

  def to_s
    "#{seminar.title} - #{I18n.l start_date, format: :month} #{start_date.year}"
  end
end
