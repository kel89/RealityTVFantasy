/* newsHelpers.js */
function buildNewsPage(){
    /*
    Builds the news page
    */
    // Update nav icon
	activateNav("newsNav");

    // News Data
    let newsData = [
		{
			date: "Week 2",
			news: `
				<h5>The Bachelor</h5>

				<p>The week kicked off with our host Chris Harrison informing the
				ladies that they’re starting their journey across the world by
				heading to a city full of art, culture, and rock and roll.
				Any guesses? Jerry, did you guess Cleveland?? The girls muster
				up some fake excitement, and Peter helpfully informs us that
				Clark Kent was born in Cleveland — but anyone with a working
				knowledge of Superman knows that is not correct
				(the creators were though). </p>

				<p>
				Victoria F (Andrew) was selected for a one-on-one date that
				included a flight tour around the city (piloted by Peter, of
				course), a day in an empty Cedar Point amusement park,
				and a private concert with country singer Chase Rice. Things
				take a turn when it’s revealed that Chase Rice is actually
				Victoria F’s ex-boyfriend… awkward! After the concert, poor,
				clueless Peter chats with Chase while Victoria frets. At dinner,
				Victoria informs Peter about her past with Chase and after
				getting over the initial awkwardness of it all, he appreciates
				her honesty and rewards her with a rose.
				</p>

				<p>
				The group date took place in the Browns’ stadium and split the
				 women into two teams for a game of football. The winners
				 were promised additional time with Peter that night, while
				 the losers would go home. Shiann (Alex C) earned the nickname
				 “Shiann-imal”, scoring all her team’s touchdowns. Victoria P
				 (Brock) got some extra facetime with Peter by sitting on the
				 sidelines due to her “bad back”. With the game on the line,
				 Kelley (Maddie) completed a beautiful pass to Deandra (Maddie)
				 resulting in a tie, meaning all 13 women would have to share the
				  time with Peter at night.
				</p>

				<h5>Kids Baking Championship</h5>
				<p>
				This week the kids had 2 hours to bake Llama Cupcakes after
				meeting a real-life llama. Each baker was assigned a flavor
				and was tasked with baking up delicious flavored cupcakes that
				look like a llama. Duff (a judge) raised the stakes by saying
				that he might get the winner’s llama tattooed on himself but
				in the end, truly not a single cupcake resembled a llama.
				</p>

				<p>
				Graysen (Jerry) continued her hot streak and won the challenge
				for the second week in a row. Instead of Duff getting a tattoo,
				she took home a llama necklace. Despite some past
				“Llama Trauma” (an alpaca bit his finger), Reggie
				(Alex G) was safe. The bottom two came down to Avner (Matt)
				and Saleem (Maddie), and neither one of them wanted to get
				e-llama-nated. Avner’s caramel apple cupcake was too sweet
				and looked more like a cow than a llama, but Saleem torched
				the marshmallows on his smores cupcakes after he had already
				put the graham cracker crumble, leaving the judges with
				a burnt taste in their mouths. This proved a costly mistake
				and Saleem was sent home.
				</p>

				<h5>Project Runway</h5>

				<p>
				As mentioned in the previous update, Dayoung (Jerry) was
				struggling with some health/fatigue issues. This came to a head
				this week when she decided that she needs to do what’s best for
				her health and… send herself home (sorry, Jerry!). In an
				additional twist, Marquise (Brock) was given a second chance,
				rejoining the remaining designers in place of Dayoung.
				</p>

				<p>
				The theme this week was “sheer”, with each of the designers
				challenged to create a sheer “editorial” look for the runway.
				Marquise showed the judges they were wrong to send him home l
				ast week, scoring in the top 3 this week with his design. Nancy
				(Shelley) also had a top look, but Sergio (Marie) took home the
				challenge win. Geoffrey (Martyna), Victoria C (Maddie), and Chelsey
				(Andrew) made looks that weren’t up to par but in the end,
				it was Chelsey who was out.
				</p>
            `
        },
        {
            date: "Week 1",
            news: `
                Week one saw 4 contestants fall from the Bachelor--Alexa, Alayah,
                Jasmine, and Sarah C--Elise got kicked out of Kids Baking Championship,
                and Marquise got the boot from Project Runway. Survivor and Top Chef
                have yet to start. Currently, Alex G, Marie, Matt, and Maddie are
                tied for the top spot, with Jessica and Kenny carving out spots
                at the bottom of the board.
            `
        }
    ]


	// handle the base html
	let baseHtml = `
		<div class='row'>
			<div class='col p-4 m-4' id='newsDisplay'
				style='margin:auto;'>
			</div>
		</div>
	`;
	$("#displayArea").html(baseHtml);

    // Add the news
    newsData.forEach(function(news){
        $("#newsDisplay").append(`
			<div class='row starRow p-4 m-4'>
				<div class='col'>
                    <h4>${news.date}</h4><br>
                    <p>${news.news}</p>
                </div>
			</div>
			`);
    })
}
