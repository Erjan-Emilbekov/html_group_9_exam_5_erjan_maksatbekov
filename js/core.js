$(document).ready(function(){
		// Смотрит на ширину экрана при изменении расширении
		$(window).resize(function() {
			if($(this).width() > 1000) {
				$('.list__check--drop').click(function(){
					$('.drop-down').slideToggle(700);	
					if ($(this).hasClass('not-active')) {
						$(this).addClass('drop-down--active').removeClass('not-active');
					}else{
						setTimeout(function(){
							$('.drop-down--active').addClass('not-active').removeClass('drop-down--active')
						},600)			
					}		
				});
			}
			else {
					$('#menu2').slicknav({
						label: '',
						duration: 1000,
						brand: "<img src='img/logo.png'>"
					});
			}
		})

		if($(window).width() < 1000) {
					$('#menu2').slicknav({
						label: '',
						duration: 1000,
						brand: "<img src='img/logo.png'>"
					});
		}
		else {
			$('.list__check--drop').click(function(){
					$('.drop-down').slideToggle(700);	
					if ($(this).hasClass('not-active')) {
						$(this).addClass('drop-down--active').removeClass('not-active');
					}else{
						setTimeout(function(){
							$('.drop-down--active').addClass('not-active').removeClass('drop-down--active')
						},600)			
					}		
				});
		}
		$('.slick').slick({
				dots: true
			});

	});