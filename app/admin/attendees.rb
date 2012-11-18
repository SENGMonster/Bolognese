ActiveAdmin.register Attendee do
  filter :firstname
  filter :lastname
  filter :city

  #filter :reservations, as: :select
  #filter :reservations_id, collection: proc { Reservation.all }, as: :select
  #filter :termines, as: :check_boxes, collection: proc { Termine.all }
  filter :termines_id, collection: proc { Termine.all }, as: :check_boxes

  form :partial => "form"

  index do
    column :firstname
    column :lastname
    column :address
    column :birthday
    column :email
    column :tel
    column "Angemeldet" do |a|
        I18n.l a.created_at
    end
    column :reservation_string
    default_actions
  end

  show do |ad|
    attributes_table do
      row :firstname
      row :lastname
      row :address
      row :birthday
      row :email
      row :tel
      row "Angemeldet" do |a|
          I18n.l a.created_at
      end
      row :reservation_string_long
    end
    active_admin_comments
  end
  
  csv do
    column :firstname
    column :lastname
    column :address
    column ("Geburtstag") {|a| I18n.l a.birthday}
    column :email
    column :tel
    column ("Angemeldet") {|a| I18n.l a.created_at}
    column :reservation_string_long
  end
end
