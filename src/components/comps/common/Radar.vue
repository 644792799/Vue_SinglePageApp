<template>
	<div class="radar" id="radar">
		
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
	      	this.drawRadar();
	      	// const that = this
        //     window.onresize = () => {
        //         return (() => {
        //             window.screenWidth = document.body.clientWidth;
        //             that.screenWidth = window.screenWidth;
        //         })()
        //     }
	    },
	    watch: {
	    	// screenWidth (val) {
      //           if (!this.timer) {
      //               this.screenWidth = val;
      //               this.timer = true;
      //               let that = this;
      //               setTimeout(function () {
      //                   that.myChart.resize();
      //                   that.timer = false;
      //               }, 400)
      //           }
      //       }
	    },
	    methods:{
	    	drawRadar(){
	    		//console.log(this.$echarts);
	    		this.myChart = this.$echarts.init(document.getElementById('radar'));
	    		var data = this.getVirtulData(2016);
	    		var option = {
				    tooltip: {},
				    legend: {
				        data: ['码片数', '熟练度']
				    },
				    radar: {
				        // shape: 'circle',
				        name: {
				            textStyle: {
				                color: '#fff',
				                backgroundColor: '#999',
				                borderRadius: 3,
				                padding: [3, 5]
				           }
				        },
				        indicator: [
				           { name: 'HTML', max: 6500},
				           { name: 'BEM', max: 16000},
				           { name: 'CSS3', max: 30000},
				           { name: 'SASS', max: 38000},
				           { name: 'MQ', max: 52000},
				           { name: 'SVG', max: 25000}
				        ]
				    },
				    series: [{
				        name: '',
				        type: 'radar',
				        // areaStyle: {normal: {}},
				        data : [
				            {
				                value : [4300, 10000, 28000, 35000, 50000, 19000],
				                name : '码片数'
				            },
				             {
				                value : [5000, 14000, 28000, 31000, 42000, 21000],
				                name : '熟练度'
				            }
				        ]
				    }]
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
	.radar{
		width: 100%;
		height: 330px;
	}
</style>