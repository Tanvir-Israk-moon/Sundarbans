$(document).ready((function(){var r=$(".careers-quotes-slider");r.slick({nextArrow:".careers-slider-arrows .arrow-right, .single-white-arrow img",prevArrow:".careers-slider-arrows .arrow-left",dots:!1}),$(".careers-slider-dots .dot").click((function(){$(".careers-quotes-slider").slick("slickGoTo",$(this).index())})),r.on("afterChange",(function(){$(".careers-slider-dots .dot").each((function(e){r.slick("slickCurrentSlide")!==e?$(this).removeClass("active"):$(this).addClass("active")}))}))}));