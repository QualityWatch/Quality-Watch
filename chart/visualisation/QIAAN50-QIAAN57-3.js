  {
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Did hospital patients feel they were given enough privacy when being examined or treated?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
chart: {
            type: 'column'
        },

        xAxis: {
            categories: ['2005','2006','2007','2008','2009','2010','2011','2012','2013']
        },

        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: 'Were you given enough privacy when being examined or treated? (proportion of patients)'
            }
        },

        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },

        series: [{
            name: 'No (IP)',
            data: [2,	2,	2,	2,	2,	2,	2,	1,	1],
            stack: 'IP'
        }, {
            name: 'Yes, sometimes (IP)',
            data: [10,	11,	11,	10,	10,	10,	10,	9,	8],
            stack: 'IP'
        },{
            name: 'Yes, always (IP)',
            data: [88,	88,	87,	88,	88,	89,	89,	90,	90],
            stack: 'IP'
        }, {
            name: 'No (A&E)',
            data: [2,	2,	2,	2,	2,	2,	2,	2,	2],
            stack: 'AE'
        } , {
            name: 'Yes, sometimes (A&E)',
            data: [19,	20,	23,	22,	23,	24,	22,	22,	20],
            stack: 'AE'
        },  {
            name: 'Yes, always (A&E)',
            data: [79,	77,	75,	76,	75,	74,	76,	76,	78],
            stack: 'AE'
        }           
                
                
                
                
                ]
    }