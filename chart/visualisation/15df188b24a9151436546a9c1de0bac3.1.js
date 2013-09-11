{

    chart: {
        defaultSeriesType: 'column',
        stacking: 'stacked',
        ignoreHiddenSeries: true,
        renderTo: 'chart'
    },
    title: {
        text: 'CHART 1/2: Net ingredient cost per item prescribed in the four UK countries: 2003/04 - 2011/12'
    },

    subtitle: {
        text: '(In real terms at 2011/12 prices)'
    },
    plotOptions: {
        column: {
            stacking: 'normal'
        }
    },

    xAxis: {
        categories: ['2003/04', '2004/05', '2005/06', '2006/07', '2007/08', '2008/09', '2009/10', '2010/11', '2011/12'],



        title: {
            text: 'Year'
        }
    },

    yAxis: [{
        min: 0,
        max: 16,
        tickInterval: 2,
        labels: {
            formatter: function() {
                return this.value.toFixed(0);
            }
        },
        title: {
            text: '£ per item (in real terms)'
        }
    }],

    series: [
        {
            name: 'England',
            color: '#58737c',
            data: [14.03, 13.88, 12.70, 12.24, 11.52, 10.54, 10.12, 9.74, 9.16],
            stack: 1
        },
        {
            name: 'Scotland',
            color: '#005567',
            data: [14.11, 13.56, 12.59, 12.49, 11.80, 11.30, 11.05, 11.23, 10.73],
            stack: 2
        },
        {
            name: 'Wales',
            color: '#b82831',
            data: [13.03, 12.62, 11.38, 11.00, 10.32, 9.50, 9.11, 8.66, 8.08],
            stack: 3
        },
        {
            name: 'Northern Ireland',
            color: '#e5a8b4',
            data: [15.19, 15.76, 14.84, 14.38, 13.87, 13.26, 12.93, 12.49],
            stack: 4
        }




    ],
    tooltip: {
        //valueDecimals: 2,
        formatter: function() {
            var isFirst = this.series.xAxis.categories[0] == this.x;
            return this.series.name + ': ' + ' £' + this.y.toFixed(2) + '';// + (!isFirst ? '<br/>Total ' + this.x + ': £'+ Highcharts.numberFormat(this.point.stackTotal,1) + 'bn' : '');
        },
        style: {
            'line-height': '120%'
        }
    }
}