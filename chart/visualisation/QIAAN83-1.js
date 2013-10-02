/**
 * Create the data table
 */
Highcharts.drawTable = function () {

    // user options
    var tableTop = 10,
        colWidth = 100,
        tableLeft = 20,
        rowHeight = 30,
        cellPadding = 2.5,
        valueDecimals = 1;

    // internal variables
    var chart = this,
        series = chart.series,
        renderer = chart.renderer,
        cellLeft = tableLeft;


    
    // row headers
    $.each(series, function (serie_index, serie) {
        renderer.text(
            serie.name, cellLeft + cellPadding , tableTop + 25 + (serie_index + 2) * rowHeight - cellPadding).attr({align: 'left'}).css({
            fontWeight: ''
        }).add();
    });

    //column headers
    $.each(chart.xAxis[0].categories, function (category_index, category) {
        cellLeft += colWidth;

        // Apply the cell text
        renderer.text(
        category, cellLeft - cellPadding + colWidth, tableTop + rowHeight - cellPadding).attr({
            align: 'center'
        }).css({
            fontWeight: 'bold'
        }).add();

        $.each(series, function (i) {


            renderer.text(series[i].data[category_index].Note, cellLeft + colWidth - cellPadding, tableTop + 25 + (i + 2) * rowHeight - cellPadding).attr({
                align: 'center'
            }).add();

        });



    });


};


/**
 * Create the chart
 */
window.chart = new Highcharts.Chart({

    chart: {
        renderTo: 'container',
        events: {load: Highcharts.drawTable}
    },

    title: {
        text: ''
    },

    xAxis: {
        categories: ['','','','','','']
    },

    yAxis: {
        title: false,
        labels: {
            enabled: false
        }
    },

    legend: {
        enabled: false
    },


    credits: {
        enabled: false
    },    
    
    series: [
        {
        name: ' ',
        data: [{            y: 0,            Note: ''        }, 
               {            y: 0,            Note: '2011/12'       },
               {            y: 0,            Note: ''    }, 
               {            y: 0,            Note: ''       }, 
               {            y: 0,            Note: '2012/13'       }, 
               {            y: 0,            Note: ''      }],
        visible: false
    },       

        {
        name: ' ',
        data: [{            y: 0,            Note: 'Written<br>Complaints<br>Received'        }, 
               {            y: 0,            Note: 'Written<br>Complaints<br>Upheld'       },
               {            y: 0,            Note: 'Percentage<br>upheld'    }, 
               {            y: 0,            Note: 'Written<br>Complaints<br>Received'       }, 
               {            y: 0,            Note: 'Written<br>Complaints<br>Upheld'       }, 
               {            y: 0,            Note: 'Percentage<br>upheld'      }],
        visible: false
    },
                {name: ' ', data:[	{y:0,Note:''},	{y:0,Note:''},	{y:0,Note:''},	{y:0,Note:''},	{y:0,Note:''},	{y:0,Note:''},],visible:false},
        {
        name: 'All HCHS areas',
        data: [{            y: 0,            Note: '107,259'        }, 
               {            y: 0,            Note: '52,759'       },
               {            y: 0,            Note: '49.2%'    }, 
               {            y: 0,            Note: '109,316'       }, 
               {            y: 0,            Note: '54,918'       }, 
               {            y: 0,            Note: '50.2%'      }],
        visible: false
    },
{name: 'Ambulance services', data:[	{y:0,Note:'5173'},	{y:0,Note:'827'},	{y:0,Note:'16%'},	{y:0,Note:'5332'},	{y:0,Note:'2110'},	{y:0,Note:'39.6%'},],visible:false},
{name: 'Community hospital services', data:[	{y:0,Note:'1328'},	{y:0,Note:'648'},	{y:0,Note:'48.8%'},	{y:0,Note:'1315'},	{y:0,Note:'689'},	{y:0,Note:'52.4%'},],visible:false},
{name: 'Elderly (geriatric) services', data:[	{y:0,Note:'1051'},	{y:0,Note:'602'},	{y:0,Note:'57.3%'},	{y:0,Note:'880'},	{y:0,Note:'472'},	{y:0,Note:'53.6%'},],visible:false},
{name: 'Hospital acute services:   A&E', data:[	{y:0,Note:'9362'},	{y:0,Note:'5074'},	{y:0,Note:'54.2%'},	{y:0,Note:'9680'},	{y:0,Note:'5050'},	{y:0,Note:'52.2%'},],visible:false},
{name: 'Hospital acute services:   Inpatient', data:[	{y:0,Note:'33873'},	{y:0,Note:'18551'},	{y:0,Note:'54.8%'},	{y:0,Note:'34872'},	{y:0,Note:'18808'},	{y:0,Note:'53.9%'},],visible:false},
{name: 'Hospital acute services:   Outpatient', data:[	{y:0,Note:'29559'},	{y:0,Note:'16891'},	{y:0,Note:'57.1%'},	{y:0,Note:'30019'},	{y:0,Note:'16676'},	{y:0,Note:'55.6%'},],visible:false},
{name: 'Maternity services', data:[	{y:0,Note:'3240'},	{y:0,Note:'1900'},	{y:0,Note:'58.6%'},	{y:0,Note:'3427'},	{y:0,Note:'1942'},	{y:0,Note:'56.7%'},],visible:false},
{name: 'Mental health services', data:[	{y:0,Note:'10439'},	{y:0,Note:'3399'},	{y:0,Note:'32.6%'},	{y:0,Note:'11749'},	{y:0,Note:'4167'},	{y:0,Note:'35.5%'},],visible:false},
{name: 'NHS Direct', data:[	{y:0,Note:'163'},	{y:0,Note:'110'},	{y:0,Note:'67.5%'},	{y:0,Note:'193'},	{y:0,Note:'98'},	{y:0,Note:'50.8%'},],visible:false},
{name: 'Other community health services', data:[	{y:0,Note:'6407'},	{y:0,Note:'2997'},	{y:0,Note:'46.8%'},	{y:0,Note:'6840'},	{y:0,Note:'3408'},	{y:0,Note:'49.8%'},],visible:false},
{name: 'PCT commissioning', data:[	{y:0,Note:'3114'},	{y:0,Note:'818'},	{y:0,Note:'26.3%'},	{y:0,Note:'2507'},	{y:0,Note:'673'},	{y:0,Note:'26.8%'},],visible:false},
{name: 'Walk in centres', data:[	{y:0,Note:'472'},	{y:0,Note:'197'},	{y:0,Note:'41.7%'},	{y:0,Note:'457'},	{y:0,Note:'212'},	{y:0,Note:'46.4%'},],visible:false},
{name: 'Other', data:[	{y:0,Note:'3078'},	{y:0,Note:'745'},	{y:0,Note:'24.2%'},	{y:0,Note:'2045'},	{y:0,Note:'613'},	{y:0,Note:'30%'},],visible:false},
{name: ' ', data:[	{y:0,Note:''},	{y:0,Note:''},	{y:0,Note:''},	{y:0,Note:''},	{y:0,Note:''},	{y:0,Note:''},],visible:false},
{name: 'All FHS areas', data:[	{y:0,Note:''},	{y:0,Note:''},	{y:0,Note:''},	{y:0,Note:'52703'},	{y:0,Note:'18567'},	{y:0,Note:'35.2%'},],visible:false},
{name: 'Medical', data:[	{y:0,Note:''},	{y:0,Note:''},	{y:0,Note:''},	{y:0,Note:'27711'},	{y:0,Note:'9982'},	{y:0,Note:'36%'},],visible:false},
{name: 'Dental', data:[	{y:0,Note:''},	{y:0,Note:''},	{y:0,Note:''},	{y:0,Note:'6729'},	{y:0,Note:'2312'},	{y:0,Note:'34.4%'},],visible:false},
{name: 'General Practice administration', data:[	{y:0,Note:''},	{y:0,Note:''},	{y:0,Note:''},	{y:0,Note:'13933'},	{y:0,Note:'5059'},	{y:0,Note:'36.3%'},],visible:false},
{name: 'Other', data:[	{y:0,Note:''},	{y:0,Note:''},	{y:0,Note:''},	{y:0,Note:'4330'},	{y:0,Note:'1214'},	{y:0,Note:'28%'},],visible:false}

            
            
            ]
});