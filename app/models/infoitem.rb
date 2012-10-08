class Infoitem < ActiveRecord::Base
  attr_accessible :description, :seminar_id, :short_description, :title
  belongs_to :seminar
end
