//this is objected to co-ordinate the activities of the buttons in the system
function input_system()
{
	document.getElementById('table').style.display = "block";
	document.getElementById('accept_table').style.display = "block";
	document.getElementById('reload').style.display = "block";

	document.getElementById('abouts').style.display = "none";
	document.getElementById('accept_pattern').style.display = "none";

	window.scrollTo({ top: 0, behavior: 'smooth' });
}
function show_result()
{
	document.getElementById('see_result').style.display = "block";
	document.getElementById('messages').style.display = "block";
}