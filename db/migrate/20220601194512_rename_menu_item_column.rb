class RenameMenuItemColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :menu_items, :items, :item
  end
end
