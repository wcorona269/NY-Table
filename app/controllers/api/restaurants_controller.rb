class Api::RestaurantsController < ApplicationController

	def index
		@index = Restaurant.all
		render json: @index
	end
	
	def show
		@restaurant = Restaurant.find(params[:id])
		render json: @restaurant
	end
end
