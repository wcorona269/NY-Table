class ChangeUserIndices < ActiveRecord::Migration[5.2]
  def change
    remove_index :users, name: "index_users_on_username"
    add_index :users, :phone, unique: true
    rename_column :users, :username, :display_name
  end
end
