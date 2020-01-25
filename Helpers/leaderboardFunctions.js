/* leaderboardFunctions.js */

function buildLeaderboard(){
	/*
	Builds the leaderboard page
	*/
	// handle the base html
	let baseHtml = `
		<div class='row'>
			<div class='col p-4 m-4' id='leaderboard' class='starRow'
				style='margin:auto;'>
				Leaderboard
			</div>
		</div>
	`;
	$("#displayArea").html(baseHtml);

	// Setup the data
	let users = d3.set(data.map(x => x.PickedBy)).values().filter(x => x != "null");
	users.sort(function(a,b){
		a = getScore(a);
		b = getScore(b);
		return b - a;
	})

	// Make the table
	let html = `
		<table class='leaderboard'>
			<tr>
				<th>Player</th>
				<th>Team</th>
				<th>Score</th>
			</tr>
	`;
	users.forEach(function(d){
		html += makeRow(d);
	});
	html += "</table>"

	// add to body
	$("#leaderboard").html(html);

	// Attach event handlers
	$(".starIcon").mouseover(hoverIcon);
	$(".starIcon").mousemove(mousemoveIcon);
	$(".starIcon").mouseout(mouseoutIcon);
}

function makeRow(user){
	/*
	Takes in a piece of data on a player and returns the html
	for their leaderboard row
	This includes their name, their team, their sore, and whatever
	else we decide to include in the future
	*/
	// get the users Data
	let score = getScore(user);

	// Make team icons
	let team = data.filter(x => x.PickedBy == user).sort(function(a,b){
		// sort by show then eliminated
		let showA = a.Show;
		let showB = b.Show;
		let statusA = a.Eliminated;
		let statusB = b.Eliminated;

		if (showA == showB){
			return statusA - statusB;
		}
		else{
			return showA > showB ? -1 : 1;
		}
	});
	let starIcons = '<span>';
	team.forEach(d => starIcons += makeStarIcon(d));
	starIcons += '</span>'

	let html = `
		<tr onclick='buildUserPage("${user}")'>
			<td style='padding-left:5px;'>${user}</td>
			<td>${starIcons}</td>
			<td>${score}</td>
		</tr>
	`;

	return html;
}

function makeStarIcon(d){
	/*
	Takes in a piece of data containing the star, show, and Eliminated
	status and returns the html for a starIcon div to be used in the table
	*/
	let show = d.Show;
	let elim = d.Eliminated;
	let name = d.Name;
	let html = `
		<div class='starIcon'
			style='
				background: ${showColorDict[show]};
				opacity: ${elim == 1 ? .25 : 1};
			'
			show="${show}"
			name="${name}"
			>${abreviationDict[show]}
		</div>

	`;
	return html;
}

function getScore(user){
	/*
	Takes in a user and returns their score
	*/
	let userData = data.filter(x => x.PickedBy == user);
	let score = userData.reduce((acc, curr) => acc += curr.Score, 0)
	return score;
}

function hoverIcon(){
	/*
	Called when a star icon is hovered
	Prodce the toolthip and move it to initial spot
	*/
	let icon = $(this);
	let tooltip = $("#tooltip");

	// get cooridates
	let x = event.pageX + 50;
	let y = event.pageY - 100;

	// get info to show
	let show = icon.attr("show");
	let name = icon.attr("name");
	let img_file = data.filter(x => (x.Name == name) & (x.Show == show))[0].file;

	// write tooltip html
	tooltip.html(`
		<img class='starImage small' src="Assets/Headshots/${img_file}"</img>
		<br>
		<b>Name:</b> ${name} <br>
		<b>Show:</b> ${show}
	`)

	if (y + tooltip.height() > window.innerHeight){
		y = window.innerHeight - tooltip.height();
	}

	// Show and position tooltip
	tooltip.show();
	tooltip.css({'top':y, 'left':x})

}

function mousemoveIcon(){
	/*
	Called when the mouse is moving inside an icon
	moves the tooltip with it
	*/
	let tooltip = $("#tooltip");
	let x = event.pageX + 50;
	let y = event.pageY - 100;
	if (y + tooltip.height() > window.innerHeight){
		// console.log()
		y = window.innerHeight - tooltip.height();
	}
	$("#tooltip").css({'top':y, 'left':x})
}

function mouseoutIcon(){
	$("#tooltip").hide()
}
