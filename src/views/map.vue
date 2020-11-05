<template>
<div>
  <pagebar></pagebar>
    <v-container grid-list-xs>
      <toolbar @val="getbutype2"></toolbar>
        <!-- <v-card> -->
            <GmapMap
            :center="currentPositions"
            :zoom="12"
            map-type-id="terrain"
            min-width="100"
            min-height="100"
            style="min-width: 300px;  min-height: 400px;"
            >

            <GmapMarker

                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                @click="onClick(m.id)"
            />
            </GmapMap>
        <!-- </v-card> -->
    <div style="visibility: hidden">
    {{this.$store.state.butype}}
    </div>
    </v-container>
</div>
</template>

<script>
import axios from 'axios'
import toolbar from '@/components/toolbar'
import pagebar from '@/components/pagebar'

export default {
  name: 'bumap',
  components: {
    toolbar,
    pagebar
  },
  data () {
    return {
      butype: 'All',
      currentPositions: { lat: null, lng: null },
      markPoint: { lat: null, lng: null },
      markers: []
    }
  },
  methods: {
    async getMarker (butype) {
      if (butype === 'All') {
        this.$store.state.allBu.forEach(marker => {
          this.markers.push({
            position: {
              lat: marker.latitude,
              lng: marker.longitude
            },
            id: marker.id
          })
        })
      } else {
        const result = await axios.post(
          'https://testchat.one.th/petdy/get_business_by_type',
          { bu_type: butype }
        )

        result.data.list_business.forEach(marker => {
          this.markers.push({
            position: {
              lat: marker.latitude,
              lng: marker.longitude
            },
            id: marker.id
          })
        })
      }
    },
    getcurrentPosition () {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.currentPositions.lat = position.coords.latitude
          this.currentPositions.lng = position.coords.longitude
          console.log(this.currentPositions)

        //   this.markers.push(this.currentPositions)
        },
        error => {
          console.log(error.message)
        }
      )
    },
    onClick (buid) {
      this.$router.push({
        name: 'profile',
        query: { id: buid }
      })
      this.$ls.set('buId', JSON.stringify(buid))
    },
    getbutype2 () {
      this.butype = this.$store.state.butype
    },
    clearMarker () {
      this.markers = []
    }
  },
  mounted () {
    this.getcurrentPosition()
    this.clearMarker()

    // this.getMarker(this.$route.query.butype)
    this.getMarker(this.$store.state.butype)
  },
  updated () {
    this.butype = this.$store.state.butype
  },
  watch: {
    butype (newVal) {
      console.log(newVal)
      this.clearMarker()
      this.getMarker(newVal)
    }
  }

}
</script>

<style lang="scss">
    @import "../assets/style/style.css";
</style>
