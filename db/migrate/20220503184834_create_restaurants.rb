class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.integer :city_id, null: false
      t.string :name, null: false
      t.string :description, null: false
      t.string :cuisines, null: false
      t.integer :price_range, null: false
      t.string :neighborhood, null: false
      t.string :address, null: false
      t.bigint :phone, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.timestamps
    end

    add_index :restaurants, :name, unique: true
  end
end
