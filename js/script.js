$(function () {
	$(".typed").typed({
		strings: ["font-end Developer.", "Web Designer.", "Freelancer."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: "html",
		// call when done callback function
		callback: function () {},
		// starting callback function before each string
		preStringTyped: function () {},
		//callback for every typed string
		onStringTyped: function () {},
		// callback for reset
		resetCallback: function () {},
	});
});

// !...................... Background Video JavaScript ..............

window.onload = function () {
	document.getElementById("video1").addEventListener("ended", function () {
		document.getElementById("video2").play();
		document.getElementById("video2").classList.remove("hide");
		document.getElementById("video1").classList.add("hide");
	});
	document.getElementById("video2").addEventListener("ended", function () {
		document.getElementById("video1").play();
		document.getElementById("video1").classList.remove("hide");
		document.getElementById("video2").classList.add("hide");
	});
};

// !...................... Navigation Active class JavaScript ..............

$(function () {
	$(".menu_link").on("click", function () {
		$(".menu_link").removeClass("active");
		$(this).addClass("active");
	});
});
