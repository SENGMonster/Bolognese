class Price < ActiveRecord::Base
  attr_accessible :price, :priceclass_id, :seminar_id
  belongs_to :priceclass
  belongs_to :seminar

  def to_s
    "#{price} #{priceclass.name}"
  end
end
