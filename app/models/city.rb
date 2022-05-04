class City < ApplicationRecord
	has_many :users, foreign_key: :city_id, class_name: :User
	has_many :restaraunts, foreign_key: :city_id, class_name: :Restaurant
end
