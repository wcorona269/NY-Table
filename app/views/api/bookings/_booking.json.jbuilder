json.extract! booking, :id, :date, :time, :rest_id, :user_id, :party_size, :special_request, :occasion, :cancelled, :restaurant
json.icon url_for(booking.restaurant.icon)