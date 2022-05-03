class EditRestaurants < ActiveRecord::Migration[5.2]
  def change
    remove_column :restaurants, :latitude
    remove_column :restaurants, :longitude
  end
end
