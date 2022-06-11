json.extract! @favorite, :id, :user_id, :rest_id 
# json.restaurant @favorite.restaurant
# ratingArr = @favorite.restaurant.reviews.map { |rev| rev.overall }
# json.rest_avatar url_for(favorite.game_place.avatar)
# json.gp_rating (ratingArr.sum).round(1)
# json.gp_length_rat favorite.game_place.reviews.length