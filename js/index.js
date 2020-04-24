$(function(){
    option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
        }]
    };
    //初始化echarts实例
    var myChart = echarts.init(document.getElementById('xiaozhupeiqi'));

    //使用制定的配置项和数据显示图表
    myChart.setOption(option);
     //浏览器大小改变时重置大小
    $(window).resize(function(){
        myChart.resize();
    })
})