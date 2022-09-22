<template>
  <div class="home-posts">
    <div class="container">
      <div class="row">
        <div class="col-md-4" />
        <div class="col-md-4">
          <div class="posts-area">
            <PostTemplate
              v-for="post in paginationList"
              :key="post.id"
              :post="post"
            />
            <PaginationTemplate
              :listLength="postsList.length"
              :perPage="perPage"
              :currentPage="currentPage"
              @paginate-click="onClickPagination"
            />
          </div>
        </div>
        <div class="col-md-4" />
      </div>
    </div>
  </div>
</template>

<script>
import PostTemplate from "@/components/pages/homePosts/PostTemplate.vue";
import PaginationTemplate from "@/components/common/PaginationTemplate.vue";

export default {
  data() {
    return {
      postsList: [],
      paginationList: [],
      perPage: 2,
      currentPage: 1,
    };
  },
  components: {
    PostTemplate,
    PaginationTemplate,
  },
  created() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      this.$http.get(this.$endpoints.GetPosts).then((response) => {
        this.postsList = response.data;
        // I have created "getListSlicePagination" function , because api hasn't supported (skip and limit).
        this.paginationList = this.getListSlicePagination(
          this.postsList,
          this.currentPage,
          this.perPage
        ); // mixins function
      });
    },
    onClickPagination(pageNum) {
      this.paginationList = this.getListSlicePagination(
        this.postsList,
        pageNum,
        this.perPage
      );
    },
  },
};
</script>
