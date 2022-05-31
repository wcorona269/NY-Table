class ReviewsController < ApplicationController
	
	def index
	# debugger
	if author_id 
			reviews = Review.where("author_id = ?", author_id)
			reviews.includes(:author, :restaurant)
	elsif rest_id
			reviews = Review.where("rest_id = ?", rest_id)
			reviews.includes(:author, :restaurant)
	else
			render {}
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
				render :show
		else
				render json: @review.errors.full_messages, status: 422
		end
	end


	def destroy
		@review = review.find(params[:id])

		@review.destroy
		render :show
	end
	

	private
	def review_params
		params.require(:review).permit(:author_id, :rest_id, :body, :overall, :food, :ambiance, :service)
	end
end
