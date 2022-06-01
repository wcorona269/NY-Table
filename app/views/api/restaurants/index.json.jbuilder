@index.each do |rest|
	json.set! rest.id do
		json.partial! "/api/restaurants/restaurant", restaurant: rest
		# json.reviewIds rest.reviews.pluck(:id)
		# json.avg_rating rest.reviews.average(:overall).floor
		# json.photos rest.photos do |photo|
		# 		json.filename photo.filename 
		# 		json.url url_for(photo)
		# end
	end
end

