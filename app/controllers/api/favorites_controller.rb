class Api::FavoritesController < ApplicationController
	before_action :require_logged_in

	def index
		@favorites = Favorite.where(user_id: current_user.id).includes(restaurant: :reviews)
	end

	def show
		@favorite = Favorite.find(params[:id])
		render :show
	end

	def create
		@favorite = Favorite.new(fave_params.merge(user_id: current_user.id))

		if @favorite.save
			render :show
		else
			render json: @favorite.errors.full_messages, status: 422
		end
	end

	def destroy
		@favorite = Favorite.find(params[:id])

		if @favorite.user_id == current_user.id
			if @favorite.destroy
				render :show
			else
				render json: ['something went wrong'], status: 422
			end
		else
			render json: ['You can only remove your own favorites'], status: 403
		end
	end


	private
	def fave_params
		params.require(:favorite).permit(:rest_id)
	end
end
