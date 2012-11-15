class Message < ActiveRecord::Base
  attr_accessible :email, :name, :subject, :body


  validates :name, :email, :subject, :body, :presence => true
  validates :email, :format => { :with => %r{.+@.+\..+} }, :allow_blank => true
  
  # def initialize
  # end

  # def initialize(attributes = {})
  #   attributes.each do |name, value|
  #     send("#{name}=", value)
  #   end
  # end

end