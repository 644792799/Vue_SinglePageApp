<template>
  <div class="sms-card">
    <div class="sms-card__header" v-if="$slots.header || header">
      <div style="display:flex;flex-direction:row;">
        <div class="ico" v-if="ico">
          <i :class="ico"></i> 
        </div>
        <slot name="header">{{ header }}</slot>
        <div class="legend" v-if="legend">{{legend}}</div>
      </div>
      <div>
        <slot name="operation"></slot>
      </div>
      <SmsLine gradfrom="left"></SmsLine>
    </div>
    <div class="sms-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SmsCard',

    props: ['header', 'bodyStyle', 'ico', 'legend']
  };
</script>
<style type="text/css">
  .sms-card{
    background: #fff;
    position: relative;
    box-shadow: var(--left-box-shadow, #d5d9de 0.5px 0.5px 4px 0px);
    margin-bottom: 15px;
    *box-shadow: #d5d9de -0.5px 0.5px 2px 0px;
  }
  .sms-card .sms-card__header{
    font-weight: 600;
    font-size: 14px;
    padding: 15px 5px;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--title-color, #4e5359);

    justify-content: space-between;
  }
  .sms-card .sms-card__header .legend{
    color: #fff;
    background-color: #41484d;
    opacity: 0.5;
    padding: 0px 5px;
    font-size: 12px;
    font-weight: 600;
    border-radius: 10px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 3px;
  }
  .sms-card .sms-card__header .ico{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 22px;
    height: 20px;
    overflow: hidden;
    margin-right: 10px;
  }
  .sms-card .sms-card__header .ico i{
    font-size: 20px;
  }
  .sms-card__body{
    padding: 10px 5px;
  }
</style>