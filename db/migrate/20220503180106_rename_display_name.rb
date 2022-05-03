class RenameDisplayName < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :display_name, :dname
  end
end
