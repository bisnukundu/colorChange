var box = document.querySelectorAll(".box");

for (var c = 0; c < box.length; c++) {
	box[c].addEventListener("click", function() {
		for (var i = 0; i < box.length; i++) {
			box[i].classList.toggle("green")
		}
	})
}