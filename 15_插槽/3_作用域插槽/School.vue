<template>
  <div>
    <slot :title="title" :title2="title2">默认展示信息</slot>
  </div>
</template>

<script>
export default {
  name: "School-",
  data() {
    return {
      title: ["a", "b", "c"],
      title2: ["e", "f", "g"],
    };
  },
};
</script>