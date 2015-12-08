/* Created by EFisher on 23/11/2015 13:36:33 using v2.7 */        {
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What proportion of people feel their service makes them feel safe?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2011-12','2012-13','2013-14','2014-15']
, labels: {
}
},
yAxis: {
title: {text:'Proportion of people who use services <br> who say that those services have <br> made them feel safe and secure', offset: 99}
, max: 90
, min: 40
, labels: {
format: '{value:.0f}' 
}},
series:[
{
name: 'England',
type: 'column',
data: [75.5,78.1,79.1,{
                y: 84.5,
                color: 'rgba(0,154,166,0.5)'
            }]
}
        ,{name: 'Eng err',
        type: 'errorbar',
        data: [[75.1,75.9],[77.7,78.5],[78.7,79.5],[84.2,84.8]        
        ]}
]
}