angular.module('myapp').factory("chartService", function() {
	
	var mydata = [[1147651200000,0],
	            [1147737600000,1],
	          	[1147737600000,2],
	          	[1147737600000,3],
	            [1147824000000,0],
	            [1147910400000,0],
	            [1147996800000,0],
	            [1148256000000,0],
	            [1148342400000,0],
	            [1148428800000,0],
	            [1148515200000,0],
	            [1148601600000,0],
	            [1148947200000,0],
	            [1149033600000,0],
	            [1149120000000,0],
	            [1149206400000,0],
	            [1149465600000,0],
	            [1149552000000,0],
	            [1149638400000,1],
	            [1149724800000,0],
	            [1149811200000,0],
	            [1150070400000,0],
	            [1150156800000,0],
	            [1150243200000,0],
	            [1150329600000,0],
	            [1150416000000,0],
	            [1150675200000,0],
	            [1150761600000,1],
	            [1150848000000,0],
	            [1150934400000,0],
	            [1151020800000,0],
	            [1151280000000,1],
	            [1151366400000,0],
	            [1151452800000,0],
	            [1151539200000,0],
	            [1151625600000,0]];
		
		// create dummy data
		createData = function(seed) {
			var data = [];
			for (i = 0; i < mydata.length; i++) {
				rnd = Math.floor( Math.random() * 2);
				if (rnd != 0) {
					data.push([mydata[i][0], Math.floor( Math.random() * seed)]);
				}
			}
			
			return data;
		}
		
		// create dummy bar data
		createBarData = function() {
			barNo = Math.floor(Math.random() * 5);
			dayStart = Math.floor(Math.random() * (mydata.length - 10));
			dayEnd = Math.floor(dayStart + Math.floor(Math.random() * 5)) + 3;
			var data = [];
			data.push([mydata[dayStart][0], barNo]);
			data.push([mydata[dayEnd][0], barNo]);
			
			return data;
		}
		
		// create Series
		createSeries = function(yNo) {
			srs = {
		            name : 'AAPL Stock Price',
		            data : [],
		            lineWidth : 1,
		            point: {
		                events: {
		                    click: function () {
		                        alert('x:' + this.x + '  y:' + this.y);
		                    }
		                }
		            },
		            yAxis: yNo,
		            tooltip: {
		                valueDecimals: 2
		            }
		        }
			
			// data
			srs.data = createData(3);
			
			return srs;
		}
		
		// create marker series
		createMarkerSeries = function(yNo) {
			srs = createSeries(yNo);
			srs.data = [];
			
			srs.marker = {
	            	symbol: 'url(http://www.highcharts.com/demo/gfx/sun.png)',
	                enabled : true,
	                radius : 2
	            }
			srs.lineWidth = 0;
			
			// data
			srs.data = createData(1);
			
			return srs;
		}
		
		// create marker series
		createBarSeries = function(yNo) {
			srs = createSeries(yNo);
			srs.data = [];
			
			srs.lineWidth = 10;
			
			// data
			srs.data = createBarData();
			
			return srs;
		}
		
		// serires
		var srs1 = createBarSeries(0);
		
		var srs2 = createSeries(1);
		var srs3 = createMarkerSeries(2);
		var srs4 = createMarkerSeries(3);
		var srs5 = createSeries(1);
		var srs6 = createMarkerSeries(1);
		var srs7 = createBarSeries(0);
		var srs8 = createBarSeries(0);
		var srs9 = createBarSeries(0);
		var srsArr = [srs1, srs2, srs3, srs4, srs5, srs7, srs8];
		
		var charts = {
				
				options: {
					navigator: {
		                enabled: true
		            }
				},
				
				title : {
		            text : 'AAPL Stock Price'
		        },
		        
		        // yAxis
		        yAxis: [{
		            title: {
		                text: 'panel1'
		            },
		            height: 200,
		            lineWidth: 2
		        }, {
		            title: {
		                text: 'panel2'
		            },
		            top: 300,
		            height: 200,
		            offset: 0,
		            lineWidth: 2,
		        }, {
		            title: {
		                text: 'panel3'
		            },
		            top: 510,
		            height: 200,
		            offset: 0,
		            lineWidth: 2,
		        }, {
		            title: {
		                text: 'panel4'
		            },
		            top: 720,
		            height: 200,
		            offset: 0,
		            lineWidth: 2,
		        }],
		        
		        // serises
		        series : srsArr,
		        useHighStocks: true,
		        loading: false
		}
		
		return {
			createSeries : createSeries,
			createMarkerSeries : createMarkerSeries,
			charts: charts,
			data : mydata
		}
	
});