class Api::ReviewsController < ApplicationController
	before_action :require_logged_in, only: [:create, :update, :destroy]
	before_action :require_author, only: [:update, :destroy]

	PER_PAGE = 25

	def index
		page = [params[:page].to_i, 1].max
		@reviews = Review.includes(:author, :restaurant)
			.order(created_at: :desc)
			.limit(PER_PAGE)
			.offset((page - 1) * PER_PAGE)
		render :index
	end

	def create
		@review = Review.new(review_params.merge(author_id: current_user.id))

		if @review.save
			render 'api/reviews/show'
		else
			render json: @review.errors.full_messages, status: 422
		end
	end


	def show
		@review = Review.find(params[:id])
		render :show
	end

	def update
		if @review.update(review_params)
			render json: @review
		else
			render json: @review.errors.full_messages, status: 422
		end
	end


	def destroy
		@review.destroy
		render json: @review
	end

	private
	def review_params
		params.require(:review).permit(:rest_id, :body, :overall, :food, :ambience, :service)
	end

	def require_author
		@review = Review.find(params[:id])
		unless @review.author_id == current_user.id
			render json: ['You can only edit or delete your own reviews'], status: 403
		end
	end
end
