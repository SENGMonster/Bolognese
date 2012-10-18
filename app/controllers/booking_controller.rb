class BookingController < ApplicationController
  def book
    @termin = Termine.find(params[:termin_id])
  end

  def do_booking
    @attendee=Attendee.new(params[:attendee])
    @reservation=Reservation.new(params[:reservation])

    @reservation.paymentmode=Paymentmode.first
    @reservation.attendee=@attendee

    @attendee.save
    @reservation.save

    redirect_to "/booking/succesfull_booking"
  end

  def succesfull_booking

  end
end
