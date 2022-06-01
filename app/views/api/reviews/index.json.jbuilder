@reviews.each do |review |
	json.set! review.id do
			json.partial! "review", review: review
			json.author do
					json.partial! '/api/users/user', user: review.author
			end
			json.restaurant do
					json.extract! review.restaurant, :name, :neighborhood, :cuisines
			end
	end
end