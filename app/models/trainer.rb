class Trainer < ActiveRecord::Base
  attr_accessible :description, :name, :subtitle, :profile_picture, :contact_data, :contact_email
  has_attached_file :profile_picture , path: ":rails_root/public/trainer/:id/:style/:filename", url: "/trainer/:id/:style/:filename"
end