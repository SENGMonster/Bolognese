class BookingNotification < ActionMailer::Base
  

  default :from => "herrschroeder1234@gmail.com"
  default :to => "kontakt@ramonaleenings.com"

  def confirm(attendee, reservation)
    @attendee = attendee
    @reservation = reservation
    mail(:subject => "NLP Lifetuning Buchung", :to => attendee.email)
  end

  def stefan(attendee, reservation)
    @attendee = attendee
    @reservation = reservation
    mail(:subject => "NLP Lifetuning Buchung", :to => attendee.email)
  end
end
