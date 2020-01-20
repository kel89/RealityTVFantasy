/* userFunctions.js */

function buildUserDropdowns(){
	/*
	Looks in user data and builds the dropdowns
	so everyone can see their team
	*/
	// get the users
	let users = d3.set(userData.map(x => x["PickedBy"])).values()
		.filter(x => x != "null");

	// write html for drop downs
	let html = '';
	users.forEach(function(user){
		html += `
		<a class='dropdown-item' href="#" onclick='buildUserPage("${user}")'>${user}</a>
		`
	});

	// add to dropdown
	$("#nav-user-dropdown-menu").html(html);
}

function buildUserPage(user){
	/*
	Builds the user page for a given user (name string)
	*/

	// handle the base html
	let baseHtml = `
		<div class='row'>
			<div class='col p-4' id='userDisplay' class='starRow'>
				<h2>${user}</h2>
			</div>
		</div>
	`;
	$("#displayArea").html(baseHtml);

	// show the team for this user
	let html = '';
	let team = userData.filter(x => x["PickedBy"] == user);
	console.log(team);
	team.forEach(function(star){
		// get the actual star data
		console.log(star);
		let sd = starData.filter(x => cleanString(x.star) == cleanString(star.Name));
		if (sd.length != 1){return}
		sd = sd[0]
		html += makeStarBox(sd);
	});

	$("#userDisplay").append(html);
}