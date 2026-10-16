class Api::BookingsController < ApplicationController
	before_action :require_logged_in
	before_action :require_owner, only: [:show, :update, :destroy]

	PER_PAGE = 25

	def index
		page = [params[:page].to_i, 1].max
		bookings = Booking.where(user_id: current_user.id).includes(:restaurant)

		@bookings = bookings
			.order(date: :desc)
			.limit(PER_PAGE)
			.offset((page - 1) * PER_PAGE)
		render :index
	end

	def create
		@booking = Booking.new(booking_params.merge(user_id: current_user.id))

		if @booking.save
			render :show
		else
			render json: @booking.errors.full_messages, status: 422
		end
	end

	def show
		render :show
	end

	def update
		if @booking.update(booking_params)
			render json: @booking
		else
			render json: @booking.errors.full_messages, status: 422
		end
	end

	def destroy
		@booking.destroy
		render json: @booking
	end

	private
	def booking_params
		params.require(:booking).permit(:date, :time, :rest_id, :party_size, :special_request, :occasion, :cancelled)
	end

	def require_owner
		@booking = Booking.find(params[:id])
		unless @booking.user_id == current_user.id
			render json: ['You can only view or modify your own bookings'], status: 403
		end
	end
end
