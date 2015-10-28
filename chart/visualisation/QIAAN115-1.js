/* Created by EFisher on 26/10/2015 10:07:51 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does the overall UK infant mortality rate compare to individual UK countries?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014]
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:'Deaths under 1 year per 1,000 live <br> births', offset: 87}
, labels: {
format: '{value:.2f}' 
}},
series:[
{
name: 'United Kingdom',
type: 'line',
data: [22.5,22.1,22.4,21.8,20.6,19.6,19.6,18.8,18.7,18.6,18.5,17.9,17.5,17.2,16.8,16,14.5,14.1,13.3,12.9,12.1,11.2,11,10.2,9.6,9.4,9.5,9.1,9,8.4,7.9,7.4,6.6,6.4,6.2,6.2,6.1,5.9,5.7,5.8,5.6,5.5,5.3,5.3,5.1,5.1,5,4.8,4.7,4.6,4.3,4.3,4.1,3.9,3.9]
,index: 1
},
{
name: 'England',
type: 'line',
data: [21.6,21.3,21.5,20.9,19.7,18.9,18.9,18.3,18.2,18,18.2,17.5,17.2,16.8,16.3,15.7,14.2,13.7,13.1,12.8,12,10.9,10.8,10,9.4,9.2,9.5,9.1,9.1,8.4,7.9,7.3,6.5,6.3,6.1,6.1,6.1,5.9,5.6,5.7,5.6,5.4,5.3,5.3,5.1,5,5,4.8,4.7,4.6,4.3,4.3,4.1,3.9,3.9]
,index: 2
},
{
name: 'Wales',
type: 'line',
data: [25.3,24,25.3,24.6,24.3,20.3,20.3,18.6,19.6,19.2,18.7,18.4,16,16.4,17,14.5,13.7,13.5,13.2,12.4,11.4,12.6,10.6,10.7,8.8,9.8,9.5,9.5,7.6,8,6.9,6.6,6,5.6,5.9,6.1,5.6,5.9,5.7,6.4,5.2,5.5,4.7,4.1,5.1,4.3,4.1,5.3,4.1,4.8,4,3.9,4.1,3.6,3.7]
,index: 3
},
{
name: 'Scotland',
type: 'line',
data: [26.4,25.8,26.5,25.6,24,23.1,23.2,21,20.8,21.1,19.6,19.9,18.8,19,18.9,17.2,14.8,16.1,12.9,12.8,12.1,11.3,11.4,9.9,10.3,9.4,8.8,8.5,8.2,8.7,7.7,7.1,6.8,6.5,6.2,6.2,6.2,5.3,5.6,5,5.7,5.5,5.3,5.1,4.9,5.2,4.5,4.7,4.2,4,3.7,4.1,3.7,3.3,3.6]
,index: 4
},
{
name: 'Northern Ireland',
type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,22.7,20.5,20.9,20.9,20.4,18.3,17.2,15.9,14.8,13.4,13.2,13.7,12.1,10.5,9.6,10.2,8.7,8.9,6.9,7.5,7.4,6,7.1,6.1,7.1,5.8,5.6,5.6,6.4,5,6,4.6,5.2,5.3,6.1,5.1,4.9,4.7,5.1,5.7,4.3,3.5,4.6,4.8]
,index: 5
}
]
}
