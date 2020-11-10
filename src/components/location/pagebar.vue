<template>
  <div>
    <v-app-bar
        dark
        app
        color="#9ADA91"
        height="70"
        >

       <v-row align="center">
        <v-col cols="4">
          <v-row justify="start" align="center">
          <v-img
            src="../../assets/icon/icon_PETDY.png"
            aspect-ratio="1"
            max-height="80"
            max-width="80">

          </v-img>
          </v-row>
        </v-col>

          <v-col cols="4">
            <v-row justify="center" align="center">
          <v-toolbar-title
            class="text_bar"
          >
            Location
          </v-toolbar-title>
          </v-row>
          </v-col>

          <v-col cols="4">
            <v-row justify="end" align="center">
          <v-btn icon style="color:black; " ><v-icon>mdi-magnify</v-icon></v-btn>
          <v-btn icon style="color:black; " @click="onClickhome"><v-icon>mdi-home</v-icon></v-btn>
          </v-row>
          </v-col>
      </v-row>
    </v-app-bar>

  </div>
</template>

<script>
export default {
  name: 'pagebar',
  methods: {
    onClickhome () {
      this.$router.push({
        name: 'mystory'
      })
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
