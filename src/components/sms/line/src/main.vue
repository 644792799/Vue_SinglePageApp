<template>
  <div class="sms-line sms-line-from-left" v-if="gradfrom=='left'">
  </div>
  <div class="sms-line sms-line-from-right" v-else-if="gradfrom=='right'">
  </div>
  <div class="sms-line sms-line-from-center" v-else-if="gradfrom=='center'">
  </div>
</template>

<script>
  export default {
    name: 'SmsLine',

    props: ['gradfrom']
  };
</script>
<style type="text/css">
  .sms-line{
    background: #fff;
    position: relative;
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .sms-line-from-left{
  	background: linear-gradient(to left,white,#d4d9df);
  }

  .sms-line-from-center{
  	background: linear-gradient(to left,white,#d4d9df,white);
  }

  .sms-line-from-right{
  	background: linear-gradient(to right,white,#d4d9df);
  }
</style>