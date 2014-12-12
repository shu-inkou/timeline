//See: https://github.com/pablojim/highcharts-ng
var myapp = angular.module('myapp', ["highcharts-ng"]);

myapp.controller('myctrl', function (chartService, $scope) {
                 
	$scope.addPoints = function () {
	    var seriesArray = $scope.highchartsNG.series
	    var rndIdx = Math.floor(Math.random() * seriesArray.length);
	    seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 10, 20])
	};
	 
	$scope.addSeries = function () {
		//alert($scope.highchartsNG.series[1].data);
		srs = chartService.createSeries(1);
		$scope.highchartsNG.series.push(srs)
	}
 
	$scope.removeRandomSeries = function () {
		var seriesArray = $scope.highchartsNG.series
		var rndIdx = Math.floor(Math.random() * seriesArray.length);
		seriesArray.splice(rndIdx, 1)
	}
 
	 $scope.options = {
	 	type: 'line'
	 }
 
	 $scope.swapChartType = function () {
		 if (this.highchartsNG.options.chart.type === 'line') {
		 	this.highchartsNG.options.chart.type = 'bar'
		 } else {
		 	this.highchartsNG.options.chart.type = 'line'
		 }
	 }
 
	$scope.highchartsNG = chartService.charts;
});