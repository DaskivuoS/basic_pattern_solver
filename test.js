function repeat(test_array)
{
	var length_array = test_array.length;
	console.log("There are "+length_array+" charecters in the array and they are:");
	console.log(test_array);
	var refined_array = new Array();
	var index = 0;
	for(var i=0;i<length_array;i++)
	{
		for(var j=0;j<length_array;j++)
		{
			if(test_array[i] == test_array[j])
			{
				var flag = false;
				//first we check if the element is already present in the refined array
				var checker_limit = refined_array.length;
				for(var k=0;k<checker_limit;k++)
				{
					if(test_array[i] == refined_array[k])
						flag = true;
				}
				if(flag == true)
					break;

				else
				{
					refined_array[index] = test_array[i];
					index++;
				}
				
			}
		}
	}
	console.log("Now we bring non-repetetive");
	console.log(refined_array);
}

function sort(input_array)
{
	var length = input_array.length;
	console.log("We need to sort the following array in ascending order");
	console.log(input_array);
	console.log("There are "+length+" elements in the array");
	var count = 0;
	for(var i=1;i>0;i++)
	{
		var done = true;
		for(var j=0;j<length-1;j++)
		{
			if(input_array[j]>input_array[j+1])
			{
				//we need to swap the values
				var temp = input_array[j];
				input_array[j] = input_array[j+1];
				input_array[j+1] = temp;
				done = false;
				count++;
			}
		}
		if(done == true)
			break;
	}
	console.log("Processing completed");
	console.log("Now we tweaked the array into");
	console.log(input_array);
	console.log("We needed "+count+" passes");

	//this is complete
}

function find_slope(input)
{
	var start = input[0];
	var end = input[1];
	//now we need to break the co-ordinates down to the values
	var start_x = Math.floor(start/10);
	var start_y = start%10;
	var end_x = Math.floor(end/10);
	var end_y = end%10;
	//now we get the slope
	var slope = (end_y - start_y)/(end_x - start_x);
	//now we print the values
	console.log("The input was ");
	console.log(input);
	console.log("We broke it up into "+start_x+","+start_y+" and "+end_x+","+end_y);
	console.log("The slope was "+slope);
	//now further assesment
	if(isFinite(slope) == false)
	{
		console.log("infinite, that mens the line is vertical");
	}
	if(slope == 0)
	{
		console.log("zero, that means the line is horizontal");
	}
	if(isFinite(slope) == true && slope!=0)
	{
		//we need to find an equation for the line
		console.log("y="+slope+"*x represents the line from which the line segment is derived");
	}
	return slope;
}

function concat(a,b)
{
	var c=a+b;
	console.log(c);
}
//--------------------------------------this is the trials for the programs to write the program with---------------------------------------
var block_count = 0;//this keeps the count of the blocks and therefore we can stylise the output
function startup()
{
	console.log("#include<stdio.h> \n void main()");
}
function initiate_block()
{
	console.log("\n{\n");
	block_count++;
}
function close_block()
{
	console.log("\n}\n");
	block_count--;
}
function write_message(input)
{
	var pre_set = "";
	for(var i=0;i<block_count;i++)
	{
		pre_set = pre_set.concat(".");
	}
	var output = pre_set.concat(input);
	console.log(output);
}
function initiate_writeup()
{
	startup();
	initiate_block();
	//initiate_block();
	write_message("this is the block to write");
	//close_block();
	close_block();
}

//now is designed the prototype for writing a program
