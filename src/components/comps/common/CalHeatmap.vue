<template>
	<div class="calheatmap" id="calheatmap">
		
	</div>
</template>
<script type="text/javascript">
	export default {
	    data () {
	      return {
	      	screenWidth: '',
	      	timer: false,
	      	myChart: null
	      }
	    },
	    components: {
	      
	    },
	    mounted () {
	      	this.drawHeatMap();
	      	const that = this
            window.onresize = () => {
                return (() => {
                    window.screenWidth = document.body.clientWidth;
                    that.screenWidth = window.screenWidth;
                })()
            }
	    },
	    watch: {
	    	screenWidth (val) {
                if (!this.timer) {
                    this.screenWidth = val;
                    this.timer = true;
                    let that = this;
                    setTimeout(function () {
                        that.myChart.resize();
                        that.timer = false;
                    }, 400)
                }
            }
	    },
	    methods:{
	    	drawHeatMap(){
	    		//console.log(this.$echarts);
	    		this.myChart = this.$echarts.init(document.getElementById('calheatmap'));
	    		var data = this.getVirtulData(2016);
	    		var option = {
				    backgroundColor: '#fff',

				    
				    tooltip : {
				        trigger: 'item'
				    },
				    legend: {
				        top: '5',
				        left: 'center',
				        data:['码片数', 'Top 12'],
				        textStyle: {
				            color: '#4E5359'
				        }
				    },
				    calendar: [{
				        top: 50,
				        left: 'center',
				        range: ['2016-01-01', '2016-06-30'],
				        cellSize: ['auto', 20],
				        splitLine: {
				            show: true,
				            lineStyle: {
				                color: '#000',
				                width: 4,
				                type: 'solid'
				            }
				        },
				        yearLabel: {
				            formatter: '{start}  1st',
				            textStyle: {
				                color: '#fff'
				            }
				        },
				        itemStyle: {
				            normal: {
				                color: '#323c48',
				                borderWidth: 1,
				                borderColor: '#111'
				            }
				        }
				    }],
				    series : [
				        {
				            name: '码片数',
				            type: 'scatter',
				            coordinateSystem: 'calendar',
				            data: data,
				            symbolSize: function (val) {
				                return val[1] / 500;
				            },
				            itemStyle: {
				                normal: {
				                    color: '#ea7069'
				                }
				            }
				        },
				        {
				            name: 'Top 12',
				            type: 'effectScatter',
				            coordinateSystem: 'calendar',
				            data: data.sort(function (a, b) {
				                return b[1] - a[1];
				            }).slice(0, 12),
				            symbolSize: function (val) {
				                return val[1] / 500;
				            },
				            showEffectOn: 'render',
				            rippleEffect: {
				                brushType: 'stroke'
				            },
				            hoverAnimation: true,
				            itemStyle: {
				                normal: {
				                    color: '#ff4949',
				                    shadowBlur: 10,
				                    shadowColor: '#333'
				                }
				            },
				            zlevel: 1
				        }
				    ]
				};
				//console.log(this.getVirtulData(2017));
	    		this.myChart.setOption(option, true);
	    	},
	    	getVirtulData(year) {
			    year = year || '2017';
			    var date = +this.$echarts.number.parseDate(year + '-01-01');
			    var end = +this.$echarts.number.parseDate((+year + 1) + '-01-01');
			    var dayTime = 3600 * 24 * 1000;
			    var data = [];
			    for (var time = date; time < end; time += dayTime) {
			        data.push([
			            this.$echarts.format.formatTime('yyyy-MM-dd', time),
			            Math.floor(Math.random() * 10000)
			        ]);
			    }
			    return data;
			}
	    },
	    props: ['']
	  }
</script>
<style type="text/css">
	.calheatmap{
		width: 100%;
		height: 200px;
	}
</style>