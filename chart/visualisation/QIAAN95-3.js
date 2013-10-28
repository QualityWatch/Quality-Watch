/* Created by ianb on 14/10/2013 11:45:53 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the number of patients not treated 28 days after a cancelled operation changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['1994/95 Q1','1994/95 Q2','1994/95 Q3','1994/95 Q4','1995/96 Q1','1995/96 Q2','1995/96 Q3','1995/96 Q4','1996/97 Q1','1996/97 Q2','1996/97 Q3','1996/97 Q4','1997/98 Q1','1997/98 Q2','1997/98 Q3','1997/98 Q4','1998/99 Q1','1998/99 Q2','1998/99 Q3','1998/99 Q4','1999/00 Q1','1999/00 Q2','1999/00 Q3','1999/00 Q4','2000/01 Q1','2000/01 Q2','2000/01 Q3','2000/01 Q4','2001/02 Q1','2001/02 Q2','2001/02 Q3','2001/02 Q4','2002/03 Q1','2002/03 Q2','2002/03 Q3','2002/03 Q4','2003/04 Q1','2003/04 Q2','2003/04 Q3','2003/04 Q4','2004/05 Q1','2004/05 Q2','2004/05 Q3','2004/05 Q4','2005/06 Q1','2005/06 Q2','2005/06 Q3','2005/06 Q4','2006/07 Q1','2006/07 Q2','2006/07 Q3','2006/07 Q4','2007/08 Q1','2007/08 Q2','2007/08 Q3','2007/08 Q4','2008/09 Q1','2008/09 Q2','2008/09 Q3','2008/09 Q4','2009/10 Q1','2009/10 Q2','2009/10 Q3','2009/10 Q4','2010/11 Q1','2010/11 Q2','2010/11 Q3','2010/11 Q4','2011/12 Q1','2011/12 Q2','2011/12 Q3','2011/12 Q4','2012/13 Q1','2012/13 Q2','2012/13 Q3','2012/13 Q4','2013/14 Q1']
, labels: {
 rotation: -90
, step: 3
}
},
yAxis: {
title: {text:'Patients not treated within 28 days <br> of cancellation as percentage of <br> cancellations', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Patients not treated',
type: 'line',
data: [13.7,12,11.3,13.9,8.6,9.9,11.5,12.8,10,11.1,12.4,17.3,12.8,12.9,15.2,16.1,17.6,13,16.9,18.3,19.4,18.2,19.3,23.9,21.9,18.4,22.1,21.8,23.4,22.4,24,23.6,16.5,13,12,7.5,10.9,9,8.5,9.6,9.8,9.5,12.5,13.5,12.5,8.9,7.9,7.7,7.3,5.2,5.2,5,4.9,4.9,4.6,6.1,4.6,3.2,4.2,5.5,3.9,2.5,3.3,4.5,3,2.7,3.1,5.5,4.6,3.2,3.8,6.3,5.3,4.4,4.1,5.6,7]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Patients not treated trendline',
data: [[0, 18.2],[76, 3.7]]
}
]
}
