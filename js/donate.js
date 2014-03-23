$(function () {
	var parsedRange = 0,
	donation = 0,
	projects = document.getElementsByClassName("project"),
	ration = 0,
	curr = "",
	dollar = 1.39, // €1 = $1.39
	dollarMax = dollar * 100,
	yen = 140.99, // €1 = 140.99Y
	yenMax = yen * 100,
	euroMax = 100, // default is euro
	// assign Fibonacci Sequence
	ration1 = 34,
	ration2 = 21,
	ration3 = 13,
	ration4 = 8,
	ration5 = 5,
	fibonacciTotal = ration1 + ration2 + ration3 + ration4 + ration5;
	
	// handle typed / pasted input
	document.getElementById("spinners").oninput = function () {
		// console.log("manual input detected");
		// console.log("this: " + this.value);
		var manual = parseInt(this.value);
		getFibonacci(manual);
	}
	
	// initiate currency symbols
	$("#currency").change(function () {
		$("#spinners").spinner("option", "culture", $(this).val());
		curr = this.value;

		// A little trick to trigger live currency symbol updates for outputs :) Looking out for a better way.
		$( "#spinners" ).spinner( "stepUp", 1 );
		$( "#spinners" ).spinner( "stepUp", -1 );
	});
	
    //Spinner
	$("#spinners").spinner({
		culture: "de-DE",
		min: 0,
		max: 100000,
		step: 1,
		start: 0,
		numberFormat: "C",
		spin: function (event, ui) {
			// console.log("Spinner Triggered");
			getFibonacci(ui.value);
			
			// Spinner speak to range slider
			$("#range").slider("value", ui.value);
		}
	});

	//Range Slider		
	$("#range").slider({
		min: 0,
		max: 100,
		step: 1,
		start: 0,
		range: "min",
		slide: function (event, ui) {
			// console.log("Slider Triggered");
			getFibonacci(ui.value);
			// Slider bump spinner values
			$("#spinners").spinner("value", ui.value);         
		}
	});
	
	// applies the appropriate Fibonacci ration, then calls updateSomeProject()
	function getFibonacci (value) {
		for(var i = 0; i < projects.length; i++){
			var projectId = projects[i].id;
			
			switch (projectId) {
				case "waterTanks": ration = ration1;
				updateSomeProject(ration, value, projectId);
					break;
				case "school": ration = ration2;
				updateSomeProject(ration, value, projectId);
					break;
				case "agriculture": ration = ration3;
				updateSomeProject(ration, value, projectId);
					break;
				case "underprivilegedChildren": ration = ration4;
				updateSomeProject(ration, value, projectId);
					break;
				case "food": ration = ration5;
				updateSomeProject(ration, value, projectId);
					break;
				default: console.log( "default");
				updateSomeProject(ration, value, projectId);
					break;
			}
			
		}	
	}
	
	function updateSomeProject (ration, value, projectId) { // this calculates the width of fills & the value for project outputs based on donation value, exchange rates and Fibonacci ration for that project
		donation = value;
		// console.log("donation: " + donation);
		ration = ration / fibonacciTotal;
		var newValue = value * ration;
		
		// update output 
		switch (curr) {
			case "en-US":
				// Reflect exchange rates relative to default: € 
				donation = donation / dollar;
				$( "#" + projectId + " .output" ).html("$" + newValue.toFixed(2));
				// Reflect exchange rates in Slider max 
				$("#range").slider( "option", "max", dollarMax);
				break;
			case "ja-JP":
				donation = donation / yen;
				$( "#" + projectId + " .output" ).html("¥" + newValue.toFixed(2));
				$("#range").slider( "option", "max", yenMax);
				break;
			default:
				$( "#" + projectId + " .output" ).html("€" + newValue.toFixed(2));
				$("#range").slider( "option", "max", euroMax);
				break;
		}
		// calculate width for fills
		var newWidth = donation * ration + '%';
		// update progress bar fills
		$( "#" + projectId + " div div.progressBarFill").css( "width", newWidth);
		// console.log(projectId + " says newWidth: " + newWidth);	
	}
});