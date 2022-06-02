# == Schema Information
#
# Table name: restaurants
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  description  :string           not null
#  cuisines     :string           not null
#  price_range  :integer          not null
#  neighborhood :string           not null
#  address      :string           not null
#  phone        :bigint           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Restaurant < ApplicationRecord
	validates :name, :description, :cuisines, :price_range, :neighborhood, :address, :phone, presence: true
	validates :name, :address, uniqueness: true

	has_many :reviews,
		primary_key: :id,
		foreign_key: :rest_id,
		class_name: :Review

	has_many :menu_items,
		primary_key: :id,
		foreign_key: :rest_id,
		class_name: :MenuItem

	has_many :bookings,
		primary_key: :id,
		foreign_key: :rest_id,
		class_name: :Booking
end