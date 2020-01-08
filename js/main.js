// JavaScript Document

$(document).ready(function(){	
		
		//Vegas Plugin
		$(".vegas").vegas({
			slides: [
				{   src: 'img/CocaColaMain.jpg',
					video: {
						src: [
							'video/CocaColaMain.mp4',
							'video/CocaColaMain.webm'
						],
						loop: true,
						mute: true
					}
				}
			]
		});
		
		//Slider Function
		$('#btn-left').click(function ( ) {
			$('.slider .item:first-child').css('opacity','1');
			$('.slider .pagination div:first-child').css('background','#F40009');
			$('.slider .item:nth-child(2)').css('opacity','0');
			$('.slider .pagination div:nth-child(2)').css('background','#E1E1E1');
		});
		
		$('#btn-right').click(function ( ) {
			$('.slider .item:first-child').css('opacity','0');
			$('.slider .pagination div:first-child').css('background','#E1E1E1');
			$('.slider .item:nth-child(2)').css('opacity','1');
			$('.slider .pagination div:nth-child(2)').css('background','#F40009');
		});	
		
		$('.family').click(function ( ) {
			$('.family-pop').slideToggle();
		})
		
		
		$('#m-story a').mouseenter(function ( ) {
			$('#m-freestyle>a').css('transform','translateX('+$('#m-freestyle').width()+'px)')
			$('#m-story>a').css('opacity','0'); 
			$('.sub-story').css('display','block');
		})
		
		$('#m-story').mouseleave(function ( ) {			
			$('#m-freestyle>a').css('transform','translateX(0px)');
			$('#m-story a').css('opacity','1');
			$('.sub-story').css('display','none');
		})
		
		for(var i=1; i<100; i++) {

			$('<div id="r'+i+'"></div>').appendTo('.round');
			
			var top = Math.floor(Math.random() * 100) + 500;
			var left = Math.floor(Math.random() * $('.round').width());
			var circle = Math.floor(Math.random() * 90) + 10;
			var color = "#"+Math.round(Math.random()*0xffffff).toString(16);
			var cssObj = {
				'top': top+'px', 
				'left': left+'px', 
				'width': circle+'px',
				'height': circle+'px',
				'background': color
			};	
			$('.round #r'+i).css(cssObj);
		}

		//Scroll Menu Function
		$(window).scroll(function(){
			var top=$(window).scrollTop();
			var height=top+$(window).height();
			
			if(top == 0){
				$("header").css("background","none");
				$(".sub-story").css("background","none");
			}else {
				$("header").css("background","#F40009");
				$(".sub-story").css("background","#F40009");
			}
			//brand효과
			if(height > 1200){
				upRound();
				$('.brand').css('transform','rotateX(0) translate(0)');			
				$('.brand h2').css('transform','rotateX(0deg)');				
				$('.brand p').css('transform','rotateX(0deg)');
				$('.brand .pic').css('opacity','1');
				$('.brand .detail').css('opacity','1');
				setTimeout(function(){$('.round').remove();}, 2100);						
			} 
			
			if(height > 2100){
			//freestyle효과
				$('.freestyle').css('transform','rotateX(0) translate(0)');			
				$('.freestyle h2').css('transform','rotateX(0deg)');				
				$('.freestyle p').css('transform','rotateX(0deg)');
				$('.freestyle .pic').css('opacity','1');
				$('.freestyle .detail').css('opacity','1');
			}
		})
		
		function upRound(){
			for(var i = 1; i<100; i++){
				var upTime = Math.floor(Math.random() * 1000) + 1000;
				$(".round #r"+i).animate({top:"0", opacity:'0'},upTime);		
			}
		}
	})