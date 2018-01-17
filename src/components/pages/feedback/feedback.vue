<template>
	<div class="feedback">
		<div class="">
			<div class="filtercontainer">
				<span style="line-height:56px;font-size:18px;color:#586069;"><i class="icon-terminal" style="font-weight:600;"></i>&nbsp;意见&建议</span>
				<SmsLine gradfrom="left"></SmsLine>
			</div>
			<div class="qacontainer">
				<ul>
					<li>
						<div>
							<span>
								<a href="">
									<i class="icon-bug"></i>
									8 Bug
								</a>
							</span>
							<span>
								<a href="">
									<i class="icon-issue-opened"></i>
									8 意见
								</a>
							</span>
						</div>
					</li>
					<li>
						<div style="width:50px;">111</div>
						<div style="flex:1">
							<div>222</div>
							<div>333</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	
</script>
<style type="text/css">
	.feedback{
		*font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
	}
	.feedback>div{
		padding: 0 50px;
		margin-top: 15px;
    	margin-bottom: 15px;
	}

	.feedback .filtercontainer{
		position: relative;
		height: 56px;
	}

	.feedback .qacontainer{
		box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
	}

	.feedback .qacontainer ul{
		padding: 0;
    	list-style: none;
    	font-size: 14px;
	}

	.feedback .qacontainer ul li{
		height: 55px;
	}

	.feedback .qacontainer ul li:first-child{
		background: var(--banner-color, #eef1f6);
		height: 49px;
		display: flex;
		align-items: center;
		padding-left: 15px;
	}

	.feedback .qacontainer ul li+li{
		border-top: 1px solid var(--border-color, #e4e8f1);
		display: flex;
		flex-direction: row;
	}

	.feedback .qacontainer ul li:first-child a{
		color: var(--sub-title-color, #4E5359);
	}

	.feedback .qacontainer ul li:first-child a:hover {
	    color: var(--title-color, #20a0ff)!important;
	}

	.feedback .qacontainer ul li span+span{
		margin-left: 10px;
	}
</style>