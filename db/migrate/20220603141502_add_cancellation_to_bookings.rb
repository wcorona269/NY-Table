class AddCancellationToBookings < ActiveRecord::Migration[5.2]
  def change
    add_column :bookings, :cancelled, :boolean, default: false, null: false
  end
end
