<template>

      <v-toolbar dark color="#EFE976" class="mb-1" >
        <template>
          <v-col cols="8" sm="10" md="10" lg="10">
            <v-select
              validate-on-blur
              dense
              v-model="butype"
              color="black"
              solo-inverted
              hide-details
              :items="bu"
              prepend-inner-icon="mdi-magnify"
              label="All"
            >
            </v-select>
          </v-col>
          <v-spacer></v-spacer>

          <v-btn icon color="black" @click="onClickcontent"
            ><v-icon>mdi-view-grid-outline</v-icon></v-btn
          >
          <v-btn icon color="black" @click="onClickmap(butype)"
            ><v-icon>mdi-map-marker-radius</v-icon></v-btn
          >
        </template>
      </v-toolbar>

</template>

<script>
export default {
  name: 'toolbar',
  data () {
    return {
      butype: this.$store.state.butype,
      bu: ['All', 'hospital', 'hotel', 'cafe', 'farm', 'salon', 'shop']
    }
  },
  watch: {
    butype (val) {
      this.$store.commit('getButype', val)
    }
  },
  methods: {
    onClickmap () {
      this.$router.push({
        name: 'map'
      })
    },
    onClickcontent () {
      this.$router.push({
        name: 'location'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
