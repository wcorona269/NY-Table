class RemoveCityIds < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :city_id
    remove_column :restaurants, :city_id
  end
end
