<template>
  <v-tabs v-model="tabIndex">
  <v-tab title="Exotic Dogs" href="#dogs">
    <br>Dogs here
  </v-tab>
  <v-tab @click="onClick" title="Exotic Cats"  href="#cats">
    <br>Cats here
  </v-tab>

</v-tabs>
</template>

<script>
export default {
  data () {
    return {
      tabIndex: 0,
      tabs: ['#dogs', '#cats']
    }
  },
  mounted () {
    this.tabIndex = this.tabs.findIndex(tab => tab === this.$route.hash)
  },
  methods: {
    onClick () {
      this.$router.push({ name: 'location' })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
