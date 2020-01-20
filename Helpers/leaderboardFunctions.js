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
	let scoreDict = userData.reduce(function(acc, cur){
		// check if we have the current name
		let team = cur.PickedBy;
		if (Object.keys(acc).indexOf(team) >= 0){
			acc[team] = 0
		}
		else{
			acc[team] += 1
		}

		return acc
	}, {})

	// Make the dict into an array
	let scoreData = [];
	Object.keys(scoreDict).forEach(s => scoreData.push({team:s, score:scoreDict[s]}));

	// Filter out the null and sort
	scoreData = scoreData.filter(x => x.team != "null")
	scoreData.sort((a,b) => a.score - b.score);

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