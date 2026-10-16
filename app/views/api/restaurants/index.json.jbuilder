@restaurants.each do |rest|
	json.set! rest.id do
		json.partial! "/api/restaurants/restaurant", restaurant: rest
		json.avg_rating @avg_ratings[rest.id]
		json.iconUrl url_for(rest.icon)
		json.bookings_count @booking_counts[rest.id] || 0
		json.review_count @review_counts[rest.id] || 0
	end
end