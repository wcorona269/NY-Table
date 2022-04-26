class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false
      t.integer :phone_number, null: false
      t.string :session_token, null: false
      t.string :password_digest, null: false

      t.timestamps
    end
  end
end

