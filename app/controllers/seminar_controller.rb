class SeminarController < ApplicationController
  def index
    @categories = Category.all
  end

  def detail
    begin
      @infoitem=Infoitem.find(params[:id])
    rescue
      redirect_to seminar_index_path 
    end
  end

  def booking
  end

  def agb
  end

end
