class AddUsersPhoneLimit < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :phone, :integer, limit: 8
  end
end
