ActiveAdmin.register Attendee do
  filter :firstname
  filter :lastname
  filter :city

  filter :termines, as: :check_boxes, collection: proc { Termine.all }
end
