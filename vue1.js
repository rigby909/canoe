document.addEventListener("DOMContentLoaded", function() {
	new Vue ({
		el: "#game",
		data: function() {
			return {
				ballX: 0,
				ballY: 0,
				boardPosition: 200,
				boardWidth: 100,
				fieldWidth: 600};
		},
		methods: {
			onMove: function(e) {
				this.boardPosition = e.clientX-(this.boardWidth/2);
				if (this.boardPosition<0) { this.boardPosition=0; }
				if (this.boardPosition+this.boardWidth>this.fieldWidth) { this.boardPosition= this.fieldWidth-this.boardWidth;}
			}
		}
	});
});