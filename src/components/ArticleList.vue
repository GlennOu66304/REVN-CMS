<template>
  <Card>
    <p slot="title">{{ title }}</p>
    <p v-for="item in list" :key="item.id" class="item">
      <router-link :to="'/article/' + item.id">
        {{ item.title }}
      </router-link>
    </p>
  </Card>
</template>

<script>
export default {
  name: "ArticleList",
  data() {
    return {};
  },
  created() {},
  props: {
    title: String,
    list: Array,
  },
};
</script>

<style scoped>
.item {
  border-bottom: 1px solid #eee;
  padding: 10px;
}
</style>
