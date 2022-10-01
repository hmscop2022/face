<template lang="html">
  <div class="bl_upload">
    <h3 class="bl_upload_title">얼굴 사진과 닮은 꼴 유명인을 찾아드립니다</h3>
    <h4 class="bl_upload_subTitle">용량 2MB 미만의 이미지를 업로드 하세요!</h4>
    <div class="bl_upload_imgBtn">
      <img class="bl_upload_img" src="src/assets/images/blank-profile-picture-gee2347716_640.png" width="250" height="250" alt="">
      <div class="ly_btnTwoColumn">
        <a class="el_btn ic_image" href="#">업로드</a>
        <a class="el_btn ic_search" href="#">찾기</a>.
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.bl_upload {
  width: 90%;
  margin: 0 auto;
  border: 2px solid #ddd;
  margin-top: 20px;
  padding: 20px 10px;
  text-align: center;
  border-radius: 8px;
}
.bl_upload_title {
  font-size: .9rem;
  font-weight: bold;
  margin-bottom: 5px;
}
.bl_upload_subTitle {
  font-size: .8rem;
  color: #5d5d5d;
  margin-bottom: 10px;
}
.bl_upload_imgBtn{
  display:inline-block;
  width: 250px;
}
.bl_upload_img{
  display:inline-block;
}
.ly_btnTwoColumn{
  display: inline-block;
  box-sizing: border-box;
  margin-top: 5px;
  width: 250px;
  height: 3em;
  text-align: center;
}
.ly_btnTwoColumn .el_btn{
  box-sizing: border-box;
  display: inline-block;
  width: 49%;
  padding: 1em 0.3em;
  font-size: .8rem;
  font-weight: bold;
}

</style>
