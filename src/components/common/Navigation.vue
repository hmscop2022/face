<template lang="html">
  <nav class="bl_tabNav">
    <ul class="bl_tabNav_inner">
      <li><span class="bl_tabNav_link is_active ic_image">업로드</span></li>
      <li><a class="bl_tabNav_link ic_fileLines" href="#">분석결과</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.ic_image::before {
  content:"\f03e";
  font: var(--fa-font-solid);
  font-size : 1rem;
  margin-right: 5px;
}
.ic_fileLines::before {
  content:"\f15c";
  font: var(--fa-font-solid);
  font-size : 1rem;
  margin-right: 5px;
}

</style>
