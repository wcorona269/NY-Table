class Api::FavoritesController < ApplicationController

	def index
		@favorites = Favorite.where(user_id: current_user)
	end

	def show
		@favorite = Favorite.find(params[:id])
		render :show
	end

	def create
		@favorite = Favorite.new(fave_params)

		if @favorite.save!
			render :show
		else
			render json: @favorite.errors.full_messages, status: 422
		end
	end

	def destroy
		@favorite = Favorite.find(params[:id])

		if @favorite.id == current_user.id
			if @favorite.destroy!
				render :show
			else
				render json: ['something went wrong'], status: 422
			end
		end
	end


	private
	def fave_params
		params.require(:favorite).permit(:user_id, :rest_id)
	end
end
