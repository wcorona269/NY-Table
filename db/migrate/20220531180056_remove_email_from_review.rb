class RemoveEmailFromReview < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :email
  end
end
