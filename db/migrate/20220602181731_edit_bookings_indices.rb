class EditBookingsIndices < ActiveRecord::Migration[5.2]
  def change
    remove_index :bookings, :rest_id
    remove_index :bookings, :user_id
    add_index :bookings, :rest_id
    add_index :bookings, :user_id
  end
end
