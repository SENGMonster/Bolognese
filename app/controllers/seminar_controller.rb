class SeminarController < ApplicationController
  def index
  end

  def show
    @seminar=Seminar.find(params[:id])
  end

  def detail
  end

  def booking
  end
end
