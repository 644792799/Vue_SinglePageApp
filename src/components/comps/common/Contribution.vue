<template>
	<div class="contribution">
		<div class="contribution-tool">
			<i class="icon-braille">&nbsp;</i>
			<button id="pre-selector"><i class="icon-angle-left"></i></button>
			<button id="next-selector"><i class="icon-angle-right"></i></button>
		</div>
		<div id="contribution"></div>
	</div>
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
	      var startdate = nowdate.addMonths(-9);
	      //hljs.initHighlightingOnLoad();
	      var cal = new CalHeatMap();
			cal.init({
				itemSelector: "#contribution",
				domain: "month",
				subDomain: "day",
				range: 12,
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
				tooltip: false,
				previousSelector: "#pre-selector",
				nextSelector: "#next-selector"
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
	.contribution{
		overflow: hidden;
	}
	.contribution svg{
		margin: 0 auto;
	}
	.contribution-tool{
		display: flex;
		align-items:center;
		padding: 5px;
		margin-bottom: 5px;
		background: var(--bg-color, #fbfcfc);
		border-bottom: 1px solid var(--border-color, #d4d9df);
	}
	.contribution-tool>i{
		color: #669d45;
	}
	.contribution-tool button{
		margin-right: 2px;
		border: 1px solid #bfcbd9;
		background: #fff;
		white-space: nowrap;
    	cursor: pointer;
    	border-radius: 4px;
    	font-size: 20px;
	}
</style>