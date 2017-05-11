<template>
	<div class="my-contribution" id="my-contribution"></div>
</template>
<script type="text/javascript">
	import 'pluginspath/cal-heatmap/cal-heatmap.css';
	import CalHeatMap from 'pluginspath/cal-heatmap/cal-heatmap.min.js';

	export default {
	    data () {
	      return {}
	    },
	    components: {
	      
	    },
	    mounted () {
	      var nowdate = new Date();
	      var startdate = nowdate.addMonths(-7);
	      //hljs.initHighlightingOnLoad();
	      var cal = new CalHeatMap();
			cal.init({
				itemSelector: "#my-contribution",
				domain: "month",
				subDomain: "day",
				range: 8,
				start: startdate,
				legendTitleFormat: {
					lower: "小于 {min} 片",
					inner: "大于 {down} 片 小于 {up} 片",
					upper: "大于 {max} 片"
				},
				subDomainTitleFormat: {
					empty: "{date} 贡献了0片代码",
					filled: "{date} 贡献了{count}片代码"
				},
				domainLabelFormat: "%Y-%m",
				subDomainDateFormat: function(date) {
					var format = d3.time.format("%Y年%m月%d日");
					return format(date); 
				},
				considerMissingDataAsZero: false,
				tooltip: false
			});
	    }
	  }

	  Date.prototype.addMonths = function (m) {
		    var d = new Date(this);
		    var years = Math.floor(m / 12);
		    var months = m - (years * 12);
		    if (years) d.setFullYear(d.getFullYear() + years);
		    if (months) d.setMonth(d.getMonth() + months);
		    return d;
		}
</script>
<style type="text/css">
	.my-contribution svg{
		margin: 0 auto;
	}
</style>