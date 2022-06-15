json.extract! favorite, :id, :user_id, :rest_id, :restaurant
json.restaurant favorite.restaurant
ratingArr = favorite.restaurant.reviews.map { |rev| rev.overall }
json.rating ratingArr.sum / (favorite.restaurant.reviews.length * 1.0)
json.cuisines favorite.restaurant.cuisines
json.neighborhood favorite.restaurant.neighborhood
json.icon url_for(favorite.restaurant.icon)