class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.date :date, null: false
      t.time :time, null: false
      t.integer :rest_id, null:false
      t.integer :user_id, null:false
      t.integer :party_size, null:false
      t.string :special_request
      t.string :occasion

      t.timestamps
    end

    add_index :bookings, :user_id, unique: true
    add_index :bookings, :rest_id, unique: true
  end
end
