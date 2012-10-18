class SeminarController < ApplicationController
  def index
    @categories = Category.all
  end

  def show
    begin
      @seminar=Seminar.find(params[:id])
    rescue
      redirect_to seminar_index_path 
    end
  end

  def detail
  end

  def booking
  end
end
