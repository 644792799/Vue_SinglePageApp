<template>
  <div class="sms-card">
    <div class="sms-card__header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="sms-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SmsCard',

    props: ['header', 'bodyStyle']
  };
</script>
<style type="text/css">
  .sms-card{
    background: #fff;
    position: relative;
  }
</style>