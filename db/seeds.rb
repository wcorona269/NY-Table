# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(fname: "Food", lname: "Enjoyer", dname: "foodenjoyer", password: "ilovefood", email: "foodenjoyer@foodnetwork.com", phone: 2039138354, city_id: 1)

City.create(name: "New York City", state: "New York")
City.create(name: "Los Angeles", state: "California")
City.create(name: "Chicago", state: "Illinois")
City.create(name: "Houston", state: "Texas")

Restaurant.create(
	city_id: 1,
	name: "Hearth",
	description: "Hearth is everything the name implies, a warm, comfortable place where nourishment is savored, and hospitality is served up with love. Chef Marco Canora's cuisine employs seasonal, locally-sourced ingredients prepared with an Italian influence. Hearth serves REAL food that tastes, looks, and smells delicious. And most importantly, food that makes you feel good!",
	cuisines: "Italian",
	price_range: 4,
	neighborhood: "East Village",
	address: "403 East 12 Street New York, NY 10009",
	phone: 6466021300
)