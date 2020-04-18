<template>
  <div class="member-detail md-layout md-gutter md-alignment-top-center">
    <CustomLoader v-if="!member && !notFound" />

    <template v-else>
      <div class="md-layout-item md-size-100">
        <md-button :to="{ name: 'home' }" class="md-raised">
          <md-icon>arrow_back_ios</md-icon>
          Back to list
        </md-button>
      </div>

      <div v-if="notFound" class="md-layout-item md-size-100">
        <md-empty-state
          class="md-primary"
          md-icon="error"
          md-label="User not found">
        </md-empty-state>
      </div>

      <template v-else>
        <div class="md-layout-item md-size-30 md-xsmall-size-100">
          <MemberCard :member="member">
            <md-button class="md-raised md-accent" :href="member.html_url" target="_blank">
              View GitHub
            </md-button>
          </MemberCard>
        </div>
        <div class="md-layout-item md-size-70 md-xsmall-size-100">
          <h1>{{ member.name }}</h1>
          <h2 v-if="member.bio">{{ member.bio }}</h2>

          <md-list>
            <md-list-item v-if="member.company">
              <md-icon>business</md-icon>
              <span class="md-list-item-text">{{ member.company }}</span>
            </md-list-item>
            <md-list-item v-if="member.location">
              <md-icon>location_on</md-icon>
              <span class="md-list-item-text">{{ member.location }}</span>
            </md-list-item>
          </md-list>

          <md-table>
            <md-table-row>
              <md-table-head>Public repositories</md-table-head>
              <md-table-head>Public gists</md-table-head>
              <md-table-head>Followers</md-table-head>
              <md-table-head>Following</md-table-head>
            </md-table-row>

            <md-table-row>
              <md-table-cell>{{ member.public_repos }}</md-table-cell>
              <md-table-cell>{{ member.public_gists }}</md-table-cell>
              <md-table-cell>{{ member.followers }}</md-table-cell>
              <md-table-cell>{{ member.following }}</md-table-cell>
            </md-table-row>
          </md-table>
        </div>
      </template>
    </template>
  </div>
</template>

<script>
import CustomLoader from "@/components/CustomLoader";
import MemberCard from "@/components/MemberCard";
import { getMember } from "@/backendAPI";

export default {
  props: ["memberId"],
  data: () => ({
    member: null,
    notFound: false
  }),
  created() {
    getMember(this.memberId)
      .then(member => (this.member = member))
      .catch(error => {
        if (error === 404) {
          this.notFound = true;
        } else {
          console.error(error);
        }
      });
  },
  components: {
    CustomLoader,
    MemberCard
  }
};
</script>

<style lang="scss" scoped>
.member-detail {
  padding-top: 20px;
}
</style>
