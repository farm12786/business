<template>
    <v-app-bar
      app
        dark
        color="#9ADA91"
        height="70"
        >
        <v-btn icon @click="onClickback" style="color:black;"><v-icon>mdi-arrow-left</v-icon></v-btn>
        <v-toolbar-title style="font-size:20px; font-weight: bold; color:black;">
            {{buName}}
        </v-toolbar-title>

    </v-app-bar>
</template>

<script>
export default {
  name: 'profilepagebar',
  data () {
    return {
      buId: null,
      buName: ''
    }
  },
  mounted () {
    this.buId = this.$route.query.id
    this.$store.state.allBu.forEach(bu => {
      if (bu.id === this.buId) {
        this.buName = bu.first_name_th
      }
    })
  },
  methods: {
    onClickback () {
      window.history.back()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
