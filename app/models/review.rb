class Review < ApplicationRecord
	validates :body, :author_id, :rest_id, presence: true
	validates :overall, :food, :service, :ambience, presence: true, inclusion: { in: 1..5 }

	belongs_to :author,
			primary_key: :id,
			foreign_key: :author_id,
			class_name: :User
			
	belongs_to :restaurant,
			primary_key: :id,
			foreign_key: :rest_id,
			class_name: :Restaurant
end
