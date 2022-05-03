class ChangeUsersDnameColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :city_id, :integer
  end
end
