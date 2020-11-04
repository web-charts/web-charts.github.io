<template>
  <span>
    <template v-for="option in options" :key="option">
      <Radio
        @click="handleClick(option)"
        style="margin-right: 2rem"
        :value="value === option"
      >
        {{option}}
      </Radio>
    </template>
  </span>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    value: String,
    options: Array
  },
  methods: {
    handleClick (option) {
      this.$emit("input", option);
    }
  }
});
</script>
