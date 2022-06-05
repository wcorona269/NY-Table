# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

#destroy all data before seeding
User.destroy_all
Restaurant.destroy_all
Review.destroy_all

# users
user1 = User.create(fname: "Food", lname: "Enjoyer", dname: "foodenjoyer", password: "ilovefood", email: "foodenjoyer@foodnetwork.com", phone: 2032550021)
user2 = User.create(fname: "Guest", lname: "User", dname: "guest", password: "guest", email: "guest@mytable.com", phone: 1234567890)
user3 = User.create(fname: "Will", lname: "Corona", dname: "willcorona", password: "willyc", email: "wcorona269@gmail.com", phone: 2039138354)
user4 = User.create(fname: "Veronica", lname: "Theobald", dname: "ronigirl99", password: "randolph", email: "veronica@ron.com", phone: 4444444444)
user5 = User.create(fname: "Kyle", lname: "Ginzburg", dname: "kylekyle", password: "iamkyle", email: "kyle@kyle.com", phone: 5555555555)
user6 = User.create(fname: "Amin", lname: "Babar", dname: "aminbabar", password: "iamamin", email: "amin@amin.com", phone: 6666666666)
user7 = User.create(fname: "Jim", lname: "Nardi", dname: "jimnardi", password: "iamjimmy", email: "jim@jim.com", phone: 7777777777)


User.create(
	fname: Faker::Name.unique.first_name,
	lname: Faker::Name.unique.last_name,
	dname: Faker::Internet.unique.username(specifier: 6),
	password: "fakeuser",
	email: Faker::Internet.unique.email,
	phone: rand(9999999999)
)
User.create(
	fname: Faker::Name.unique.first_name,
	lname: Faker::Name.unique.last_name,
	dname: Faker::Internet.unique.username(specifier: 6),
	password: "fakeuser",
	email: Faker::Internet.unique.email,
	phone: rand(9999999999)
)
User.create(
	fname: Faker::Name.unique.first_name,
	lname: Faker::Name.unique.last_name,
	dname: Faker::Internet.unique.username(specifier: 6),
	password: "fakeuser",
	email: Faker::Internet.unique.email,
	phone: rand(9999999999)
)
User.create(
	fname: Faker::Name.unique.first_name,
	lname: Faker::Name.unique.last_name,
	dname: Faker::Internet.unique.username(specifier: 6),
	password: "fakeuser",
	email: Faker::Internet.unique.email,
	phone: rand(9999999999)
)
User.create(
	fname: Faker::Name.unique.first_name,
	lname: Faker::Name.unique.last_name,
	dname: Faker::Internet.unique.username(specifier: 6),
	password: "fakeuser",
	email: Faker::Internet.unique.email,
	phone: rand(9999999999)
)
User.create(
	fname: Faker::Name.unique.first_name,
	lname: Faker::Name.unique.last_name,
	dname: Faker::Internet.unique.username(specifier: 6),
	password: "fakeuser",
	email: Faker::Internet.unique.email,
	phone: rand(9999999999)
)

User.create(
	fname: Faker::Name.unique.first_name,
	lname: Faker::Name.unique.last_name,
	dname: Faker::Internet.unique.username(specifier: 6),
	password: "fakeuser",
	email: Faker::Internet.unique.email,
	phone: rand(9999999999)
)

User.create(
	fname: Faker::Name.unique.first_name,
	lname: Faker::Name.unique.last_name,
	dname: Faker::Internet.unique.username(specifier: 6),
	password: "fakeuser",
	email: Faker::Internet.unique.email,
	phone: rand(9999999999)
)

User.create(
	fname: Faker::Name.unique.first_name,
	lname: Faker::Name.unique.last_name,
	dname: Faker::Internet.unique.username(specifier: 6),
	password: "fakeuser",
	email: Faker::Internet.unique.email,
	phone: rand(9999999999)
)

User.create(
	fname: Faker::Name.unique.first_name,
	lname: Faker::Name.unique.last_name,
	dname: Faker::Internet.unique.username(specifier: 6),
	password: "fakeuser",
	email: Faker::Internet.unique.email,
	phone: rand(9999999999)
)

User.create(
	fname: Faker::Name.unique.first_name,
	lname: Faker::Name.unique.last_name,
	dname: Faker::Internet.unique.username(specifier: 6),
	password: "fakeuser",
	email: Faker::Internet.unique.email,
	phone: rand(9999999999)
)

User.create(
	fname: Faker::Name.unique.first_name,
	lname: Faker::Name.unique.last_name,
	dname: Faker::Internet.unique.username(specifier: 6),
	password: "fakeuser",
	email: Faker::Internet.unique.email,
	phone: rand(9999999999)
)

User.create(
	fname: Faker::Name.unique.first_name,
	lname: Faker::Name.unique.last_name,
	dname: Faker::Internet.unique.username(specifier: 6),
	password: "fakeuser",
	email: Faker::Internet.unique.email,
	phone: rand(9999999999)
)
User.create(
	fname: Faker::Name.unique.first_name,
	lname: Faker::Name.unique.last_name,
	dname: Faker::Internet.unique.username(specifier: 6),
	password: "fakeuser",
	email: Faker::Internet.unique.email,
	phone: rand(9999999999)
)
User.create(
	fname: Faker::Name.unique.first_name,
	lname: Faker::Name.unique.last_name,
	dname: Faker::Internet.unique.username(specifier: 6),
	password: "fakeuser",
	email: Faker::Internet.unique.email,
	phone: rand(9999999999)
)
User.create(
	fname: Faker::Name.unique.first_name,
	lname: Faker::Name.unique.last_name,
	dname: Faker::Internet.unique.username(specifier: 6),
	password: "fakeuser",
	email: Faker::Internet.unique.email,
	phone: rand(9999999999)
)
User.create(
	fname: Faker::Name.unique.first_name,
	lname: Faker::Name.unique.last_name,
	dname: Faker::Internet.unique.username(specifier: 6),
	password: "fakeuser",
	email: Faker::Internet.unique.email,
	phone: rand(9999999999)
)
User.create(
	fname: Faker::Name.unique.first_name,
	lname: Faker::Name.unique.last_name,
	dname: Faker::Internet.unique.username(specifier: 6),
	password: "fakeuser",
	email: Faker::Internet.unique.email,
	phone: rand(9999999999)
)
User.create(
	fname: Faker::Name.unique.first_name,
	lname: Faker::Name.unique.last_name,
	dname: Faker::Internet.unique.username(specifier: 6),
	password: "fakeuser",
	email: Faker::Internet.unique.email,
	phone: rand(9999999999)
)
User.create(
	fname: Faker::Name.unique.first_name,
	lname: Faker::Name.unique.last_name,
	dname: Faker::Internet.unique.username(specifier: 6),
	password: "fakeuser",
	email: Faker::Internet.unique.email,
	phone: rand(9999999999)
)
User.create(
	fname: Faker::Name.unique.first_name,
	lname: Faker::Name.unique.last_name,
	dname: Faker::Internet.unique.username(specifier: 6),
	password: "fakeuser",
	email: Faker::Internet.unique.email,
	phone: rand(9999999999)
)
User.create(
	fname: Faker::Name.unique.first_name,
	lname: Faker::Name.unique.last_name,
	dname: Faker::Internet.unique.username(specifier: 6),
	password: "fakeuser",
	email: Faker::Internet.unique.email,
	phone: rand(9999999999)
)
User.create(
	fname: Faker::Name.unique.first_name,
	lname: Faker::Name.unique.last_name,
	dname: Faker::Internet.unique.username(specifier: 6),
	password: "fakeuser",
	email: Faker::Internet.unique.email,
	phone: rand(9999999999)
)
User.create(
	fname: Faker::Name.unique.first_name,
	lname: Faker::Name.unique.last_name,
	dname: Faker::Internet.unique.username(specifier: 6),
	password: "fakeuser",
	email: Faker::Internet.unique.email,
	phone: rand(9999999999)
)
User.create(
	fname: Faker::Name.unique.first_name,
	lname: Faker::Name.unique.last_name,
	dname: Faker::Internet.unique.username(specifier: 6),
	password: "fakeuser",
	email: Faker::Internet.unique.email,
	phone: rand(9999999999)
)

User.create(
	fname: Faker::Name.unique.first_name,
	lname: Faker::Name.unique.last_name,
	dname: Faker::Internet.unique.username(specifier: 6),
	password: "fakeuser",
	email: Faker::Internet.unique.email,
	phone: rand(9999999999)
)


# restaurants
rest1 = Restaurant.create!(
	name: "Hearth",
	description: "Hearth is everything the name implies, a warm, comfortable place where nourishment is savored, and hospitality is served up with love. Chef Marco Canora's cuisine employs seasonal, locally-sourced ingredients prepared with an Italian influence. Hearth serves REAL food that tastes, looks, and smells delicious. And most importantly, food that makes you feel good!",
	cuisines: "Italian Comfort",
	price_range: 4,
	neighborhood: "East Village",
	address: "403 East 12 Street New York, NY 10009",
	phone: 6466021300
)

rest2 = Restaurant.create!(
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

rest3 = Restaurant.create!(
	name: "Bill's Bar and Burger",
	description: "In 2010, Bill's Bar & Burger Rockefeller Center opened with 400 seats, making it the biggest standalone burger joint in the country. Every burger, shake, and fry, in dozens of varieties and counting, at Bill's is made fresh daily. Bill's now has two locations across NYC.",
	cuisines: "American",
	price_range: 3,
	neighborhood: "Upper West Side",
	address: "16 W 51st St, New York, NY 10019",
	phone: 2127058510
)


rest4 = Restaurant.create!(
	name: "Central Park Boathouse",
	description: "With their 1858 landscaping plan under construction, Frederick Law Olmsted and Calvert Vaux began adding architectural features to their Park design. Around 1874, Vaux designed a two-story boathouse at the eastern end of the Lake. Here visitors could purchase refreshments, take boat rides, and watch other boats. After this wooden Victorian structure with sloping mansard roof burned down, the current Loeb Boathouse took its place in the 1950s. Today at the New York Boathouse visitors can enjoy a meal in any season, with overhead heating helping to extend as long as possible the pleasure of dining on the deck overlooking the Lake. Come visit a New York legend!",
	cuisines: "American",
	price_range: 3,
	neighborhood: "Midtown East",
	address: "Loeb Boathouse, Park Drive North, E 72nd St, New York, NY 10021",
	phone: 2125172233
)

rest5 = Restaurant.create!(
	name: "Peter Luger Steak House",
	description: "Dig into a delicious steak at Peter Luger. With a history that stretches across three centuries, this landmark chophouse offers a classic 'no-frill' menu that includes mouthwatering grilled dishes served with delicious old fashioned sauce. Voted NYC's No. 1 steakhouse, Peter Luger is popular with many residents who rave about the burgers and steaks. Its casual decor and hall-type atmosphere provide the ideal setting for fun outings with friends or celebrating birthdays. This restaurant also provides catering services on request. Note that Peter Lugar accepts cash, checks and debit cards only.",
	cuisines: "Steakhouse",
	price_range: 3,
	neighborhood: "Williamsburg",
	address: "178 Broadway, Brooklyn, NY 11211",
	phone: 7183877400
)

rest6 = Restaurant.create!(
	name: "Patsy's Pizzeria",
	description: "The original Patsy's in Harlem, unaffiliated with the rest of the Patsy's around the city, is a real piece of New York pizza history. Open since 1933, it was not only one of the first pizzerias in the city, it's also the one that supposedly pioneered selling pies by the slice. It still uses the original coal oven, which gives the thin, crisp crust a hint of smoky char that your average corner slice joint can't pull off with its gas ovens.",
	cuisines: "Pizza",
	price_range: 2,
	neighborhood: "East Harlem",
	address: "2287 1st Ave., New York, NY 10035",
	phone: 2125349783
)

rest7 = Restaurant.create!(
	name: "Katz's Delicatessen",
	description: "This cavernous cafeteria is a repository of New York history—glossies of celebs spanning the past century crowd the walls, and the classic Jewish deli offerings are nonpareil. Start with a crisp-skinned, all-beef hot dog for less than a fiver. Then flag down a meat cutter and order one of the legendary sandwiches. The brisket sings with horseradish, and the thick-cut pastrami stacked high between slices of rye is the stuff of dreams. Everything tastes better with a glass of the hoppy house lager; if you're on the wagon, make it a Dr. Brown's.",
	cuisines: "Delicatessen",
	price_range: 2,
	neighborhood: "Lower East Side",
	address: "205 E Houston St, New York, NY 10002",
	phone: 2122542246
)


rest8 = Restaurant.create!(
	name: "Lombardi's",
	description: "Gennario Lombardi opened his shop in Soho in 1905—the first pizzeria in the U.S. It's hard to vouch for how the pizzas tasted a century ago, but there's more elbow room now after a renovation, if not the charm of the old joint. Still, Lombardi's continues to bake a hot contender for best pie.",
	cuisines: "Pizza",
	price_range: 2,
	neighborhood: "Nolita",
	address: "32 Spring St, New York, NY 10012",
	phone: 2129417994
)

rest9 = Restaurant.create!(
	name: "Tavern on the Green",
	description: "Magical is a word thrown around a lot when discussing Tavern On The Green and one can't help but feel magic in the air. Jim and David, architect Richard Lewis and landscape architect Robin Key, preserved the Victorian/ Gothic elegance of the semi-circular building; it is authentic, natural, elegant and sexy. It has been re-built to spectacular precision and the décor is of a grand farmhouse one might find on the property of an Italian Villa or a historic Hudson River Valley mansion.",
	cuisines: "American",
	price_range: 3,
	neighborhood: "Midtown West",
	address: "Central Park West at 67th St, New York, NY 10023",
	phone: 2126325000
)

rest10 = Restaurant.create!(
	name: "Rainbow Room",
	description: "The historic lounge atop 30 Rock serves breathtaking skyline views alongside old-world-meets-modern American fare from its perch 65 stories high. Dress to the nines (jackets are required) for a haute night of dinner and dancing at the center of the iconic crystal ballroom to the musings of a live band. Or upgrade your weekend with a decadent Sunday Brunch. Reservations for both are accepted up to six weeks in advance.",
	cuisines: "American",
	price_range: 4,
	neighborhood: "Midtown West",
	address: "30 Rockefeller Plaza 65th floor, New York, NY 10112",
	phone: 2129417994
)

rest11 = Restaurant.create!(
	name: "Rao's",
	description: "If you thought getting a table at Per Se was tough, try getting into Rao's. On second thought, don't. Rao's (pronounced “RAY-ohs”) is really a private club without the dues. To eat here, you'll need a personal invite from one of the heavy hitters who “owns” a table. These CEOs, actors, politicians, news personalities and neighborhood old-timers established a long-standing arrangement with the late, legendary owner Frankie “No” Pellegrino, and that's what ensures a seat at one of the ten tables at the Italian-American icon. In fact, reading this review is probably the closest you'll get to Rao's.",
	cuisines: "Italian",
	price_range: 4,
	neighborhood: "East Harlem",
	address: "455 E 114th St, New York, NY 10029",
	phone: 2127226709
)

rest12 = Restaurant.create!(
	name: "Grand Central Oyster Bar",
	description: "If you thought getting a table at Per Se was tough, try getting into Rao's. On second thought, don't. Rao's (pronounced “RAY-ohs”) is really a private club without the dues. To eat here, you'll need a personal invite from one of the heavy hitters who “owns” a table. These CEOs, actors, politicians, news personalities and neighborhood old-timers established a long-standing arrangement with the late, legendary owner Frankie “No” Pellegrino, and that's what ensures a seat at one of the ten tables at the Italian-American icon. In fact, reading this review is probably the closest you'll get to Rao's.",
	cuisines: "Seafood",
	price_range: 2,
	neighborhood: "Midtown East",
	address: "Grand Central Terminal, Lower Concourse, 42nd St, New York, NY 10017",
	phone: 2124906650
)

rest13 = Restaurant.create!(
	name: "Brooklyn Farmacy & Soda Fountain",
	description: "Did you know there aren't any eggs in an egg cream? The classic drink contains seltzer, milk, and chocolate syrup. For decades Brooklyn was known for its classic egg cream, which you could find at the local soda fountain or pharmacy. As these mom and pop stores shuttered, the egg cream almost became extinct. Luckily the egg cream has been reborn. Stop in at the Brooklyn Farmacy, a family owned soda fountain where you can sip egg creams and malts at the counter. Located in a restored 1920's corner pharmacy in Carroll Gardens, the charming ice cream parlor also serves comfort food.",
	cuisines: "Sweets",
	price_range: 1,
	neighborhood: "Cobble Hill",
	address: "513 Henry St, Brooklyn, NY 11231",
	phone: 7185226260
)

rest14 = Restaurant.create!(
	name: "Nathan's Famous",
	description: "The famous frank joint's Surf-and-Stillwell flagship—opened in 1916—grills sizzling hot dogs daily and hosts its iconic, crowd-amassing eating contest every July 4. The original subway tiles and iconic signage are still intact, as are menu staples like crinkle-cut fries and thick-battered corn dogs, but there's one shiny “new” addition: a curbside clam bar, a revival of the restaurant's raw bar from the '50s. East Coast oysters and littlenecks are shucked per order over a mountain of ice, served with chowder crackers, lemon wedges, sinus-clearing horseradish and cocktail sauce.",
	cuisines: "American",
	price_range: 1,
	neighborhood: "Coney Island",
	address: "1310 Surf Ave, Brooklyn, NY 11224",
	phone: 7183332202
)

rest15 = Restaurant.create!(
	name: "Junior's",
	description: "Our landmark location restaurant is located on Cheesecake Corner and Harry Rosen Way--aka Flatbush Avenue EXT and DeKalb in Downtown Brooklyn.  Since 1950, the original Junior's features a fun and friendly atmosphere with Brooklyn memorabilia, a full service bar, and extensive menus for breakfast, lunch, and dinner. Our famous bakery is still in operation with fresh baked rolls and danish all day long.
	
	Visit us to enjoy overstuffed deli sandwiches, famous 10oz. steakburgers, fish, ribs, chicken and, of course, our extensive dessert selection featuring the World's Most Fabulous Cheesecake. Almost any day of the year, there's a family at Junior's celebrating a birthday, an anniversary, graduation, homecoming--you name it. Come visit us and have a taste of Brooklyn history.",
	cuisines: "American",
	price_range: 1,
	neighborhood: "Downtown Brooklyn",
	address: "386 Flatbush Ave Ext, Brooklyn, NY 11201",
	phone: 7188525257
)

rest16 = Restaurant.create!(
	name: "Benihana",
	description: "Welcome to Benihana New York City, a dining experience unlike any other! Our restaurant is in the heart of Manhattan, on the same street as our original restaurant, opened in 1964! Our guests are seated at communal tables in groups, where your personal chef will perform the ancient art of Teppanyaki. Watch as we slice and dice, preparing a meal that will dazzle your eyes as well as your taste buds, whether you choose mouth-watering steak, tender chicken or succulent seafood. You can also enjoy sushi prepared by a talented sushi chef and indulge in a specialty cocktail. The restaurant includes a full bar with sushi lounge, great for after-work drinks, and meeting friends. Guests looking to celebrate a special occasion can dine in our elegant private dining rooms.
	
	Our private dining rooms are perfect for your next event! Call for more details. An 18% service charge is added to all guest checks for parties of eight or more. Proof of vaccination is required for in-restaurant dining.",
	cuisines: "Japanese",
	price_range: 2,
	neighborhood: "Midtown West",
	address: "47 W 56th St, New York, NY 10019",
	phone: 2125810930
)

rest17 = Restaurant.create!(
	name: "Casa Limone",
	description: "Casa Limone offers all weekdays an Executive Lunch Menu for $35 and a Pre-Theatre Dinner menu for $45.
	Casa Limone, located in Midtown Manhattan, near The Rink at Rockefeller Center, MOMA, Radio City Music Hall, Saks Fifth Avenue, The Rockefeller Center Christmas Tree, Winter Village at Bryant Park and Times Square, is the first U.S. restaurant of the Monte Carlo Hospitality Group (MCHG), that also operates the famed Rampoldi Restaurant in Monte Carlo, its sister restaurant, the Michelin-starred La Table d'Antonio Salvatore, and the iconic Atlantic Grill in New York's Lincoln Square.
	
	The menu offers the flavors, wines and spirits of Chef Antonio Salvatore's upbringing in Basilicata and neighboring regions. Through the food, décor and staff, we are bringing the warmth of the Mediterranean that reigns in South of Italy.
	
	Casa Limone offers all weekdays an Executive Lunch Menu for $35 and a Pre-Theatre Dinner menu for $45.",
	cuisines: "Mediterranean",
	price_range: 2,
	neighborhood: "Rockefeller Center",
	address: "20 E 49th St, New York, NY 10017",
	phone: 16463706282
)

# rest1 reviews
Review.create!(
	body: "The food was great but the serving sizes were tiny! If I'm going out for Italian food I want a feast! Overall a great restaurant but a little too 'hip' for me", 
	author_id: user1.id, 
	rest_id: rest1.id, 
	food: 4, 
	service: 5, 
	ambience: 4,
	overall: 4 
)

Review.create!(
	body: "The best restaurant in NY. Food is amazing, the service, and the price. They are all astonishing. I loved it.", 
	author_id: user2.id, 
	rest_id: rest1.id, 
	food: 5, 
	service: 5, 
	ambience: 5,
	overall: 5 
)

Review.create!(
	body: "I went here for an anniversary date and it was spectacular. The staff was extremely professional. Try the cacao bars for dessert!", 
	author_id: user3.id,
	rest_id: rest1.id, 
	food: 5, 
	service: 5, 
	ambience: 5,
	overall: 5 
)

# rest2 reviews
Review.create!(
	body: "This place is a New York institution for a reason. The Gnocchi bolognese will change your life.", 
	author_id: user4.id, 
	rest_id: rest2.id, 
	food: 5, 
	service: 5, 
	ambience: 5,
	overall: 5 
)

Review.create!(
	body: "The best restaurant in NY. The food, the service, and the prices are all amazing. They are all astonishing. I loved it.", 
	author_id: user5.id, 
	rest_id: rest2.id, 
	food: 5, 
	service: 5, 
	ambience: 5,
	overall: 5 
)

Review.create!(
	body: "This restaurant is a shadow of its former self. Now just a tourist trap. Oh well, there's plenty of other great spots for NY Italian.", 
	author_id: user6.id,
	rest_id: rest2.id, 
	food: 3, 
	service: 2,
	ambience: 4,
	overall: 3 
)

bad_reviews = [
	'There was a bug in my food. Yuck.',
	'The bathroom was disgusting, what kind of place are they running here?',
	"The waiter couldn't keep his eyes off my date. Very unprofessional.",
	"I've been to a lot of restaurants but this one takes the cake as the worst experience i've had. Unprofessional staff and food was cold.",
	"Waited an hour to be seated, and the food was cold!",
	"Waitress was rude, and gave us a dirty look when we asked to split the bill.",
	"Terrible!  We waited over an hour for our food",
	"I would not eat here. Service is horrible.",
	"Horrible...did not get water for over 15 minutes...finally got drinks after 20 minutes.  "
]

good_reviews = [
	"We walked in, and immediately got a table.",
	"We had an amazing server, which unfortunately I do not remember his name. He was a training a new waitress who was also very lovely.",
	"The food was plentiful, the kids portion was a great size, my daughter barely finished.",
	"The drinks (alcoholic and non alcoholic) were delicious.",
	"Great playlist, great last minute find. 100% recommend.",
	"I had a great time, there's a reason this place has been open for so long",
	"I took my family out here and everyone had a great time! Can't wait to come back",
	"This place is my favorite!! If you haven't been here make plans to come ASAP!!!",
	"WOW I love this place so much !! I'll always bring friends here when they visit just because I need another excuse to go! LOL",
	"Amazing wait staff. Food comes quick. Very impressed! Also well priced. :)",
	"Amazing ambiance, amazing service, and amazing food.",
	"We ate here twice and both times had great service and fantastic food! This place is top notch!",
	"Energetic atmosphere. Awesome waiter with a fantastic personality. Dinner was fun and lively. It was Saturday night and crowded. Make sure to give yourself plenty of time if your dining on a weekend. It will be  well worth it.",
	"Amazing service. Johnatan was wonderful. Friendly, knowledgeable and thorough. Went above and beyond."
]

200.times do
	Review.create!(
		body: good_reviews.sample,
		author_id: rand(1..30),
		rest_id: rand(1..17), 
		food: rand(4..5),
		service: rand(4..5),
		ambience: rand(4..5),
		overall: 5 
	)
end

132.times do
	Review.create!(
		body: good_reviews.sample,
		author_id: rand(1..30),
		rest_id: rand(1..17), 
		food: rand(4..5),
		service: rand(4..5),
		ambience: rand(4..5),
		overall: rand(4..5) 
	)
	
end

70.times do
	Review.create!(
		body: bad_reviews.sample,
		author_id: rand(1..30),
		rest_id: rand(1..17), 
		food: rand(1..3),
		service: rand(1..3),
		ambience: rand(1..3),
		overall: rand(1..3) 
	)
end

(1..17).each do |idx|
	6.times do
		MenuItem.create!(
			rest_id: idx,
			item: [
				Faker::Food.dish,
				Faker::Food.description,
				rand(1..35).to_s
			]
		)
	end
end

dates = [
	"2022-08-20",
	"2022-09-01",
	"2022-10-15",
	"2022-11-05"
]

times = [
	"08:00",
	"15:00",
	"13:30",
	"12:00",
	"17:15"
]

(1..5).each do |idx|
	3.times do
		Booking.create!(
			date: dates.sample,
			time: times.sample,
			rest_id: rand(1..17),
			user_id: idx,
			party_size: rand(1..20),
			cancelled: false
		)
	end
end

