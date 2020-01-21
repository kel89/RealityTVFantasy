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
	let users = d3.set(data.map(x => x.PickedBy)).values()
	let scoreData = [];
	users.forEach(u => scoreData.push({team:u, score:getScore(u)}));

	// Filter out the null and sort
	scoreData = scoreData.filter(x => x.team != "null")
	scoreData.sort((a,b) => b.score - a.score);

	// Make the table
	let html = `
		<table class='leaderboard'>
			<tr>
				<th>Team</th>
				<th>Score</th>
			</tr>
	`;
	scoreData.forEach(function(d){
		html += `
			<tr>
				<td>${d.team}</td>
				<td>${d.score}</td>
			</tr>
		`;
	});
	html += "</table>"

	// add to body
	$("#leaderboard").html(html);
}


function getScore(user){
	/*
	Takes in a user and returns their score
	*/
	let userData = data.filter(x => x.PickedBy == user);
	let score = userData.reduce((acc, curr) => acc += curr.Score, 0)
	return score;
}