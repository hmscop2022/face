<template lang="html">
  <main>
    <div class="bl_img_profile">
      <div class="bl_img_profile_wrapper">
        <img src="src/assets/images/blank-profile-picture-gee2347716_640.png" width="150">
      </div>
      <div>
        <div class="bl_img_profile_section">
          <div class="bl_img_profile_title">얼굴 나이</div>
          <div class="bl_img_profile_value">36~38세</div>
        </div>
        <div class="bl_img_profile_section">
          <div class="bl_img_profile_title">성별</div>
          <div class="bl_img_profile_value">남자</div>
        </div>
        <div class="bl_img_profile_section">
          <div class="bl_img_profile_title">표정(감정)</div>
          <div class="bl_img_profile_value">smile</div>
        </div>
      </div>
    </div>
    <div class="hp_seperator">
    </div>
    <div class="subTitle">
      닮은꼴
    </div>
    <div class="celebName">
      엄기준<span class="celebName_percentage">(30%)</span>
    </div>
    <div class="img_horizon_container">
      <img src="src/assets/images/blank-profile-picture-gee2347716_640.png" width="120">
      <img src="src/assets/images/blank-profile-picture-gee2347716_640.png" width="120">
      <img src="src/assets/images/blank-profile-picture-gee2347716_640.png" width="120">
      <img src="src/assets/images/blank-profile-picture-gee2347716_640.png" width="120">
      <img src="src/assets/images/blank-profile-picture-gee2347716_640.png" width="120">
    </div>
    <div class="kakaoBtnWrapper">
      <div class="kakaoBtn">
        <img src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
        alt="카카오톡 공유 보내기 버튼" width="50px"/>
        <span>카카오톡 공유하기</span>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  
}
</script>

<style lang="css" scoped>
  .bl_img_profile{
    display:flex;
    padding: 20px 10px;
  }
  .bl_img_profile_wrapper>img{
    border-radius: 15px;
  }
  .bl_img_profile_wrapper {
    margin-right: 10px;
  }
  .bl_img_profile_title {
    font-size: 0.7em;
    font-weight: bold;
    color: #9d8282;
  }
  .bl_img_profile_value {
    font-size: 0.9em;
    font-weight:bold;
  }
  .bl_img_profile_section {
    margin-top: 8px;
  }
  .hp_seperator{
    width:100%;
    height: 2px;
    background-color: #9d8282;
  }
  .subTitle {
    font-size: 0.7em;
    font-weight: bold;
    padding-top: 16px;
    padding-bottom: 10px;
    padding-left: 10px;
  }
  .celebName {
    font-size: 1.3em;
    font-weight: bold;
    padding-left:10px;
  }
  .celebName_percentage{
    color: #4c4cbd;
  }
  .img_horizon_container{
    display:flex;
    overflow-x: auto;
    padding: 10px;
  }
  .img_horizon_container>img{
    border-radius: 10px;
    margin-right:10px;
  }
  .kakaoBtnWrapper{
    padding: 15px 10px;
  }
  .kakaoBtn{
    display:flex;
    border-radius: 10px;
    background-color: #FAE100;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    font-weight: bold;
  }
</style>
