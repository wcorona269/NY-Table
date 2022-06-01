class Api::ReviewsController < ApplicationController

	def index
		@reviews = Review.all
		render :index
	end

	def create
		@review = Review.create!

		if @review.save
			render 'api/reviews/show'
		else
			render json: @review.errors.full_messages, status: 422
		end
	end


	def show 
		@review = review.find(params[:id])
		render :show
	end

	def update
		@review = Review.find(params[:id])
		if @review.update(review_params)
				render json: @review
		else
				render json: @review.errors.full_messages, status: 422
		end
	end


	def destroy
		@review = review.find(params[:id])

		@review.destroy
		render json: @review
	end

	private
	def review_params
		params.require(:review).permit(:author_id, :rest_id, :body, :overall, :food, :ambience, :service)
	end
end
