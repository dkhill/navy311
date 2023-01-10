<template>
  <div class="center_container">
    <v-container fluid>
      <template>
          <v-card class="niaps_container_card">
            <v-toolbar flat color="#072F5F" dark>
                <v-toolbar-title><h4 class="toolTitle">Public Document Library</h4></v-toolbar-title>
            </v-toolbar>
            <v-row justify="center">
                                  <!-- Public Documents -->
                <v-col cols="11">
                    <v-card>
                        <v-toolbar flat color="#072F5F" dark>
                            <v-toolbar-title><h4 class="toolTitle">Public Documents</h4></v-toolbar-title>
                        </v-toolbar>
                        <v-simple-table>
                            <template v-slot:default>
                            <thead>
                                <tr>
                                <th class="text-left">
                                    Document
                                </th>
                                <th class="text-left">
                                    Type
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr @click="show(document.link)" v-for="document in public_documents" :key="document.title">
                                    <td class="item_name">{{ document.title }}</td>
                                    <td>{{ document.file_type }}</td>
                                </tr>
                            </tbody>
                            </template>
                        </v-simple-table>
                    </v-card>
                </v-col>
            </v-row>
                               <!-- Publishing Images -->
            <v-row justify="center">
                <v-col cols="11">
                    <v-card>
                    <v-toolbar flat color="#072F5F" dark>
                        <v-toolbar-title><h4 class="toolTitle">Publishing Images</h4></v-toolbar-title>
                    </v-toolbar>
                        <v-simple-table>
                            <template v-slot:default>
                            <thead>
                                <tr>
                                <th class="text-left">
                                    Name
                                </th>
                                <th class="text-left">
                                    Size
                                </th>
                                <th class="text-left">
                                    Type
                                </th>
                                <th class="text-left">
                                    Preview
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr @click="show(link.download_link)" v-for="link in image_links" :key="link">
                                    <td class="item_name">{{ link.title }}</td>
                                    <td>{{ link.file_size }}</td>
                                    <td>{{ link.format }}</td>
                                    <td><v-img :src="link.picture_link"></v-img></td>
                                </tr>
                            </tbody>
                            </template>
                        </v-simple-table>
                    </v-card>
                </v-col>
            </v-row>
          </v-card>
      </template>
    </v-container>
    <h1 class="wdn-text-hidden">Public Documnets and Publishing Images</h1>
  </div>
</template>

<script>
export default {
    name: 'PublicDocuments',
    methods: {
      show: function (link) {
        window.open(link);
      }
    },
    data: function () {
      return {
        image_links: [
          { title: "NAVY 311 logo with slogan", format: "Format:  JPG", file_size: "File size: 9.28 KB", download_link: "/PublishingImages/page_images2/Navy311_Logo-Blue_White.jpg", picture_link: "/PublishingImages/page_images2/Blue_White_Logo_Icon_With_Slogan.gif" },
          { title: "NAVY 311 logo, no slogan", format: "Format:  GIF", file_size: "Picture size: 855 pixels x 750 pixels", download_link: "/PublishingImages/page_images2/Navy_311_Reverse_Color_Sailor_Number_Only.gif", picture_link: "/PublishingImages/page_images2/Blue_Logo_Icon__Transparent_No_Slogan.gif" },
          { title: "NAVY 311 logo, no slogan, number only", format: "Format:  GIF", file_size: "File size: 5.6 KB", download_link: "/PublishingImages/page_images2/Navy_311_Logo_Sailor_Number_Only.gif", picture_link: "/PublishingImages/page_images2/Navy_311_Logo_Icon_Sailor_Number_Only.gif" },
          { title: "NAVY 311 logo, no slogan", format: "Format:  PNG", file_size: "File size: 16.8 KB", download_link: "/PublishingImages/page_images2/Navy311_Logo_Reversed_Logo1.png", picture_link: "/PublishingImages/page_images2/Blue_Logo_Icon__Transparent_No_Slogan.gif" },
          { title: "NAVY 311 logo, with slogan", format: "Format:  PNG", file_size: "File size: 15.9 KB", download_link: "/PublishingImages/page_images2/Navy311_Logo_Reversed_Logo2.png", picture_link: "/PublishingImages/page_images2/Navy311_PNG_Logo1.jpg" },
          { title: "NAVY 311 logo, with slogan, phone number, email and website addresses", format: "Format:  PNG", file_size: "File size: 27.4 KB", download_link: "/PublishingImages/page_images2/Navy311_Logo_Reversed_Logo3.png", picture_link: "/PublishingImages/page_images2/Navy311_PNG_Logo2.jpg" },
          { title: "NAVY 311 logo with slogan", format: "Format:  EPS", file_size: "File size: 56.3 KB", download_link: "/PublishingImages/page_images2/Navy_311_Logo_Slogan_Only.eps", picture_link: "/PublishingImages/page_images2/Blue_White_Logo_Icon_With_Slogan.gif" },
          { title: "NAVY 311 logo with slogan and contact info", format: "Format:  AI", file_size: "File size: 104 KB", download_link: "/PublishingImages/page_images2/Navy_311_Logo_Square_3_Lines_Vectorized.ai", picture_link: "/PublishingImages/page_images2/Blue_White_Logo_Icon_With_Slogan_POC.gif" },
          { title: "NAVY 311 logo, white picture/number only", format: "Format:  AI", file_size: "File size: 104 KB", download_link: "/PublishingImages/page_images2/Navy_311_Logo_Transparent_SailorAndNumber_Only.ai", picture_link: "/PublishingImages/page_images2/Navy_311_Logo_Icon_Transparent_SailorAndNumber_Only.gif" },
          { title: "NAVY 311 All Access Poster", format: "Format:  PDF", file_size: "File size: 2.62 MB", download_link: "/Public%20Documents/Poster2_All_Access.pdf", picture_link: "/PublishingImages/page_images2/Poster-All_Access.jpg" },
          { title: "NAVY 311 Stencil Poster", format: "Format:  PDF", file_size: "File size: 1.9 MB", download_link: "/Public%20Documents/Poster1_Stencil.pdf", picture_link: "/PublishingImages/page_images2/Poster-Stencil.jpg" },
          { title: "NAVY 311 Tri-Fold Brochure", format: "Format:  Microsoft Publisher Document", file_size: "File size: 2.19 MB", download_link: "/Public%20Documents/NAVY_311_Tri-fold(03232017).pub", picture_link: "/PublishingImages/page_images2/NAVY_311_Tri-fold(03232017).jpg" },
          { title: "NAVY 311 All Access Half-Page Ad", format: "Format:  PDF", file_size: "File size: 160 KB", download_link: "/Public%20Documents/Ad2_All_Access.pdf", picture_link: "/PublishingImages/page_images2/Ad-All_Access.jpg" },
          { title: "NAVY 311 All Access Half-Page Ad", format: "Format:  PDF", file_size: "File size: 180 KB", download_link: "/Public%20Documents/Ad1_Stencil.pdf", picture_link: "/PublishingImages/page_images2/Ad-Stencil.jpg" }
        ],
        public_documents: [
            { title: "AAAI Paper - Machine Learning US Navy", link: "/Public Documents/AAAI Paper - Machine Learning US Navy - Powell, Rotz, & O'Malley.pdf", file_type: "PDF" },
            { title: "Ad1 Stencil", link: "/Public Documents/Ad1_Stencil.pdf", file_type: "PDF" },
            { title: "Ad2 All Access", link: "/Public Documents/Ad2_All_Access.pdf", file_type: "PDF" },
            { title: "NAVY 311 Tri Fold (03232017)", link: "/Public Documents/NAVY_311_Tri-fold(03232017).pub", file_type: "PUB" },
            { title: "Poster 1 Stencil", link: "/Public Documents/Poster1_Stencil.pdf", file_type: "PDF" },
            { title: "Poster 2 All Access", link: "/Public Documents/Poster2_All_Access.pdf", file_type: "PDF" }
        ]
      }
    }
}
</script>
<style lang="scss">
.title_buffer_mobile{
    margin: 10px;
}
.title_buffer{
    text-align: center;
    margin-left: 40px;
    margin-right: 40px;
}
.high_level_card{
    padding-bottom: 10px;
}
.other_info{
    margin-top: 15px;
    padding-bottom: 10px;
}
.card_buffer{
    margin: 10px;
}
.row_two_container{
    margin-left: 20px;
    margin-right: 20px;
}
.niaps_container{
    text-align: center;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 20px;
}
.wdn-text-hidden{
  visibility: hidden;
}
.center_container{
    max-width: 1000px;
    margin: 0 auto;
}
.toolTitle{
  font-weight: 400;
}
.topcards{
    height: 400px;
    width: 100%;
  }
  .topcardsMobile{
    height: 415px;
    width: 100%;
  }
  .tab-description{
    margin-left: 10px;
    margin-right: 10px;
    font-weight: 600;
  }
  .image-cards{
    margin: 10px;
  }
  .imageinfo{
    font-size: 11px;
    color: #000000;
  }
  div.v-list-item{
    padding: 4px;
  }
  .custSubtitle{
    font-style: oblique;
    font-size: 14px;
    padding: 5px;
  }
  .custtitle{
    font-size: 20px;
  }
  .topCardsContent{
    height: 335px;
    overflow-y:auto;
  }
  .topCardsContentMobile{
    height: 358px;
    overflow-y:auto;
  }
  .item_name {
    text-decoration: underline;
  }
</style>