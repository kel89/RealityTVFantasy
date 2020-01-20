/* helper.js -- general helpers */

function cleanString(s){
	/*
	Cleans a string
	*/
	s = s.replace(/\s/g, ''); // remove spaces
	s = s.toLowerCase(s); // lower case
	return s;
}