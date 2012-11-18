class Attendee < ActiveRecord::Base
  attr_accessible :birthday, :city, :email, :firstname, :lastname, :plz, :streetnr, :tel, :reservations_attributes
  has_many :reservations
  has_many :termines, :through => :reservations
  validates_presence_of :firstname, :lastname, :city, :plz, :streetnr, :email, :birthday

  accepts_nested_attributes_for :reservations
  def address
    "#{streetnr}
    #{plz} #{city}"
  end

  def reservation_string
    restr = ""
    reservations.each do |r|
      restr += "#{r.termine.seminar.title} - #{I18n.l r.termine.start_date, format: :month} #{r.termine.start_date.year}: #{r.price.price}"
    end
    restr
  end


  def reservation_string_long
    restr = ""
    reservations.each do |r|
      restr += "#{r.termine.seminar.title} - #{I18n.l r.termine.start_date, format: :month} #{r.termine.start_date.year}\n
       #{r.price.price} #{r.price.priceclass.name} \n
       #{r.comment}\n
       #{r.day_of_payment}\n
       ----------------------"
    end
    restr
  end

  def to_s
    "#{firstname} #{lastname}"
  end

  def self.recent(int)
    Attendee.order("created_at desc").limit(int)
  end
end
