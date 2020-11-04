<template>
  <span>
    <Radio
      :value="value"
      @click="$emit('input', true)"
    >
      {{options[0]}}
    </Radio>
    <span style="margin: 0 0.5rem 0 0.5rem">/</span>
    <Radio
      :value="!value"
      @click="$emit('input', false)"
    >
      {{options[1]}}
    </Radio>
  </span>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "RadioPair",
  props: {
    value: Boolean,
    options: Array
  }
});
</script>
