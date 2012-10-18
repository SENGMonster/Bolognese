class TrainerController < ApplicationController
  def index
  end

  def show
    begin
      @trainer=Trainer.find(params[:id])
    rescue
      redirect_to seminar_index_path 
    end
  end
end
