class TrainerController < ApplicationController
  def index
    @trainers = Trainer.order('updated_at DESC').all
  end

  def show
    begin
      @trainer=Trainer.find(params[:id])
    rescue
      redirect_to trainer_index_path 
    end
  end
end
