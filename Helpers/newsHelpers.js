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
			date: "Week 4",
			news: `
				<p><strong>Project Runway:</strong></p>

				<p>This week the designers were challenged to create a look incorporating Tie Dye. They learned how to dye the fabric themselves and <strong>Brittany</strong> (<em>Marie</em>) became everyone’s best friend because she was the only one who took notes. Comedian Leslie Jones (who is apparently a Project Runway superfan) was the guest judge this week and made it extra hilarious. For example, when <strong>Geoffrey’s</strong> (<em>Marytna</em>) model walked down the runway Leslie liked the look so much that she called out “Girl, take that dress off—that’s mine”, causing the model to burst out laughing. </p>

				<p>Geoffrey’s military-inspired design did end up being the top look for the week.<strong>Nancy’s</strong> (<em>Shelley</em>) impressive dye job earned her a spot in the top 3, along with<strong>Sergio’s</strong> (<em>Marie</em>) Meghan Markle-esquedress.The bottom two looks were designed by <strong>Victoria</strong> (<em>Maddie</em>) and <strong>Delvin</strong> (<em>Alex C</em>). Victoria’s flouncy blouse and denim diaper missed the mark, but Delvin’s dress was an absolute mess—can best be described as “if Guy Fieri were a dress”. Delvin was sent home.</p>

				<p><strong>Kids Baking Championship</strong></p>

				<p>This week the kids had to create ice cream cone cupcakes. This sent me straight back to elementary school and some random classmate bringing in birthday treats but for those unfamiliar, you scoop cupcake batter into an ice cream cone instead of a muffin tin. <strong>Naima</strong> (<em>Matt</em>) was this week’s winner! Her Maple Bacon cupcakes wowed the judges and secured her a spot in the next round. <strong>Sam</strong> (<em>Andrew</em>) came in second place with his tie dye (lemon/vanilla/lime) cupcakes that tasted like fruity cereal.</p>

				<p>On the bottom were <strong>Morgan</strong> (<em>Marie</em>) and <strong>Avner</strong> (<em>Matt</em>). Avner made mint chocolate chip cupcakes filled with mint white chocolate mousse, topped with mint chocolate chip frosting, and finished with a mint chocolate chip glaze. Morgan made chocolate dulce de leche cupcakes. Both bakers struggled with getting their cupcakes fully cooked—Avner took his out of the oven and then put them back in for longer (which messes with the baking process) and Morgan just started over from scratch. That choice might have saved Morgan, as Avner was sent home. </p>

				<p><strong>Bachelor</strong></p>

				<p>Peter and the ladies are in Lima, Peru and things are getting real! The 4 women that survive the week will get to bring Peter back to their hometowns to meet their families. <strong>Madison</strong> (<em>Nate</em>) receives the first 1-on-1 date and she tells Peter that she grew up in a very religious household and wants her husband to embody the same qualities. Peter pretty much says “that’s nice” but tells Madison that he is falling in love with her and gives her the rose.</p>

				<p><strong>Natasha</strong> (<em>Marie</em>) gets her first 1-on-1 date where they explore the city of Lima. Things seem to be going well, but at dinner Peter tells Natasha that their relationship isn’t where it needs to be to go meet her parents and sends her home. Peter takes <strong>Kelsey</strong> (<em>Shelley</em>) on the final 1-on-1 date to go ATVing and gives her a rose at the end.</p>

				<p><strong>Kelley</strong> (<em>Maddie</em>) starts acting real wacky now that she has to go on a group date with Peter, <strong>Victoria F. </strong>(<em>Andrew</em>), and<strong>Hannah Ann</strong> (<em>Martyna</em>). She calls the other women “children” and is sure that she’ll get a rose (which, for those keeping track at home, is a sure sign that she won’t get a rose). Victoria F. and Peter argue a bunch, but he decides to give her a rose anyways. Hannah Ann gets the remaining rose and Kelley is sent home.</p>

				<p><strong>Survivor</strong></p>

				<p>Here’s a chance for more people to get on the board! First thing to address: there’s some weird “elimination island” where everyone has the option to go to when they’re eliminated. From there, they can compete to try to rejoin the cast. To keep things simple, we’ll use the same format as we have with the Bachelor and Project Runway: Each time a contestant survives an elimination ceremony, they will get a point. If a person comes back from the elimination island, they won’t receive a point until they survive an elimination ceremony.</p>

				<p>Does anyone watch Survivor who would like to commit to writing up a quick recap for it weekly? I don’t have room for another show in my rotation right now, and I definitely don’t understand the alliances, etc. If not, I’ll just pull Wikipedia summaries… like I’m about to do right now:</p>

				<p>20 returning winners arrived in Fiji to play an All-Winners season of Survivor. The two tribes of 10 (Dakal in red and Sele in blue) were informed that the grand prize this season would be $2 Million, and that the Edge of Extinction (the island where the eliminated can go) was in play. Lastly, Jeff introduced the Fire Tokens to the cast, where at their camps the tribes found out they could use their fire tokens to buy advantages and luxury items whenever they were at challenges.</p>

				<p>Sele loses the first immunity challenge, so they’ll have to send someone home. <strong>Adam</strong> (<em>Jessica</em>) and <strong>Denise's</strong> (<em>undrafted</em>) early separation looking for water putting a target on their back. When Adam found out that he was a target, he tried to shift the target onto players with previous relationships like <strong>Natalie</strong> (<em>Alex C</em>) and <strong>Jeremy</strong> (<em>Nate</em>), the two having previously played together. At Tribal Council, Natalie is eliminated, and she chose to bequeath her fire token to Jeremy. During her first day on the Edge, Natalie discovered a hidden immunity idol that works for the next three Tribal Councils, which she could sell to anyone on the losing tribe.</p>

				<p>Dakal, the other tribe, gets to relax and jockey for position the first 2 days. On Day 3 they lose an immunity challenge so must send someone home.<strong>Yul</strong> (<em>Alex G</em>) works to form alliances that target <strong>Amber</strong> (<em>undrafted</em>), <strong>Kim</strong> (<em>undrafted</em>), and <strong>Tyson</strong> (<em>Nate</em>). <strong>Sandra</strong> (<em>Jessica</em>) discovered an offer for an idol had appeared in her belongings for a fire token, which she accepted under the impression that Natalie had made the offer from the Edge. At Tribal Council, the tribe votes Amber out and sends her to the Edge in fear of her husband, <strong>Rob </strong>(<em>Alex C</em>), over at Sele. Before arriving to the Edge, Amber chose to bequeath her fire token to Rob.</p>
			`
		},
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
