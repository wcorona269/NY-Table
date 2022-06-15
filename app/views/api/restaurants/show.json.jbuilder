json.restaurant do
	json.partial! "restaurant", restaurant: @restaurant
	json.banner url_for(@restaurant.banner)
	json.photoUrls @restaurant.photos.map { |photo| url_for(photo)}
end

json.reviews do
	@restaurant.reviews.each do |review|
		json.set! review.id do
			json.extract! review, :id, :body, :overall, :food, :service, :ambience, :rest_id
			json.author do
				json.extract! review.author, :dname
			end
		end
	end
end

json.menu_items do
	@restaurant.menu_items.each do |item|
		json.set! item.id do
			json.extract! item, :item
		end
	end
end

