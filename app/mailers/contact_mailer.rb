class ContactMailer < ActionMailer::Base
  
  default :from => "info@nlp-lifetuning.de"
  default :to => "info@hypnovision.de"

  def new_message(message)
    @message = message
    mail(:subject => "[NLP Lifetuning] #{message.subject}")
  end

end
