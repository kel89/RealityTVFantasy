/* newsHelpers.js */
function buildNewsPage(){
    /*
    Builds the news page
    */
    // Update nav icon
	activateNav("newsNav");

    // News Data
    let newsData = [
        // {
        //     date: "Week 2",
        //     news: `
        //         News for week 2
        //     `
        // },
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
