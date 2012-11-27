class Trainer < ActiveRecord::Base
  attr_accessible :description, :name, :subtitle, :profile_picture, :contact_data, :contact_email, :slug
  has_attached_file :profile_picture , path: ":rails_root/public/trainer/:id/:style/:filename", url: "/trainer/:id/:style/:filename"

  extend FriendlyId
  friendly_id :name, use: :slugged

  # def should_generate_new_friendly_id?
  #   new_record?
  # end
end