@index.each do |rest|
	json.set! rest.id do
		json.partial! "/api/restaurants/restaurant", restaurant: rest
		# json.reviewIds rest.reviews.pluck(:id)
		json.avg_rating rest.reviews.average(:overall)
		json.iconUrl url_for(rest.icon)
		json.bookings_count rest.bookings.length
		# json.banner url_for(rest.banner)

		# json.photos rest.photos do |photo|
		# 		json.filename photo.filename 
		# 		json.url url_for(photo)
		# end
	end
end