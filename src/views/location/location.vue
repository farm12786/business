<template>
  <div >
    <pagebar></pagebar>
    <toolbar @val="getbutype"></toolbar>
    <v-container fluid>
      <template v-if="this.$store.state.butype === 'All'">
        <v-data-iterator
          :items="buData"
          :items-per-page="itemsPerPage"
          :page="page"
          hide-default-footer
        >
          <template v-slot:default="props">
            <v-container>
              <v-row>
                <v-col
                  v-for="(item, index) in props.items"
                  :key="index"
                  cols="6"
                  sm="6"
                  md="4"
                  lg="4"
                >
                  <v-card flat>
                    <v-img
                      @click="onClickimage(item.id)"
                      :src="
                        'https://s3gw.inet.co.th:8082/static/media/' +
                        item.image
                      "
                      gradient="to bottom, rgba(0,0,0,.01), rgba(0,0,0,.9)"
                      height="200"
                      aspect-ratio="1.7"
                    >
                      <v-row>
                        <v-col cols="6">
                          <v-avatar size="36px" style="margin-left: 3px">
                            <v-img
                              v-if="item.bu_type === 'hospital'"
                              alt="Avatar"
                              src="../../assets/icon/hospital.png"
                            >
                            </v-img>

                            <v-img
                              v-if="item.bu_type === 'cafe'"
                              alt="Avatar"
                              src="../../assets/icon/cafe.png"
                            >
                            </v-img>

                            <v-img
                              v-if="item.bu_type === 'farm'"
                              alt="Avatar"
                              src="../../assets/icon/farm.png"
                            >
                            </v-img>

                            <v-img
                              v-if="item.bu_type === 'hotel'"
                              alt="Avatar"
                              src="../../assets/icon/hotel.png"
                            >
                            </v-img>

                            <v-img
                              v-if="item.bu_type === 'salon'"
                              alt="Avatar"
                              src="../../assets/icon/salon.png"
                            >
                            </v-img>

                            <v-img
                              v-if="item.bu_type === 'shop'"
                              alt="Avatar"
                              src="../../assets/icon/shop.png"
                            >
                            </v-img>
                          </v-avatar>
                        </v-col>
                      </v-row>
                      <v-card-title
                        v-text="item.first_name_th"
                        style="
                          text-transform: capitalize;
                          color: white;
                          font-size: 16px;
                          margin-top: 35px;
                        "
                      ></v-card-title>
                    </v-img>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </template>

          <template v-slot:footer>
            <div>
              <v-pagination
                v-model="page"
                :length="numberOfPages_all"
                :total-visible="9"
                prev-icon="mdi-menu-left"
                next-icon="mdi-menu-right"
              ></v-pagination>
            </div>
          </template>
        </v-data-iterator>
      </template>

      <template v-if="this.$store.state.butype === 'hospital'">
        <v-data-iterator
          :items="hospitalData"
          :items-per-page="itemsPerPage"
          :page="page"
          hide-default-footer
        >
          <template v-slot:default="props">
            <v-container>
              <v-row>
                <v-col
                  v-for="(item, index) in props.items"
                  :key="index"
                  cols="6"
                  sm="6"
                  md="4"
                  lg="3"
                >
                  <v-card flat>
                    <v-img
                      @click="onClickimage(item.id)"
                      :src="
                        'https://s3gw.inet.co.th:8082/static/media/' +
                        item.image
                      "
                      gradient="to bottom, rgba(0,0,0,.01), rgba(0,0,0,.9)"
                      height="200"
                    >
                      <v-row>
                        <v-col cols="6">
                          <v-avatar size="36px" style="margin-left: 3px">
                            <v-img
                              alt="Avatar"
                              src="../../assets/icon/hospital.png"
                            >
                            </v-img>
                          </v-avatar>
                        </v-col>
                      </v-row>
                      <v-card-title
                        v-text="item.first_name_th"
                        style="
                          text-transform: capitalize;
                          color: white;
                          font-size: 16px;
                          margin-top: 35px;
                        "
                      ></v-card-title>
                    </v-img>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </template>

          <template v-slot:footer>
            <div>
              <v-pagination
                v-model="page"
                :length="numberOfPages_hospital"
                :total-visible="9"
                prev-icon="mdi-menu-left"
                next-icon="mdi-menu-right"
              ></v-pagination>
            </div>
          </template>
        </v-data-iterator>
      </template>

      <template v-if="this.$store.state.butype === 'cafe'">
        <v-data-iterator
          :items="cafeData"
          :items-per-page="itemsPerPage"
          :page="page"
          hide-default-footer
        >
          <template v-slot:default="props">
            <v-container>
              <v-row>
                <v-col
                  v-for="(item, index) in props.items"
                  :key="index"
                  cols="6"
                  sm="6"
                  md="4"
                  lg="3"
                >
                  <v-card flat>
                    <v-img
                      @click="onClickimage(item.id)"
                      :src="
                        'https://s3gw.inet.co.th:8082/static/media/' +
                        item.image
                      "
                      gradient="to bottom, rgba(0,0,0,.01), rgba(0,0,0,.9)"
                      height="200"
                    >
                      <v-row>
                        <v-col cols="6">
                          <v-avatar size="36px" style="margin-left: 3px">
                            <v-img
                              alt="Avatar"
                              src="../../assets/icon/cafe.png"
                            >
                            </v-img>
                          </v-avatar>
                        </v-col>
                      </v-row>
                      <v-card-title
                        style="
                          text-transform: capitalize;
                          color: white;
                          font-size: 16px;
                          margin-top: 35px;
                        "
                        v-text="item.first_name_th"
                      ></v-card-title>
                    </v-img>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </template>

          <template v-slot:footer>
            <div>
              <v-pagination
                v-model="page"
                :length="numberOfPages_cafe"
                :total-visible="9"
                prev-icon="mdi-menu-left"
                next-icon="mdi-menu-right"
              ></v-pagination>
            </div>
          </template>
        </v-data-iterator>
      </template>

      <template v-if="this.$store.state.butype === 'hotel'">
        <v-data-iterator
          :items="hotelData"
          :items-per-page="itemsPerPage"
          :page="page"
          hide-default-footer
        >
          <template v-slot:default="props">
            <v-container>
              <v-row>
                <v-col
                  v-for="(item, index) in props.items"
                  :key="index"
                  cols="6"
                  sm="6"
                  md="4"
                  lg="3"
                >
                  <v-card flat>
                    <v-img
                      @click="onClickimage(item.id)"
                      :src="
                        'https://s3gw.inet.co.th:8082/static/media/' +
                        item.image
                      "
                      gradient="to bottom, rgba(0,0,0,.01), rgba(0,0,0,.9)"
                      height="200"
                      aspect-ratio="1.7"
                    >
                      <v-row>
                        <v-col cols="6">
                          <v-avatar size="36px" style="margin-left: 3px">
                            <v-img
                              alt="Avatar"
                              src="../../assets/icon/hotel.png"
                            >
                            </v-img>
                          </v-avatar>
                        </v-col>
                      </v-row>
                      <v-card-title
                        v-text="item.first_name_th"
                        style="
                          text-transform: capitalize;
                          color: white;
                          font-size: 16px;
                          margin-top: 35px;
                        "
                      ></v-card-title>
                    </v-img>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </template>

          <template v-slot:footer>
            <div>
              <v-pagination
                v-model="page"
                :length="numberOfPages_hotel"
                :total-visible="9"
                prev-icon="mdi-menu-left"
                next-icon="mdi-menu-right"
              ></v-pagination>
            </div>
          </template>
        </v-data-iterator>
      </template>

      <template v-if="this.$store.state.butype === 'shop'">
        <v-data-iterator
          :items="shopData"
          :items-per-page="itemsPerPage"
          :page="page"
          hide-default-footer
        >
          <template v-slot:default="props">
            <v-container>
              <v-row>
                <v-col
                  v-for="(item, index) in props.items"
                  :key="index"
                  cols="6"
                  sm="6"
                  md="4"
                  lg="3"
                >
                  <v-card flat>
                    <v-img
                      @click="onClickimage(item.id)"
                      :src="
                        'https://s3gw.inet.co.th:8082/static/media/' +
                        item.image
                      "
                      gradient="to bottom, rgba(0,0,0,.01), rgba(0,0,0,.9)"
                      height="200"
                    >
                      <v-row>
                        <v-col cols="6">
                          <v-avatar size="36px" style="margin-left: 3px">
                            <v-img
                              alt="Avatar"
                              src="../../assets/icon/shop.png"
                            >
                            </v-img>
                          </v-avatar>
                        </v-col>
                      </v-row>
                      <v-card-title
                        v-text="item.first_name_th"
                        style="
                          text-transform: capitalize;
                          color: white;
                          font-size: 16px;
                          margin-top: 35px;
                        "
                      ></v-card-title>
                    </v-img>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </template>

          <template v-slot:footer>
            <div>
              <v-pagination
                v-model="page"
                :length="numberOfPages_shop"
                :total-visible="9"
                prev-icon="mdi-menu-left"
                next-icon="mdi-menu-right"
              ></v-pagination>
            </div>
          </template>
        </v-data-iterator>
      </template>

      <template v-if="this.$store.state.butype === 'salon'">
        <v-data-iterator
          :items="salonData"
          :items-per-page="itemsPerPage"
          :page="page"
          hide-default-footer
        >
          <template v-slot:default="props">
            <v-container>
              <v-row>
                <v-col
                  v-for="(item, index) in props.items"
                  :key="index"
                  cols="6"
                  sm="6"
                  md="4"
                  lg="3"
                >
                  <v-card flat>
                    <v-img
                      @click="onClickimage(item.id)"
                      :src="
                        'https://s3gw.inet.co.th:8082/static/media/' +
                        item.image
                      "
                      gradient="to bottom, rgba(0,0,0,.01), rgba(0,0,0,.9)"
                      height="200"
                    >
                      <v-row>
                        <v-col cols="6">
                          <v-avatar size="36px" style="margin-left: 3px">
                            <v-img
                              alt="Avatar"
                              src="../../assets/icon/salon.png"
                            >
                            </v-img>
                          </v-avatar>
                        </v-col>
                      </v-row>
                      <v-card-title
                        v-text="item.first_name_th"
                        style="
                          text-transform: capitalize;
                          color: white;
                          font-size: 16px;
                          margin-top: 35px;
                        "
                      ></v-card-title>
                    </v-img>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </template>

          <template v-slot:footer>
            <div>
              <v-pagination
                v-model="page"
                :length="numberOfPages_salon"
                :total-visible="9"
                prev-icon="mdi-menu-left"
                next-icon="mdi-menu-right"
              ></v-pagination>
            </div>
          </template>
        </v-data-iterator>
      </template>

      <template v-if="this.$store.state.butype === 'farm'">
        <v-data-iterator
          :items="farmData"
          :items-per-page="itemsPerPage"
          :page="page"
          hide-default-footer
        >
          <template v-slot:default="props">
            <v-container>
              <v-row>
                <v-col
                  v-for="(item, index) in props.items"
                  :key="index"
                  cols="6"
                  sm="6"
                  md="4"
                  lg="3"
                >
                  <v-card flat>
                    <v-img
                      @click="onClickimage(item.id)"
                      :src="
                        'https://s3gw.inet.co.th:8082/static/media/' +
                        item.image
                      "
                      gradient="to bottom, rgba(0,0,0,.01), rgba(0,0,0,.9)"
                      height="200"
                    >
                      <v-row>
                        <v-col cols="6">
                          <v-avatar size="36px" style="margin-left: 3px">
                            <v-img
                              alt="Avatar"
                              src="../../assets/icon/farm.png"
                            >
                            </v-img>
                          </v-avatar>
                        </v-col>
                      </v-row>
                      <v-card-title
                        v-text="item.first_name_th"
                        style="
                          text-transform: capitalize;
                          color: white;
                          font-size: 16px;
                          margin-top: 35px;
                        "
                      ></v-card-title>
                    </v-img>
                  </v-card>
                </v-col>
              </v-row>

            </v-container>
          </template>

          <template>
            <div>

              <v-pagination
                v-model="page"
                :length="numberOfPages_farm"
                :total-visible="9"
                prev-icon="mdi-menu-left"
                next-icon="mdi-menu-right"
              ></v-pagination>

            </div>
          </template>
        </v-data-iterator>

      </template>

    </v-container>
<pagefoot></pagefoot>
  </div>

</template>

<script>
import axios from 'axios'
import toolbar from '@/components/location/toolbar'
import pagebar from '@/components/location/pagebar'
import pagefoot from '@/components/location/footer'

export default {
  name: 'location',
  components: {
    toolbar,
    pagebar,
    pagefoot
  },
  data () {
    return {
      buData: [],
      hospitalData: [],
      cafeData: [],
      hotelData: [],
      shopData: [],
      salonData: [],
      farmData: [],
      page: 1,
      itemsPerPage: 6
    }
  },
  async mounted () {
    const result1 = await axios.post(
      'https://testchat.one.th/petdy/get_business_by_type',
      { bu_type: 'hospital' }
    )
    const result2 = await axios.post(
      'https://testchat.one.th/petdy/get_business_by_type',
      { bu_type: 'cafe' }
    )
    const result3 = await axios.post(
      'https://testchat.one.th/petdy/get_business_by_type',
      { bu_type: 'hotel' }
    )
    const result4 = await axios.post(
      'https://testchat.one.th/petdy/get_business_by_type',
      { bu_type: 'shop' }
    )
    const result5 = await axios.post(
      'https://testchat.one.th/petdy/get_business_by_type',
      { bu_type: 'salon' }
    )
    const result6 = await axios.post(
      'https://testchat.one.th/petdy/get_business_by_type',
      { bu_type: 'farm' }
    )

    result1.data.list_business.forEach((hospital) => {
      this.buData.push(hospital)
      this.hospitalData.push(hospital)
    })
    result2.data.list_business.forEach((cafe) => {
      this.buData.push(cafe)
      this.cafeData.push(cafe)
    })
    result3.data.list_business.forEach((hotel) => {
      this.buData.push(hotel)
      this.hotelData.push(hotel)
    })
    result4.data.list_business.forEach((shop) => {
      this.buData.push(shop)
      this.shopData.push(shop)
    })
    result5.data.list_business.forEach((salon) => {
      this.buData.push(salon)
      this.salonData.push(salon)
    })
    result6.data.list_business.forEach((farm) => {
      this.buData.push(farm)
      this.farmData.push(farm)
    })

    this.$store.commit('getallBu', this.buData)
  },

  computed: {
    numberOfPages_all () {
      return Math.ceil(this.buData.length / this.itemsPerPage)
    },
    numberOfPages_hospital () {
      return Math.ceil(this.hospitalData.length / this.itemsPerPage)
    },
    numberOfPages_cafe () {
      return Math.ceil(this.cafeData.length / this.itemsPerPage)
    },
    numberOfPages_hotel () {
      return Math.ceil(this.hotelData.length / this.itemsPerPage)
    },
    numberOfPages_salon () {
      return Math.ceil(this.salonData.length / this.itemsPerPage)
    },
    numberOfPages_shop () {
      return Math.ceil(this.shopData.length / this.itemsPerPage)
    },
    numberOfPages_farm () {
      return Math.ceil(this.farmData.length / this.itemsPerPage)
    },
    filteredBu () {
      return this.keys.filter((key) => key !== 'All')
    }
  },

  methods: {
    nextPage_all () {
      if (this.page + 1 <= this.numberOfPages_all) this.page += 1
    },
    nextPage_hospital () {
      if (this.page + 1 <= this.numberOfPages_hospital) this.page += 1
    },
    nextPage_cafe () {
      if (this.page + 1 <= this.numberOfPages_cafe) this.page += 1
    },
    nextPage_hotel () {
      if (this.page + 1 <= this.numberOfPages_hotel) this.page += 1
    },
    nextPage_salon () {
      if (this.page + 1 <= this.numberOfPages_salon) this.page += 1
    },
    nextPage_shop () {
      if (this.page + 1 <= this.numberOfPages_shop) this.page += 1
    },
    nextPage_farm () {
      if (this.page + 1 <= this.numberOfPages_farm) this.page += 1
    },
    formerPage () {
      if (this.page - 1 >= 1) this.page -= 1
    },
    getbutype () {
      this.butype = this.$store.state.butype
    },
    onClickimage (buId) {
      this.$router.push({
        name: 'profile',
        query: { id: buId }
      })
      this.$ls.set('buId', JSON.stringify(buId))
    },
    onClickhome () {
      this.$router.push({
        name: 'mystory'
      })
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/style/style.css";
</style>
