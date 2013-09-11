{

    chart: {
        defaultSeriesType: 'column',
        stacking: 'stacked',
        ignoreHiddenSeries: true,
        renderTo: 'chart'
    },
    title: {
        text: 'Number of finished consultant episodes in the four UK countries: 2002/03 - 2010/11'
    },

    subtitle: {
        text: '(inpatient and day case)'
    },
    plotOptions: {
        column: {
            stacking: 'normal'
        }
    },

    xAxis: {
        categories: ['2002/03', '2003/04', '2004/05', '2005/06', '2006/07', '2007/08', '2008/09', '2009/10', '2010/11'],



        title: {
            text: 'Year'
        }
    },

    yAxis: [{
        min: 0,
        max: 25,
        tickInterval: 5,
        labels: {
            formatter: function() {
                return this.value.toFixed(0);
            }
        },
        title: {
            text: 'Number of finished consultant episodes (millions)'
        }
    }],

    series: [
        {
            name: 'Northern Ireland',
            color: '#e5a8b4',
            data: [0.465364,0.482446,0.4900580,0.500223,0.518772,0.538586,0.551098]
        },
        {
            name: 'Wales',
            color: '#b82831',
            data: [0.681322,0.712371,0.719663,0.802642,0.827599,0.831338,0.859420,0.892655,0.886334,]
        },
        {
            name: 'Scotland',
            color: '#005567',
            data: [4.693136,4.641774,4.493937,4.569839,4.488267,4.471000,4.634292,4.574989,4.608800]
        },
        {
            name: 'England',
            color: '#58737c',
            data: [12.755899,13.174480,13.706765,14.423506,14.784581,15.359062,16.232579,16.806196,17.269882]
        }

    ],
    tooltip: {
        //valueDecimals: 2,
        formatter: function() {
            var isFirst = this.series.xAxis.categories[0] == this.x;
            return  this.series.name + ': ' + '' + this.y.toFixed(2) + ' million';// + (!isFirst ? '<br/>Total ' + this.x + ': £'+ Highcharts.numberFormat(this.point.stackTotal,1) + 'bn' : '');
        },
        style: {
            'line-height': '120%'
        }
    }
}