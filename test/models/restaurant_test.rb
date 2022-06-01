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
require 'test_helper'

class RestaurantTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
