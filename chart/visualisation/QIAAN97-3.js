{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How did NHS staff sickness rates vary by staff type?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Nursing, Midwifery and Health Visiting Learners','Medical and Dental Staff','Healthcare Scientists','Scientific, Therapeutic and Technical Staff','Administration and Estates 

','England','Nursing, Midwifery and Health Visiting Staff','Healthcare Assistants and Other Support Staff','Ambulance Staff']
, labels: {
}
},
yAxis: {
title: {text:'Average daily sickness absence rate <br> (January 2010 - September 2013)', offset: 87}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Sickness absence rate',
type: 'bar',
    data: [1.1,1.2,3.3,3.3,3.5,{y: 4.2, color: '#E10E49'},5,6.2,6.2]
,index: 1
}
]
}
