class ContactMailer < ActionMailer::Base
  
  default :from => "herrschroeder1234@gmail.com"
  default :to => "kontakt@ramonaleenings.com"

  def new_message(message)
    @message = message
    mail(:subject => "[NLP Lifetuning] #{message.subject}")
  end

end
