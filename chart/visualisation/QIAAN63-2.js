/* Created by NCODowd on 12/10/2016 17:44:36 using v2.7 *//* Created by EFisher on 23/11/2015 14:07:34 using v2.7 */
/* Created by EFisher on 23/11/2015 14:02:05 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has satisfaction with social care services changed by region?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['North East','South West','South East','North West','Eastern','England', 'West Midlands','East Midlands','Yorkshire and the Humber','London']
, labels: {
 rotation: -45
, step: 1
}
},
yAxis: {
title: {text:'Proportion of respondents who said <br> they were satisfied with their care <br> and support (%) ', offset: 99}
, min: 0
, labels: {
format: '{value:.0f}' 
}},
series:[
{
name: '2015-16',
type: 'column',
data: [67.2, 66.3, 65.7, 64.9, 64.5, {y: 64.4, color: 'rgba(0,154,166,0.5)'}, 64.2, 64.1, 63.8, 60.3] 
}
        ,{name: 'Eng err',
        type: 'errorbar',
        data: [[65.8, 68.6], [64.9, 67.7], [64.5, 66.9], [63.7, 66.1], [63.8, 65.2], [64.0, 64.8], [62.8, 65.6], [62.5, 65.7], [62.6, 65.0], [59.0, 61.6]        
        ]}
]
    }