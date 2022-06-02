class Booking < ApplicationRecord
	validates :time, :date, :rest_id, :user_id, :party_size, presence: true

	belongs_to :user,
		primary_key: :id,
		foreign_key: :user_id,
		class_name: :User

	belongs_to :restaurant,
		primary_key: :id,
		foreign_key: :rest_id,
		class_name: :Restaurant
end