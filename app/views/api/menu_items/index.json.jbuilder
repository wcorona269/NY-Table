@menu_items.each do |menu_item|
	json.set! menu_item.id do
		json.partial! "menu_item", menu_item: menu_item
	end
end