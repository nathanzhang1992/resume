!function(a){"use strict";function b(){function b(b){a("html, body").stop().animate({scrollTop:a(b).offset().top-30},1500,"easeInOutExpo")}a(window).scroll(function(){var b=a(".cv-title").offset().top;a(this).scrollTop()>b?a(".nav").addClass("splited"):a(this).scrollTop()<b&&a(".nav").removeClass("splited")}),a("ul.nav a").click(function(c){c.preventDefault(),b(a(this).attr("href")),a("select.nav").val(a(this).attr("href"))}),a("select.nav").change(function(){b(a(this).val())});var c=a("#map").data("lat"),d=a("#map").data("lng"),e=new GMaps({div:"#map",lat:c,lng:d});e.addMarker({lat:c,lng:d,title:"It's Me!"})}a(b)}(jQuery);