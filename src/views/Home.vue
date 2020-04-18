<template>
  <div class="members-list md-layout md-gutter md-alignment-top-center">
    <CustomLoader v-if="!members.length" />

    <template v-else>
      <div class="md-layout-item md-size-100">
        <md-field>
          <md-icon>search</md-icon>
          <label>Search</label>
          <md-input v-model="searchText"></md-input>
        </md-field>
      </div>

      <div
        v-for="member in filteredMembers"
        :key="member.id"
        class="md-layout-item md-size-25 md-small-size-50 md-xsmall-size-100"
      >
        <MemberCard :member="member" />
      </div>
    </template>
  </div>
</template>

<script>
import CustomLoader from "@/components/CustomLoader";
import MemberCard from "@/components/MemberCard";
import { getMembers } from "@/backendAPI";

export default {
  name: "Home",
  data: () => ({
    members: [],
    searchText: ""
  }),
  computed: {
    filteredMembers() {
      return this.members.filter(m =>
        m.login.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  },
  created() {
    getMembers()
      .then(members => (this.members = members))
      .catch(error => console.error(error.message));
  },
  components: {
    CustomLoader,
    MemberCard
  }
};
</script>

<style lang="scss" scoped>
.members-list {
  padding-top: 20px;
  .md-layout-item {
    margin-bottom: 20px;
  }
}
</style>
