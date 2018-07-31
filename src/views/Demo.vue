<template>
  <div class="demo">
    <h1>This is a demo page</h1>
    <div>Input Ctapult Address</div><input :value="address">
    <button>Get transactions</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      address: 'hello',
    };
  },
});
</script>
