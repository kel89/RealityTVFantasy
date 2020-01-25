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

	// let shows = Object.keys(showDict);
	let shows = d3.set(data.map(x => x["Show"])).values();
	shows.forEach(function(show){
		// make a show row
		$("#starsDisplay").append(`
			<div class='row starRow p-4 m-4' id='${cleanString(show)}-row'>
				<div class='col' id='${cleanString(show)}-col'></div>
			</div>
			`);

		// Add the title
		$("#"+cleanString(show)+"-col").append(`<h4>${show}</h4>`);

		// Get the stars for the show
		let stars = data.filter(x => x.Show == show).sort((a,b) => a.Name - b.Name);
		stars = stars.sort(function(a,b){
			a = a.Name;
			b = b.Name;
			return a < b ? -1 : 1;
		})
		stars.forEach(function(star){
			// get box
			let html = makeStarBox(star);
			$("#"+ cleanString(show) + "-col").append(html);
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
	let name = data.Name;
	let show = data.Show;
	let status = data.Eliminated;
	let team = data.PickedBy;

	let elimated = status == 0 ? "In the hunt" : "Eliminated";
	// let elimated = true;

	let html = `
	<div class='starBox ${status ? "eliminated" : ""}' id='${name}-${show}-box'>
		<img src='Assets/Headshots/${file}' class='starImage center'></img><br>
		<b>Name: </b>${name} <br>
		<b>Show: </b>${show} <br>
		<b>Status: </b>${elimated}
		<b>Team: </b><a href="#" onclick='buildUserPage("${team}")'>${team}</a>
	</div>
	`

	return html;
}
