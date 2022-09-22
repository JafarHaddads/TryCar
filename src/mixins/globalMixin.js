export default {
  methods: {
    getListSlicePagination(list, pageNum, perPage) {
      return list.slice((pageNum - 1) * perPage, pageNum * perPage);
    },
  },
};
