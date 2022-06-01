json.restaurant do
	json.partial! "restaurant", restaurant: @restaurant
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

# json.menu do 
# 	json.set! :menu.id do
# 		json.extract! menu, :items
# 	end
# end

# json.avg_rating @rest.reviews.average(:overall).floor
# json.photos @rest.photos do |photo|
#     json.filename photo.filename 
#     json.url url_for(photo)
# end