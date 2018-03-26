<template>
	<div class="articles-list">
		<!-- <div style="position:relative;padding:10px;">
			<i class="icon-terminal"></i>
			<SmsLine gradfrom="center"></SmsLine>
		</div> -->
		<div v-if="isfullmode == true">
			<articleSimple v-for="art in articlesdata" :art="art" fullmode></articleSimple>
		</div>
		<div v-else>
			<articleSimple v-for="art in articlesdata" :art="art"></articleSimple>
		</div>
		<div style="text-align:center;margin-top:20px;">
	    	<div class="block">
			    <el-pagination
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page="currentPage3"
			      :page-size="100"
			      layout="prev, pager, next, jumper"
			      :total="1000">
			    </el-pagination>
			</div>
	    </div>
	</div>
</template>

<script type="text/javascript">
	import ArticleSimple from './ArticleSimple.vue'
	export default{
		data(){
			return{
				author: "cjay",
				currentPage3: 5
			}
		}, 
		components: {
			"articleSimple": ArticleSimple
		},
		props: ['articlesdata', 'isfullmode'],
		methods: {
	      handleSizeChange(val) {
	        console.log(`每页 ${val} 条`);
	      },
	      handleCurrentChange(val) {
	        this.currentPage = val;
	        console.log(`当前页: ${val}`);
	      }
	    }
	}
</script>

<style scoped>
	.articles-list{
		*background: #F9FAFB;
	    *border: 1px solid #EFEAE8;
	    padding: 10px 5px;
	    *border: 1px solid #eaeefb;
	    *border-radius: 4px;
	    transition: .2s;
	    *background: #fff;
	    *box-shadow: 0 0 1px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
	    min-height: 400px;
	    *box-shadow: #d5d9de 0px 0px 2px 0px;
	}
</style>