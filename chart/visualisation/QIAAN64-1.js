/* Created by NCODowd on 12/10/2016 17:49:08 using v2.7 *//* Created by EFisher on 23/11/2015 14:31:29 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Has the proportion of social care users who found it easy to access information changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2010-11','2011-12','2012-13','2013-14','2014-15','2015-16']
, labels: {
}
},
yAxis: {
title: {text:''}
, max: 90
, labels: {
}},
series:[
{
name: 'Proportion of people who use services who find it easy to find info about services',
type: 'column',
data: [74.2,73.8,74.1,74.5,74.5,73.5]
},

    {name: 'Eng err',
     type: 'errorbar',
     data: [[73.5,74.9],[73.3,74.3],[73.6,74.6],[74,75],[74,75],[73,74]
]},
{
name: 'Proportion of carers who find it easy to find information about support',
type: 'column',
data: [null,null,68.9,null,65.5, null]
},
{name: 'Eng error',
             type: 'errorbar',
             data: [ null,null,[68.3,69.5],null,[64.9,66.1],null
]
            }
        ]
    }