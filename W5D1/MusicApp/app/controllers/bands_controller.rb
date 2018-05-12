class BandsController < ApplicationController

  def index
    @bands = Band.all
    render :index
  end

  def new
    @band = Band.new
    render = new
  end

  def edit
  end

  def update
    @band = Band.new(band_params)
    if @band.update
      redirect_to band_url
    else
      flash[:errors] = @band.errors.full_messages
      render :show
    end
  end

  def destroy
    @band = Band.find(params[:id])
    @band.destroy
    redirect_to bands_url

  end

  def show
    @band = Band.find(params[:id])
    render :show
  end

  def create
    @band = Band.new(band_params)
    if @band.save
      redirect_to bands_url
    else
      flash[:errors] = @band.errors.full_messages
      render :new
    end
  end

  private
  def band_params
    params.require(:band).permit(:name)
  end
end
