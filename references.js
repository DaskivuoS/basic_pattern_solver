function in_line_x_pattern(x)
{
	//x is the index of the line to be put to pattern
	var rows_filled = dimensions("rows_filled");
	rows_filled = rows_filled[x-1];
	var max_column = dimensions("max_column");
	//here we need to find out what kind of progression is happening
	var progression = "";
	var arithmetic_progression = false;
	var geometric_progression = false;
	var harmonic_progression = false;

	//here we initialize the variables
	var common_difference = 0;
	var common_ratio = 0;

	//here we define the relationship to one another
	for(var i=1;i<(max_column-1);i++)//start from 1 to incorporate the zeroth element and we take upto one unit short for the last
	{
		if(table[x-1][i] == false)
		{
			console.log("We find a break in "+(i+1)+"th element");
			continue;
		}
		var current_count = i;
		var previous_count = i-1;
		var next_count = i+1;

		common_difference = current_count-previous_count;
		common_ratio = current_count/previous_count;

		//now we predict the next element in the progression
		var predict_arithmetic = current_count+(i*common_difference);
		var predict_geometric = current_count*Math.pow(common_ratio,i);
		var predict_harmonic = 1/(current_count+(i*common_difference));

		console.log("current element is "+current_count);
		console.log("previous element is "+previous_count);
		console.log("next count is "+next_count);
		console.log("The common difference is "+common_difference);
		console.log("The common ratio is "+common_ratio);

		console.log("Arithmetic progression predicts "+predict_arithmetic);
		console.log("Geometric progression predicts "+predict_geometric);
		console.log("Harmonic progression predicts "+predict_harmonic);

		//now we check which kind of progression was used
		if(predict_arithmetic == next_count)
		{
			arithmetic_progression = true;
		}
		if(predict_geometric == next_count)
		{
			geometric_progression = true;
		}
		if(predict_harmonic == next_count)
		{
			harmonic_progression = true;
		}
	}

	//now we allot a kind of progression
	if(arithmetic_progression == true)
		progression = "arithmetic";
	if(geometric_progression == true)
		progression = "geometric";
	if(harmonic_progression == true)
		progression = "harmonic";
	console.log("The progression is "+progression);
}