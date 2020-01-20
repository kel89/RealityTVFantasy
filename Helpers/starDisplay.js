// starDisplay.js

/*
Functions that help display all the stars
*/

function buildStarDisplay(){
	/*
	Biilds the start display and 
	places it in starsDisplay div

	For each show we create a startRow, then for the show
	we get all of the stars, each star then gets a star box
	*/

	// Write base html
	let baseHtml = `
		<div class='row'>
			<div class='col' id='starsDisplay'>
			</div>
		</div>
	`;
	$("#displayArea").html(baseHtml);

	let shows = Object.keys(showDict);
	shows.forEach(function(show){
		let showName = showDict[show];

		// make a show row
		$("#starsDisplay").append(`
			<div class='row starRow p-4 m-4' id='${show}-row'>
				<div class='col' id='${show}-col'></div>
			</div>
			`);

		// Add the title
		$("#"+show+"-col").append(`<h4>${showName}</h4>`);

		// Get the stars for the show
		let stars = starData.filter(x => x.show == show);
		stars.forEach(function(star){
			// get box
			let html = makeStarBox(star);
			$("#"+show + "-col").append(html);
		})
	})
}

function makeStarBox(data){
	/*
	Takes in data on a star (name, show, file)
	and returns the html for their star box
	*/
	// Organize the data
	let file = data.file;
	let name = data.star;
	let show = data.show;
	let status = data.status;

	let elimated = status == "Eliminated" ? true : false;
	// let elimated = true;

	let html = `
	<div class='starBox ${elimated ? "eliminated" : ""}' id='${name}-${show}-box'>
		<img src='Assets/Headshots/${file}' class='starImage center'></img><br>
		<b>Name: </b>${name} <br>
		<b>Show: </b>${showDict[show]} <br>
		<b>Status: </b>${status}
	</div>
	`

	return html;
}