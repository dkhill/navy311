<template>
  <div class="center_container">
    <h1 class="wdn-text-hidden">Resources Page</h1>
    <v-container fluid>
      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-row>
          <!-- Documentation Card Desktop -->
          <v-col cols="6">
            <v-card class="topcards">
              <v-toolbar flat color="#072F5F" dark>
                <v-toolbar-title>
                  <h4 class="toolTitle">Documentation</h4>
                </v-toolbar-title>
              </v-toolbar>
              <div class="topCardsContent">
                <v-list-item v-for="(link, idx) in documentation_links" :key="idx" two-line>
                  <v-list-item-content>
                    <a :href="link.link_src" target="_blank">
                      <div class="custtitle">{{ link.link_text }}</div>
                    </a>
                    <div class="custSubtitle">{{ link.link_description }}</div>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <a href="/publicdocuments">
                      <div class="custtitle">Public Document Library</div>
                    </a>
                    <div class="custSubtitle">Access NAVY 311 Fact Sheets, Summaries, Overviews, FAQs, Posters and Advertisements</div>
                  </v-list-item-content>
                </v-list-item>
                <div v-for="(cat, idx) in image_categories" :key="idx">
                  <p class="mb-0 tab-description">{{ cat.title }}</p>
                  <v-divider></v-divider>
                  <div v-for="(link, idx) in image_links" :key="idx">
                    <v-card v-if="link.type == cat.type" outlined class="image-cards">
                      <v-list-item four-line>
                        <v-list-item-content>
                          <div class="mb-0 imageinfo">{{ link.title }}</div>
                          <div class="mb-0 imageinfo">{{ link.format }}</div>
                          <div class="mb-0 imageinfo">{{ link.pic_size }}</div>
                          <div class="mb-0 imageinfo">{{ link.file_size }}</div>
                        </v-list-item-content>
                        <v-list-item-avatar tile size="55">
                          <a :href="link.download_link" target="_blank" :aria-label="link.title"><v-img :src="link.picture_link"></v-img></a>
                        </v-list-item-avatar>
                      </v-list-item>
                    </v-card>
                  </div>
                </div>
              </div>
            </v-card>
          </v-col>
          <!-- User Guides Card Desktop -->
          <v-col cols="6">
            <v-card class="topcards">
              <v-toolbar flat color="#072F5F" dark>
                <v-toolbar-title>
                  <h4 class="toolTitle">User Guides</h4>
                </v-toolbar-title>
              </v-toolbar>
              <div class="topCardsContent">
                <v-list-item v-for="(link, idx) in user_guide_links" :key="idx" two-line>
                  <v-list-item-content>
                    <a :href="link.link_src" target="_blank">
                      <div class="custtitle">{{ link.link_text }}</div>
                    </a>
                    <div class="custSubtitle">{{ link.link_description }}</div>
                  </v-list-item-content>
                </v-list-item>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <!-- Support Community Provider Links Search Bar Desktop -->
        <v-row>
          <v-col cols="11">
            <v-autocomplete light autocomplete="username" aria-label="search support provider links" v-model="selected" return-object filled rounded label="Search The Support Community Provider Links" :items="support_community_provider_links_search"></v-autocomplete>
          </v-col>
          <v-col cols="1">
            <v-btn class="searchLink" v-on:click="show">Visit</v-btn>
          </v-col>
        </v-row>
        <!-- Support Community Provider Links -->
        <v-row>
          <v-col cols="12">
            <v-card class="tabs-card">
              <v-toolbar flat color="#072F5F" dark>
                <v-toolbar-title>
                  <h4 class="toolTitle">NAVY 311 Support Community Provider Links</h4>
                </v-toolbar-title>
              </v-toolbar>
              <v-tabs color="#072F5F" show-arrows>
                <v-tab>Equipment/Maintenance</v-tab>
                <v-tab-item>
                  <p class="boldBlue">Navy engineering system support providers, including shipboard and shore based technologies such as command, control, communications and combat systems.</p>
                  <ul style="list-style-type:none;">
                    <li>
                      <ul style="list-style-type:disc;">
                        <li v-for="(link, idx) in equipment_maintenance_tab" :key="idx">
                          <a :id="'outbound_link_' + idx" :alt="link.text" :href="link.value" target="_blank">{{ link.text }}</a><span style="color:red">{{ link.legend }}</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </v-tab-item>
                <v-tab>Personnel/Manpower</v-tab>
                <v-tab-item>
                  <p class="boldBlue">Navy manpower and personnel support providers, such as pay, benefits, records and leave.</p>
                  <ul style="list-style-type:none;">
                    <li>
                      <ul style="list-style-type:disc;">
                        <li v-for="(link, idx) in personel_manpower_tab" :key="idx">
                          <a :id="'outbound_link_' + idx" :alt="link.text" :href="link.value" target="_blank">{{ link.text }}</a><span style="color:red">{{ link.legend }}</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </v-tab-item>
                <v-tab>Supply and Logistics</v-tab>
                <v-tab-item>
                  <p class="boldBlue">Navy inventory supply system related support providers, including material management services and global logistics services.</p>
                  <ul style="list-style-type:none;">
                    <li>
                      <ul style="list-style-type:disc;">
                        <li v-for="(link, idx) in supply_and_logistics_tab" :key="idx">
                          <a :id="'outbound_link_' + idx" :alt="link.text" :href="link.value" target="_blank">{{ link.text }}</a><span style="color:red">{{ link.legend }}</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </v-tab-item>
                <v-tab>Training and Education</v-tab>
                <v-tab-item>
                  <p class="boldBlue">Navy training and education support providers including mandatory government training and career development courses.</p>
                  <ul style="list-style-type:none;">
                    <li>
                      <ul style="list-style-type:disc;">
                        <li v-for="(link, idx) in training_and_education_tab" :key="idx">
                          <a :id="'outbound_link_' + idx" :alt="link.text" :href="link.value" target="_blank">{{ link.text }}</a><span style="color:red">{{ link.legend }}</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </v-tab-item>
                <v-tab>Ordnance</v-tab>
                <v-tab-item>
                  <p class="boldBlue">Navy weapons support providers including supplies, munitions, combat vehicles, maintenance tools and equipment.</p>
                  <ul style="list-style-type:none;">
                    <li>
                      <ul style="list-style-type:disc;">
                        <li v-for="(link, idx) in ordnance_tab" :key="idx">
                          <a :id="'outbound_link_' + idx" :alt="link.text" :href="link.value" target="_blank">{{ link.text }}</a><span style="color:red">{{ link.legend }}</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </v-tab-item>
                <v-tab>Medical</v-tab>
                <v-tab-item>
                  <p class="boldBlue">Navy medical service support providers including veterans hospitals, clinics/activities and medical related training.</p>
                  <ul style="list-style-type:none;">
                    <li>
                      <ul style="list-style-type:disc;">
                        <li v-for="(link, idx) in medical_tab" :key="idx">
                          <a :id="'outbound_link_' + idx" :alt="link.text" :href="link.value" target="_blank">{{ link.text }}</a><span style="color:red">{{ link.legend }}</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </v-tab-item>
                <v-tab>Installations / Facilities</v-tab>
                <v-tab-item>
                  <p class="boldBlue">Navy installations and facilities support providers including capital improvements, environmental and public works.</p>
                  <ul style="list-style-type:none;">
                    <li>
                      <ul style="list-style-type:disc;">
                        <li v-for="(link, idx) in installations_facilities_tab" :key="idx">
                          <a :id="'outbound_link_' + idx" :alt="link.text" :href="link.value" target="_blank">{{ link.text }}</a><span style="color:red">{{ link.legend }}</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </v-tab-item>
                <v-tab>Networks and Computers</v-tab>
                <v-tab-item>
                  <p class="boldBlue">Navy enterprise network connectivity and related managed workstations and applications (including Shipboard, NMCI, NGEN, ONE-NET, RDT&E, Data Centers and excepted networks).</p>
                  <ul style="list-style-type:none;">
                    <li>
                      <ul style="list-style-type:disc;">
                        <li v-for="(link, idx) in networks_and_computers_tab" :key="idx">
                          <a :id="'outbound_link_' + idx" :alt="link.text" :href="link.value" target="_blank">{{ link.text }}</a><span style="color:red">{{ link.legend }}</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </v-tab-item>
                <v-tab>Other</v-tab>
                <v-tab-item>
                  <p class="boldBlue">Other Navy support sites that do not fit into one of the PESTOMIN categories above.</p>
                  <ul style="list-style-type:none;">
                    <li>
                      <ul style="list-style-type:disc;">
                        <li v-for="(link, idx) in other_tab" :key="idx">
                          <a :id="'outbound_link_' + idx" :alt="link.text" :href="link.value" target="_blank">{{ link.text }}</a><span style="color:red">{{ link.legend }}</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </v-tab-item>
              </v-tabs>
              <div class="legend"><span style="color:red">*</span> Authentication required to access all or portions of the site.</div>
              <div class="legend"><span style="color:red">†</span> Not accessible from commercial networks, please visit this site from an approved network such as NMCI.</div>
            </v-card>
          </v-col>
        </v-row>
      </template>
      <template v-else>
        <!-- Documentation Card Mobile -->
        <v-row>
          <v-col cols="12">
            <v-card class="topcardsMobile">
              <v-toolbar flat color="#072F5F" dark>
                <v-toolbar-title>
                  <h4 class="toolTitle">Documentation</h4>
                </v-toolbar-title>
              </v-toolbar>
              <div class="topCardsContentMobile">
                <v-list-item v-for="(link, idx) in documentation_links" :key="idx" two-line>
                  <v-list-item-content>
                    <a :href="link.link_src" target="_blank">
                      <div class="custtitle">{{ link.link_text }}</div>
                    </a>
                    <div class="custSubtitle">{{ link.link_description }}</div>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <a href="/publicdocuments">
                      <div class="custtitle">Public Document Library</div>
                    </a>
                    <div class="custSubtitle">Access NAVY 311 Fact Sheets, Summaries, Overviews, FAQs, Posters and Advertisements</div>
                  </v-list-item-content>
                </v-list-item>
                <div v-for="(cat, idx) in image_categories" :key="idx">
                  <p class="mb-0 tab-description">{{ cat.title }}</p>
                  <v-divider></v-divider>
                  <div v-for="(link, idx) in image_links" :key="idx">
                    <v-card v-if="link.type == cat.type" outlined class="image-cards">
                      <v-list-item four-line>
                        <v-list-item-content>
                          <div class="mb-0 imageinfo">{{ link.title }}</div>
                          <div class="mb-0 imageinfo">{{ link.format }}</div>
                          <div class="mb-0 imageinfo">{{ link.pic_size }}</div>
                          <div class="mb-0 imageinfo">{{ link.file_size }}</div>
                        </v-list-item-content>
                        <v-list-item-avatar tile size="55">
                          <a :href="link.download_link" target="_blank" :aria-label="link.title"><v-img :src="link.picture_link"></v-img></a>
                        </v-list-item-avatar>
                      </v-list-item>
                    </v-card>
                  </div>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <!-- User Guides Card Mobile -->
        <v-row>
          <v-col cols="12">
            <v-card class="topcardsMobile">
              <v-toolbar flat color="#072F5F" dark>
                <v-toolbar-title>
                  <h4 class="toolTitle">User Guides</h4>
                </v-toolbar-title>
              </v-toolbar>
              <div class="topCardsContentMobile">
                <v-list-item v-for="(link, idx) in user_guide_links" :key="idx" two-line>
                  <v-list-item-content>
                    <a :href="link.link_src" target="_blank">
                      <div class="custtitle">{{ link.link_text }}</div>
                    </a>
                    <div class="custSubtitle">{{ link.link_description }}</div>
                  </v-list-item-content>
                </v-list-item>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <!-- Support Community Provider Links Search Bar Mobile -->
        <v-row>
          <v-col cols="10">
            <v-autocomplete autocomplete="username" v-model="selected" return-object filled rounded label="Search The Support Community Provider Links" :items="support_community_provider_links_search"></v-autocomplete>
          </v-col>
          <v-col cols="2">
            <v-btn class="searchLink" v-on:click="show">Visit</v-btn>
          </v-col>
        </v-row>
        <!-- Support Community Provider Links -->
        <v-row>
          <v-col cols="12">
            <v-card class="serviceCardsMobile">
              <v-toolbar flat color="#072F5F" dark>
                <v-toolbar-title>
                  <h4 class="toolTitle">Support Community Provider Links</h4>
                </v-toolbar-title>
              </v-toolbar>
              <p></p>
              <v-expansion-panels popout focusable>
                <v-expansion-panel>
                  <v-expansion-panel-header>Personnel/Manpower</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p class="boldBlue">Navy manpower and personnel support providers, such as pay, benefits, records and leave.</p>
                    <ul style="list-style-type:none;">
                      <li>
                        <ul style="list-style-type:disc;">
                          <li v-for="(link, idx) in personel_manpower_tab" :key="idx">
                            <a id="outbound_link" :href="link.value" target="_blank">{{ link.text }}</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header>Equipment/Maintenance</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p class="boldBlue">Navy engineering system support providers, including shipboard and shore based technologies such as command, control, communications and combat systems.</p>
                    <ul style="list-style-type:none;">
                      <li>
                        <ul style="list-style-type:disc;">
                          <li v-for="(link, idx) in equipment_maintenance_tab" :key="idx">
                            <a id="outbound_link" :href="link.value" target="_blank">{{ link.text }}</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header>Supply and Logistics</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p class="boldBlue">Navy inventory supply system related support providers, including material management services and global logistics services.</p>
                    <ul style="list-style-type:none;">
                      <li>
                        <ul style="list-style-type:disc;">
                          <li v-for="(link, idx) in supply_and_logistics_tab" :key="idx"><a id="outbound_link" :href="link.value" target="_blank">{{ link.text }}</a></li>
                        </ul>
                      </li>
                    </ul>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header>Training and Education</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p class="boldBlue">Navy training and education support providers including mandatory government training and career development courses.</p>
                    <ul style="list-style-type:none;">
                      <li>
                        <ul style="list-style-type:disc;">
                          <li v-for="(link, idx) in training_and_education_tab" :key="idx">
                            <a id="outbound_link" :href="link.value" target="_blank">{{ link.text }}</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header>Ordnance</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p class="boldBlue">Navy weapons support providers including supplies, munitions, combat vehicles, maintenance tools and equipment.</p>
                    <ul style="list-style-type:none;">
                      <li>
                        <ul style="list-style-type:disc;">
                          <li v-for="(link, idx) in ordnance_tab" :key="idx">
                            <a id="outbound_link" :href="link.value" target="_blank">{{ link.text }}</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header>Medical</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p class="boldBlue">Navy medical service support providers including veterans hospitals, clinics/activities and medical related training.</p>
                    <ul style="list-style-type:none;">
                      <li>
                        <ul style="list-style-type:disc;">
                          <li v-for="(link, idx) in medical_tab" :key="idx"><a id="outbound_link" :href="link.value" target="_blank">{{ link.text }}</a></li>
                        </ul>
                      </li>
                    </ul>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header>Installations/Facilities</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p class="boldBlue">Navy installations and facilities support providers including capital improvements, environmental and public works.</p>
                    <ul style="list-style-type:none;">
                      <li>
                        <ul style="list-style-type:disc;">
                          <li v-for="(link, idx) in installations_facilities_tab" :key="idx"><a id="outbound_link" :href="link.value" target="_blank">{{ link.text }}</a></li>
                        </ul>
                      </li>
                    </ul>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header>Networks and Computers</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p class="boldBlue">Navy enterprise network connectivity and related managed workstations and applications (including Shipboard, NMCI, NGEN, ONE-NET, RDT&E, Data Centers and excepted networks).</p>
                    <ul style="list-style-type:none;">
                      <li>
                        <ul style="list-style-type:disc;">
                          <li v-for="(link, idx) in networks_and_computers_tab" :key="idx"><a id="outbound_link" :href="link.value" target="_blank">{{ link.text }}</a></li>
                        </ul>
                      </li>
                    </ul>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header>Other</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p class="boldBlue">Other Navy support sites that do not fit into one of the PESTOMIN categories above.</p>
                    <ul style="list-style-type:none;">
                      <li>
                        <ul style="list-style-type:disc;">
                          <li v-for="(link, idx) in other_tab" :key="idx"><a id="outbound_link" :href="link.value" target="_blank">
                              {{ link.text }}</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-container>
    <v-dialog v-model="dialog_mobile_warning" max-width="400">
      <v-card>
        <v-card-title class="headline">WARNING PKI Protected</v-card-title>
        <v-card-text>The resource you are attempting to access requires a CAC card to access. Unless your phone supports this functionality you will not be able to access it.</v-card-text>
        <div class="dialogbuttons">
          <v-btn v-on:click="dialog_mobile_warning = false"><span id="service_link_spd_cac" class="v-btn__content">Go Back</span></v-btn>
          <v-btn v-on:click="visitCacMobile(), dialog_mobile_warning = false"><span class="v-btn__content">Proceed</span></v-btn>
        </div>
      </v-card>
    </v-dialog>
    <h1 class="wdn-text-hidden">Resources Page</h1>
  </div>
</template>

<script>
export default {
  name: 'ResourcePage',
  beforeDestroy() {
    if (typeof window === 'undefined') return
    window.removeEventListener('resize', this.onResize, { passive: true })
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    visit: function (link) {
      if (this.cac_enabled.includes(link) && this.isMobile === true) {
        this.dialog_mobile_warning = true;
        this.mobileLink = link;
      } else {
        window.open(link);
      }
    },
    visitCacMobile: function () {
      window.open(this.mobileLink);
    },
    onResize() {
      this.isMobile = window.innerWidth < 600
    },
    show: function () {
      if (this.selected.text != 'None') {
        this.$ga.event('Outbound Link', this.selected.value, this.selected.text, 0);
        this.visit(this.selected.value);
      }
    }
  },
  data: function () {
    return {
      dialog_mobile_warning: false,
      mobileLink: 'None',
      isMobile: false,
      cac_enabled: [
        'https://ds-itsmweb.dc3n.navy.mil/kinetic/DisplayPage?name=CVR_Request',
        'https://ds-itsmweb.dc3n.navy.mil/kinetic/DisplayPage?name=EmailRequest',
        'https://ds-itsmweb.dc3n.navy.mil/kinetic/DisplayPage?name=NAVY311_Catalog&look=table&view=submissions&type=requests#My%20Open%20Requests',
        'https://ds-itsmweb.dc3n.navy.mil/kinetic/DisplayPage?name=SPD_Search',
        'https://ds-itsmweb.dc3n.navy.mil/arsys/forms/ds-itsmapp/A_SDE+ECRM+Directory+Management+Console/',
        'https://ds-customer.dc3n.navy.mil/navy311/Navy311_Desktop_Icon_Installer.msi',
        'https://ds-itsmweb.dc3n.navy.mil/kinetic/DisplayPage?name=FleetCOSAL_Request',
        'https://ds-report.dc3n.navy.mil/BOE/BI/',
        'https://ds-report.dc3n.navy.mil/navy311/docs/NAVY_311_System_Access_Request_External.pdf',
        'https://ds-customer.dc3n.navy.mil/navy311/',
        'https://ds-itsmweb.dc3n.navy.mil/kinetic/DisplayPage?name=Customer_Chat',
        'https://ds-itsmweb.dc3n.navy.mil/kinetic/DisplayPage?name=AIR_Request',
        'https://ds-report.dc3n.navy.mil/navy311/spd-manager.htm',
        'https://ds-report.dc3n.navy.mil/navy311/collaboration.htm',
        'https://neitsm.dc3n.navy.mil/arsys',
        'https://nsdsa.dc3n.navy.mil/csoss',
        'https://nsdsa.dc3n.navy.mil',
        'https://nossa.dc3n.navy.mil'
      ],
      selected: {},
      personel_manpower_tab: [
        {
          text: "Career Management System - Interactive Detailing (CMS-ID)",
          value: "https://www.cmsid.navy.mil/",
          tab_title: "Personnel/Manpower",
          legend: " *"
        },
        {
          text: "Defense Travel System (DTS)",
          value: "https://dtsproweb.defensetravel.osd.mil/dts-app/pubsite/all/view/",
          tab_title: "Personnel/Manpower",
          legend: " *"
        },
        {
          text: "DoN Travel and Purchase Card Program Office",
          value: "https://www.navsup.navy.mil/ccpmd",
          tab_title: "Personnel/Manpower",
          legend: ""
        },
        {
          text: "Fleet and Family Support Center",
          value: "https://www.cnic.navy.mil/ffr/family_readiness.html",
          tab_title: "Personnel/Manpower",
          legend: ""
        },
        {
          text: "Intelligence Community Wounded Warrior Program (ICWWP)",
          value: "http://www.dia.mil/Careers/Wounded-Warrior-Internship-Program/",
          tab_title: "Personnel/Manpower",
          legend: ""
        },
        {
          text: "MyNavy HR",
          value: "https://www.mynavyhr.navy.mil/",
          tab_title: "Personnel/Manpower",
          legend: ""
        },
        {
          text: "Navy Civilian Human Resources",
          value: "http://www.secnav.navy.mil/donhr",
          tab_title: "Personnel/Manpower",
          legend: ""
        },
        {
          text: "Navy Household Goods Help Desk",
          value: "https://www.navsup.navy.mil/household/",
          tab_title: "Personnel/Manpower",
          legend: ""
        },
        {
          text: "Navy Marine Corps Relief Society",
          value: "http://www.nmcrs.org/",
          tab_title: "Personnel/Manpower",
          legend: ""
        },
        {
          text: "Navy Personnel Command (NPC)",
          value: "https://www.mynavyhr.navy.mil/Navy-Personnel-Command/ ",
          tab_title: "Personnel/Manpower",
          legend: ""
        },
        {
          text: "Navy Standard Integrated Personnel System (NSIPS)",
          value: "https://nsipsprod.nmci.navy.mil/",
          tab_title: "Personnel/Manpower",
          legend: " *"
        },
        {
          text: "MyNavy Career Center (MNCC)",
          value: "https://www.mynavyhr.navy.mil/Support-Services/MyNavy-Career-Center/",
          tab_title: "Personnel/Manpower",
          legend: ""
        }
      ],
      equipment_maintenance_tab: [
        {
          text: "Combat System Operational Sequencing System (CSOSS)",
          value: "https://nsdsa.dc3n.navy.mil/csoss",
          tab_title: "Equipment/Maintenance",
          legend: " * †"
        },
        {
          text: "CRYPTOGRAPHIC Products and Services",
          value: "https://infosec.navy.mil/crypto",
          tab_title: "Equipment/Maintenance",
          legend: " *"
        },
        {
          text: "EOSS Feedback Requests",
          value: "https://navlogtd.navy.mil/EossFeedbackWeb/",
          tab_title: "Equipment/Maintenance",
          legend: " *"
        },
        {
          text: "Fleet Cosal Feedback Request (FCFBR)",
          value: "https://ds-itsmweb.dc3n.navy.mil/kinetic/DisplayPage?name=FleetCOSAL_Request",
          tab_title: "Equipment/Maintenance",
          legend: " *"
        },
        {
          text: "Military Engineering Data Asset Locator System (MEDALS)",
          value: "https://www.logisticsinformationservice.dla.mil/medals/Default.aspx",
          tab_title: "Equipment/Maintenance",
          legend: " *"
        },
        {
          text: "Naval Safety Center",
          value: "https://navalsafetycenter.navy.mil/",
          tab_title: "Equipment/Maintenance",
          legend: ""
        },
        {
          text: "Navy Data Environment (NDE)",
          value: "https://www.nde.navy.mil/",
          tab_title: "Equipment/Maintenance",
          legend: " *"
        },
        {
          text: "NTCSS/OOMA Support Request",
          value: "https://neitsm.dc3n.navy.mil/arsys",
          tab_title: "Equipment/Maintenance",
          legend: " *"
        },
        {
          text: "Revised Alternative Dataflow Web (RADWeb)",
          value: "https://radpac.cdmd.navy.mil/",
          tab_title: "Equipment/Maintenance",
          legend: " *"
        },
        {
          text: "Sailor 2.1",
          value: "https://sailor.navy.mil/",
          tab_title: "Equipment/Maintenance",
          legend: " *"
        },
        {
          text: "Sailor to Engineer",
          value: "https://help.phdnswc.nmci.navy.mil/",
          tab_title: "Equipment/Maintenance",
          legend: " * †"
        },
        {
          text: "Access Ships' 3M Information System web site",
          value: "https://oars.nslc.navy.mil/oars/docs/index.html",
          tab_title: "Equipment/Maintenance",
          legend: " *"
        },
        {
          text: "View/Download the Ships' 3-M Manual (NAVSEA Instruction 4790.8D, 17 June 2021)",
          value: "/Documents/Ships_3m_manual_04790.008D.pdf",
          tab_title: "Equipment/Maintenance",
          legend: " *"
        },
        {
          text: "Download the Ships' 3M Manual Change/Correction Request form",
          value: "/Documents/Ships 3-M_Manual_Change_Correction_Request.pdf",
          tab_title: "Equipment/Maintenance"
        },
        {
          text: "NAVWAR Technical Support",
          value: "https://supportweb.sscno.nmci.navy.mil/",
          tab_title: "Equipment/Maintenance",
          legend: " *"
        },
        {
          text: "Technical Data Management Information System (TDMIS)",
          value: "https://mercury.tdmis.navy.mil/",
          tab_title: "Equipment/Maintenance",
          legend: " *"
        },
        {
          text: "Technical Manual Deficiency Evaluation Report (TMDER)",
          value: "https://nsdsa.dc3n.navy.mil/",
          tab_title: "Equipment/Maintenance",
          legend: " * †"
        }
      ],
      supply_and_logistics_tab: [
        {
          text: "LogTool",
          value: "http://logtool.net/",
          tab_title: "Supply and Logistics",
          legend: ""
        },
        {
          text: "Naval Supply Systems Command",
          value: "https://www.navsup.navy.mil/navsup",
          tab_title: "Supply and Logistics",
          legend: ""
        },
        {
          text: "One-Touch",
          value: "https://www.onetouch.navy.mil/",
          tab_title: "Supply and Logistics",
          legend: " *"
        },
        {
          text: "Priority Material Office - Integrated Supply Information System",
          value: "https://pmohq.nmci.navy.mil/",
          tab_title: "Supply and Logistics",
          legend: ""
        }
      ],
      training_and_education_tab: [
        {
          text: "Defense Acquisition University (DAU)",
          value: "https://www.dau.edu/",
          tab_title: "Training and Education",
          legend: ""
        },
        {
          text: "MyNavy HR",
          value: "https://www.mynavyhr.navy.mil/",
          tab_title: "Training and Education",
          legend: ""
        },
        {
          text: "MyNavy Portal",
          value: "https://my.navy.mil/",
          tab_title: "Training and Education",
          legend: "*"
        },
        {
          text: "Naval Air Warfare Center Training Systems Division (NAWCTSD)",
          value: "http://www.navair.navy.mil/nawctsd/",
          tab_title: "Training and Education",
          legend: ""
        },
        {
          text: "Naval Education and Training Command (NETC)",
          value: "https://www.netc.navy.mil/",
          tab_title: "Training and Education",
          legend: ""
        },
        {
          text: "Navy Doctrine Library System (NDLS)",
          value: "https://doctrine.navy.mil",
          tab_title: "Training and Education",
          legend: " *"
        },
        {
          text: "Navy Flying Hour Projection System (FHPS) Access Request",
          value: "https://www.nslc.navsea.navy.mil/FHP/FHPS_Access_Request.pdf",
          tab_title: "Training and Education",
          legend: ""
        },
        {
          text: "Navy Personnel Command (NPC)",
          value: "https://www.mynavyhr.navy.mil/Navy-Personnel-Command/",
          tab_title: "Training and Education",
          legend: ""
        }
      ],
      ordnance_tab: [
        {
          text: "All Weapons Information System (AWIS)",
          value: "https://awis.navair.navy.mil/awis/gateway/ncnvismodules.asp",
          tab_title: "Ordnance",
          legend: " * †"
        },
        {
          text: "New LIDOL users send a digitally signed email to LIDOL help desk to request access.",
          value: "mailto:KYPT_WA_LIDOLInfoDesk@navy.mil",
          tab_title: "Ordnance",
          legend: " †"
        },
        {
          text: "Existing LIDOL users click here to access the site.",
          value: "https://lidol.nmci.navy.mil/",
          tab_title: "Ordnance",
          legend: " * †"
        },
        {
          text: "Naval Ordnance Maintenance Management Program (NOMMP)",
          value: "https://awis.navair.navy.mil/redshirt/index.html",
          tab_title: "Ordnance",
          legend: " †"
        },
        {
          text: "Public NOSSA Website",
          value: "http://www.navsea.navy.mil/Organization/NOSSA.aspx",
          tab_title: "Ordnance",
          legend: ""
        },
        {
          text: "Restricted NOSSA Website",
          value: "https://nossa.dc3n.navy.mil/",
          tab_title: "Ordnance",
          legend: " *"
        }
      ],
      medical_tab: [
        {
          text: "Bureau of Medicine and Surgery (BUMED)",
          value: "https://www.med.navy.mil/Pages/Default.aspx",
          tab_title: "Medical",
          legend: ""
        },
        {
          text: "Medical Electronic Library",
          value: "https://www.med.navy.mil/sites/nmcp/Dept/SitePages/Library/NMeL.aspx",
          tab_title: "Medical",
          legend: ""
        },
        {
          text: "Naval Medical Logistics Command (NAVMEDLOGCOM)",
          value: "http://www.med.navy.mil/sites/nmlc/",
          tab_title: "Medical",
          legend: ""
        },
        {
          text: "TRICARE",
          value: "https://www.tricare.mil/",
          tab_title: "Medical",
          legend: ""
        }
      ],
      installations_facilities_tab: [
        {
          text: "Commander, Navy Installations (CNIC)",
          value: "https://www.cnic.navy.mil/",
          tab_title: "Installations / Facilities",
          legend: ""
        },
        {
          text: "Naval Facilities Command (NAVFAC)",
          value: "http://www.navfac.navy.mil/",
          tab_title: "Installations / Facilities",
          legend: ""
        },
        {
          text: "Navy Housing",
          value: "http://www.cnic.navy.mil/ffr/housing.html",
          tab_title: "Installations / Facilities",
          legend: ""
        }
      ],
      networks_and_computers_tab: [
        {
          text: "Navy Enterprise Resource Management (N-ERP)",
          value: "http://www.erp.navy.mil/",
          tab_title: "Networks and Computers",
          legend: ""
        },
        {
          text: "Navy Marine Corps Intranet (NMCI)",
          value: "https://homeport.navy.mil/home/",
          tab_title: "Networks and Computers",
          legend: " *"
        },
        {
          text: "ONE-Net Public Site",
          value: "https://www.navifor.usff.navy.mil/ncts-yokosuka/",
          tab_title: "Networks and Computers",
          legend: ""
        },
        {
          text: "ONE-Net Middle East Service Desk",
          value: "https://servicedesk.me.navy.mil/",
          tab_title: "Networks and Computers",
          legend: " †"
        },
        {
          text: "ONE-Net Far East Service Desk",
          value: "https://servicedesk.fe.navy.mil/",
          tab_title: "Networks and Computers",
          legend: " †"
        },
        {
          text: "ONE-Net European Union Service Desk",
          value: "https://servicedesk.eu.navy.mil/",
          tab_title: "Networks and Computers",
          legend: " †"
        }
      ],
      other_tab: [
        {
          text: "Naval Inspector General - Report Fraud, Waste or Mismanagement",
          value: "http://www.secnav.navy.mil/ig/",
          tab_title: "Other",
          legend: ""
        },
        {
          text: "Navy.mil",
          value: "http://www.navy.mil/",
          tab_title: "Other",
          legend: ""
        },
        {
          text: "Navy Research Development and Acquisition (ASN RD&A)",
          value: "http://www.secnav.navy.mil/rda/Pages/default.aspx",
          tab_title: "Other",
          legend: ""
        },
        {
          text: "NAVWAR PEO EIS",
          value: "https://www.navwar.navy.mil/peo-digital-home",
          tab_title: "Other",
          legend: ""
        },
        {
          text: "NAVWAR PEO EIS - Sea Warrior Program",
          value: "https://www.navwar.navy.mil/peo-mln-portfolio",
          tab_title: "Other",
          legend: ""
        },
        {
          text: "U.S. Fleet Forces Command (USFF)",
          value: "https://www.usff.navy.mil/",
          tab_title: "Other",
          legend: ""
        }
      ],
      support_community_provider_links_search: [
        {
          text: "Career Management System - Interactive Detailing (CMS-ID)",
          value: "https://www.cmsid.navy.mil/",
          tab_title: "Personnel/Manpower"
        },
        {
          text: "Defense Travel System (DTS)",
          value: "https://dtsproweb.defensetravel.osd.mil/dts-app/pubsite/all/view/",
          tab_title: "Personnel/Manpower"
        },
        {
          text: "DoN Travel and Purchase Card Program Office",
          value: "https://www.navsup.navy.mil/ccpmd",
          tab_title: "Personnel/Manpower"
        },
        {
          text: "Fleet and Family Support Center",
          value: "https://www.cnic.navy.mil/ffr/family_readiness.html",
          tab_title: "Personnel/Manpower"
        },
        {
          text: "Intelligence Community Wounded Warrior Program (ICWWP)",
          value: "http://www.dia.mil/Careers/Wounded-Warrior-Internship-Program/",
          tab_title: "Personnel/Manpower"
        },
        {
          text: "MyNavy HR",
          value: "https://www.mynavyhr.navy.mil/",
          tab_title: "Personnel/Manpower"
        },
        {
          text: "Navy Civilian Human Resources",
          value: "http://www.secnav.navy.mil/donhr",
          tab_title: "Personnel/Manpower"
        },
        {
          text: "Navy Household Goods Help Desk",
          value: "https://www.navsup.navy.mil/household/",
          tab_title: "Personnel/Manpower"
        },
        {
          text: "Navy Marine Corps Relief Society",
          value: "http://www.nmcrs.org/",
          tab_title: "Personnel/Manpower"
        },
        {
          text: "Navy Standard Integrated Personnel System (NSIPS)",
          value: "https://nsipsprod.nmci.navy.mil/",
          tab_title: "Personnel/Manpower"
        },
        {
          text: "MyNavy Career Center (MNCC)",
          value: "https://www.mynavyhr.navy.mil/Support-Services/MyNavy-Career-Center/",
          tab_title: "Personnel/Manpower"
        },
        {
          text: "Combat System Operational Sequencing System (CSOSS)",
          value: "https://nsdsa.dc3n.navy.mil/csoss",
          tab_title: "Equipment/Maintenance"
        },
        {
          text: "CRYPTOGRAPHIC Products and Services",
          value: "https://infosec.navy.mil/crypto",
          tab_title: "Equipment/Maintenance"
        },
        {
          text: "EOSS Feedback Requests",
          value: "https://navlogtd.navy.mil/EossFeedbackWeb/",
          tab_title: "Equipment/Maintenance"
        },
        {
          text: "Fleet Cosal Feedback Request (FCFBR)",
          value: "https://ds-itsmweb.dc3n.navy.mil/kinetic/DisplayPage?name=FleetCOSAL_Request",
          tab_title: "Equipment/Maintenance"
        },
        {
          text: "Military Engineering Data Asset Locator System (MEDALS)",
          value: "https://www.logisticsinformationservice.dla.mil/medals/Default.aspx",
          tab_title: "Equipment/Maintenance"
        },
        {
          text: "Naval Safety Center",
          value: "https://navalsafetycenter.navy.mil/",
          tab_title: "Equipment/Maintenance"
        },
        {
          text: "Navy Data Environment (NDE)",
          value: "https://www.nde.navy.mil/",
          tab_title: "Equipment/Maintenance"
        },
        {
          text: "NTCSS/OOMA Support Request",
          value: "https://neitsm.dc3n.navy.mil/arsys",
          tab_title: "Equipment/Maintenance"
        },
        {
          text: "Revised Alternative Dataflow Web (RADWeb)",
          value: "https://radpac.cdmd.navy.mil/",
          tab_title: "Equipment/Maintenance"
        },
        {
          text: "Sailor 2.1",
          value: "https://sailor.navy.mil/",
          tab_title: "Equipment/Maintenance"
        },
        {
          text: "Sailor to Engineer",
          value: "https://help.phdnswc.nmci.navy.mil/",
          tab_title: "Equipment/Maintenance"
        },
        {
          text: "Access Ships' 3M Information System web site",
          value: "https://oars.nslc.navy.mil/oars/docs/index.html",
          tab_title: "Equipment/Maintenance"
        },
        {
          text: "Download the Ships' 3-M Manual (NAVSEA Instruction 4790.8D, 17 June 2021)",
          value: "https://www.navsea.navy.mil/Resources/Instructions/",
          tab_title: "Equipment/Maintenance"
        },
        {
          text: "Download the Ships' 3M Manual Change/Correction Request form",
          value: "/Documents/Public Documents/Ships 3-M_Manual_Change_Correction_Request.pdf",
          tab_title: "Equipment/Maintenance"
        },
        {
          text: "NAVWAR Technical Support",
          value: "https://supportweb.sscno.nmci.navy.mil/",
          tab_title: "Equipment/Maintenance"
        },
        {
          text: "Technical Data Management Information System (TDMIS)",
          value: "https://mercury.tdmis.navy.mil/",
          tab_title: "Equipment/Maintenance"
        },
        {
          text: "Technical Manual Deficiency Evaluation Report (TMDER)",
          value: "https://nsdsa.dc3n.navy.mil/",
          tab_title: "Equipment/Maintenance"
        },
        {
          text: "LogTool",
          value: "http://logtool.net/",
          tab_title: "Supply and Logistics"
        },
        {
          text: "Naval Supply Systems Command",
          value: "https://www.navsup.navy.mil/navsup",
          tab_title: "Supply and Logistics"
        },
        {
          text: "One-Touch",
          value: "https://www.onetouch.navy.mil/",
          tab_title: "Supply and Logistics"
        },
        {
          text: "Priority Material Office - Integrated Supply Information System",
          value: "https://pmohq.nmci.navy.mil/",
          tab_title: "Supply and Logistics"
        },

        {
          text: "Defense Acquisition University (DAU)",
          value: "https://www.dau.edu/",
          tab_title: "Training and Education"
        },
        {
          text: "MyNavy Portal",
          value: "https://my.navy.mil/",
          tab_title: "Training and Education"
        },
        {
          text: "MyNavy HR",
          value: "https://www.mynavyhr.navy.mil/",
          tab_title: "Training and Education"
        },
        {
          text: "Naval Air Warfare Center Training Systems Division (NAWCTSD)",
          value: "http://www.navair.navy.mil/nawctsd/",
          tab_title: "Training and Education"
        },
        {
          text: "Naval Education and Training Command (NETC)",
          value: "https://www.netc.navy.mil/",
          tab_title: "Training and Education"
        },
        {
          text: "Navy Doctrine Library System (NDLS)",
          value: "https://ndls.nwdc.navy.mil/",
          tab_title: "Training and Education"
        },
        {
          text: "Navy Flying Hour Projection System (FHPS) Access Request",
          value: "https://www.nslc.navsea.navy.mil/FHP/FHPS_Access_Request.pdf",
          tab_title: "Training and Education"
        },
        {
          text: "Navy Personnel Command (NPC)",
          value: "http://www.npc.navy.mil/",
          tab_title: "Training and Education"
        },
        {
          text: "All Weapons Information System (AWIS)",
          value: "https://awis.navair.navy.mil/awis/gateway/ncnvismodules.asp",
          tab_title: "Ordnance"
        },
        {
          text: "New LIDOL users send a digitally signed email to LIDOL help desk to request access.",
          value: "mailto:KYPT_WA_LIDOLInfoDesk@navy.mil",
          tab_title: "Ordnance"
        },
        {
          text: "Existing LIDOL users click here to access the site.",
          value: "https://lidol.nmci.navy.mil/",
          tab_title: "Ordnance"
        },
        {
          text: "Naval Ordnance Maintenance Management Program (NOMMP)",
          value: "https://awis.navair.navy.mil/redshirt/index.html",
          tab_title: "Ordnance"
        },
        {
          text: "Public NOSSA Website",
          value: "http://www.navsea.navy.mil/Organization/NOSSA.aspx",
          tab_title: "Ordnance"
        },
        {
          text: "Restricted NOSSA Website",
          value: "https://nossa.dc3n.navy.mil/",
          tab_title: "Ordnance"
        },
        {
          text: "Bureau of Medicine and Surgery (BUMED)",
          value: "https://www.med.navy.mil/Pages/Default.aspx",
          tab_title: "Medical"
        },
        {
          text: "Medical Electronic Library",
          value: "https://www.med.navy.mil/sites/nmcp/Dept/SitePages/Library/NMeL.aspx",
          tab_title: "Medical"
        },
        {
          text: "Naval Medical Logistics Command (NAVMEDLOGCOM)",
          value: "http://www.med.navy.mil/sites/nmlc/",
          tab_title: "Medical"
        },
        {
          text: "TRICARE",
          value: "https://www.tricare.mil/",
          tab_title: "Medical"
        },
        {
          text: "Commander, Navy Installations (CNIC)",
          value: "https://www.cnic.navy.mil/",
          tab_title: "Installations/Facilities"
        },
        {
          text: "Naval Facilities Command (NAVFAC)",
          value: "http://www.navfac.navy.mil/",
          tab_title: "Installations/Facilities"
        },
        {
          text: "Navy Housing",
          value: "http://www.cnic.navy.mil/ffr/housing.html",
          tab_title: "Installations/Facilities"
        },
        {
          text: "Navy Enterprise Resource Management (N-ERP)",
          value: "http://www.erp.navy.mil/",
          tab_title: "Networks and Computers"
        },
        {
          text: "Navy Marine Corps Intranet (NMCI)",
          value: "https://homeport.navy.mil/home/",
          tab_title: "Networks and Computers"
        },
        {
          text: "ONE-Net Public Site",
          value: "https://www.navifor.usff.navy.mil/ncts-yokosuka/",
          tab_title: "Networks and Computers"
        },
        {
          text: "ONE-Net Middle East Service Desk",
          value: "https://servicedesk.me.navy.mil/",
          tab_title: "Networks and Computers"
        },
        {
          text: "ONE-Net Far East Service Desk",
          value: "https://servicedesk.fe.navy.mil/",
          tab_title: "Networks and Computers"
        },
        {
          text: "ONE-Net European Union Service Desk",
          value: "https://servicedesk.eu.navy.mil/",
          tab_title: "Networks and Computers"
        },
        {
          text: "Naval Inspector General - Report Fraud, Waste or Mismanagement",
          value: "http://www.secnav.navy.mil/ig/",
          tab_title: "Other"
        },
        {
          text: "Navy.mil",
          value: "http://www.navy.mil/",
          tab_title: "Other"
        },
        {
          text: "Navy Research Development and Acquisition (ASN RD&A)",
          value: "http://www.secnav.navy.mil/rda/Pages/default.aspx",
          tab_title: "Other"
        },
        {
          text: "NAVWAR PEO EIS",
          value: "https://www.navwar.navy.mil/peo-digital-home",
          tab_title: "Other"
        },
        {
          text: "NAVWAR PEO EIS - Sea Warrior Program",
          value: "https://www.navwar.navy.mil/peo-mln-portfolio",
          tab_title: "Other"
        },
        {
          text: "U.S. Fleet Forces Command (USFF)",
          value: "https://www.usff.navy.mil/",
          tab_title: "Other"
        }
      ],
      documentation_links: [
        {
          link_src: "/Documents/CNO_Navy_DS_Support_Policy_22MAR2007.pdf",
          link_text: "Distance Support Policy Memo",
          link_description: "View the Navy enterprise, CNO endorsed, policy for using Distance Support"
        },
        {
          link_src: "/Documents/eCRM%20Documents/DS_SOS_Business_Rules_v5_0.pdf",
          link_text: "Distance Support Source of Support (SoS) Business Rules",
          link_description: "View the business rules that govern the NAVY 311 Customer Relationship Management (CRM) System"
        }
      ],

      image_categories: [
        {
          title: "Non-Vector Images (Formats: JPG, GIF, PNG)",
          type: "1"
        },
        {
          title: "Other NAVY 311 Public Affairs Office Documents",
          type: "2"
        }
      ],

      image_links: [
        {
          type: "1",
          title: "NAVY 311 logo with slogan",
          format: "Format:  JPG",
          pic_size: "Picture size: 190 pixels x 186 pixels",
          file_size: "File size: 9.28 KB",
          download_link: "/PublishingImages/page_images2/Navy311_Logo-Blue_White.jpg",
          picture_link: "/PublishingImages/page_images2/Blue_White_Logo_Icon_With_Slogan.gif"
        },
        {
          type: "1",
          title: "NAVY 311 logo, no slogan",
          format: "Format:  GIF",
          pic_size: "Picture size: 855 pixels x 750 pixels",
          file_size: "Picture size: 855 pixels x 750 pixels",
          download_link: "/PublishingImages/page_images2/Navy_311_Reverse_Color_Sailor_Number_Only.gif",
          picture_link: "/PublishingImages/page_images2/Blue_Logo_Icon__Transparent_No_Slogan.gif"
        },
        {
          type: "1",
          title: "NAVY 311 logo, no slogan, number only",
          format: "Format:  GIF",
          pic_size: "Picture size: 139 pixels x 139 pixels",
          file_size: "File size: 5.6 KB",
          download_link: "/PublishingImages/page_images2/Navy_311_Logo_Sailor_Number_Only.gif",
          picture_link: "/PublishingImages/page_images2/Navy_311_Logo_Icon_Sailor_Number_Only.gif"
        },
        {
          type: "1",
          title: "NAVY 311 logo, no slogan",
          format: "Format:  PNG",
          pic_size: "Picture size: 750 pixels x 696 pixels",
          file_size: "File size: 16.8 KB",
          download_link: "/PublishingImages/page_images2/Navy311_Logo_Reversed_Logo1.png",
          picture_link: "/PublishingImages/page_images2/Blue_Logo_Icon__Transparent_No_Slogan.gif"
        },
        {
          type: "1",
          title: "NAVY 311 logo, with slogan",
          format: "Format:  PNG",
          pic_size: "Picture size: 600 pixels x 570 pixels",
          file_size: "File size: 15.9 KB",
          download_link: "/PublishingImages/page_images2/Navy311_Logo_Reversed_Logo2.png",
          picture_link: "/PublishingImages/page_images2/Navy311_PNG_Logo1.jpg"
        },
        {
          type: "1",
          title: "NAVY 311 logo, with slogan, phone number, email and website addresses",
          format: "Format:  PNG",
          pic_size: "Picture size: 800 pixels x 800 pixels",
          file_size: "File size: 27.4 KB",
          download_link: "/PublishingImages/page_images2/Navy311_Logo_Reversed_Logo3.png",
          picture_link: "/PublishingImages/page_images2/Navy311_PNG_Logo2.jpg"
        },
        {
          type: "1",
          title: "NAVY 311 logo with slogan",
          format: "Format:  EPS",
          pic_size: "Picture size: 190 pixels x 186 pixels",
          file_size: "File size: 56.3 KB",
          download_link: "/PublishingImages/page_images2/Navy_311_Logo_Slogan_Only.eps",
          picture_link: "/PublishingImages/page_images2/Blue_White_Logo_Icon_With_Slogan.gif"
        },
        {
          type: "1",
          title: "NAVY 311 logo with slogan and contact info",
          format: "Format:  AI",
          pic_size: "Picture size: 15.75 in. x 15.75 in",
          file_size: "File size: 104 KB",
          download_link: "/PublishingImages/page_images2/Navy_311_Logo_Square_3_Lines_Vectorized.ai",
          picture_link: "/PublishingImages/page_images2/Blue_White_Logo_Icon_With_Slogan_POC.gif"
        },
        {
          type: "1",
          title: "NAVY 311 logo, white picture/number only",
          format: "Format:  AI",
          pic_size: "Picture size: 612 pixels. x 792 pixels",
          file_size: "File size: 104 KB",
          download_link: "/PublishingImages/page_images2/Navy_311_Logo_Transparent_SailorAndNumber_Only.ai",
          picture_link: "/PublishingImages/page_images2/Navy_311_Logo_Icon_Transparent_SailorAndNumber_Only.gif"
        },
        {
          type: "2",
          title: "NAVY 311 All Access Poster",
          format: "Format:  PDF",
          pic_size: "Poster size: 8.5 in. x 11 in",
          file_size: "File size: 2.62 MB",
          download_link: "/Public%20Documents/Poster2_All_Access.pdf",
          picture_link: "/PublishingImages/page_images2/Poster-All_Access.jpg"
        },
        {
          type: "2",
          title: "NAVY 311 Stencil Poster",
          format: "Format:  PDF",
          pic_size: "Poster size: 8.5 in. x 11 in",
          file_size: "File size: 1.9 MB",
          download_link: "/Public%20Documents/Poster1_Stencil.pdf",
          picture_link: "/PublishingImages/page_images2/Poster-Stencil.jpg"
        },
        {
          type: "2",
          title: "NAVY 311 Tri-Fold Brochure",
          format: "Format:  Microsoft Publisher Document",
          pic_size: "Size: 11 in. x 8.5 in",
          file_size: "File size: 2.19 MB",
          download_link: "/Public%20Documents/NAVY_311_Tri-fold(03232017).pub",
          picture_link: "/PublishingImages/page_images2/NAVY_311_Tri-fold(03232017).jpg"
        },
        {
          type: "2",
          title: "NAVY 311 All Access Half-Page Ad",
          format: "Format:  PDF",
          pic_size: "Picture size: 7 in. x 5 in.",
          file_size: "File size: 160 KB",
          download_link: "/Public%20Documents/Ad2_All_Access.pdf",
          picture_link: "/PublishingImages/page_images2/Ad-All_Access.jpg"
        },
        {
          type: "2",
          title: "NAVY 311 All Access Half-Page Ad", format: "Format:  PDF",
          pic_size: "Picture size: 7 in. x 5 in",
          file_size: "File size: 180 KB",
          download_link: "/Public%20Documents/Ad1_Stencil.pdf",
          picture_link: "/PublishingImages/page_images2/Ad-Stencil.jpg"
        }
      ],

      user_guide_links: [
        {
          link_src: "/Documents/Support_Provider_Directory_User_Guide.pdf",
          link_text: "Support Provider Directory User Guide",
          link_description: "This guide familiarizes the reader with the Support Provider Directory user interface and offers instruction for discovering support using various search criteria."
        },
        {
          link_src: "https://ds-report.dc3n.navy.mil/navy311/collaboration.htm",
          link_text: "Collaboration Tool Tutorial",
          link_description: "The ISEA-RMC Collaboration Tool improves, simplifies and documents collaboration efforts between the Regional Maintenance Centers (RMCs) and the Warfare Centers. This toolset provides the Warfare Center and RMC subject matter experts with a common area to share advice, technical information or ask questions."
        },
        {
          link_src: "/Documents/ISEA_RMC_Collaboration_Tool_User_Manual.pdf",
          link_text: "Collaboration Tool User Guide",
          link_description: "View the online ISEA-RMC Collaboration Tool User Guide."
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.topcards {
  height: 400px;
  width: 100%;
}

.topcardsMobile {
  height: 415px;
  width: 100%;
}

.tab-description {
  margin-left: 10px;
  margin-right: 10px;
  font-weight: 600;
}

.image-cards {
  margin: 10px;
}

.imageinfo {
  font-size: 11px;
  color: #000000;
}

div.v-list-item {
  padding: 4px;
}

.custSubtitle {
  font-style: oblique;
  font-size: 14px;
  padding: 5px;
}

.custtitle {
  font-size: 20px;
}

.topCardsContent {
  height: 335px;
  overflow-y: auto;
}

.topCardsContentMobile {
  height: 358px;
  overflow-y: auto;
}

.center_container {
  max-width: 1000px;
  margin: 0 auto;
}

.boldBlue {
  font-weight: 600;
}

.serviceCards {
  padding-bottom: 15px;
  margin: 30px;
}

.serviceCardsMobile {
  padding-bottom: 15px;
  margin: 0 auto;
}

.searchLink {
  margin-top: 10px;
}

.tabs-card {
  padding-bottom: 5px;
}

.wdn-text-hidden {
  visibility: hidden;
}

label.v-label.theme--light {
  color: #000000;
}

.theme--light.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active),
.theme--light.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active)>.v-icon,
.theme--light.v-tabs>.v-tabs-bar .v-tab--disabled {
  color: black;
}

.toolTitle {
  font-weight: 400;
}

.legend {
  text-align: center;
}
</style>
