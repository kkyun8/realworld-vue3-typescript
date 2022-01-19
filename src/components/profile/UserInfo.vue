<template>
  <div class="user-info">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <img
            alt="user image"
            class="user-img"
            src="https://api.realworld.io/images/demo-avatar.png"
          />
          <h4>Gerome</h4>
          <p></p>
          <app-follow-button
            ><button class="btn btn-sm action-btn btn-outline-secondary">
              <i class="ion-plus-round"></i> &nbsp; Follow Gerome
            </button></app-follow-button
          ><a class="btn btn-sm btn-outline-secondary action-btn" hidden="" href="/settings"
            ><i class="ion-gear-a"></i> Edit Profile Settings
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
