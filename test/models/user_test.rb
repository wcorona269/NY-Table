# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  dname           :string           not null
#  fname           :string           not null
#  lname           :string           not null
#  email           :string           not null
#  phone           :bigint           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
