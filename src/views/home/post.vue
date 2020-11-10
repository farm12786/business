<template>
  <div>
    <v-app-bar app dark color="#9ADA91" elevate-on-scroll>
      <v-btn icon @click="onClickback" style="color:black;"><v-icon>mdi-arrow-left</v-icon></v-btn>
      <v-toolbar-title class="text_bar" >
        POST
      </v-toolbar-title>
    </v-app-bar>

    <v-btn color="success" @click="$vuetify.goTo('#post5')">GOTO</v-btn>

    <v-container fluid>
      <v-card v-for="(post,index) in postDetail" :key="index" style="margin-top: 20px;">
        <v-row dense>
          <v-col cols="2" md="1" align-self="center">
            <v-avatar color="primary" size="50" style="margin-left: 10px">
              <v-img :src="post.userImg"></v-img>
            </v-avatar>
          </v-col>

          <v-col cols="8" md="10">
            <div style="margin-left: 10px; font-weight: bold">
              {{ post.userName }}
            </div>
            <div style="margin-left: 15px; font-size: 15px">
              {{ post.date }}
            </div>
          </v-col>

          <v-col cols="2" md="1" align-self="center">
            <v-menu offset-y>
              <template v-slot:activator="{ attrs, on }">
                <v-btn icon v-bind="attrs" v-on="on" style="margin-right: 10px"
                  ><v-icon>mdi-dots-vertical</v-icon></v-btn
                >
              </template>

              <v-list>
                <v-list-item v-for="(item,index) in menu" :key="index" link>
                  <v-list-item-title v-text="item"></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
        </v-row>
        <v-divider></v-divider>

        <v-row dense>
          <v-col>
            <v-container grid-list-xs>
              <div>
                <span v-if="!readMoreActivated"
                  >{{ post.message.slice(0, 75) }}
                </span>
                <a
                  v-if="!post.readmore"
                  @click="activateReadMore(post.postId)"

                >
                  Read more...
                </a>
                <span v-if="post.readmore">
                  {{post.message}}
                </span>
              </div>
            </v-container>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col>
            <v-img
            class="post"
            :src="post.postImg"
            height="350"
            aspect-ratio="1"
            >
            </v-img>
          </v-col>
        </v-row>

        <v-row dense> </v-row>

        <v-card-actions>
          <div>
          {{post.postId}}
          </div>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>

      <pagefoot/>
    </v-container>
  </div>
</template>

<script>
import * as easings from 'vuetify/es5/services/goto/easing-patterns'
import pagefoot from '@/components/location/footer'
export default {
  name: 'post',
  components: {
    pagefoot
  },
  data () {
    return {
      easing: 'easeInOutCubic',
      easings: Object.keys(easings),
      duration: 300,
      offset: 0,
      postDetail: [
        {
          postId: null,
          userImg: 'https://randomuser.me/api/portraits/men/32.jpg',
          userName: 'NATAWAT SONGNUAN',
          date: '23 sep 2020',
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          postImg: 'https://picsum.photos/id/237/200',
          readmore: false
        },
        {
          postId: null,
          userImg: 'https://randomuser.me/api/portraits/men/32.jpg',
          userName: 'NATAWAT SONGNUAN',
          date: '23 sep 2020',
          message:
            '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
          postImg: 'https://picsum.photos/id/238/200'
        },
        {
          postId: null,
          userImg: 'https://randomuser.me/api/portraits/men/32.jpg',
          userName: 'NATAWAT SONGNUAN',
          date: '23 sep 2020',
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          postImg: 'https://picsum.photos/id/239/200',
          readmore: false
        },
        {
          postId: null,
          userImg: 'https://randomuser.me/api/portraits/men/32.jpg',
          userName: 'NATAWAT SONGNUAN',
          date: '23 sep 2020',
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          postImg: 'https://picsum.photos/id/240/200',
          readmore: false
        },
        {
          postId: null,
          userImg: 'https://randomuser.me/api/portraits/men/32.jpg',
          userName: 'NATAWAT SONGNUAN',
          date: '23 sep 2020',
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          postImg: 'https://picsum.photos/id/241/200',
          readmore: false
        },
        {
          postId: null,
          userImg: 'https://randomuser.me/api/portraits/men/32.jpg',
          userName: 'NATAWAT SONGNUAN',
          date: '23 sep 2020',
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          postImg: 'https://picsum.photos/id/242/200',
          readmore: false
        },
        {
          postId: null,
          userImg: 'https://randomuser.me/api/portraits/men/32.jpg',
          userName: 'NATAWAT SONGNUAN',
          date: '23 sep 2020',
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          postImg: 'https://picsum.photos/id/243/200',
          readmore: false
        },
        {
          postId: null,
          userImg: 'https://randomuser.me/api/portraits/men/32.jpg',
          userName: 'NATAWAT SONGNUAN',
          date: '23 sep 2020',
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          postImg: 'https://picsum.photos/id/244/200',
          readmore: false
        },
        {
          postId: null,
          userImg: 'https://randomuser.me/api/portraits/men/32.jpg',
          userName: 'NATAWAT SONGNUAN',
          date: '23 sep 2020',
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          postImg: 'https://picsum.photos/id/247/200',
          readmore: false
        },
        {
          postId: null,
          userImg: 'https://randomuser.me/api/portraits/men/32.jpg',
          userName: 'NATAWAT SONGNUAN',
          date: '23 sep 2020',
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          postImg: 'https://picsum.photos/id/250/200',
          readmore: false
        },
        {
          postId: null,
          userImg: 'https://randomuser.me/api/portraits/men/32.jpg',
          userName: 'NATAWAT SONGNUAN',
          date: '23 sep 2020',
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          postImg: 'https://picsum.photos/id/277/200',
          readmore: false
        },
        {
          postId: null,
          userImg: 'https://randomuser.me/api/portraits/men/32.jpg',
          userName: 'NATAWAT SONGNUAN',
          date: '23 sep 2020',
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          postImg: 'https://picsum.photos/id/218/200',
          readmore: false
        }
      ],
      readMoreActivated: false,
      menu: ['Edit', 'Delete']
    }
  },
  methods: {
    onClickback () {
      window.history.back()
    },
    activateReadMore (postId) {
      this.postDetail.forEach(post => {
        if (post.postId === postId) {
          post.readmore = true
        }
      })
    },
    setId () {
      var postElement = document.querySelectorAll('.post')
      for (var i = 0; i < postElement.length; i++) {
        postElement[i].id = 'post' + i
        this.postDetail[i].postId = 'post' + i
      }
    },
    scrollTo () {
      const elmnt = document.getElementById(this.$route.query.id)
      elmnt.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' })
    }
  },

  async mounted () {
    await this.setId()
    this.scrollTo()
  }

}
</script>

<style lang="scss">
@import "../../assets/style/style.css";
</style>
