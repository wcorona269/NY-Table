class Booking < ApplicationRecord
	validates :time, :date, :rest_id, :user_id, presence: true
	validates :party_size, presence: true, numericality: { only_integer: true, greater_than: 0, less_than_or_equal_to: 50 }

	belongs_to :user,
		primary_key: :id,
		foreign_key: :user_id,
		class_name: :User

	belongs_to :restaurant,
		primary_key: :id,
		foreign_key: :rest_id,
		class_name: :Restaurant
end