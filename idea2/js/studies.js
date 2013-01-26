$(document).ready(function(){
   //$.jqplot.config.enablePlugins = true; 
	var items =  ['item0', 'item1', 'item2','item3'];
	var visible = false;
	
	var plot3 = $.jqplot('pie2', [[['Technical engineer',9],['J2EE Master',9],['Basic J2ME',1],['Advanced J2ME',1]]], {
        seriesDefaults: {
            shadow: false, 
            renderer:$.jqplot.PieRenderer, 
            rendererOptions:{
                sliceMargin: 4, 
                // rotate the starting position of the pie around to 12 o'clock.
                startAngle: -90
            }
        },   
	grid: {		
		background: 'transparent',      // CSS color spec for background color of grid.
		shadow:false, 
                borderWidth:0, 
                borderColor: 'transparent' 
	},	
	legend:{
            show:true, 
            placement: 'outside', 
            rendererOptions: {
                numberRows: 2
            }, 
            location:'s',
            marginTop: '15px'
        } 	
    });
    
	$('#pie2').bind('jqplotDataHighlight', 
	function (ev, seriesIndex, pointIndex, data, radius) {		
		//$("#" + items[pointIndex]).slideToggle();
		if (!visible) {
			$("#info").toggle( "drop" );		
			$("#" + items[pointIndex]).show();
			visible = true;
		}
	});
	
	$('#pie2').bind('jqplotDataUnhighlight', 
	function (ev, seriesIndex, pointIndex, data) {
		//$("#" + items[pointIndex]).slideToggle();	
		//$("#info").slideToggle();
		if (visible) {
			$("#info").toggle( "drop");
			
			for (element in items) {
				$("#" + items[element]).hide();
			}	
					
			visible = false;			
		}
	});
});