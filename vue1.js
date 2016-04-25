document.addEventListener("DOMContentLoaded", function() {
	new Vue ({
		el: "#game",
		data: function() {
			return {
				ballX: 0,
				ballY: 0,
				boardPosition: 200,
				boardWidth: 100,
				boardHeight:40,
				fieldWidth: 600,
				fieldHeight: 400,
				ballWidth: 50,
				ballHeight:50,
				ballStep: 10,
				ballInterval: 50,
				intervalId: null,
				dirX: 1,
				dirY:1
				};
		},
		methods: {
			onMove: function(e) {
				this.boardPosition = e.clientX-(this.boardWidth/2);
				if (this.boardPosition<0) { this.boardPosition=0; }
				if (this.boardPosition+this.boardWidth>this.fieldWidth) { this.boardPosition= this.fieldWidth-this.boardWidth;}
			},
			onClick: function() {
				var self=this;
				if (this.intervalId === null) {
					self.intervalId = setInterval(function() {
						self.ballX += self.ballStep*self.dirX;
						self.ballY += self.ballStep*self.dirY;
						if ((self.ballX >= self.fieldWidth-self.ballWidth) || (self.ballX <=0)){
							self.dirX *= -1;
						}
						if (self.ballY <=0){
							self.dirY *= -1;
						}
						if(self.ballY>=self.fieldHeight-self.ballHeight) {
							var ballPosition = self.ballX+(self.ballWidth/2);
							if (ballPosition>=self.boardPosition && ballPosition<= self.boardPosition+self.boardWidth) {
								self.dirY *= -1;
								} else {clearInterval(self.intervalId)}
						}
					}, this.ballInterval); 
				}
			}
		}
	});
});