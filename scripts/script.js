	function converter(value) {
		document.getElementById("kilometer").innerHTML=value * 39370.079;
		document.getElementById("millemeter").innerHTML=value * 2.54;
		document.getElementById("meter").innerHTML=value * 39.37;
		document.getElementById("Celcius").innerHTML=(value * 9 / 5) + 32;
		document.getElementById("Fahrenheit").innerHTML=(value - 32) * 5 / 9;
}