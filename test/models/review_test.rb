# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  rest_id    :integer          not null
#  body       :string           not null
#  overall    :integer          not null
#  food       :integer          not null
#  service    :integer          not null
#  ambience   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
