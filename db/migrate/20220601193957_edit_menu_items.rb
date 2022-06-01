class EditMenuItems < ActiveRecord::Migration[5.2]
  def change
    remove_column :menu_items, :items
    add_column :menu_items, :items, :string, array: true, default: []
  end
end
