<template>
  <div class="text-xl paginations">
    <g-link
      v-if="showPreviousPage"
      :to="previousPage"
    >&larr; Prev</g-link>
    <div class="text-base text-center pages">Page {{ currentPage }} of {{ totalPages }}</div>
    <g-link
      v-if="showNextPage"
      :to="nextPage"
      class="next"
    >Next &rarr;</g-link>
  </div>
</template>

<script>
export default {
  props: ["base", "totalPages", "currentPage"],
  computed: {
    showPreviousPage() {
      return this.currentPage !== 1;
    },
    previousPage() {
      return [0, 1].includes(this.currentPage - 1)
        ? this.base
        : `${this.base}/${this.currentPage - 1}`;
    },
    showNextPage() {
      return this.currentPage !== this.totalPages;
    },
    nextPage(currentPage, totalPages) {
      return this.totalPages > this.currentPage
        ? `${this.base}/${this.currentPage + 1}`
        : `${this.base}/${this.currentPage}`;
    }
  }
};
</script>

<style scoped>
.paginations {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.pages {
  grid-column-start: 2;
}

.next {
  text-align: right;
}
</style>
