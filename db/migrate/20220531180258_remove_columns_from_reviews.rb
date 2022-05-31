class RemoveColumnsFromReviews < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :occasion
    remove_column :reviews, :special_request
  end
end
