class SeminarShowroomController < ApplicationController
  def show
    begin
      @seminar=Seminar.find(params[:id])
    rescue
      redirect_to seminar_index_path 
    end
  end
end