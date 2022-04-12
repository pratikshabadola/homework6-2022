var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= 0.95;
	console.log("Speed is ", video.playbackRate)

});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate /= 0.95;
	console.log("Speed is ", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Current location is ", video.currentTime);
	console.log("Skip ahead");
	video.currentTime += 15;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
		console.log("Going back to the beginning");
	}
	console.log("New location is ", video.currentTime);

});

document.querySelector("#mute").addEventListener("click", function() {
	if (document.querySelector("#mute").innerHTML == "Mute") {
		document.querySelector("#mute").innerHTML = "Unmute"
		video.muted = true;
		console.log("Muted");

	}
	else {
		document.querySelector("#mute").innerHTML = "Mute"
		video.muted = false;
		console.log("Unmuted");
	}
});

document.querySelector("#slider").addEventListener("change", function() {		
	console.log("Change volume level");
	video.volume = document.getElementById("slider").value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {		
	console.log("Change to vintage");
	video.classList.add('oldSchool');

});

document.querySelector("#orig").addEventListener("click", function() {		
	console.log("Change to original");
	video.classList.remove('oldSchool');
});
