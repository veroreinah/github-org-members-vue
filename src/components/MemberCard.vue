<template>
  <md-card>
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">{{ member.login }}</div>
      </md-card-header-text>

      <md-card-media>
        <img :src="member.avatar_url" :alt="member.login" />
      </md-card-media>
    </md-card-header>

    <md-card-actions @click.stop>
      <slot>
        <md-button class="md-raised md-accent" @click.stop>
          View more
        </md-button>
      </slot>
    </md-card-actions>
  </md-card>
</template>

<script>
export default {
  props: {
    member: Object,
  },
  computed: {
    memberLink() {
      return {
        name: "member",
        params: {
          member: this.member.login
        }
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.md-card-header {
  display: flex;
}

.md-card-header-text {
  overflow: hidden;
  .md-title {
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
