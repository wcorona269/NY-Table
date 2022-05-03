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

