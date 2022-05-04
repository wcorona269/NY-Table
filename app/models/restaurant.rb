class Restaurant < ApplicationRecord
	belongs_to :city, foreign_key: :city_id, class_name: :City
end
