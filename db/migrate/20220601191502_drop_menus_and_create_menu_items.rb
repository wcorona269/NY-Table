class DropMenusAndCreateMenuItems < ActiveRecord::Migration[5.2]
  def change
    drop_table :menus

    create_table :menu_items do |t|
      t.integer :rest_id, null: false, unique: true
      t.text :details, array: true, default: []
      t.index :rest_id, unique: true
    end
  end
end
