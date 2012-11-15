class HomeController < ApplicationController

  def index
  end

  def about
  end

  def contact
    @message = Message.new
  end

  def create_contact_email_msg
    @message = Message.new(params[:message])
    
    if @message.valid?
      ContactMailer.new_message(@message).deliver
      redirect_to(root_path, :notice => "Nachricht wurde erfolgreich versendet. Danke sehr. Wir melden uns.")
    else
      flash.now.alert = "Bitte alle Informationen eintragen."
      render :contact
    end
  end


  def success
  end

  def impressum
  end
end
