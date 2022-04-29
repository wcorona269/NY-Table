class ChangeUserPhoneColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :phone_number, :phone
  end
end
