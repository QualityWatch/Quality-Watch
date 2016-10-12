/* Created by NCODowd on 12/10/2016 17:32:39 using v2.7 *//* Created by EFisher on 23/11/2015 13:47:25 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What do services users say about how satisfied they are with services?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2010-11','2011-12','2012-13','2013-14','2014-15','2015-16']
, labels: {
}
},
yAxis: {
title: {text:'Proportion of respondents who said <br> they were satisfied with their care <br> and support (%) ', offset: 99}
, max: 70
, min: 0
, labels: {
}},
series:[
{
name: 'Series1',
type: 'column',
data: [62.1,62.8,64.1,64.8,{y: 64.7,color: 'rgba(0,154,166,0.5)'},{y: 64.4,color: 'rgba(0,154,166,0.5)'} ]
}
        ,{name: 'Eng err',
        type: 'errorbar',
        data: [[61.6,62.6],[62.3,63.3],[63.6,64.6],[64.4,65.2],[64.3,65.1],[64.0,64.8]        
        ]}
]
}