class MenuItem < ApplicationRecord
	validates :rest_id, :item, presence: true
	validates :rest_id, uniquness: true
	
	belongs_to :restaurant,
		primary_key: :id,
		foreign_key: :rest_id,
		class_name: :Restaurant
end
