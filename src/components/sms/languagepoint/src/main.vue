<template>
  <div class="sms-point">
    <span :class="language == undefined?'default-language-color': 'default-language-color ' + language" >
      <span class=""></span>
    </span>
    <span class="languagelabel" :style="style==undefined?'':style">{{label}}</span>
  </div>
</template>

<script>
  export default {
    name: 'SmsPoint',
    props: ['language', 'label', 'style']
  };
</script>
<style type="text/css">
  .sms-point{
    color: rgba(65, 72, 77, 0.72);
    *text-align: left;
  }
  .sms-point .languagelabel{
    font-weight: 600;
    font-size: 12px;
  }
  .sms-point .default-language-color{
    position: relative;
      top: 1px;
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #e4e4e4;
      line-height: 12px;
  }
  .sms-point .default-language-color span{
    background: #ccc;
    border-radius: 50%;
    width: 6px;
    height: 6px;
    margin: 3px;
    display: inline-block;
  }
  .sms-point .java{
    background: rgba(233, 30, 142, 0.32);
  }
  .sms-point .java span{
    background: #f46b36;
  }
  .sms-point .php{
    background: rgba(29, 144, 230, 0.32);
  }
  .sms-point .php span{
    background: #1d90e6;
  }
  .sms-point .javascript{
    background: rgba(239, 28, 222, 0.32);
  }
  .sms-point .javascript span{
    background: #ef1cde;
  }
  .sms-point .css{
    background: rgba(247, 186, 42, 0.32);
  }
  .sms-point .css span{
    background: rgb(247, 186, 42);
  }
</style>