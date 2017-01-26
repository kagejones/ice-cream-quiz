var loading = function(){
	
}

var subButton = document.getElementById("submit-button") ;

var onSubButClick = function()
{
	var grand = {numVals: 0, sumVals: 0, hiVal: 0};
	var chill = {numVals: 0, sumVals: 0, hiVal: 0};
	var deep = {numVals: 0, sumVals: 0, hiVal: 0};
	var mint = {numVals: 0, sumVals: 0, hiVal: 0};
	var adv = {numVals: 0, sumVals: 0, hiVal: 0};

// COLOR
	if(document.querySelector('input[name="color"]:checked').value == "grand")
	{
		++grand.numVals ;
		grand.sumVals += 1 ;
		if(grand.hiVal < 1) grand.hiVal = 1 ;
	}
	else if(document.querySelector('input[name="color"]:checked').value == "chill")
	{
		++chill.numVals ;
		chill.sumVals += 1 ;
		if(chill.hiVal < 1) chill.hiVal = 1 ;
	}
	else if(document.querySelector('input[name="color"]:checked').value == "deep")
	{
		++deep.numVals ;
		deep.sumVals += 1 ;
		if(deep.hiVal < 1) deep.hiVal = 1 ;
	}
	else if(document.querySelector('input[name="color"]:checked').value == "mint")
	{
		++mint.numVals ;
		mint.sumVals += 1 ;
		if(mint.hiVal < 1) mint.hiVal = 1 ;
	}
	else if(document.querySelector('input[name="color"]:checked').value == "adv")
	{
		++adv.numVals ;
		adv.sumVals += 1 ;
		if(adv.hiVal < 1) adv.hiVal = 1 ;
	}


// SAT-DEST
	if(document.querySelector('input[name="sat-dest"]:checked').value == "grand")
	{
		++grand.numVals ;
		grand.sumVals += 5 ;
		if(grand.hiVal < 5) grand.hiVal = 5 ;
	}
	else if(document.querySelector('input[name="sat-dest"]:checked').value == "chill")
	{
		++chill.numVals ;
		chill.sumVals += 5 ;
		if(chill.hiVal < 5) chill.hiVal = 5 ;
	}
	else if(document.querySelector('input[name="sat-dest"]:checked').value == "deep")
	{
		++deep.numVals ;
		deep.sumVals += 5 ;
		if(deep.hiVal < 5) deep.hiVal = 5 ;
	}
	else if(document.querySelector('input[name="sat-dest"]:checked').value == "mint")
	{
		++mint.numVals ;
		mint.sumVals += 5 ;
		if(mint.hiVal < 5) mint.hiVal = 5 ;
	}
	else if(document.querySelector('input[name="sat-dest"]:checked').value == "adv")
	{
		++adv.numVals ;
		adv.sumVals += 5 ;
		if(adv.hiVal < 5) adv.hiVal = 5 ;
	}

// HOUSE
	if(document.querySelector('input[name="house"]:checked').value == "grand")
	{
		++grand.numVals ;
		grand.sumVals += 8 ;
		if(grand.hiVal < 8) grand.hiVal = 8 ;
	}
	else if(document.querySelector('input[name="house"]:checked').value == "chill")
	{
		++chill.numVals ;
		chill.sumVals += 8 ;
		if(chill.hiVal < 8) chill.hiVal = 8 ;
	}
	else if(document.querySelector('input[name="house"]:checked').value == "deep")
	{
		++deep.numVals ;
		deep.sumVals += 8 ;
		if(deep.hiVal < 8) deep.hiVal = 8 ;
	}
	else if(document.querySelector('input[name="house"]:checked').value == "mint")
	{
		++mint.numVals ;
		mint.sumVals += 8 ;
		if(mint.hiVal < 8) mint.hiVal = 8 ;
	}
	else if(document.querySelector('input[name="house"]:checked').value == "adv")
	{
		++adv.numVals ;
		adv.sumVals += 8 ;
		if(adv.hiVal < 8) adv.hiVal = 8 ;
	}

// HOLIDAY
	if(document.querySelector('input[name="holiday"]:checked').value == "grand")
	{
		++grand.numVals ;
		grand.sumVals += 3 ;
		if(grand.hiVal < 3) grand.hiVal = 3 ;
	}
	else if(document.querySelector('input[name="holiday"]:checked').value == "chill")
	{
		++chill.numVals ;
		chill.sumVals += 3 ;
		if(chill.hiVal < 3) chill.hiVal = 3 ;
	}
	else if(document.querySelector('input[name="holiday"]:checked').value == "deep")
	{
		++deep.numVals ;
		deep.sumVals += 3 ;
		if(deep.hiVal < 3) deep.hiVal = 3 ;
	}
	else if(document.querySelector('input[name="holiday"]:checked').value == "mint")
	{
		++mint.numVals ;
		mint.sumVals += 3 ;
		if(mint.hiVal < 3) mint.hiVal = 3 ;
	}
	else if(document.querySelector('input[name="holiday"]:checked').value == "adv")
	{
		++adv.numVals ;
		adv.sumVals += 3 ;
		if(adv.hiVal < 3) adv.hiVal = 3 ;
	}

// COSTUME
	if(document.querySelector('input[name="costume"]:checked').value == "grand")
	{
		++grand.numVals ;
		grand.sumVals += 10 ;
		if(grand.hiVal < 10) grand.hiVal = 10 ;
	}
	else if(document.querySelector('input[name="costume"]:checked').value == "chill")
	{
		++chill.numVals ;
		chill.sumVals += 10 ;
		if(chill.hiVal < 10) chill.hiVal = 10 ;
	}
	else if(document.querySelector('input[name="costume"]:checked').value == "deep")
	{
		++deep.numVals ;
		deep.sumVals += 10 ;
		if(deep.hiVal < 10) deep.hiVal = 10 ;
	}
	else if(document.querySelector('input[name="costume"]:checked').value == "mint")
	{
		++mint.numVals ;
		mint.sumVals += 10 ;
		if(mint.hiVal < 10) mint.hiVal = 10 ;
	}
	else if(document.querySelector('input[name="costume"]:checked').value == "adv")
	{
		++adv.numVals ;
		adv.sumVals += 10 ;
		if(adv.hiVal < 10) adv.hiVal = 10 ;
	}

// PARTY
	if(document.querySelector('input[name="party"]:checked').value == "grand")
	{
		++grand.numVals ;
		grand.sumVals += 11 ;
		if(grand.hiVal < 11) grand.hiVal = 11 ;
	}
	else if(document.querySelector('input[name="party"]:checked').value == "chill")
	{
		++chill.numVals ;
		chill.sumVals += 11 ;
		if(chill.hiVal < 11) chill.hiVal = 11 ;
	}
	else if(document.querySelector('input[name="party"]:checked').value == "deep")
	{
		++deep.numVals ;
		deep.sumVals += 11 ;
		if(deep.hiVal < 11) deep.hiVal = 11 ;
	}
	else if(document.querySelector('input[name="party"]:checked').value == "mint")
	{
		++mint.numVals ;
		mint.sumVals += 11 ;
		if(mint.hiVal < 11) mint.hiVal = 11 ;
	}
	else if(document.querySelector('input[name="party"]:checked').value == "adv")
	{
		++adv.numVals ;
		adv.sumVals += 11 ;
		if(adv.hiVal < 11) adv.hiVal = 11 ;
	}

// ACTIVITY
	if(document.querySelector('input[name="activity"]:checked').value == "grand")
	{
		++grand.numVals ;
		grand.sumVals += 12 ;
		if(grand.hiVal < 12) grand.hiVal = 12 ;
	}
	else if(document.querySelector('input[name="activity"]:checked').value == "chill")
	{
		++chill.numVals ;
		chill.sumVals += 12 ;
		if(chill.hiVal < 12) chill.hiVal = 12 ;
	}
	else if(document.querySelector('input[name="activity"]:checked').value == "deep")
	{
		++deep.numVals ;
		deep.sumVals += 12 ;
		if(deep.hiVal < 12) deep.hiVal = 12 ;
	}
	else if(document.querySelector('input[name="activity"]:checked').value == "mint")
	{
		++mint.numVals ;
		mint.sumVals += 12 ;
		if(mint.hiVal < 12) mint.hiVal = 12 ;
	}
	else if(document.querySelector('input[name="activity"]:checked').value == "adv")
	{
		++adv.numVals ;
		adv.sumVals += 12 ;
		if(adv.hiVal < 12) adv.hiVal = 12 ;
	}

// STARWARS
	if(document.querySelector('input[name="starwars"]:checked').value == "grand")
	{
		++grand.numVals ;
		grand.sumVals += 7 ;
		if(grand.hiVal < 7) grand.hiVal = 7 ;
	}
	else if(document.querySelector('input[name="starwars"]:checked').value == "chill")
	{
		++chill.numVals ;
		chill.sumVals += 7 ;
		if(chill.hiVal < 7) chill.hiVal = 7 ;
	}
	else if(document.querySelector('input[name="starwars"]:checked').value == "deep")
	{
		++deep.numVals ;
		deep.sumVals += 7 ;
		if(deep.hiVal < 7) deep.hiVal = 7 ;
	}
	else if(document.querySelector('input[name="starwars"]:checked').value == "mint")
	{
		++mint.numVals ;
		mint.sumVals += 7 ;
		if(mint.hiVal < 7) mint.hiVal = 7 ;
	}
	else if(document.querySelector('input[name="starwars"]:checked').value == "adv")
	{
		++adv.numVals ;
		adv.sumVals += 7 ;
		if(adv.hiVal < 7) adv.hiVal = 7 ;
	}

// LDS
	if(document.querySelector('input[name="lds"]:checked').value == "grand")
	{
		++grand.numVals ;
		grand.sumVals += 4 ;
		if(grand.hiVal < 4) grand.hiVal = 4 ;
	}
	else if(document.querySelector('input[name="lds"]:checked').value == "chill")
	{
		++chill.numVals ;
		chill.sumVals += 4 ;
		if(chill.hiVal < 4) chill.hiVal = 4 ;
	}
	else if(document.querySelector('input[name="lds"]:checked').value == "deep")
	{
		++deep.numVals ;
		deep.sumVals += 4 ;
		if(deep.hiVal < 4) deep.hiVal = 4 ;
	}
	else if(document.querySelector('input[name="lds"]:checked').value == "mint")
	{
		++mint.numVals ;
		mint.sumVals += 4 ;
		if(mint.hiVal < 4) mint.hiVal = 4 ;
	}
	else if(document.querySelector('input[name="lds"]:checked').value == "adv")
	{
		++adv.numVals ;
		adv.sumVals += 4 ;
		if(adv.hiVal < 4) adv.hiVal = 4 ;
	}

// 80s
	if(document.querySelector('input[name="80s"]:checked').value == "grand")
	{
		++grand.numVals ;
		grand.sumVals += 6 ;
		if(grand.hiVal < 6) grand.hiVal = 6 ;
	}
	else if(document.querySelector('input[name="80s"]:checked').value == "chill")
	{
		++chill.numVals ;
		chill.sumVals += 6 ;
		if(chill.hiVal < 6) chill.hiVal = 6 ;
	}
	else if(document.querySelector('input[name="80s"]:checked').value == "deep")
	{
		++deep.numVals ;
		deep.sumVals += 6 ;
		if(deep.hiVal < 6) deep.hiVal = 6 ;
	}
	else if(document.querySelector('input[name="80s"]:checked').value == "mint")
	{
		++mint.numVals ;
		mint.sumVals += 6 ;
		if(mint.hiVal < 6) mint.hiVal = 6 ;
	}
	else if(document.querySelector('input[name="80s"]:checked').value == "adv")
	{
		++adv.numVals ;
		adv.sumVals += 6 ;
		if(adv.hiVal < 6) adv.hiVal = 6 ;
	}

// PNR
	if(document.querySelector('input[name="pnr"]:checked').value == "grand")
	{
		++grand.numVals ;
		grand.sumVals += 9 ;
		if(grand.hiVal < 9) grand.hiVal = 9 ;
	}
	else if(document.querySelector('input[name="pnr"]:checked').value == "chill")
	{
		++chill.numVals ;
		chill.sumVals += 9 ;
		if(chill.hiVal < 9) chill.hiVal = 9 ;
	}
	else if(document.querySelector('input[name="pnr"]:checked').value == "deep")
	{
		++deep.numVals ;
		deep.sumVals += 9 ;
		if(deep.hiVal < 9) deep.hiVal = 9 ;
	}
	else if(document.querySelector('input[name="pnr"]:checked').value == "mint")
	{
		++mint.numVals ;
		mint.sumVals += 9 ;
		if(mint.hiVal < 9) mint.hiVal = 9 ;
	}
	else if(document.querySelector('input[name="pnr"]:checked').value == "adv")
	{
		++adv.numVals ;
		adv.sumVals += 9 ;
		if(adv.hiVal < 9) adv.hiVal = 9 ;
	}

// CAMPUS
	if(document.querySelector('input[name="campus"]:checked').value == "grand")
	{
		++grand.numVals ;
		grand.sumVals += 2 ;
		if(grand.hiVal < 2) grand.hiVal = 2 ;
	}
	else if(document.querySelector('input[name="campus"]:checked').value == "chill")
	{
		++chill.numVals ;
		chill.sumVals += 2 ;
		if(chill.hiVal < 2) chill.hiVal = 2 ;
	}
	else if(document.querySelector('input[name="campus"]:checked').value == "deep")
	{
		++deep.numVals ;
		deep.sumVals += 2 ;
		if(deep.hiVal < 2) deep.hiVal = 2 ;
	}
	else if(document.querySelector('input[name="campus"]:checked').value == "mint")
	{
		++mint.numVals ;
		mint.sumVals += 2 ;
		if(mint.hiVal < 2) mint.hiVal = 2 ;
	}
	else if(document.querySelector('input[name="campus"]:checked').value == "adv")
	{
		++adv.numVals ;
		adv.sumVals += 2 ;
		if(adv.hiVal < 2) adv.hiVal = 2 ;
	}

// SORT THE FLAVORS ACCORDING TO:
// 1) sumVals
// 2) numVals
// 3) hiVal

	var types = [grand, chill, deep, mint, adv] ;
	var winner = grand ;

	for(var ct = 1; ct < types.length; ++ct)
	{
		if(types[ct].sumVals > winner.sumVals)
			winner = types[ct] ;
		else if(types[ct].sumVals == winner.sumVals)
		{
			if(types[ct].numVals > winner.numVals)
				winner = types[ct] ;
			else if(types[ct].numvals == winner.numVals)
			{
				if(types[ct].hiVal > winner.hiVal)
					winner = types[ct] ;
			}
		}
	}

// REDIRECT TO THE WINNING FLAV'S PAGE
	
	if(winner == grand) window.location.href="graham_canyon.html" ;
	else if(winner == chill) window.location.href="lavells_vanilla.html" ;
	else if(winner == deep) window.location.href="woosh_cecil.html" ;
	else if(winner == mint) window.location.href="mint_brownie.html" ;
	else if(winner = adv) window.location.href="sparkle_sherbet.html" ;
}

subButton.addEventListener("click", onSubButClick) ;