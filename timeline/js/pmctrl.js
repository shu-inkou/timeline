$(function() {
	var charts = getCharts();
	// Create the chart
    $('#container').highcharts('StockChart', charts);
	
	$("#addSrs").click(function() {
		alert(charts);
	});
});
			