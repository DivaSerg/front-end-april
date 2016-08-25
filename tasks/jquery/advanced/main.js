$(function(){
	accordion();
	openClose();
	tabs();
})

function accordion(){
	var items =  $('.accordion > li');
	var sliders = $('.accordion .slider');

	items.each(function(){
		var link = $(this).children('a');
		var slider = $(this).find(sliders);

		if (!$(this).hasClass('active')){
			slider.hide();
		}

		link.click(function(){
			if ($(this).parent().hasClass('active')){
				$(this).parent().removeClass('active');
				$(this).siblings(slider).hide('slow');
			}
			else{
				items.removeClass('active');
				sliders.hide('slow');
				$(this).parent().addClass('active');
				$(this).siblings(slider).show('slow');
			}
		})
	});
}

function openClose(){
	$('.box').each(function(){
		var holder = $(this);
		var content = holder.find('.block');
		var btn = holder.find('.title a');
		
		if (!holder.hasClass('open')) {content.hide();}
		
		btn.click(function(){
			if (holder.hasClass('open')){
				holder.removeClass('open');
				content.hide('slow')
			}
			else{
				holder.addClass('open');
				content.show('slow')
			}
			return false;
		})
		
	})
}


function tabs(){
	var tabItem = $('.tabset a');
	var tabContent = $('.tab-content');
	var defaultActiveTab = $('ul.tabset > li.active > a');
	var defaultActiveContent = $(defaultActiveTab.attr('href'));


	if(!defaultActiveTab || !defaultActiveTab.length){
		defaultActiveTab = $('ul.tabset > li:first-child > a');
		defaultActiveTab.parent().addClass('active');
		defaultActiveContent = $(defaultActiveTab.attr('href'));
	}

	tabContent.hide();
	defaultActiveContent.show();

	
	tabItem.click(function(){
		tabItem.parent().removeClass('active');
		$(this).parent().addClass('active');

		var activeTab = $(this).attr('href');
		tabContent.hide();
		$(activeTab).show();		
		return false;
	})

	
}


















