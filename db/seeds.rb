# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#destroy all data before seeding
User.destroy_all
Restaurant.destroy_all
City.destroy_all


# create stock users
User.create(fname: "Food", lname: "Enjoyer", dname: "foodenjoyer", password: "ilovefood", email: "foodenjoyer@foodnetwork.com", phone: 2032550021, city_id: 1)

User.create(fname: "Guest", lname: "User", dname: "guest", password: "guest", email: "guest@mytable.com", phone: 1234567890, city_id: 1)




# seed cities
City.create(name: "New York City", state: "New York")
City.create(name: "Los Angeles", state: "California")
City.create(name: "Chicago", state: "Illinois")
City.create(name: "Houston", state: "Texas")


# NY restaurants
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

Restaurant.create(
	city_id: 1,
	name: "Carmine's - 91st Street - NYC",
	description: "Carmine's is a family style restaurant offering exceptional value to its guests through the many dishes of Southern Italian cuisine. Restaurateur Artie Cutler crafted Carmine's with a singular vision; bringing his guests abundant portions and making any meal feel like an Italian American wedding feast.

	Platters of made to order pasta, decadent seafood or meat entrees, and of course homemade desserts are all staples at Carmine's, meant for sharing among friends and family. When great food and wine are supported by friendly and knowledgeable service, the results are magic - we want every day to feel like a Sunday afternoon at Grandma's!
	
	We are open for Indoor & Outdoor Dining, Pick-up, Delivery, Catering and Private Parties. Join us for Happy Hour at our Bar!",
	cuisines: "Italian",
	price_range: 3,
	neighborhood: "Upper West Side",
	address: "2450 Broadway New York, NY 10024",
	phone: 2123622200
)

Restaurant.create(
	city_id: 1,
	name: "Bill's Bar and Burger",
	description: "In 2010, Bill's Bar & Burger Rockefeller Center opened with 400 seats, making it the biggest standalone burger joint in the country. Every burger, shake, and fry, in dozens of varieties and counting, at Bill's is made fresh daily. Bill's now has two locations across NYC.",
	cuisines: "American",
	price_range: 3,
	neighborhood: "Upper West Side",
	address: "2450 Broadway New York, NY 10024",
	phone: 2127058510
)

Restaurant.create(
	city_id: 1,
	name: "Central Park Boathouse",
	description: "With their 1858 landscaping plan under construction, Frederick Law Olmsted and Calvert Vaux began adding architectural features to their Park design. Around 1874, Vaux designed a two-story boathouse at the eastern end of the Lake. Here visitors could purchase refreshments, take boat rides, and watch other boats. After this wooden Victorian structure with sloping mansard roof burned down, the current Loeb Boathouse took its place in the 1950s. Today at the New York Boathouse visitors can enjoy a meal in any season, with overhead heating helping to extend as long as possible the pleasure of dining on the deck overlooking the Lake. Come visit a New York legend!",
	cuisines: "American",
	price_range: 3,
	neighborhood: "Midtown East",
	address: "Loeb Boathouse, Park Drive North, E 72nd St, New York, NY 10021",
	phone: 2125172233
)

Restaurant.create(
	city_id: 1,
	name: "Peter Luger Steak House",
	description: "Dig into a delicious steak at Peter Luger. With a history that stretches across three centuries, this landmark chophouse offers a classic "no-frill" menu that includes mouthwatering grilled dishes served with delicious old fashioned sauce. Voted NYC's No. 1 steakhouse, Peter Luger is popular with many residents who rave about the burgers and steaks. Its casual decor and hall-type atmosphere provide the ideal setting for fun outings with friends or celebrating birthdays. This restaurant also provides catering services on request. Note that Peter Lugar accepts cash, checks and debit cards only.",
	cuisines: "Steakhouse",
	price_range: 3,
	neighborhood: "Williamsburg",
	address: "178 Broadway, Brooklyn, NY 11211",
	phone: 7183877400
)

Restaurant.create(
	city_id: 1,
	name: "Patsy's Pizzeria",
	description: "The original Patsy's in Harlem, unaffiliated with the rest of the Patsy's around the city, is a real piece of New York pizza history. Open since 1933, it was not only one of the first pizzerias in the city, it's also the one that supposedly pioneered selling pies by the slice. It still uses the original coal oven, which gives the thin, crisp crust a hint of smoky char that your average corner slice joint can't pull off with its gas ovens.",
	cuisines: "Pizza",
	price_range: 2,
	neighborhood: "East Harlem",
	address: "2287 1st Ave., New York, NY 10035",
	phone: 2125349783
)
