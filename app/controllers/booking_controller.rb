class BookingController < ApplicationController
  def book
    begin
      @termin = Termine.find(params[:termin_id])
      @attendee=Attendee.new 
      @reservation= Reservation.new      
    rescue
      redirect_to seminar_index_path
    end
  end

  def do_booking    
    begin
      @attendee=Attendee.new(params[:attendee])
      @reservation=Reservation.new(params[:reservation])
      @termin = Termine.find(@reservation.termine_id)    

      @reservation.paymentmode=Paymentmode.first
      @reservation.attendee=@attendee

      

      respond_to do |format|
        if @reservation.valid? && @attendee.valid?
          if @attendee.save && @reservation.save
            format.html { redirect_to '/booking/succesfull_booking'}
            BookingNotification.confirm(@attendee, @reservation).deliver
            BookingNotification.stefan(@attendee, @reservation).deliver
          end
        else
          format.html { render action: "book" }
        end
      end
    rescue => e
      binding.pry
      #redirect_to seminar_index_path
    end
  end

  def succesfull_booking

  end
end
