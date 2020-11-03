function active (el: any, binding: any) {
  if (binding.value) {
    el.classList.add("is-active");
  } else {
    el.classList.remove("is-active");
  }
}

function klass (el: any, binding: any) {
  if (binding.arg) {
    if (binding.value) {
      el.classList.add(binding.arg);
    } else {
      el.classList.remove(binding.arg);
    }
  } else if (binding.value) {
    el.classList.add(binding.value);
  } else {
    el.classList.remove(binding.value);
  }
}

function style (el: any, binding: any) {
  // eslint-disable-next-line no-param-reassign
  el.style[binding.arg] = binding.value;
}

export default {
  install (Vue: any) {
    Vue.directive("class", klass);
    Vue.directive("active", active);
    Vue.directive("style", style);
  }
};
