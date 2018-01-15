<template>
	<div class="barchart" id="barchart">
		
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
	    	this.myChart = this.$echarts.init(document.getElementById('barchart'));
	      	this.drawBar();
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
	    	drawBar(){
				var option = {
				    color: ['#ea7069'],
				    title:{
				    	show:false
				    },
				    tooltip : {
				        trigger: 'axis',
				        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				        }
				    },
				    grid: {
				        left: '3%',
				        right: '4%',
				        bottom: '3%',
				        top: '4%',
				        containLabel: true
				    },
				    xAxis : [
				        {
				            type : 'category',
				            data : ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
				            axisTick: {
				                alignWithLabel: true
				            }
				        }
				    ],
				    yAxis : [
				        {
				            type : 'value'
				        }
				    ],
				    series : [
				        {
				            name:'访问',
				            type:'bar',
				            barWidth: '40%',
				            data:[10, 52, 200, 334, 390, 330, 220],
				            itemStyle: {
				            	emphasis:{
				            		barBorderRadius: 5
				            	},
				            	normal:{
				            		barBorderRadius: [5,5,0,0]
				            	}
				            }
				        }
				    ]
				};
				//console.log(this.getVirtulData(2017));
	    		this.myChart.setOption(option);
	    	}
	    },
	    props: ['']
	  }
</script>
<style type="text/css">
	.barchart{
		width: 100%;
		height: 100px;
	}
</style>