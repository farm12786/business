<template>
  <div>
    <v-card class="overflow-hidden" color="#fcfadf">
      <v-app-bar app color="#9ADA91" height="70">
        <v-row align="center">
          <v-col cols="4">
            <v-row justify="start" align="center">
              <v-img
                src="../../assets/icon/icon_PETDY.png"
                aspect-ratio="1"
                max-height="80"
                max-width="80"
              >
              </v-img>
            </v-row>
          </v-col>

          <v-col cols="4">
            <v-row justify="center" align="center">
              <v-toolbar-title class="text_bar"> My Story </v-toolbar-title>
            </v-row>
          </v-col>

          <v-col cols="4">
            <v-row justify="end" align="center">
              <v-btn icon style="color: black"
                ><v-icon>mdi-magnify</v-icon></v-btn
              >
              <v-btn icon style="color: black"><v-icon>mdi-home</v-icon></v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-app-bar>

      <v-bottom-navigation background-color="#EFE976" style="margin-top: 3px">
        <v-slide-group>
          <v-btn>
            <span style="color:black; font-weight;bold; ">PET</span>
            <a>
              <v-img
                src="../../assets/icon/cat.png"
                max-height="30"
                max-width="30"
              ></v-img>
            </a>
          </v-btn>

          <v-btn>
            <span style="color:black; font-weight;bold; ">Timeline</span>
            <a>
              <v-img
                elevation-10
                src="../../assets/icon/timeline.png"
                max-height="30"
                max-width="30"
              ></v-img>
            </a>
          </v-btn>
          <v-btn>
            <span style="color:black; font-weight;bold; ">Community</span>
            <a>
              <v-img
                src="../../assets/icon/blog.png"
                max-height="30"
                max-width="30"
              ></v-img>
            </a>
          </v-btn>
          <v-btn>
            <span style="color:black; font-weight;bold; ">Location</span>
            <a>
              <v-img
                @click="onClicklocation"
                src="../../assets/icon/location.png"
                max-height="30"
                max-width="30"
              ></v-img>
            </a>
          </v-btn>
        </v-slide-group>
      </v-bottom-navigation>

      <v-row justify="center" align="center">
        <v-col cols="4">
          <v-row justify="center" align="center">

              <v-avatar size="100" color="primary" rounded="circle">
                <v-img :src="userImg">
                </v-img>
              </v-avatar>

          </v-row>
        </v-col>

        <v-col cols="8">
          <v-row>
            <v-col> {{nickName}}  </v-col>
          </v-row>
          <v-row>
            <v-col cols="3">
              <a>
                {{ numPost }}
              </a>
              <br /><span>Post</span>
            </v-col>
            <v-col cols="5" justify-center>
              <a>
                {{ numFollowing }}
              </a>
              <br /><span>Following</span>
            </v-col>
            <v-col cols="4" justify-center>
              <a>
                {{ numFollower }}
              </a>
              <br /><span>Follower</span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <v-row>
        <v-col cols="5.5">
          <v-row justify="center" align="center">
            <v-btn
              block
              icon
              color="#fcfadf"
              elevation="0"
              @click="onClickpetmapButton"
            >
              <a>
                <v-img
                  src="../../assets/icon/petmap.png"
                  max-height="40"
                  max-width="40"
                ></v-img>
              </a>
            </v-btn>
          </v-row>
        </v-col>

        <v-divider vertical></v-divider>

        <v-col cols="5.5">
          <v-row justify="center" align="center">
            <v-btn
              block
              color="#fcfadf"
              elevation="0"
              @click="onClickpostButton"
            >
              <v-img
                src="../../assets/icon/grid.png"
                max-height="40"
                max-width="40"
              ></v-img>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <v-card color="#fcfadf" v-if="viewpost === false">
        <GmapMap
          :center="petLocation"
          :zoom="12"
          map-type-id="terrain"
          min-width="100"
          min-height="100"
          style="min-width: 300px; min-height: 400px"
        >
          <GmapMarker :position="petLocation" />
        </GmapMap>
      </v-card>

      <v-card color="#fcfadf" v-if="viewpost === true">
        <v-row no-gutters>
          <v-col
            v-for="(post, index) in postDetail"
            :key="index"
            cols="4"
            class="d-flex child-flex"
          >
            <v-card tile style="border-style: solid; border-color: #fcfadf">
              <v-img
                @click="onClickpost($event)"
                :src="post.postImg"
                aspect-ratio="1"
                class="post white--text align-end"
                gradient="to bottom, rgba(0,0,0,.01), rgba(0,0,0,.7)"
              >
                <div style="font-size: 12px">
                  <v-icon
                    color="white"
                    size="15"
                    style="margin-left: 5px; margin-bottom: 5px"
                    >mdi-heart</v-icon
                  >

                  {{ numLike }}
                </div>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
      <pagefoot />
    </v-card>
  </div>
</template>

<script>
import pagefoot from '@/components/location/footer'
import axios from 'axios'
export default {
  name: 'mystory',
  components: {
    pagefoot
  },
  data () {
    return {
      userImg: null,
      nickName: null,
      onechatToken: null,
      token: null,
      url: null,
      petLocation: { lat: 13.701, lng: 101.23 },
      viewpost: false,
      postElement: null,
      numPost: 7,
      numFollowing: 219,
      numFollower: 873,
      numLike: 201,
      postDetail: [
        {
          postId: null,
          userImg: this.userImg,
          userName: 'NATAWAT SONGNUAN',
          date: '23 sep 2020',
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          postImg: 'https://picsum.photos/id/237/200',
          readmore: false
        },
        {
          postId: null,
          userImg: this.userImg,
          userName: 'NATAWAT SONGNUAN',
          date: '23 sep 2020',
          message:
            '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
          postImg: 'https://picsum.photos/id/238/200'
        },
        {
          postId: null,
          userImg: this.userImg,
          userName: 'NATAWAT SONGNUAN',
          date: '23 sep 2020',
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          postImg: 'https://picsum.photos/id/239/200',
          readmore: false
        },
        {
          postId: null,
          userImg: this.userImg,
          userName: 'NATAWAT SONGNUAN',
          date: '23 sep 2020',
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          postImg: 'https://picsum.photos/id/240/200',
          readmore: false
        },
        {
          postId: null,
          userImg: this.userImg,
          userName: 'NATAWAT SONGNUAN',
          date: '23 sep 2020',
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          postImg: 'https://picsum.photos/id/241/200',
          readmore: false
        },
        {
          postId: null,
          userImg: this.userImg,
          userName: 'NATAWAT SONGNUAN',
          date: '23 sep 2020',
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          postImg: 'https://picsum.photos/id/242/200',
          readmore: false
        },
        {
          postId: null,
          userImg: this.userImg,
          userName: 'NATAWAT SONGNUAN',
          date: '23 sep 2020',
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          postImg: 'https://picsum.photos/id/243/200',
          readmore: false
        },
        {
          postId: null,
          userImg: this.userImg,
          userName: 'NATAWAT SONGNUAN',
          date: '23 sep 2020',
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          postImg: 'https://picsum.photos/id/244/200',
          readmore: false
        },
        {
          postId: null,
          userImg: this.userImg,
          userName: 'NATAWAT SONGNUAN',
          date: '23 sep 2020',
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          postImg: 'https://picsum.photos/id/247/200',
          readmore: false
        },
        {
          postId: null,
          userImg: this.userImg,
          userName: 'NATAWAT SONGNUAN',
          date: '23 sep 2020',
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          postImg: 'https://picsum.photos/id/250/200',
          readmore: false
        },
        {
          postId: null,
          userImg: this.userImg,
          userName: 'NATAWAT SONGNUAN',
          date: '23 sep 2020',
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          postImg: 'https://picsum.photos/id/277/200',
          readmore: false
        },
        {
          postId: null,
          userImg: this.userImg,
          userName: 'NATAWAT SONGNUAN',
          date: '23 sep 2020',
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          postImg: 'https://picsum.photos/id/218/200',
          readmore: false
        }
      ]
    }
  },
  methods: {
    onClicklocation () {
      this.$router.push({
        name: 'location'
      })
    },
    onClickpost (event) {
      var postId = event.currentTarget.id
      console.log(postId)
      this.$router.push({
        name: 'post',
        query: { id: postId }
      })
    },
    onClickpostButton () {
      this.viewpost = true
    },
    onClickpetmapButton () {
      this.viewpost = false
    },
    setId () {
      var postElement = document.querySelectorAll('.post')
      for (var i = 0; i < postElement.length; i++) {
        postElement[i].id = 'post' + i
        this.postDetail[i].postId = 'post' + i
      }
    }
  },

  async mounted () {
    this.url = window.location.href.split('?')
    this.token = this.url[1].split('&')
    this.onechatToken = this.token[0].split('=')

    const body = {
      bot_id: 'B3ab363e4d008522a80e72c94b5ce775b',
      source: this.onechatToken[1],
      name: 'true'
    }
    const headers = {
      Authorization:
        'Bearer A1f52b98be0f25416a6a9a262d15747cbfa622f189173425aa8b8ba03bf8d67822a6ab46d22c34e21835d0ec2bb50240d'
    }

    const result1 = await axios.post(
      'https://chat-api.one.th/manage/api/v1/getprofile',
      body,
      { headers }
    )

    console.log(result1)

    this.userImg = result1.data.data.profilepicture
    this.nickName = result1.data.data.nickname
  },
  updated () {
    if (this.viewpost === true) {
      this.setId()
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/style/style.css";
</style>
