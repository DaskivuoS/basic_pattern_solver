//we need to initialize every cell for the worktable
var table = new Array(10);
for(var i=0;i<10;i++)
{
	table[i] = new Array(10);
	for(var j=0;j<10;j++)
		table[i][j] = false;//every cell is initialized as not taken
}
console.log("new blank table created");

//now we declare the message to be updated and delivered
var message = "";

//-------------------------------------------------------------------------------------------------------------------------------------

//at first we initialize in a way that demonstrates all the cells deactivated
isset_00 = false;
isset_01 = false;
isset_02 = false;
isset_03 = false;
isset_04 = false;
isset_05 = false;
isset_06 = false;
isset_07 = false;
isset_08 = false;
isset_09 = false;

isset_10 = false;
isset_11 = false;
isset_12 = false;
isset_13 = false;
isset_14 = false;
isset_15 = false;
isset_16 = false;
isset_17 = false;
isset_18 = false;
isset_19 = false;

isset_20 = false;
isset_21 = false;
isset_22 = false;
isset_23 = false;
isset_24 = false;
isset_25 = false;
isset_26 = false;
isset_27 = false;
isset_28 = false;
isset_29 = false;

isset_30 = false;
isset_31 = false;
isset_32 = false;
isset_33 = false;
isset_34 = false;
isset_35 = false;
isset_36 = false;
isset_37 = false;
isset_38 = false;
isset_39 = false;

isset_40 = false;
isset_41 = false;
isset_42 = false;
isset_43 = false;
isset_44 = false;
isset_45 = false;
isset_46 = false;
isset_47 = false;
isset_48 = false;
isset_49 = false;

isset_50 = false;
isset_51 = false;
isset_52 = false;
isset_53 = false;
isset_54 = false;
isset_55 = false;
isset_56 = false;
isset_57 = false;
isset_58 = false;
isset_59 = false;

isset_60 = false;
isset_61 = false;
isset_62 = false;
isset_63 = false;
isset_64 = false;
isset_65 = false;
isset_66 = false;
isset_67 = false;
isset_68 = false;
isset_69 = false;

isset_70 = false;
isset_71 = false;
isset_72 = false;
isset_73 = false;
isset_74 = false;
isset_75 = false;
isset_76 = false;
isset_77 = false;
isset_78 = false;
isset_79 = false;

isset_80 = false;
isset_81 = false;
isset_82 = false;
isset_83 = false;
isset_84 = false;
isset_85 = false;
isset_86 = false;
isset_87 = false;
isset_88 = false;
isset_89 = false;

isset_90 = false;
isset_91 = false;
isset_92 = false;
isset_93 = false;
isset_94 = false;
isset_95 = false;
isset_96 = false;
isset_97 = false;
isset_98 = false;
isset_99 = false;

//-------------------------------------------------------------------------------------------------------------------------------------

//we need to make provisions for activity when a cell is pressed
function toggle00()
{
	if(isset_00 == false)
		isset_00 = true;
	else
		isset_00 = false;
	if(isset_00 == true)
	{
		document.getElementById("00").style.color = "seagreen";
	}
	else
	{
		document.getElementById("00").style.color = "transparent";
	}
}
function toggle01()
{
	if(isset_01 == false)
		isset_01 = true;
	else
		isset_01 = false;
	if(isset_01 == true)
	{
		document.getElementById("01").style.color = "seagreen";
	}
	else
	{
		document.getElementById("01").style.color = "transparent";
	}
}
function toggle02()
{
	if(isset_02 == false)
		isset_02 = true;
	else
		isset_02 = false;
	if(isset_02 == true)
	{
		document.getElementById("02").style.color = "seagreen";
	}
	else
	{
		document.getElementById("02").style.color = "transparent";
	}
}
function toggle03()
{
	if(isset_03 == false)
		isset_03 = true;
	else
		isset_03 = false;
	if(isset_03 == true)
	{
		document.getElementById("03").style.color = "seagreen";
	}
	else
	{
		document.getElementById("03").style.color = "transparent";
	}
}
function toggle04()
{
	if(isset_04 == false)
		isset_04 = true;
	else
		isset_04 = false;
	if(isset_04 == true)
	{
		document.getElementById("04").style.color = "seagreen";
	}
	else
	{
		document.getElementById("04").style.color = "transparent";
	}
}
function toggle05()
{
	if(isset_05 == false)
		isset_05 = true;
	else
		isset_05 = false;
	if(isset_05 == true)
	{
		document.getElementById("05").style.color = "seagreen";
	}
	else
	{
		document.getElementById("05").style.color = "transparent";
	}
}
function toggle06()
{
	if(isset_06 == false)
		isset_06 = true;
	else
		isset_06 = false;
	if(isset_06 == true)
	{
		document.getElementById("06").style.color = "seagreen";
	}
	else
	{
		document.getElementById("06").style.color = "transparent";
	}
}
function toggle07()
{
	if(isset_07 == false)
		isset_07 = true;
	else
		isset_07 = false;
	if(isset_07 == true)
	{
		document.getElementById("07").style.color = "seagreen";
	}
	else
	{
		document.getElementById("07").style.color = "transparent";
	}
}
function toggle08()
{
	if(isset_08 == false)
		isset_08 = true;
	else
		isset_08 = false;
	if(isset_08 == true)
	{
		document.getElementById("08").style.color = "seagreen";
	}
	else
	{
		document.getElementById("08").style.color = "transparent";
	}
}
function toggle09()
{
	if(isset_09 == false)
		isset_09 = true;
	else
		isset_09 = false;
	if(isset_09 == true)
	{
		document.getElementById("09").style.color = "seagreen";
	}
	else
	{
		document.getElementById("09").style.color = "transparent";
	}
}





function toggle10()
{
	if(isset_10 == false)
		isset_10 = true;
	else
		isset_10 = false;
	if(isset_10 == true)
	{
		document.getElementById("10").style.color = "seagreen";
	}
	else
	{
		document.getElementById("10").style.color = "transparent";
	}
}
function toggle11()
{
	if(isset_11 == false)
		isset_11 = true;
	else
		isset_11 = false;
	if(isset_11 == true)
	{
		document.getElementById("11").style.color = "seagreen";
	}
	else
	{
		document.getElementById("11").style.color = "transparent";
	}
}
function toggle12()
{
	if(isset_12 == false)
		isset_12 = true;
	else
		isset_12 = false;
	if(isset_12 == true)
	{
		document.getElementById("12").style.color = "seagreen";
	}
	else
	{
		document.getElementById("12").style.color = "transparent";
	}
}
function toggle13()
{
	if(isset_13 == false)
		isset_13 = true;
	else
		isset_13 = false;
	if(isset_13 == true)
	{
		document.getElementById("13").style.color = "seagreen";
	}
	else
	{
		document.getElementById("13").style.color = "transparent";
	}
}
function toggle14()
{
	if(isset_14 == false)
		isset_14 = true;
	else
		isset_14 = false;
	if(isset_14 == true)
	{
		document.getElementById("14").style.color = "seagreen";
	}
	else
	{
		document.getElementById("14").style.color = "transparent";
	}
}
function toggle15()
{
	if(isset_15 == false)
		isset_15 = true;
	else
		isset_15 = false;
	if(isset_15 == true)
	{
		document.getElementById("15").style.color = "seagreen";
	}
	else
	{
		document.getElementById("15").style.color = "transparent";
	}
}
function toggle16()
{
	if(isset_16 == false)
		isset_16 = true;
	else
		isset_16 = false;
	if(isset_16 == true)
	{
		document.getElementById("16").style.color = "seagreen";
	}
	else
	{
		document.getElementById("16").style.color = "transparent";
	}
}
function toggle17()
{
	if(isset_17 == false)
		isset_17 = true;
	else
		isset_17 = false;
	if(isset_17 == true)
	{
		document.getElementById("17").style.color = "seagreen";
	}
	else
	{
		document.getElementById("17").style.color = "transparent";
	}
}
function toggle18()
{
	if(isset_18 == false)
		isset_18 = true;
	else
		isset_18 = false;
	if(isset_18 == true)
	{
		document.getElementById("18").style.color = "seagreen";
	}
	else
	{
		document.getElementById("18").style.color = "transparent";
	}
}
function toggle19()
{
	if(isset_19 == false)
		isset_19 = true;
	else
		isset_19 = false;
	if(isset_19 == true)
	{
		document.getElementById("19").style.color = "seagreen";
	}
	else
	{
		document.getElementById("19").style.color = "transparent";
	}
}




function toggle20()
{
	if(isset_20 == false)
		isset_20 = true;
	else
		isset_20 = false;
	if(isset_20 == true)
	{
		document.getElementById("20").style.color = "seagreen";
	}
	else
	{
		document.getElementById("20").style.color = "transparent";
	}
}
function toggle21()
{
	if(isset_21 == false)
		isset_21 = true;
	else
		isset_21 = false;
	if(isset_21 == true)
	{
		document.getElementById("21").style.color = "seagreen";
	}
	else
	{
		document.getElementById("21").style.color = "transparent";
	}
}
function toggle22()
{
	if(isset_22 == false)
		isset_22 = true;
	else
		isset_22 = false;
	if(isset_22 == true)
	{
		document.getElementById("22").style.color = "seagreen";
	}
	else
	{
		document.getElementById("22").style.color = "transparent";
	}
}
function toggle23()
{
	if(isset_23 == false)
		isset_23 = true;
	else
		isset_23 = false;
	if(isset_23 == true)
	{
		document.getElementById("23").style.color = "seagreen";
	}
	else
	{
		document.getElementById("23").style.color = "transparent";
	}
}
function toggle24()
{
	if(isset_24 == false)
		isset_24 = true;
	else
		isset_24 = false;
	if(isset_24 == true)
	{
		document.getElementById("24").style.color = "seagreen";
	}
	else
	{
		document.getElementById("24").style.color = "transparent";
	}
}
function toggle25()
{
	if(isset_25 == false)
		isset_25 = true;
	else
		isset_25 = false;
	if(isset_25 == true)
	{
		document.getElementById("25").style.color = "seagreen";
	}
	else
	{
		document.getElementById("25").style.color = "transparent";
	}
}
function toggle26()
{
	if(isset_26 == false)
		isset_26 = true;
	else
		isset_26 = false;
	if(isset_26 == true)
	{
		document.getElementById("26").style.color = "seagreen";
	}
	else
	{
		document.getElementById("06").style.color = "transparent";
	}
}
function toggle27()
{
	if(isset_27 == false)
		isset_27 = true;
	else
		isset_27 = false;
	if(isset_27 == true)
	{
		document.getElementById("27").style.color = "seagreen";
	}
	else
	{
		document.getElementById("27").style.color = "transparent";
	}
}
function toggle28()
{
	if(isset_28 == false)
		isset_28 = true;
	else
		isset_28 = false;
	if(isset_28 == true)
	{
		document.getElementById("28").style.color = "seagreen";
	}
	else
	{
		document.getElementById("28").style.color = "transparent";
	}
}
function toggle29()
{
	if(isset_29 == false)
		isset_29 = true;
	else
		isset_29 = false;
	if(isset_29 == true)
	{
		document.getElementById("29").style.color = "seagreen";
	}
	else
	{
		document.getElementById("29").style.color = "transparent";
	}
}





function toggle30()
{
	if(isset_30 == false)
		isset_30 = true;
	else
		isset_30 = false;
	if(isset_30 == true)
	{
		document.getElementById("30").style.color = "seagreen";
	}
	else
	{
		document.getElementById("30").style.color = "transparent";
	}
}
function toggle31()
{
	if(isset_31 == false)
		isset_31 = true;
	else
		isset_31 = false;
	if(isset_31 == true)
	{
		document.getElementById("31").style.color = "seagreen";
	}
	else
	{
		document.getElementById("31").style.color = "transparent";
	}
}
function toggle32()
{
	if(isset_32 == false)
		isset_32 = true;
	else
		isset_32 = false;
	if(isset_32 == true)
	{
		document.getElementById("32").style.color = "seagreen";
	}
	else
	{
		document.getElementById("32").style.color = "transparent";
	}
}
function toggle33()
{
	if(isset_33 == false)
		isset_33 = true;
	else
		isset_33 = false;
	if(isset_33 == true)
	{
		document.getElementById("33").style.color = "seagreen";
	}
	else
	{
		document.getElementById("33").style.color = "transparent";
	}
}
function toggle34()
{
	if(isset_34 == false)
		isset_34 = true;
	else
		isset_34 = false;
	if(isset_34 == true)
	{
		document.getElementById("34").style.color = "seagreen";
	}
	else
	{
		document.getElementById("34").style.color = "transparent";
	}
}
function toggle35()
{
	if(isset_35 == false)
		isset_35 = true;
	else
		isset_35 = false;
	if(isset_35 == true)
	{
		document.getElementById("35").style.color = "seagreen";
	}
	else
	{
		document.getElementById("35").style.color = "transparent";
	}
}
function toggle36()
{
	if(isset_36 == false)
		isset_36 = true;
	else
		isset_36 = false;
	if(isset_36 == true)
	{
		document.getElementById("36").style.color = "seagreen";
	}
	else
	{
		document.getElementById("36").style.color = "transparent";
	}
}
function toggle37()
{
	if(isset_37 == false)
		isset_37 = true;
	else
		isset_37 = false;
	if(isset_37 == true)
	{
		document.getElementById("37").style.color = "seagreen";
	}
	else
	{
		document.getElementById("37").style.color = "transparent";
	}
}
function toggle38()
{
	if(isset_38 == false)
		isset_38 = true;
	else
		isset_38 = false;
	if(isset_38 == true)
	{
		document.getElementById("38").style.color = "seagreen";
	}
	else
	{
		document.getElementById("38").style.color = "transparent";
	}
}
function toggle39()
{
	if(isset_39 == false)
		isset_39 = true;
	else
		isset_39 = false;
	if(isset_39 == true)
	{
		document.getElementById("39").style.color = "seagreen";
	}
	else
	{
		document.getElementById("39").style.color = "transparent";
	}
}




function toggle40()
{
	if(isset_40 == false)
		isset_40 = true;
	else
		isset_40 = false;
	if(isset_40 == true)
	{
		document.getElementById("40").style.color = "seagreen";
	}
	else
	{
		document.getElementById("40").style.color = "transparent";
	}
}
function toggle41()
{
	if(isset_41 == false)
		isset_41 = true;
	else
		isset_41 = false;
	if(isset_41 == true)
	{
		document.getElementById("41").style.color = "seagreen";
	}
	else
	{
		document.getElementById("41").style.color = "transparent";
	}
}
function toggle42()
{
	if(isset_42 == false)
		isset_42 = true;
	else
		isset_42 = false;
	if(isset_42 == true)
	{
		document.getElementById("42").style.color = "seagreen";
	}
	else
	{
		document.getElementById("42").style.color = "transparent";
	}
}
function toggle43()
{
	if(isset_43 == false)
		isset_43 = true;
	else
		isset_43 = false;
	if(isset_43 == true)
	{
		document.getElementById("43").style.color = "seagreen";
	}
	else
	{
		document.getElementById("43").style.color = "transparent";
	}
}
function toggle44()
{
	if(isset_44 == false)
		isset_44 = true;
	else
		isset_44 = false;
	if(isset_44 == true)
	{
		document.getElementById("44").style.color = "seagreen";
	}
	else
	{
		document.getElementById("44").style.color = "transparent";
	}
}
function toggle45()
{
	if(isset_45 == false)
		isset_45 = true;
	else
		isset_45 = false;
	if(isset_45 == true)
	{
		document.getElementById("45").style.color = "seagreen";
	}
	else
	{
		document.getElementById("45").style.color = "transparent";
	}
}
function toggle46()
{
	if(isset_46 == false)
		isset_46 = true;
	else
		isset_46 = false;
	if(isset_46 == true)
	{
		document.getElementById("46").style.color = "seagreen";
	}
	else
	{
		document.getElementById("46").style.color = "transparent";
	}
}
function toggle47()
{
	if(isset_47 == false)
		isset_47 = true;
	else
		isset_47 = false;
	if(isset_47 == true)
	{
		document.getElementById("47").style.color = "seagreen";
	}
	else
	{
		document.getElementById("47").style.color = "transparent";
	}
}
function toggle48()
{
	if(isset_48 == false)
		isset_48 = true;
	else
		isset_48 = false;
	if(isset_48 == true)
	{
		document.getElementById("48").style.color = "seagreen";
	}
	else
	{
		document.getElementById("48").style.color = "transparent";
	}
}
function toggle49()
{
	if(isset_49 == false)
		isset_49 = true;
	else
		isset_49 = false;
	if(isset_49 == true)
	{
		document.getElementById("49").style.color = "seagreen";
	}
	else
	{
		document.getElementById("49").style.color = "transparent";
	}
}




function toggle50()
{
	if(isset_50 == false)
		isset_50 = true;
	else
		isset_50 = false;
	if(isset_50 == true)
	{
		document.getElementById("50").style.color = "seagreen";
	}
	else
	{
		document.getElementById("50").style.color = "transparent";
	}
}
function toggle51()
{
	if(isset_51 == false)
		isset_51 = true;
	else
		isset_51 = false;
	if(isset_51 == true)
	{
		document.getElementById("51").style.color = "seagreen";
	}
	else
	{
		document.getElementById("51").style.color = "transparent";
	}
}
function toggle52()
{
	if(isset_52 == false)
		isset_52 = true;
	else
		isset_52 = false;
	if(isset_52 == true)
	{
		document.getElementById("52").style.color = "seagreen";
	}
	else
	{
		document.getElementById("52").style.color = "transparent";
	}
}
function toggle53()
{
	if(isset_53 == false)
		isset_53 = true;
	else
		isset_53 = false;
	if(isset_53 == true)
	{
		document.getElementById("53").style.color = "seagreen";
	}
	else
	{
		document.getElementById("53").style.color = "transparent";
	}
}
function toggle54()
{
	if(isset_54 == false)
		isset_54 = true;
	else
		isset_54 = false;
	if(isset_54 == true)
	{
		document.getElementById("54").style.color = "seagreen";
	}
	else
	{
		document.getElementById("54").style.color = "transparent";
	}
}
function toggle55()
{
	if(isset_55 == false)
		isset_55 = true;
	else
		isset_55 = false;
	if(isset_55 == true)
	{
		document.getElementById("55").style.color = "seagreen";
	}
	else
	{
		document.getElementById("55").style.color = "transparent";
	}
}
function toggle56()
{
	if(isset_56 == false)
		isset_56 = true;
	else
		isset_56 = false;
	if(isset_56 == true)
	{
		document.getElementById("56").style.color = "seagreen";
	}
	else
	{
		document.getElementById("56").style.color = "transparent";
	}
}
function toggle57()
{
	if(isset_57 == false)
		isset_57 = true;
	else
		isset_57 = false;
	if(isset_57 == true)
	{
		document.getElementById("57").style.color = "seagreen";
	}
	else
	{
		document.getElementById("57").style.color = "transparent";
	}
}
function toggle58()
{
	if(isset_58 == false)
		isset_58 = true;
	else
		isset_58 = false;
	if(isset_58 == true)
	{
		document.getElementById("58").style.color = "seagreen";
	}
	else
	{
		document.getElementById("58").style.color = "transparent";
	}
}
function toggle59()
{
	if(isset_59 == false)
		isset_59 = true;
	else
		isset_59 = false;
	if(isset_59 == true)
	{
		document.getElementById("59").style.color = "seagreen";
	}
	else
	{
		document.getElementById("59").style.color = "transparent";
	}
}




function toggle60()
{
	if(isset_60 == false)
		isset_60 = true;
	else
		isset_60 = false;
	if(isset_60 == true)
	{
		document.getElementById("60").style.color = "seagreen";
	}
	else
	{
		document.getElementById("60").style.color = "transparent";
	}
}
function toggle61()
{
	if(isset_61 == false)
		isset_61 = true;
	else
		isset_61 = false;
	if(isset_61 == true)
	{
		document.getElementById("61").style.color = "seagreen";
	}
	else
	{
		document.getElementById("61").style.color = "transparent";
	}
}
function toggle62()
{
	if(isset_62 == false)
		isset_62 = true;
	else
		isset_62 = false;
	if(isset_62 == true)
	{
		document.getElementById("62").style.color = "seagreen";
	}
	else
	{
		document.getElementById("62").style.color = "transparent";
	}
}
function toggle63()
{
	if(isset_63 == false)
		isset_63 = true;
	else
		isset_63 = false;
	if(isset_63 == true)
	{
		document.getElementById("63").style.color = "seagreen";
	}
	else
	{
		document.getElementById("63").style.color = "transparent";
	}
}
function toggle64()
{
	if(isset_64 == false)
		isset_64 = true;
	else
		isset_64 = false;
	if(isset_64 == true)
	{
		document.getElementById("64").style.color = "seagreen";
	}
	else
	{
		document.getElementById("64").style.color = "transparent";
	}
}
function toggle65()
{
	if(isset_65 == false)
		isset_65 = true;
	else
		isset_65 = false;
	if(isset_65 == true)
	{
		document.getElementById("65").style.color = "seagreen";
	}
	else
	{
		document.getElementById("65").style.color = "transparent";
	}
}
function toggle66()
{
	if(isset_66 == false)
		isset_66 = true;
	else
		isset_66 = false;
	if(isset_66 == true)
	{
		document.getElementById("66").style.color = "seagreen";
	}
	else
	{
		document.getElementById("66").style.color = "transparent";
	}
}
function toggle67()
{
	if(isset_67 == false)
		isset_67 = true;
	else
		isset_67 = false;
	if(isset_67 == true)
	{
		document.getElementById("67").style.color = "seagreen";
	}
	else
	{
		document.getElementById("67").style.color = "transparent";
	}
}
function toggle68()
{
	if(isset_68 == false)
		isset_68 = true;
	else
		isset_68 = false;
	if(isset_68 == true)
	{
		document.getElementById("68").style.color = "seagreen";
	}
	else
	{
		document.getElementById("68").style.color = "transparent";
	}
}
function toggle69()
{
	if(isset_69 == false)
		isset_69 = true;
	else
		isset_69 = false;
	if(isset_69 == true)
	{
		document.getElementById("69").style.color = "seagreen";
	}
	else
	{
		document.getElementById("69").style.color = "transparent";
	}
}




function toggle70()
{
	if(isset_70 == false)
		isset_70 = true;
	else
		isset_70 = false;
	if(isset_70 == true)
	{
		document.getElementById("70").style.color = "seagreen";
	}
	else
	{
		document.getElementById("70").style.color = "transparent";
	}
}
function toggle71()
{
	if(isset_71 == false)
		isset_71 = true;
	else
		isset_71 = false;
	if(isset_71 == true)
	{
		document.getElementById("71").style.color = "seagreen";
	}
	else
	{
		document.getElementById("71").style.color = "transparent";
	}
}
function toggle72()
{
	if(isset_72 == false)
		isset_72 = true;
	else
		isset_72 = false;
	if(isset_72 == true)
	{
		document.getElementById("72").style.color = "seagreen";
	}
	else
	{
		document.getElementById("72").style.color = "transparent";
	}
}
function toggle73()
{
	if(isset_73 == false)
		isset_73 = true;
	else
		isset_73 = false;
	if(isset_73 == true)
	{
		document.getElementById("73").style.color = "seagreen";
	}
	else
	{
		document.getElementById("73").style.color = "transparent";
	}
}
function toggle74()
{
	if(isset_74 == false)
		isset_74 = true;
	else
		isset_74 = false;
	if(isset_74 == true)
	{
		document.getElementById("74").style.color = "seagreen";
	}
	else
	{
		document.getElementById("74").style.color = "transparent";
	}
}
function toggle75()
{
	if(isset_75 == false)
		isset_75 = true;
	else
		isset_75 = false;
	if(isset_75 == true)
	{
		document.getElementById("75").style.color = "seagreen";
	}
	else
	{
		document.getElementById("75").style.color = "transparent";
	}
}
function toggle76()
{
	if(isset_76 == false)
		isset_76 = true;
	else
		isset_76 = false;
	if(isset_76 == true)
	{
		document.getElementById("76").style.color = "seagreen";
	}
	else
	{
		document.getElementById("76").style.color = "transparent";
	}
}
function toggle77()
{
	if(isset_77 == false)
		isset_77 = true;
	else
		isset_77 = false;
	if(isset_77 == true)
	{
		document.getElementById("77").style.color = "seagreen";
	}
	else
	{
		document.getElementById("77").style.color = "transparent";
	}
}
function toggle78()
{
	if(isset_78 == false)
		isset_78 = true;
	else
		isset_78 = false;
	if(isset_78 == true)
	{
		document.getElementById("78").style.color = "seagreen";
	}
	else
	{
		document.getElementById("78").style.color = "transparent";
	}
}
function toggle79()
{
	if(isset_79 == false)
		isset_79 = true;
	else
		isset_79 = false;
	if(isset_79 == true)
	{
		document.getElementById("79").style.color = "seagreen";
	}
	else
	{
		document.getElementById("79").style.color = "transparent";
	}
}




function toggle80()
{
	if(isset_80 == false)
		isset_80 = true;
	else
		isset_80 = false;
	if(isset_80 == true)
	{
		document.getElementById("80").style.color = "seagreen";
	}
	else
	{
		document.getElementById("80").style.color = "transparent";
	}
}
function toggle81()
{
	if(isset_81 == false)
		isset_81 = true;
	else
		isset_81 = false;
	if(isset_81 == true)
	{
		document.getElementById("81").style.color = "seagreen";
	}
	else
	{
		document.getElementById("81").style.color = "transparent";
	}
}
function toggle82()
{
	if(isset_82 == false)
		isset_82 = true;
	else
		isset_82 = false;
	if(isset_82 == true)
	{
		document.getElementById("82").style.color = "seagreen";
	}
	else
	{
		document.getElementById("82").style.color = "transparent";
	}
}
function toggle83()
{
	if(isset_83 == false)
		isset_83 = true;
	else
		isset_83 = false;
	if(isset_83 == true)
	{
		document.getElementById("83").style.color = "seagreen";
	}
	else
	{
		document.getElementById("83").style.color = "transparent";
	}
}
function toggle84()
{
	if(isset_84 == false)
		isset_84 = true;
	else
		isset_84 = false;
	if(isset_84 == true)
	{
		document.getElementById("84").style.color = "seagreen";
	}
	else
	{
		document.getElementById("84").style.color = "transparent";
	}
}
function toggle85()
{
	if(isset_85 == false)
		isset_85 = true;
	else
		isset_85 = false;
	if(isset_85 == true)
	{
		document.getElementById("85").style.color = "seagreen";
	}
	else
	{
		document.getElementById("85").style.color = "transparent";
	}
}
function toggle86()
{
	if(isset_86 == false)
		isset_86 = true;
	else
		isset_86 = false;
	if(isset_86 == true)
	{
		document.getElementById("86").style.color = "seagreen";
	}
	else
	{
		document.getElementById("86").style.color = "transparent";
	}
}
function toggle87()
{
	if(isset_87 == false)
		isset_87 = true;
	else
		isset_87 = false;
	if(isset_87 == true)
	{
		document.getElementById("87").style.color = "seagreen";
	}
	else
	{
		document.getElementById("87").style.color = "transparent";
	}
}
function toggle88()
{
	if(isset_88 == false)
		isset_88 = true;
	else
		isset_88 = false;
	if(isset_88 == true)
	{
		document.getElementById("88").style.color = "seagreen";
	}
	else
	{
		document.getElementById("88").style.color = "transparent";
	}
}
function toggle89()
{
	if(isset_89 == false)
		isset_89 = true;
	else
		isset_89 = false;
	if(isset_89 == true)
	{
		document.getElementById("89").style.color = "seagreen";
	}
	else
	{
		document.getElementById("89").style.color = "transparent";
	}
}





function toggle90()
{
	if(isset_90 == false)
		isset_90 = true;
	else
		isset_90 = false;
	if(isset_90 == true)
	{
		document.getElementById("90").style.color = "seagreen";
	}
	else
	{
		document.getElementById("90").style.color = "transparent";
	}
}
function toggle91()
{
	if(isset_91 == false)
		isset_91 = true;
	else
		isset_91 = false;
	if(isset_91 == true)
	{
		document.getElementById("91").style.color = "seagreen";
	}
	else
	{
		document.getElementById("91").style.color = "transparent";
	}
}
function toggle92()
{
	if(isset_92 == false)
		isset_92 = true;
	else
		isset_92 = false;
	if(isset_92 == true)
	{
		document.getElementById("92").style.color = "seagreen";
	}
	else
	{
		document.getElementById("92").style.color = "transparent";
	}
}
function toggle93()
{
	if(isset_93 == false)
		isset_93 = true;
	else
		isset_93 = false;
	if(isset_93 == true)
	{
		document.getElementById("93").style.color = "seagreen";
	}
	else
	{
		document.getElementById("93").style.color = "transparent";
	}
}
function toggle94()
{
	if(isset_94 == false)
		isset_94 = true;
	else
		isset_94 = false;
	if(isset_94 == true)
	{
		document.getElementById("94").style.color = "seagreen";
	}
	else
	{
		document.getElementById("94").style.color = "transparent";
	}
}
function toggle95()
{
	if(isset_95 == false)
		isset_95 = true;
	else
		isset_95 = false;
	if(isset_95 == true)
	{
		document.getElementById("95").style.color = "seagreen";
	}
	else
	{
		document.getElementById("95").style.color = "transparent";
	}
}
function toggle96()
{
	if(isset_96 == false)
		isset_96 = true;
	else
		isset_96 = false;
	if(isset_96 == true)
	{
		document.getElementById("96").style.color = "seagreen";
	}
	else
	{
		document.getElementById("96").style.color = "transparent";
	}
}
function toggle97()
{
	if(isset_97 == false)
		isset_97 = true;
	else
		isset_97 = false;
	if(isset_97 == true)
	{
		document.getElementById("97").style.color = "seagreen";
	}
	else
	{
		document.getElementById("97").style.color = "transparent";
	}
}
function toggle98()
{
	if(isset_98 == false)
		isset_98 = true;
	else
		isset_98 = false;
	if(isset_98 == true)
	{
		document.getElementById("98").style.color = "seagreen";
	}
	else
	{
		document.getElementById("98").style.color = "transparent";
	}
}
function toggle99()
{
	if(isset_99 == false)
		isset_99 = true;
	else
		isset_99 = false;
	if(isset_99 == true)
	{
		document.getElementById("99").style.color = "seagreen";
	}
	else
	{
		document.getElementById("99").style.color = "transparent";
	}
}





//----------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------
//ONTO THE ACCESSORY FUNCTIONS
function accept_table()
{
	//this accepts the final input into the table


	if(isset_00 == true)
		table[0][0] = true;
	if(isset_01 == true)
		table[0][1] = true;
	if(isset_02 == true)
		table[0][2] = true;
	if(isset_03 == true)
		table[0][3] = true;
	if(isset_04 == true)
		table[0][4] = true;
	if(isset_05 == true)
		table[0][5] = true;
	if(isset_06 == true)
		table[0][6] = true;
	if(isset_07 == true)
		table[0][7] = true;
	if(isset_08 == true)
		table[0][8] = true;
	if(isset_09 == true)
		table[0][9] = true;

	if(isset_10 == true)
		table[1][0] = true;
	if(isset_11 == true)
		table[1][1] = true;
	if(isset_12 == true)
		table[1][2] = true;
	if(isset_13 == true)
		table[1][3] = true;
	if(isset_14 == true)
		table[1][4] = true;
	if(isset_15 == true)
		table[1][5] = true;
	if(isset_16 == true)
		table[1][6] = true;
	if(isset_17 == true)
		table[1][7] = true;
	if(isset_18 == true)
		table[1][8] = true;
	if(isset_19 == true)
		table[1][9] = true;

	if(isset_20 == true)
		table[2][0] = true;
	if(isset_21 == true)
		table[2][1] = true;
	if(isset_22 == true)
		table[2][2] = true;
	if(isset_23 == true)
		table[2][3] = true;
	if(isset_24 == true)
		table[2][4] = true;
	if(isset_25 == true)
		table[2][5] = true;
	if(isset_26 == true)
		table[2][6] = true;
	if(isset_27 == true)
		table[2][7] = true;
	if(isset_28 == true)
		table[2][8] = true;
	if(isset_29 == true)
		table[2][9] = true;

	if(isset_30 == true)
		table[3][0] = true;
	if(isset_31 == true)
		table[3][1] = true;
	if(isset_32 == true)
		table[3][2] = true;
	if(isset_33 == true)
		table[3][3] = true;
	if(isset_34 == true)
		table[3][4] = true;
	if(isset_35 == true)
		table[3][5] = true;
	if(isset_36 == true)
		table[3][6] = true;
	if(isset_37 == true)
		table[3][7] = true;
	if(isset_38 == true)
		table[3][8] = true;
	if(isset_39 == true)
		table[3][9] = true;

	if(isset_40 == true)
		table[4][0] = true;
	if(isset_41 == true)
		table[4][1] = true;
	if(isset_42 == true)
		table[4][2] = true;
	if(isset_43 == true)
		table[4][3] = true;
	if(isset_44 == true)
		table[4][4] = true;
	if(isset_45 == true)
		table[4][5] = true;
	if(isset_46 == true)
		table[4][6] = true;
	if(isset_47 == true)
		table[4][7] = true;
	if(isset_48 == true)
		table[4][8] = true;
	if(isset_49 == true)
		table[4][9] = true;

	if(isset_50 == true)
		table[5][0] = true;
	if(isset_51 == true)
		table[5][1] = true;
	if(isset_52 == true)
		table[5][2] = true;
	if(isset_53 == true)
		table[5][3] = true;
	if(isset_54 == true)
		table[5][4] = true;
	if(isset_55 == true)
		table[5][5] = true;
	if(isset_56 == true)
		table[5][6] = true;
	if(isset_57 == true)
		table[5][7] = true;
	if(isset_58 == true)
		table[5][8] = true;
	if(isset_59 == true)
		table[5][9] = true;

	if(isset_60 == true)
		table[6][0] = true;
	if(isset_61 == true)
		table[6][1] = true;
	if(isset_62 == true)
		table[6][2] = true;
	if(isset_63 == true)
		table[6][3] = true;
	if(isset_64 == true)
		table[6][4] = true;
	if(isset_65 == true)
		table[6][5] = true;
	if(isset_66 == true)
		table[6][6] = true;
	if(isset_67 == true)
		table[6][7] = true;
	if(isset_68 == true)
		table[6][8] = true;
	if(isset_69 == true)
		table[6][9] = true;

	if(isset_70 == true)
		table[7][0] = true;
	if(isset_71 == true)
		table[7][1] = true;
	if(isset_72 == true)
		table[7][2] = true;
	if(isset_73 == true)
		table[7][3] = true;
	if(isset_74 == true)
		table[7][4] = true;
	if(isset_75 == true)
		table[7][5] = true;
	if(isset_76 == true)
		table[7][6] = true;
	if(isset_77 == true)
		table[7][7] = true;
	if(isset_78 == true)
		table[7][8] = true;
	if(isset_79 == true)
		table[7][9] = true;

	if(isset_80 == true)
		table[8][0] = true;
	if(isset_81 == true)
		table[8][1] = true;
	if(isset_82 == true)
		table[8][2] = true;
	if(isset_83 == true)
		table[8][3] = true;
	if(isset_84 == true)
		table[8][4] = true;
	if(isset_85 == true)
		table[8][5] = true;
	if(isset_86 == true)
		table[8][6] = true;
	if(isset_87 == true)
		table[8][7] = true;
	if(isset_88 == true)
		table[8][8] = true;
	if(isset_89 == true)
		table[8][9] = true;

	if(isset_90 == true)
		table[9][0] = true;
	if(isset_91 == true)
		table[9][1] = true;
	if(isset_92 == true)
		table[9][2] = true;
	if(isset_93 == true)
		table[9][3] = true;
	if(isset_94 == true)
		table[9][4] = true;
	if(isset_95 == true)
		table[9][5] = true;
	if(isset_96 == true)
		table[9][6] = true;
	if(isset_97 == true)
		table[9][7] = true;
	if(isset_98 == true)
		table[9][8] = true;
	if(isset_99 == true)
		table[9][9] = true;
}
function show_table()
{
	//this displays the table
	console.log("The input is defined below");
	for(var i=0;i<9;i++)
		console.log(table[i]);
}
function print_message()
{
	//this prints the message to be printed in the page
	document.getElementById('messages').innerHTML = message;
}





//---------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------
//NOW ONTO THE MAIN LOGIC

//we extract the number of rows maximum number of columns used in the pattern
function dimensions(x)//x can either be "max_column" or "rows" or "rows_filled"
{
	var max_column = 0;
	var rows = 0;
	var rows_filled = new Array();
	for(var i=0;i<10;i++)
	{
		var flag = false;
		var envelope_row = -1;//initialized with negative so as to not overlap with zero
		for(var j=0;j<10;j++)
		{
			if(table[i][j] == true)
			{
				if(j>max_column)
				{
					max_column = j;
				}
				flag = true;
				if(j>envelope_row)
				{
					envelope_row = j;
				}
			}
		}
		if(flag == true)
		{
			rows = i;
		}
		rows_filled[i] = envelope_row+1;
	}
	if(x == "max_column")
		return max_column+1;
	if(x == "rows")
		return rows+1;
	if(x == "rows_filled")
		return rows_filled;
}

//as the primary step, we create a block of the dimensions deciphered
function createprimitive()
{
	var max_column = dimensions("max_column");
	var rows = dimensions("rows");
	for(var i=0;i<rows;i++)
	{
		var single_file = "";
		for(var j=0;j<max_column;j++)
		{
			single_file = single_file+"x";
		}
		console.log(single_file);
		console.log("\n");
	}
}

// now we need to see if in any case there is a space amidst the pattern
// if there are more empties than filled, we go on defining the filled and if more filled, we look for holes
function check_hole()
{
	var is_hole = false;//initialized with false
	for(var i=0;i<10;i++)
	{
		for(var j=0;j<10;j++)
		{
			var current_element = table[i][j];
			var previous_element = table[i][j-1];
			//only if the previous element is a space and the next element is an x can we say there is a hole
			if(previous_element == false && current_element == true)
				is_hole = true;
		}
	}
	if(is_hole == true)
	{
		console.log("There are holes in the pattern");
	}
	else
	{
		console.log("There is no hole within the pattern");
	}
	return is_hole;
}





//---------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------
//now starts a whole new era, we shall extract the main part and operate upon that only--------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------





//we need to comptess the table and get only the necessary part
function compress(x)//it can take input as rows,columns and table
{
	var top_left = new Array(2);    //these holds the co-ordinates and need to be updated
	var top_right = new Array(2);   //these holds the co-ordinates and need to be updated
	var bottom_left = new Array(2); //these holds the co-ordinates and need to be updated
	var bottom_right = new Array(2);//these holds the co-ordinates and need to be updated

	//we can easily get the co-ordinates for bottom and right depending upon the maximum lengths the table went to
	var max_column = dimensions("max_column")-1;
	var rows_filled = dimensions("rows")-1;

	for(var i=0;i<10;i++)
	{
		var flag = false;
		for(var j=0;j<9;j++)
		{
			if(work_table[i][j] == true)
			{
				var top_left = [i,j];
				flag = true;
			}
			if(flag == true)
				break;
		}
		if(flag == true)
			break;
	}

	//now we need to redo the column starting on for generalization of alignment
	var starting_column = 10;//initialized with invaid since there are columns with only upto marking of 9
	for(var i=0;i<10;i++)
	{
		for(var j=0;j<10;j++)
		{
			var current_start = 10//initialized with impossible since there are columns with only upto marking of 9
			if(work_table[i][j] == true)
			{
				current_start = j;
				break;
			}
		}
		if(current_start < starting_column)
			starting_column = current_start;
	}

	//console.log("Revised start is from column number "+starting_column);
	//we now update the top left co-ordinates
	top_left[1] = starting_column;
	//console.log("Now the co-ordinates of the top left corner is "+top_left[0]+","+top_left[1]);

	var top_right = [top_left[0],max_column];
	var bottom_left = [rows_filled,top_left[1]];
	var bottom_right = [rows_filled,max_column];

	//now we print the four corners
	//console.log(top_left+"|"+top_right+"\n"+bottom_left+"|"+bottom_right);
	//console.log("The above demarkate the mask encompassing the pattern");

	//we have successfully identified the location of the pattern

	//now we need to extract the pattern into final_table
	var number_of_rows = (bottom_left[0]-top_left[0])+1;
	var number_of_columns = (top_right[1]-top_left[1])+1;
	//console.log("There are "+number_of_rows+" rows and "+number_of_columns+" columns");
	var final_table = new Array(number_of_rows);
	for(var i=0;i<number_of_rows;i++)
	{
		final_table[i] = new Array(number_of_columns);
		for(var j=0;j<number_of_columns;j++)
		{
			var primitive_x = top_left[0]+i;
			var primitive_y = top_left[1]+j;
			final_table[i][j] = work_table[primitive_x][primitive_y];
			//console.log("We have appointed "+primitive_x+","+primitive_y+" to "+i+","+j);
		}
	}
	//console.log(final_table);
	//now we need to return the required value
	if(x == "rows")
		return number_of_rows;
	if(x == "columns")
		return number_of_columns;
	if(x == "table")
		return final_table;
}

var work_table = table;

//we need a function to control repetition in an array
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
	return refined_array;
}

//we need to break the pattern into segments
function segmentation(x, work_table)//the input value might be x or y
{
	//console.log(work_table);
	//we keep the list of segments here
	var segments_x = new Array();
	var segment_number_x = 0;
	//this works by matching the row starters and works upon the final table

	//first we need to get the compressed piece
	var final_table = compress("table", work_table);
	//console.log("We work upon the compressed table now");

	//first we need the x-co-ordinates of the changing places
	var number_of_columns = compress("columns", work_table);
	var start = "";
	for(var i=2;i<number_of_columns;i++)//the loop starts with 2 so that the start can be discounted for with the previous iteration
	{
		//we only work with the first row
		var current_element = final_table[0][i];//since we only work with the enveloping layer
		start = final_table[0][i-1];//this contains the previous element
		//now, if they do not match, we make an envelope over there INCLUDING the defective cell
		if(current_element != start)
		{
			segments_x[segment_number_x] = i;
			segment_number_x++;
			i++;//we need to push the value of i by one step so that it does not keep a blank segment when it reaches the next cell
			    //it might be that the next cell is again of the start and hence another anomaly shall be encountered
		}
	}
	//console.log("There could be made "+segment_number_x+" segments in the x-axis which are at");
	for(var i=0;i<segment_number_x;i++)
		//console.log(segments_x[i] + " is the "+i+"th segment /\n");

	//now the rows need to be evaluated

	var segments_y = new Array();
	var segment_number_y = 0;

	var number_of_rows = compress("rows", work_table);
	for(var i=2;i<number_of_rows;i++)//the loop starts with 2 so that the start can be discounted for with the previous iteration
	{
		var current_element = final_table[i][0];
		start = final_table[i-1][0];//this contains the previous element
		//now, if they do not match, we make an envelope over there INCLUDING the defective cell
		if(current_element != start)
		{
			segments_y[segment_number_y] = i;
			segment_number_y++;
			i++;
		}
	}
	//console.log("There could be made "+segment_number_y+" segments in the y-axis which are at");
	for(var i=0;i<segment_number_y;i++)
		//console.log(segments_y[i] + " is the "+i+"th segment /\n");


	//now we need to run the assesments in the reversed order to get a foolproof result

	var segments_x_bottom = new Array();
	var segment_count_x = 0;
	//console.log("There are "+number_of_columns+" columns");
	for(var i=1;i<(number_of_columns-2);i++)
	{
		var current_element = final_table[number_of_rows-1][i];
		var next_element = final_table[number_of_rows-1][i+1];
		if(next_element != current_element && segments_x_bottom != undefined)
		{
			segments_x_bottom[segment_count_x] = i+1;
			i++;
			segment_count_x++;
		}
	}
	//console.log("We work with the "+(number_of_rows-1)+"th row");
	//console.log("There are "+segment_count_x+" segments found coming up from the bottom which are");
	//console.log(segments_x_bottom);

	var segments_y_end = new Array();
	var segment_count_y = 0;
	//console.log("We work with the "+number_of_columns+"th column");
	for(var i=1;i<(number_of_rows-2);i++)
	{
		var current_element = final_table[i][number_of_columns-1];
		var next_element = final_table[i+1][number_of_columns-1];
		if(next_element != current_element)
		{
			segments_y_end[segment_count_y] = i+1;
			i++;
			segment_count_y++;
		}
	}
	//console.log("There are "+segment_count_y+" segments found coming up from the bottom which are");

	//now we need to return the values
	if(x == "x")
		return segments_x;
	if(x == "y")
		return segments_y;
	if(x == "x_reverse")
		return segments_x_bottom;
	if(x == "y_reverse")
		return segments_y_end;

	//now we need to see which values are being repeated and we need to put a final set of values

	var common_x = new Array();
	var common_count = 0;
	var uncommon_x = new Array();
	var uncommon_count = 0;
	console.log("There are "+(segment_count_x-1)+" elements in end and "+(segment_number_x-1)+" segments at the start");
	for(var i=0;i<segment_count_x;i++)
	{
		var first_segment = segments_x_bottom[i];
		var flag = false;
		for(var j=0;i<segment_number_x;i++)
		{
			var second_segment = segments_x[j];
			if( first_segment == second_segment)
			{
				flag = true;
				common_x[common_count] = second_segment;
				common_count++;
				break;
			}
		}
		if(flag == false)
		{
			uncommon_x[uncommon_count] = first_segment;
			uncommon_count++;
		}
	}
	for(var i=0;i<segment_number_x;i++)
	{
		var current_element = segments_x[i];
		var flag = false;
		for(var j=0;j<common_count;j++)
		{
			var current_common_element = common_x[j];
			if(current_common_element == current_element)
			{
				flag = true;
				break;
			}
		}
		if(flag == false)
		{
			uncommon_x[uncommon_count] = current_element;
			uncommon_count++;
		}
	}


	console.log("The following were found common");
	console.log(common_x);
	console.log("The following were found uncommon");
	console.log(uncommon_x);

	if(x == "common_x")
		return common_x;
	if(x == "uncommon_x")
		return uncommon_x;

	//now we need to merge the two arrays
	var breaks_x = new Array(common_count + uncommon_count);
	breaks_x = common_x.concat(uncommon_x);



	//now we need to find the common and uncommon elements for the y axis---------------------------------------------------------

	var common_y = new Array();
	var common_count = 0;
	var uncommon_y = new Array();
	var uncommon_count = 0;
	console.log("There are "+(segment_count_y-1)+" elements in end and "+(segment_number_y-1)+" segments at the start");
	for(var i=0;i<segment_count_y;i++)
	{
		var first_segment = segments_y_end[i];
		var flag = false;
		for(var j=0;i<segment_number_y;i++)
		{
			var second_segment = segments_y[j];
			if( first_segment == second_segment)
			{
				flag = true;
				common_y[common_count] = second_segment;
				common_count++;
				break;
			}
		}
		if(flag == false)
		{
			uncommon_y[uncommon_count] = first_segment;
			uncommon_count++;
		}
	}
	for(var i=0;i<segment_number_y;i++)
	{
		var current_element = segments_y[i];
		var flag = false;
		for(var j=0;j<common_count;j++)
		{
			var current_common_element = common_y[j];
			if(current_common_element == current_element)
			{
				flag = true;
				break;
			}
		}
		if(flag == false)
		{
			uncommon_y[uncommon_count] = current_element;
			uncommon_count++;
		}
	}


	console.log("The following were found common");
	console.log(common_y);
	console.log("The following were found uncommon");
	console.log(uncommon_y);

	if(x == "common_y")
		return common_y;
	if(x == "uncommon_y")
		return uncommon_y;

	//now we need to merge the two arrays
	var breaks_y = new Array(common_count + uncommon_count);
	breaks_y = common_y.concat(uncommon_y);

	//now we need to make sure there is no repetition
	var temporary = repeat(breaks_x);
	breaks_x = temporary;
	temporary = repeat(breaks_y);
	breaks_y = temporary;

	if(x == "breaks_x")
		return breaks_x;
	if(x == "breaks_y")
		return breaks_y;

	//it is working---------------------------------------------------------------------------------------------
}

//the following function is objected to sort a given array
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

	return input_array;

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
	//console.log("The input was ");
	//console.log(input);
	//console.log("We broke it up into "+start_x+","+start_y+" and "+end_x+","+end_y);
	//console.log("The slope was "+slope);
	//now further assesment
	if(isFinite(slope) == false)
	{
		//console.log("infinite, that mens the line is vertical");
	}
	if(slope == 0)
	{
		//console.log("zero, that means the line is horizontal");
	}
	if(isFinite(slope) == true && slope!=0)
	{
		//we need to find an equation for the line
		//console.log("y="+slope+"*x represents the line from which the line segment is derived");
	}
	return slope;
}
//now we need a function to find the pattern within a given range of co-ordinates
// we presume that the pattern is a simple and filled up one with values that are true representing the main part


function breaker()
{
	console.clear();
	var work_table = table;
	var breaks_x = segmentation("breaks_x", work_table);
	var breaks_y = segmentation("breaks_y", work_table);

	console.clear();

	console.log("The following are the breaks in x");
	console.log(breaks_x);
	console.log("The following are the breaks in y");
	console.log(breaks_y);

	//var compressed_table = compress("table");
	//console.log(compressed_table);

    var number_of_rows = compress("rows");
    var number_of_columns = compress("columns");
    //we make stops in between the ends to change subjects
    var x_segments = breaks_x.length +1;
    console.log("We are working with "+x_segments+" segments");
    var y_segments = breaks_y.length +1;
    console.log("We are working with "+y_segments+" segments");

    var breaks_x_count = breaks_x.length;
    var breaks_y_count = breaks_y.length;

    console.log("The number of the last row is "+number_of_rows);
    var flag = false;
    for(var i=0;i<y_segments;i++)
    {
    	if(breaks_y[i] == (number_of_rows - 1))
    	{
    		flag = true;
    	}
    }
    if(flag == true)
    {
    	console.log("A break needs to be removed from y_breaks");
    	y_segments--;
    	breaks_y.pop();
    	console.log(breaks_y);
    }
    console.log("The number of the last column is "+number_of_columns);
    var flag = false;
    for(var i=0;i<x_segments;i++)
    {
    	if(breaks_x[i] == (number_of_columns - 1))
    	{
    		flag = true;
    	}
    }
    if(flag == true)
    {
    	console.log("A break needs to be removed from x_breaks");
    	x_segments--;
    	breaks_x.pop();
    	console.log(breaks_x);
    }

    console.log("There are "+x_segments+" segments in x and there are "+y_segments+" segments in y");

    //now we need to figure out how many segments are there in total
    var total_segments = x_segments*y_segments;
    console.log("We have "+total_segments+" segments in total");

    console.log(breaks_x);
    console.log("Above are the breakpoints in the x axis");
    console.log(breaks_y);
    console.log("Above are the breakpoints in the y axis");

    //now we need to insert the first and last elements in the breakpoints
    var breakpoints_x = new Array();
    breakpoints_x[0] = 0;
    breakpoints_x = breakpoints_x.concat(breaks_x);
    breakpoints_x[breakpoints_x.length] = number_of_columns - 1;
    console.log("Below are the updated breakpoints in the x-axis");
    console.log(breakpoints_x);

    var breakpoints_y = new Array();
    breakpoints_y[0] = 0;
    breakpoints_y = breakpoints_y.concat(breaks_y);
    breakpoints_y[breakpoints_y.length] = number_of_rows - 1;
    console.log("Below are the updated breakpoints in the y-axis");
    console.log(breakpoints_y);

    //now we need to sort the breakpoints into ascending order
    breakpoints_x = sort(breakpoints_x);
    breakpoints_y = sort(breakpoints_y);

    //now we need to prepare the segments and find the starting and ending points for each

    var extremes_start = new Array(total_segments);
    var extremes_end = new Array(total_segments);
    var extreme_index = 0;
    for(var i=0;i<y_segments;i++)
    {
    	for(var j=0;j<x_segments;j++)
    	{
    		var start_x = breakpoints_x[j];
    		var start_y = breakpoints_y[i];
    		var end_x = breakpoints_x[j+1];
    		var end_y = breakpoints_y[i+1];
    		console.log("The starting co-ordiates are "+start_y+","+start_x);
    		console.log("The ending co-ordinates are "+end_y+","+end_x);

    		var entry_start = (start_y*10)+start_x;
    		var entry_end = (end_y*10)+end_x;

    		extremes_start[extreme_index] = entry_start;
    		extremes_end[extreme_index] = entry_end;
    		extreme_index++;
    	}
    }
    console.clear();
    console.log(extremes_start);
    console.log(extremes_end);

    //this far it is working great

    //we keep track of the starting elements of each segment ( we need to decide if it is a true or a false)
    var starter = new Array(total_segments);
    //now we need to get the slopes for each segment
    //console.clear();
    var slopes = new Array(total_segments);//this holds the slopes of the respective segments
    for(var i=0;i<total_segments;i++)
    {
    	var start = extremes_start[i];
    	var end = extremes_end[i];
    	var input = new Array(2);
    	input[0] = start;
    	input[1] = end;
    	var slope = find_slope(input);

    	//now we need to check if the slope is positive or negative
    	//first we figure out the values in the start and the end
    	var current_start_x = Math.floor(start/10);
    	var current_start_y = start%10;
    	var current_end_x = Math.floor(end/10);
    	var current_end_y = end%10;

    	var work_table = compress("table");
    	var start_value = work_table[current_start_x][current_start_y];
    	var end_value = work_table[current_end_x][current_end_y];
    	console.log("The start value is "+start_value+" and the end value is "+end_value);
    	//we need to keep track of the starting element in the array
    	starter[i] = start_value;

    	if(start_value != end_value)
    	{
    		slope = 0-slope;
    	}
    	//even if the values both are false we make the slope negative
    	if(start_value == false && end_value == false)
    	{
    		slope = 0-slope;
    	}
    	slopes[i] = slope;

    	console.log(start+" starts the left top and "+end+" ends at the right bottom end and the slope is "+slope);
    }
    //console.log(slopes);

    //now we try to figure out the formula for each secetion, finding the value of x
    var equations = new Array(total_segments);
    for(var i=0;i<total_segments;i++)
    {
    	var equation = "x=y/"+slopes[i];
    	console.log(equation);
    	equations[i] = equation;
    }




//-------------------------------------------------------------------WE START WITH THE PRINTING SECTION----------------------------------



    //***********************************************************************************************************************************
    //********************************************************************WE NEED TO PREPARE THE PROGRAM IN PROGRAMMING LANGUAGE NOW*****
    //***********************************************************************************************************************************
    //********************************************************************THIS ONE IS SUITED FOR C PROGRAMMING AS OF NOW*****************
    //***********************************************************************************************************************************
    //now we simply need to prepare the message

    //we need to start the function using all the necessary stuff
    //we start going row by row, segment by segment and within each row, we get the column segments




    startup();
	initiate_block();
	//we need to start getting the number of row segments and the column count
	write_message("for(int i=0;i<"+number_of_rows+";i++)");
	initiate_block();
	write_message("for(int j=0;j<"+number_of_columns+";j++)");
	initiate_block();

	//we need to keep in track which segment we are going through right now
	var segment_count = 0;

	//now the main writing is here

	var is_final_row = false;//this checks if the row is the final row in the series

	//we need to check the limits for each segment
	for(var i=0;i<y_segments;i++)
	{
		//we find the start and end of each segment
		var start_y = breakpoints_y[i];
		var end_y = breakpoints_y[i+1];

		//**************************************************************************************************
		//-------------------------------------------------------------------------------------------------||
		//we need to check the progression for start and end but that is being withheld for later         |||
		//-------------------------------------------------------------------------------------------------||
		//**************************************************************************************************





		//the number of segments is aways one unit lesser than the number of breakpoints
		var is_final_column = false;
		if(end_y == (number_of_rows-1))
		{
			is_final_row = true;
		}


		//now we need to go on to the printing of the columns
		if(is_final_row == false)//-----------------------------------if it is the final row---------------
		{
			write_message("if(i>="+start_y+" && i<"+end_y+")");
			initiate_block();
			//here is the internal part for the columns*****************************************************
			for(var j=0;j<x_segments;j++)
			{
				var start_x = breakpoints_x[j];
				var end_x = breakpoints_x[j+1];
				if(end_x == (number_of_columns-1))
				{
					is_final_column = true;
				}
				if(is_final_column == true)//-------------------------if it is the final column------------
				{
					//it is the final column
					write_message("if(j>="+start_x+" && j<"+(end_x+1)+")");
					initiate_block();
					{
						//here we print the stars
						
						//write_message(segment_count);
						//we need to keep the count of the segments so as to get the initiating value in each segment
						var start_value = starter[segment_count];
						write_message("<br>//This goes for segment number "+segment_count+" starting with "+start_value+" as it's value");

						//works uptil here
						//now we go onto the main part, PRINTING patterns
						var main_piece = starter[segment_count];
						var secondary_piece = true;//we assume the main piece is false, just for initializing
						var focus_charecter = "&nbsp;";
						var secondary_charecter = "x";
						if(main_piece == true)
						{
							secondary_piece = false;
							secondary_charecter = "&nbsp;";
							focus_charecter = "x";
						}
						//we need to decide which charecter to focus upon to print
						write_message("<br>//We are going to focus upon priniting "+main_piece+" in this section<br>");
						write_message("<br>//Doing this makes us focus upon printing "+focus_charecter+"<br>");

						//now we need to print the charecter to be printed
						var current_slope = slopes[segment_count];
						if(current_slope>0)
						{
							//this is the case for the positive slope
							write_message("if(j-"+start_x+")<="+current_slope+"*(i-"+start_y+"))");
							initiate_block();
							write_message("printf('"+focus_charecter+"');");
							close_block();
							write_message("else");
							initiate_block();
							write_message("printf('"+secondary_charecter+"');");
						}
						else
						{
							//we need total number of columns in the particular segment
							var current_column_count = end_x-start_x;
							current_slope = 0-current_slope;//here we rectify the sign of the slope
							write_message("if((j-"+start_x+")<=("+current_column_count+"-((i-"+start_y+")*"+current_slope+"));");
							initiate_block();
							write_message("printf('"+focus_charecter+"')");
							close_block();
							write_message("else");
							initiate_block();
							write_message("printf('"+secondary_charecter+"');");
							close_block();
						}
						//now, at last, we need to update the segment count
						segment_count++;
					}
					close_block();
				}
				else//--------------------------------------------if it is not the final column------------
				{
					//we need to write the code
					write_message("if(j>="+start_x+" && j<"+end_x+")");
					initiate_block();
					{
						//here we write the message
						
						//write_message(segment_count);
						//we need to keep the count of the segments so as to get the initiating value in each segment
						var start_value = starter[segment_count];
						write_message("<br>//This goes for segment number "+segment_count+" starting with "+start_value+" as it's value");

						//works uptil here
						//now we go onto the main part, PRINTING patterns
						var main_piece = starter[segment_count];
						var secondary_piece = true;//we assume the main piece is false, just for initializing
						var focus_charecter = "&nbsp;";
						var secondary_charecter = "x";
						if(main_piece == true)
						{
							secondary_piece = false;
							secondary_charecter = "&nbsp;";
							focus_charecter = "x";
						}
						//we need to decide which charecter to focus upon to print
						write_message("<br>//We are going to focus upon priniting "+main_piece+" in this section<br>");
						write_message("<br>//Doing this makes us focus upon printing "+focus_charecter+"<br>");

						//now we need to print the charecter to be printed
						var current_slope = slopes[segment_count];
						if(current_slope>0)
						{
							//this is the case for the positive slope
							write_message("if(j-"+start_x+")<="+current_slope+"*(i-"+start_y+"))");
							initiate_block();
							write_message("printf('"+focus_charecter+"');");
							close_block();
							write_message("else");
							initiate_block();
							write_message("printf('"+secondary_charecter+"');");
						}
						else
						{
							//we need total number of columns in the particular segment
							var current_column_count = end_x-start_x;
							current_slope = 0-current_slope;//here we rectify the sign of the slope
							write_message("if((j-"+start_x+")<=("+current_column_count+"-((i-"+start_y+")*"+current_slope+"));");
							initiate_block();
							write_message("printf('"+focus_charecter+"')");
							close_block();
							write_message("else");
							initiate_block();
							write_message("printf('"+secondary_charecter+"');");
							close_block();
						}
						//now, at last, we need to update the segment count
						segment_count++;
					}
					close_block();
				}
			}
			close_block();
			write_message("printf('/n')");
		}
		else//-----------------------------------------------------if it is not the final row---------------
		{
			//here much from the above is repeated, and it is because there was no seperate function written
			write_message("if(i>="+start_y+" && i<"+(end_y+1)+")");
			initiate_block();
			//replica of above, internal part for the columns***********************************************
			for(var j=0;j<x_segments;j++)
			{
				var start_x = breakpoints_x[j];
				var end_x = breakpoints_x[j+1];
				if(end_x == (number_of_columns-1))
				{
					is_final_column = true;
				}
				if(is_final_column == true)//-------------------------if it is the final column------------
				{
					//it is the final column
					write_message("if(j>="+start_x+" && j<"+(end_x+1)+")");
					initiate_block();
					{
						//here we print the stars
						
						//write_message(segment_count);
						//we need to keep the count of the segments so as to get the initiating value in each segment
						var start_value = starter[segment_count];
						write_message("<br>//This goes for segment number "+segment_count+" starting with "+start_value+" as it's value<br>");

						//works uptil here
						//now we go onto the main part, PRINTING patterns
						var main_piece = starter[segment_count];
						var secondary_piece = true;//we assume the main piece is false, just for initializing
						var focus_charecter = "&nbsp;";
						var secondary_charecter = "x";
						if(main_piece == true)
						{
							secondary_piece = false;
							secondary_charecter = "&nbsp;";
							focus_charecter = "x";
						}
						//we need to decide which charecter to focus upon to print
						write_message("<br>//We are going to focus upon priniting "+main_piece+" in this section<br>");
						write_message("<br>//Doing this makes us focus upon printing "+focus_charecter+"<br>");

						//now we need to print the charecter to be printed
						var current_slope = slopes[segment_count];
						if(current_slope>0)
						{
							//this is the case for the positive slope
							write_message("if(j-"+start_x+")<="+current_slope+"*(i-"+start_y+"))");
							initiate_block();
							write_message("printf('"+focus_charecter+"');");
							close_block();
							write_message("else");
							initiate_block();
							write_message("printf('"+secondary_charecter+"');");
						}
						else
						{
							//we need total number of columns in the particular segment
							var current_column_count = end_x-start_x;
							current_slope = 0-current_slope;//here we rectify the sign of the slope
							write_message("if((j-"+start_x+")<=("+current_column_count+"-((i-"+start_y+")*"+current_slope+"));");
							initiate_block();
							write_message("printf('"+focus_charecter+"')");
							close_block();
							write_message("else");
							initiate_block();
							write_message("printf('"+secondary_charecter+"');");
							close_block();
						}
						//now, at last, we need to update the segment count
						segment_count++;
					}
					close_block();
				}
				else//--------------------------------------------if it is not the final column------------
				{
					//we need to write the code
					write_message("if(j>="+start_x+" && j<"+end_x+")");
					initiate_block();
					{
						//here we write the message
						
						//write_message(segment_count);
						//we need to keep the count of the segments so as to get the initiating value in each segment
						var start_value = starter[segment_count];
						write_message("<br>//This goes for segment number "+segment_count+" starting with "+start_value+" as it's value<br>");

						//works uptil here
						//now we go onto the main part, PRINTING patterns
						var main_piece = starter[segment_count];
						var secondary_piece = true;//we assume the main piece is false, just for initializing
						var focus_charecter = "&nbsp;";
						var secondary_charecter = "x";
						if(main_piece == true)
						{
							secondary_piece = false;
							secondary_charecter = "&nbsp;";
							focus_charecter = "x";
						}
						//we need to decide which charecter to focus upon to print
						write_message("<br>//We are going to focus upon priniting "+main_piece+" in this section<br>");
						write_message("<br>//Doing this makes us focus upon printing "+focus_charecter+"<br>");

						//now we need to print the charecter to be printed
						var current_slope = slopes[segment_count];
						if(current_slope>0)
						{
							//this is the case for the positive slope
							write_message("if(j-"+start_x+")<="+current_slope+"*(i-"+start_y+"))");
							initiate_block();
							write_message("printf('"+focus_charecter+"');");
							close_block();
							write_message("else");
							initiate_block();
							write_message("printf('"+secondary_charecter+"');");
						}
						else
						{
							//we need total number of columns in the particular segment
							var current_column_count = end_x-start_x;
							current_slope = 0-current_slope;//here we rectify the sign of the slope
							write_message("if((j-"+start_x+")<=("+current_column_count+"-((i-"+start_y+")*"+current_slope+"));");
							initiate_block();
							write_message("printf('"+focus_charecter+"')");
							close_block();
							write_message("else");
							initiate_block();
							write_message("printf('"+secondary_charecter+"');");
							close_block();
						}
						//now, at last, we need to update the segment count
						segment_count++;
					}
					close_block();
				}
			}
			close_block();
			write_message("printf('/n')");
		}
	}
	close_block();//to close the loop guiding the number of columns
	close_block();//to close the loop guiding the number of rows
	close_block();//to close the program




	//now we display the other elements that have been initricate in solving the problem
	write_message("<br><br><hr><br><br>");
	write_message("Here we present the important features:<br>");
	write_message("There are "+x_segments+" along the horizontal axis broken by position < originating at zero > ");
	write_message(breakpoints_x);
	write_message("<br>");
	write_message("There are "+y_segments+" along the vertical axis broken by ");
	write_message(breakpoints_y);
	write_message("<br>");
	write_message("There are "+total_segments+" segments in total whose slope(s) being "+slopes);

	//now we need to print any and every pattern noticed in the pattern
	//**********************************this is being left out for future updates
}










//------------------------------------------------------SEPERATE SECTION OVER HERE-------------------------------------------------------

//***************************************************************************************************************************************
//---------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------NOW WE GO ON TO THE FUNCTIONS THAT HELP PRINT THE OUTPUT
//---------------------------------------------------------------------------------------------------------------------------------------
//***************************************************************************************************************************************

//------------------------------------------------------SEPERATE SECTION OVER HERE-------------------------------------------------------

var block_count = 0;//this keeps the count of the blocks and therefore we can stylise the output
function startup()
{
	console.log("#include<stdio.h> \n void main()");
	message = message+"please include stdio.h positively<br>";
	message = message+"#include<stdio.h><br>void main()";
}
function initiate_block()
{
	var current_line = "&nbsp;".repeat(block_count*4);
	message = message+"<br>"+current_line+"{<br>";
	block_count++;
}
function close_block()
{
	block_count--;//we need to update the block count first and then proceed to print
	var current_line = "&nbsp;".repeat(block_count*4);
	message = message+"<br>"+current_line+"}<br>";
}
function write_message(input)
{
	var current_line = "&nbsp;".repeat(block_count*4)+input;
	//&nbsp; is used to print a blank space
	message = message+current_line;
}
function initiate_writeup()
{
	startup();
	initiate_block();
	//initiate_block();
	//write_message("this is the block to write");
	//close_block();
	//close_block();
}