class Api::RestaurantsController < ApplicationController

	def index
		@restaurants = Restaurant.all.includes(icon_attachment: :blob)
		@avg_ratings = Review.group(:rest_id).average(:overall)
		@booking_counts = Booking.group(:rest_id).count
		@review_counts = Review.group(:rest_id).count
		render :index
	end

	def show
		@restaurant = Restaurant.includes(
			:menu_items,
			icon_attachment: :blob,
			banner_attachment: :blob,
			photos_attachments: :blob,
			reviews: :author
		).find(params[:id])
		render :show
	end
end
