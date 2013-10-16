/* Created by ianb on 14/10/2013 11:43:47 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of older people living at home after discharge changed by provider?'},
credits: {enabled: true, text: '&copy; Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:'Proportion of older people (over 65) who are still at home 91 days after discharge <br> from hospital into reablement/rehabilitation services, 2011/2012', offset: 27}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}
},
yAxis: {
title: {text:'Proportion of older people (over <br> 65) who are still at home 91 days <br> after discharge from hospital into <br> reablement/rehabilitation services, <br> 2012/2013', offset: 123}
, max: 100
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'individual providers',
type: 'scatter',
data: [[100,98.1],[83.3,97.6],[88.6,96.7],[100,95.2],[87.9,95],[93,93.7],[85.4,93.4],[89.7,92.9],[92.3,92.4],[88.9,92.2],[82.4,92.2],[85.2,92],[93.2,92],[87.5,91.9],[87.5,91.5],[85.7,91.5],[89.6,91.1],[87.1,91],[90.9,90.8],[92.4,90.8],[74.1,90.4],[83.1,90.4],[94.1,89.8],[90.9,89.7],[84.6,89.7],[88.6,89.6],[86.4,89.6],[80.3,89.3],[92.9,89.2],[89.6,89.2],[100,88.9],[90.9,88.8],[87.3,88.7],[100,88.6],[82.4,88.6],[85.7,88.5],[78.6,88.5],[84.6,88.4],[84.4,88.4],[84.2,88.2],[86,87.7],[88.4,87.7],[87,87.4],[94.7,87.3],[87,87.1],[85.7,86.7],[87,86.5],[93.8,86.2],[92.3,86.2],[90.1,86.2],[87.5,86.1],[70.6,86.1],[80,85.9],[89.3,85.9],[86.2,85.9],[93.1,85.7],[86.4,85.6],[84.2,85.5],[86,85.4],[75,85.1],[90.9,85],[88.9,84.9],[86.7,84.7],[94.4,84.7],[92.9,84.6],[86,84.5],[84.2,84.5],[88,84.5],[76.9,84.4],[88,84.3],[86.8,84.1],[77.8,84.1],[85.7,84],[83.7,83.9],[85.3,83.6],[85.7,83.6],[82.3,83.6],[85.7,83.3],[88.9,83.2],[77.5,83.1],[62.5,83],[85.7,82.7],[81.5,82.5],[81.3,82.2],[82.4,82.1],[83.6,82],[76.7,82],[78.1,82],[82.8,82],[87.5,81.8],[86.7,81.6],[69,81.5],[82.6,81.3],[82.9,81.3],[77.2,81.1],[82.4,80.9],[80.9,80.6],[79.4,80.2],[86.7,80],[81.7,79.9],[85,79.9],[83.8,79.8],[78.9,79.6],[78.4,79.3],[82.4,79.1],[81.4,79],[80.5,78.9],[76.9,78.9],[82.4,78.8],[77.7,78.6],[88,78.6],[81,78.6],[76.7,78.2],[83.3,77.6],[74.5,77.3],[90.9,77.2],[86.1,76.8],[70.4,76.3],[85.7,76.3],[70.3,76.1],[81.2,76],[69.2,75.9],[78.3,75.3],[82.6,74.5],[85.7,74.3],[79.1,74.1],[67.7,74],[58,73.9],[81.5,72.7],[74.1,72.4],[74.6,72],[85.4,71.7],[85.4,71.6],[70.8,71.6],[70.5,70.7],[72.7,70.5],[72.7,70.2],[78.9,70],[100,69.8],[69,69.6],[59.3,69.3],[72.7,67.7],[83.3,66.7],[92.3,64.6],[69.5,63.4],[65.9,62.9],[72.7,53.7]]
,index: 1
},
{
name: 'equal performance',
type: 'scatter',
data: [[0.7,0.7],[1.4,1.4],[2,2],[2.7,2.7],[3.4,3.4],[4.1,4.1],[4.8,4.8],[5.4,5.4],[6.1,6.1],[6.8,6.8],[7.5,7.5],[8.2,8.2],[8.8,8.8],[9.5,9.5],[10.2,10.2],[10.9,10.9],[11.6,11.6],[12.2,12.2],[12.9,12.9],[13.6,13.6],[14.3,14.3],[15,15],[15.6,15.6],[16.3,16.3],[17,17],[17.7,17.7],[18.4,18.4],[19,19],[19.7,19.7],[20.4,20.4],[21.1,21.1],[21.8,21.8],[22.4,22.4],[23.1,23.1],[23.8,23.8],[24.5,24.5],[25.2,25.2],[25.9,25.9],[26.5,26.5],[27.2,27.2],[27.9,27.9],[28.6,28.6],[29.3,29.3],[29.9,29.9],[30.6,30.6],[31.3,31.3],[32,32],[32.7,32.7],[33.3,33.3],[34,34],[34.7,34.7],[35.4,35.4],[36.1,36.1],[36.7,36.7],[37.4,37.4],[38.1,38.1],[38.8,38.8],[39.5,39.5],[40.1,40.1],[40.8,40.8],[41.5,41.5],[42.2,42.2],[42.9,42.9],[43.5,43.5],[44.2,44.2],[44.9,44.9],[45.6,45.6],[46.3,46.3],[46.9,46.9],[47.6,47.6],[48.3,48.3],[49,49],[49.7,49.7],[50.3,50.3],[51,51],[51.7,51.7],[52.4,52.4],[53.1,53.1],[53.7,53.7],[54.4,54.4],[55.1,55.1],[55.8,55.8],[56.5,56.5],[57.1,57.1],[57.8,57.8],[58.5,58.5],[59.2,59.2],[59.9,59.9],[60.5,60.5],[61.2,61.2],[61.9,61.9],[62.6,62.6],[63.3,63.3],[63.9,63.9],[64.6,64.6],[65.3,65.3],[66,66],[66.7,66.7],[67.3,67.3],[68,68],[68.7,68.7],[69.4,69.4],[70.1,70.1],[70.7,70.7],[71.4,71.4],[72.1,72.1],[72.8,72.8],[73.5,73.5],[74.1,74.1],[74.8,74.8],[75.5,75.5],[76.2,76.2],[76.9,76.9],[77.6,77.6],[78.2,78.2],[78.9,78.9],[79.6,79.6],[80.3,80.3],[81,81],[81.6,81.6],[82.3,82.3],[83,83],[83.7,83.7],[84.4,84.4],[85,85],[85.7,85.7],[86.4,86.4],[87.1,87.1],[87.8,87.8],[88.4,88.4],[89.1,89.1],[89.8,89.8],[90.5,90.5],[91.2,91.2],[91.8,91.8],[92.5,92.5],[93.2,93.2],[93.9,93.9],[94.6,94.6],[95.2,95.2],[95.9,95.9],[96.6,96.6],[97.3,97.3],[98,98],[98.6,98.6],[99.3,99.3],[100,100],[0,0],[0,0]]
,index: 2
}
]
}
