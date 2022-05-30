class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :author_id, null: false
      t.integer :rest_id, null: false
      t.string :body, null: false
      t.integer :overall, null: false
      t.integer :food, null: false
      t.integer :service, null: false
      t.integer :ambiance, null: false
      t.string :email, null: false
      t.string :occasion
      t.string :special_request

      t.timestamps

      t.index :author_id
      t.index :rest_id
    end
  end
end

