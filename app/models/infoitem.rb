class Infoitem < ActiveRecord::Base
  attr_accessible :description, :seminar_id, :short_description, :title, :menu_title, :avatar
  belongs_to :seminar
  has_attached_file :avatar, path: ":rails_root/public/infoitems/:id/:style/:filename", url: "/infoitems/:id/:style/:filename"
end
