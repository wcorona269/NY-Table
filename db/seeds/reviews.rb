# Generates varied, restaurant-specific reviews: each restaurant gets its own
# quality baseline, ratings cluster around it, and review text mentions real
# dishes from that restaurant's menu with a tone that matches the rating.
module SeedReviews
	OPENERS = {
		high: [
			"Absolutely loved it here.",
			"One of the best meals I've had in the city.",
			"Came for a birthday dinner and it did not disappoint.",
			"This place lives up to the hype.",
			"Instant favorite.",
			"Finally made it here after years of walking past, and wow.",
			"Brought my parents when they visited and they're still talking about it.",
			"A true New York institution for a reason.",
			"Date night here was perfect.",
			"Everything about this visit was spot on.",
		],
		mid: [
			"Solid spot, a few hits and a few misses.",
			"Pretty good overall.",
			"Good, not great.",
			"Decent meal in a nice setting.",
			"Worth a visit if you're in the neighborhood.",
			"Had a nice time, though it wasn't quite what I expected.",
			"A reliable choice.",
		],
		low: [
			"Unfortunately this was a letdown.",
			"I really wanted to like this place.",
			"Not worth the wait in my opinion.",
			"Expected a lot more given the reputation.",
			"Disappointing visit this time around.",
		],
	}

	DISH = {
		high: [
			"The %s was incredible — easily the highlight of the night.",
			"Do not skip the %s. I'm still thinking about it.",
			"We ordered the %s twice, it was that good.",
			"The %s was perfectly done and generously portioned.",
			"Get the %s. Trust me.",
		],
		mid: [
			"The %s was good but a little underseasoned.",
			"I'd order the %s again, though nothing blew me away.",
			"The %s was fine — portions were on the smaller side.",
			"The %s was the best thing we tried.",
		],
		low: [
			"The %s came out lukewarm.",
			"The %s was bland and overpriced.",
			"The %s didn't taste fresh.",
			"We sent back the %s.",
		],
	}

	SERVICE = {
		high: [
			"Our server was attentive without hovering.",
			"Service was warm and fast, even on a packed Friday night.",
			"The staff made us feel like regulars.",
			"Great recommendations from the bartender.",
			"They squeezed us in early and couldn't have been nicer about it.",
		],
		mid: [
			"Service was friendly but a bit slow.",
			"We waited a while for our table even with a reservation.",
			"The room gets loud, so not ideal for a quiet conversation.",
			"Staff was nice enough, just stretched thin.",
		],
		low: [
			"We waited 40 minutes past our reservation time.",
			"Our server seemed to forget about us.",
			"The room was so loud we could barely hear each other.",
			"Had to flag someone down for the check.",
		],
	}

	CLOSERS = {
		high: [
			"Already planning our next visit.",
			"Can't recommend it enough.",
			"Book ahead — it fills up fast.",
			"Worth every penny.",
			"10/10, will be back.",
		],
		mid: [
			"Might come back to try other dishes.",
			"Good option, but there are better spots nearby.",
			"Fine for a casual night out.",
		],
		low: [
			"Probably won't be back.",
			"Hope it was an off night.",
			"There are better options in the area.",
		],
	}

	def self.tone(overall)
		overall >= 4 ? :high : overall == 3 ? :mid : :low
	end

	def self.clamp(n)
		[[n, 1].max, 5].min
	end

	# Approximately normal rating around a restaurant's baseline.
	def self.rating_near(baseline)
		clamp((baseline + (rand + rand + rand - 1.5) * 1.2).round)
	end

	def self.body_for(overall, dishes)
		t = tone(overall)
		sentences = [OPENERS[t].sample]
		dishes.sample([2, dishes.length].min).each_with_index do |dish, i|
			next if i > 0 && rand < 0.5
			sentences << format(DISH[t].sample, dish)
		end
		sentences << SERVICE[t].sample
		sentences << CLOSERS[t].sample
		sentences.join(" ")
	end

	def self.create(count, author_ids:, restaurants:)
		baselines = restaurants.map { |r| [r.id, 3.6 + rand * 1.2] }.to_h
		dishes = restaurants.map { |r| [r.id, r.menu_items.map { |m| m.item[0] }] }.to_h
		weights = restaurants.map { |r| [r.id, 1 + rand(4)] }.to_h
		weighted_ids = weights.flat_map { |id, w| [id] * w }

		count.times do
			rest_id = weighted_ids.sample
			overall = rating_near(baselines[rest_id])
			Review.create!(
				rest_id: rest_id,
				author_id: author_ids.sample,
				overall: overall,
				food: clamp(overall + [-1, 0, 0, 0, 1].sample),
				service: clamp(overall + [-1, 0, 0, 1].sample),
				ambience: clamp(overall + [-1, 0, 0, 1].sample),
				body: body_for(overall, dishes[rest_id].presence || ["food"])
			)
		end
	end
end
