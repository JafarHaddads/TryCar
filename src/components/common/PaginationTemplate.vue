<template>
  <vue-awesome-paginate
    :total-items="listLength"
    :items-per-page="perPage"
    :current-page="currentPage"
    :on-click="onClickHandler"
  />
</template>
<script>
export default {
  props: ["listLength", "perPage", "currentPage"],
  methods: {
    onClickHandler(pageNum) {
      this.$emit("paginate-click", pageNum);
    },
  },
};
</script>
<style lang="scss">
.pagination-container {
  display: flex;
  list-style-type: none;
  justify-content: space-around;
  padding: 0;

  .paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
  }
  .active-page,
  .paginate-buttons:hover {
    background-color: #553192;
    border: 1px solid #553192;
    color: white;
  }
}
.active-page:hover {
  background-color: #553192;
}
</style>
