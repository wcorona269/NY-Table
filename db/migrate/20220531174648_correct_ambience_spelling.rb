class CorrectAmbienceSpelling < ActiveRecord::Migration[5.2]
  def change
    rename_column :reviews, :ambiance, :ambience
  end
end
