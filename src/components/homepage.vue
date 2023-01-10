<template>
  <div class="center_container">
    <v-container fluid>
      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-row>
          <v-col cols="12">
            <main>
              <div class="hero">
                <h1>Your Navy. Your Needs.</h1>
                <!-- <p>We're here to help</p> -->
                <img src="/heroimage2.jpg" />
                <div class="bar"></div>
              </div>

            </main>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-alert dark color="#CF0000" dense>
              <div style="text-align: center; font-size: 21px;">For Flank Speed Support <span><a style="color: white; font-weight: 700; text-decoration: underline;" v-on:click="navigate('/flankspeed')">CLICK HERE</a></span></div>
              <div style="text-align: center; font-size: 21px;">For <span>All Other</span> Support select from the services below</div>
            </v-alert>
          </v-col>
        </v-row>
        <!--                           Tool Cards Desktop                                -->
        <v-row>
          <v-col cols="3">
            <v-card class="toolcard" hover style="cursor: default;">
              <v-img class="toolcardimg" src="../assets/247.png"></v-img>
              <div class="toolcardtext">
                <div class="toolcardtitle">
                  <h5>Support Request</h5>
                </div>
                <div class="toolcardsubtext">Submit a support request to a navy help desk.</div>
              </div>
              <div class="toolcardaction">
                <div class="btn_holder"><v-btn @click.stop="dialog_support_request = true">Start</v-btn></div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card class="toolcard" hover style="cursor: default;">
              <v-img class="toolcardimg" src="../assets/chat.png"></v-img>
              <div class="toolcardtext">
                <div class="toolcardtitle">
                  <h5>Live Chat</h5>
                </div>
                <div class="toolcardsubtext">Chat live with an on duty help desk agent. </div>
              </div>
              <div class="toolcardaction">
                <div class="btn_holder"><v-btn @click.stop="dialog_live_chat = true">Chat</v-btn></div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card class="toolcard" hover style="cursor: default;">
              <v-img class="toolcardimg" src="../assets/check.png"></v-img>
              <div class="toolcardtext">
                <div class="toolcardtitle">
                  <h5>Check Status</h5>
                </div>
                <div class="toolcardsubtext">Check status of an active Support Request.</div>
              </div>
              <div class="toolcardaction">
                <div class="btn_holder"><v-btn id="service_link_check_status" v-on:click="visit(check_support_request_status)"><span id="service_link_check_status" class="v-btn__content">Check Status</span></v-btn></div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card class="toolcard" hover style="cursor: default;">
              <v-img class="toolcardimg" src="../assets/search.png"></v-img>
              <div class="toolcardtext">
                <div class="toolcardtitle">
                  <h5>Support Directory</h5>
                </div>
                <div class="toolcardsubtext">Search/Manage the Support Provider Directory</div>
              </div>
              <div class="toolcardaction">
                <div class="btn_holder"><v-btn @click.stop="dialog_support_directory = true">Explore</v-btn></div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <!-- News and Warnings Desktop -->
          <v-col cols="3">
            <v-card class="news-card">
              <v-toolbar flat color="#072F5F" dark>
                <v-toolbar-title>
                  <h4 class="toolTitle">News and Warnings</h4>
                </v-toolbar-title>
              </v-toolbar>
              <div v-for="(n, idx) in news_warning" :key="idx" class="centertext">
                <p>{{ n.text }}</p>
              </div>
            </v-card>
          </v-col>
          <!-- Tools List Desktop -->
          <v-col cols="5">
            <v-row>
              <v-col cols="12">
                <v-card class="service-list-large">
                  <v-toolbar flat color="#072F5F" dark>
                    <v-toolbar-title>
                      <h4 class="toolTitle">Services</h4>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-list-item-group v-model="item" color="#072F5F" aria-label="tools list" role="listbox">
                    <p></p>
                    <v-list-item v-on:click="navigate('/flankspeed')" class="list_item_style" role="option" tabindex="0">
                      <span><img class="tool_icons" alt="" src="../assets/fahtom_circle.png" style="margin-left: -4px; margin-top: 7px" width="60" height="47"></span>
                      <div style="padding-left: 5%;">Flank Speed Support</div>
                    </v-list-item>
                    <v-list-item id="service_link_support_request" v-on:click="visit('https://neitsm.dc3n.navy.mil/arsys')" class="list_item_style" role="option" tabindex="0">
                      <span><img class="tool_icons" alt="" src="../assets/navwar.png" style="margin-top: 7px;" width="50" height="50"></span>
                      <div style="padding-left: 7%;">C4I Support Request</div>
                    </v-list-item>
                    <v-list-item v-on:click="navigate('/service?tab=supportCommunityServices')" class="list_item_style" role="option" tabindex="0">
                      <span><img class="tool_icons" alt="" src="../assets/partnering.png" style="margin-top: 7px;" width="50" height="50"></span>
                      <div style="padding-left: 21%;">Partnering</div>
                    </v-list-item>
                    <v-list-item v-on:click="navigate('/service?tab=businessIntelligenceAndMetricsServices')" class="list_item_style" role="option" tabindex="0">
                      <span><img class="tool_icons" alt="" src="../assets/metrics.png" style="margin-top: 7px;" width="50" height="50"></span>
                      <div style="padding-left: 7%;">Business Intelligence</div>
                    </v-list-item>
                  </v-list-item-group>
                </v-card>
              </v-col>
            </v-row>
            <v-card class="gethelpcard" hover>
              <div class="gethelp">
                <a class="gethelp" target="_blank" :href="crisis_help_line.link">
                  <v-img class="crisislink" :src="crisis_help_line.img_src" alt="Suicide Prevention - Click here to access the Veterans Crisis Line" border="0"></v-img>
                </a>
              </div>
            </v-card>
          </v-col>

          <!-- Contact NAVY 311 Card -->
          <v-col cols="4">
            <v-card class="contactNavy311">
              <v-toolbar flat color="#072F5F" dark>
                <v-toolbar-title>
                  <h4 class="toolTitle">Contact NAVY 311 24/7</h4>
                </v-toolbar-title>
              </v-toolbar>
              <v-list-item-group v-model="item" color="#072F5F" role="listbox" aria-label="Other Methods of Assistance List">
                <v-list-item style="cursor: default; pointer-events: none;" v-for="(item, idx) in other_methods" :key="idx" role="option" tabindex="0">
                  <v-list-item-content style="text-align: center;" three-line>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    <div class="subtitle">{{ item.subtitle1 }}</div>
                    <div class="subtitle">{{ item.subtitle2 }}</div>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item id="service_link_predictive_email" v-on:click="visit('https://ds-itsmweb.dc3n.navy.mil/kinetic/DisplayPage?name=EmailRequest')" role="option" tabindex="0">
                  <v-list-item-content id="service_link_predictive_email" style="text-align: center;" two-line>
                    <v-list-item-title id="service_link_predictive_email">Email NAVY 311</v-list-item-title>
                    <div id="service_link_predictive_email" class="subtitle">Navy311@Navy.mil</div>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item v-on:click="navigate('/texting')" role="option" tabindex="0">
                  <v-list-item-content style="text-align: center;" two-line>
                    <v-list-item-title>Text NAVY 311</v-list-item-title>
                    <div class="subtitle">Learn More</div>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-card>
            <!--<v-card class="carousel" flat>
              <v-carousel height="100%" cycle hide-delimiters :show-arrows="showarrows">
                <div v-for="(pic, idx) in pictures" :key="idx">
                  <v-carousel-item>
                    <v-img :src="pic.src"></v-img>
                  </v-carousel-item>
                </div>
              </v-carousel>
            </v-card>-->
          </v-col>
        </v-row>
        <!-- Search Support Provider Directory Desktop -->
        <v-row>
          <v-col cols="11">
            <v-autocomplete light autocomplete="username" aria-label="search support provider links" v-model="selected" return-object filled rounded label="Search The Support Community Provider Links" :items="support_community_provider_links_search"></v-autocomplete>
          </v-col>
          <v-col cols="1">
            <v-btn class="searchLink" v-on:click="show">Visit</v-btn>
          </v-col>
        </v-row>
        <!-- Support Cmmunity Provider Links Desktop -->
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
        <!-- Mobile About NAVY 311 -->
        <v-row>
          <v-col cols=12>
            <main>
              <div class="hero">
                <h1>Your Navy. Your Needs.</h1>
                <!-- <p>We're here to help</p> -->
                <img src="/heroimage2.jpg" />
                <div class="bar"></div>
              </div>
            </main>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card class="serviceCardsMobile">
              <v-toolbar flat color="#072F5F" dark>
                <v-toolbar-title>
                  <h4 class="toolTitle">About NAVY 311</h4>
                </v-toolbar-title>
              </v-toolbar>
              <p></p>
              <v-expansion-panels popout focusable>
                <v-expansion-panel>
                  <v-expansion-panel-header class="mobileExpansion">What we do</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p></p>
                    <ul>
                      <li v-for="(n, idx) in what_we_do_tab" :key="idx">
                        <p class="defaultfont">{{ n.text }}</p>
                      </li>
                    </ul>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header class="mobileExpansion">Why NAVY 311?</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p></p>
                    <div v-for="(n, idx) in why_navy_311_tab" :key="idx">
                      <p class="defaultfont">{{ n.text }}</p>
                      <p></p>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header class="mobileExpansion">Our Service to Sailors</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p></p>
                    <div v-for="(n, idx) in our_service_to_sailors_tab" :key="idx">
                      <p class="defaultfont">{{ n.text }}</p>
                      <p></p>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header class="mobileExpansion">Benefits of NAVY 311</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p></p>
                    <p v-for="(n, idx) in benefits_of_navy_311_description" :key="idx" class="defaultfont">{{ n.text }}</p>
                    <ul>
                      <li v-for="(n, idx) in benefits_of_navy_311_tab" :key="idx">
                        <p class="defaultfont"><strong>{{ n.bold_text }}</strong>
                          {{ n.text }}
                        </p>
                      </li>
                    </ul>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
              <p></p>
            </v-card>
          </v-col>
        </v-row>
        <!-- Tools List Mobile -->
        <v-row>
          <v-col cols="12">
            <v-card class="service-list-large">
              <v-toolbar flat color="#072F5F" dark>
                <v-toolbar-title>
                  <h4 class="toolTitle">Services</h4>
                </v-toolbar-title>
              </v-toolbar>
              <v-list-item-group v-model="item" color="#072F5F" aria-label="tools list" role="listbox">
                <p></p>
                <v-list-item class="list_item_style" role="option" tabindex="0" @click.stop="dialog_support_request = true">
                  <span><img style="margin-top: 7px;" class="tool_icons" alt="" src="../assets/247.png" width="50" height="50"></span>
                  <div style="padding-left: 5%;">Submit a Support Request</div>
                </v-list-item>
                <v-list-item @click.stop="dialog_live_chat = true" class="list_item_style" role="option" tabindex="0">
                  <span><img class="tool_icons" alt="" src="../assets/chat.png" style="margin-top: 7px;" width="50" height="50"></span>
                  <div style="padding-left: 22%;">Live Chat</div>
                </v-list-item>
                <v-list-item class="list_item_style" role="option" tabindex="0" v-on:click="visit(check_support_request_status)">
                  <span><img style="margin-top: 7px;" class="tool_icons" alt="" src="../assets/check.png" width="50" height="50"></span>
                  <div style="padding-left: 19%;">Check Status</div>
                </v-list-item>

                <v-list-item @click.stop="dialog_support_directory = true" class="list_item_style" role="option" tabindex="0">
                  <span><img class="tool_icons" alt="" src="../assets/search.png" style="margin-left: -1px; margin-top: 7px" width="50" height="50"></span>
                  <div style="padding-left: 5%;">Support Provider Directory</div>
                </v-list-item>

                <v-list-item v-on:click="navigate('/flankspeed')" class="list_item_style" role="option" tabindex="0">
                  <span><img class="tool_icons" alt="" src="../assets/fahtom_circle.png" style="margin-left: -4px; margin-top: 7px" width="58" height="45"></span>
                  <div style="padding-left: 9%;">Flank Speed Support</div>
                </v-list-item>
                <v-list-item id="service_link_support_request" v-on:click="visit('https://neitsm.dc3n.navy.mil/arsys')" class="list_item_style" role="option" tabindex="0">
                  <span><img class="tool_icons" alt="" src="../assets/navwar.png" style="margin-top: 7px;" width="50" height="50"></span>
                  <div style="padding-left: 10%;">C4I Support Request</div>
                </v-list-item>
                <v-list-item v-on:click="navigate('/service')" class="list_item_style" role="option" tabindex="0">
                  <span><img class="tool_icons" alt="" src="../assets/partnering.png" style="margin-top: 7px;" width="50" height="50"></span>
                  <div style="padding-left: 22%;">Partnering</div>
                </v-list-item>
                <v-list-item v-on:click="navigate('/service')" class="list_item_style" role="option" tabindex="0">
                  <span><img class="tool_icons" alt="" src="../assets/metrics.png" style="margin-top: 7px;" width="50" height="50"></span>
                  <div style="padding-left: 9.5%;">Business Intelligence</div>
                </v-list-item>
              </v-list-item-group>
            </v-card>
          </v-col>
        </v-row>
        <!-- News and Warnings Mobile -->
        <v-row>
          <v-col cols="12">
            <v-card class="tabs-card">
              <v-toolbar flat color="#072F5F" dark>
                <v-toolbar-title>
                  <h4 class="toolTitle">News and Warnings</h4>
                </v-toolbar-title>
              </v-toolbar>
              <div v-for="n in news_warning" :key="n" class="centertext">
                <p>{{ n.text }}</p>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <!-- Support Community Provider Search Mobile -->
        <v-row>
          <v-col cols="10">
            <v-autocomplete light autocomplete="username" v-model="selected" return-object filled rounded label="Search The Support Community Provider Links" :items="support_community_provider_links_search"></v-autocomplete>
          </v-col>
          <v-col cols="2" style="padding-left: 0px;">
            <v-btn class="searchLink" v-on:click="show">Visit</v-btn>
          </v-col>
        </v-row>
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
                          <li v-for="(link, idx) in personel_manpower_tab" :key="idx"><a id="outbound_link" :href="link.value" target="_blank">{{ link.text }}</a></li>
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
                          <li v-for="(link, idx) in equipment_maintenance_tab" :key="idx"><a id="outbound_link" :href="link.value" target="_blank">{{ link.text }}</a></li>
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
                          <li v-for="(link, idx) in training_and_education_tab" :key="idx"><a id="outbound_link" :href="link.value" target="_blank">{{ link.text }}</a></li>
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
                          <li v-for="(link, idx) in ordnance_tab" :key="idx"><a id="outbound_link" :href="link.value" target="_blank">{{ link.text }}</a></li>
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
                          <li v-for="(link, idx) in other_tab" :key="idx"><a id="outbound_link" :href="link.value" target="_blank">{{ link.text }}</a></li>
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
    <!-- Support Provider Directory Modal -->
    <v-dialog v-model="dialog_support_directory" max-width="450">
      <v-card>
        <v-card-title class="headline">Support Provider Directory (SPD)</v-card-title>
        <v-card-text>Search the Support Provider Directory</v-card-text>
        <div class="dialogbuttons">
          <v-btn id="service_link_spd_cac" v-on:click="visit(full_version), dialog_support_directory = false">
            <div>
              <div id="service_link_spd_cac" class="v-btn_modal">SPD Full</div>
              <div id="service_link_spd_cac" class="v-btn_modal_sub">(CAC required)</div>
            </div>
          </v-btn>
          <v-btn id="service_link_spd_no_cac" v-on:click="visit(public_version), dialog_support_directory = false">
            <div>
              <div id="service_link_spd_no_cac" class="v-btn_modal">SPD Public</div>
              <div id="service_link_spd_no_cac" class="v-btn_modal_sub">(CAC not required)</div>
            </div>
          </v-btn>
        </div>
        <div class="dialogbuttons">
          <v-btn id="service_link_spd_managers" v-on:click="visit(manager_version), dialog_support_directory = false">
            <div>
              <div id="service_link_spd_managers" class="v-btn_modal">SPD for Managers/Providers</div>
              <div id="service_link_spd_managers" class="v-btn_modal_sub">(CAC required)</div>
            </div>
          </v-btn>
          <v-btn @click="dialog_support_directory = false">Cancel</v-btn>
        </div>
      </v-card>
    </v-dialog>
    <!-- Support Request Modal -->
    <v-dialog v-model="dialog_support_request" max-width="450">
      <v-card>
        <v-card-title class="headline">Submit a Support Request</v-card-title>
        <v-card-text>CAC users may choose to submit a support request under CAC authentication.</v-card-text>
        <div class="dialogbuttons">

          <v-btn id="service_link_webincident_cac" v-on:click="visit('https://ds-itsmweb.dc3n.navy.mil/kinetic/DisplayPage?name=AIR_Request'), dialog_support_request = false">
            <div>
              <div id="service_link_webincident_cac" class="v-btn_modal">Support Request</div>
              <div id="service_link_webincident_cac" class="v-btn_modal_sub">(with CAC)</div>
            </div>
          </v-btn>
          <v-btn id="service_link_webincident_no_cac" @click="visit('https://ds-customer.dc3n.navy.mil/kinetic/DisplayPage?name=AIR_NoCAC_Request'), dialog_support_request = false">
            <div>
              <div id="service_link_webincident_no_cac" class="v-btn_modal">Support Request</div>
              <div id="service_link_webincident_no_cac" class="v-btn_modal_sub">(without CAC)</div>
            </div>
          </v-btn>
        </div>
        <div class="dialogbuttons">
          <v-btn v-on:click="navigate('/flankspeed'), dialog_support_request = false">
            <div>
              <div class="v-btn_modal">Flank Speed Support</div>
            </div>
          </v-btn>
        </div>
        <div class="dialogbuttons">
          <v-btn @click="dialog_support_request = false">Cancel</v-btn>
        </div>
      </v-card>
    </v-dialog>
    <!-- Live Chat Modal -->
    <v-dialog v-model="dialog_live_chat" max-width="450">
      <v-card>
        <v-card-title class="headline">Live Chat with an Agent</v-card-title>
        <v-card-text>CAC users may choose to live chat under CAC Authentication</v-card-text>
        <div class="dialogbuttons">
          <v-btn id="service_link_chat_cac" v-on:click="visit('https://ds-itsmweb.dc3n.navy.mil/kinetic/DisplayPage?name=Customer_Chat'), dialog_live_chat = false">
            <div>
              <div id="service_link_chat_cac" class="v-btn_modal">Chat</div>
              <div id="service_link_chat_cac" class="v-btn_modal_sub">(with CAC)</div>
            </div>
          </v-btn>
          <v-btn id="service_link_chat_no_cac" v-on:click="visit('https://ds-customer.dc3n.navy.mil/kinetic/DisplayPage?name=Customer_Chat_NC'), dialog_live_chat = false">
            <div>
              <div id="service_link_chat_no_cac" class="v-btn_modal">Chat</div>
              <div id="service_link_chat_no_cac" class="v-btn_modal_sub">(without CAC)</div>
            </div>
          </v-btn>
        </div>
        <div class="dialogbuttons">
          <v-btn v-on:click="navigate('/flankspeed'), dialog_support_request = false">
            <div>
              <div class="v-btn_modal">Flank Speed Support</div>
            </div>
          </v-btn>
        </div>
        <div class="dialogbuttons">
          <v-btn @click="dialog_live_chat = false">Cancel</v-btn>
        </div>
      </v-card>
    </v-dialog>
    <h1 class="wdn-text-hidden">Home Page</h1>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  beforeDestroy() {
    if (typeof window === 'undefined') return
    window.removeEventListener('resize', this.onResize, { passive: true })
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    show: function () {
      if (this.selected.text != 'None') {
        this.$ga.event('Outbound Link', this.selected.value, this.selected.text, 0);
        this.visit(this.selected.value);
      }
    },
    navigate: function (link) {
      this.$router.push(link);
    },
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
  },
  data: function () {
    return {
      item: '',
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
        'https://nossa.dc3n.navy.mil',
        'https://ds-itsmweb.dc3n.navy.mil/kinetic/DisplayPage?name=FS_Request'
      ],
      showarrows: false,
      check_support_request_status: "https://ds-itsmweb.dc3n.navy.mil/kinetic/DisplayPage?name=NAVY311_Catalog&look=table&view=submissions&type=requests#My%20Open%20Requests",
      support_request_non_cac: "/redirectSupport",
      support_request_cac: "/redirectSupport",
      full_version: "https://ds-itsmweb.dc3n.navy.mil/kinetic/DisplayPage?name=SPD_Search",
      public_version: "https://ds-customer.dc3n.navy.mil/kinetic/DisplayPage?name=SPD_Search_NC",
      manager_version: "https://ds-itsmweb.dc3n.navy.mil/arsys/forms/ds-itsmapp/A_SDE+ECRM+Directory+Management+Console/",
      dialog_support_directory: false,
      dialog_mobile_warning: false,
      dialog_support_request: false,
      dialog_live_chat: false,
      selected: {
        text: 'None',
        value: ''
      },

      personel_manpower_tab: [
        { text: "Career Management System - Interactive Detailing (CMS-ID)", value: "https://www.cmsid.navy.mil/", tab_title: "Personnel/Manpower", legend: " *" },
        { text: "Defense Travel System (DTS)", value: "https://dtsproweb.defensetravel.osd.mil/dts-app/pubsite/all/view/", tab_title: "Personnel/Manpower", legend: " *" },
        { text: "DoN Travel and Purchase Card Program Office", value: "https://www.navsup.navy.mil/ccpmd", tab_title: "Personnel/Manpower", legend: "" },
        { text: "Fleet and Family Support Center", value: "https://www.cnic.navy.mil/ffr/family_readiness.html", tab_title: "Personnel/Manpower", legend: "" },
        { text: "Intelligence Community Wounded Warrior Program (ICWWP)", value: "http://www.dia.mil/Careers/Wounded-Warrior-Internship-Program/", tab_title: "Personnel/Manpower", legend: "" },
        { text: "MyNavy HR", value: "https://www.mynavyhr.navy.mil/", tab_title: "Personnel/Manpower", legend: "" },
        { text: "Navy Civilian Human Resources", value: "http://www.secnav.navy.mil/donhr", tab_title: "Personnel/Manpower", legend: "" },
        { text: "Navy Household Goods Help Desk", value: "https://www.navsup.navy.mil/household/", tab_title: "Personnel/Manpower", legend: "" },
        { text: "Navy Marine Corps Relief Society", value: "http://www.nmcrs.org/", tab_title: "Personnel/Manpower", legend: "" },
        { text: "Navy Personnel Command (NPC)", value: "https://www.mynavyhr.navy.mil/Navy-Personnel-Command/ ", tab_title: "Personnel/Manpower", legend: "" },
        { text: "Navy Standard Integrated Personnel System (NSIPS)", value: "https://nsipsprod.nmci.navy.mil/", tab_title: "Personnel/Manpower", legend: " *" },
        { text: "MyNavy Career Center (MNCC)", value: "https://www.mynavyhr.navy.mil/Support-Services/MyNavy-Career-Center/", tab_title: "Personnel/Manpower", legend: "" }
      ],
      equipment_maintenance_tab: [
        { text: "Combat System Operational Sequencing System (CSOSS)", value: "https://nsdsa.dc3n.navy.mil/csoss", tab_title: "Equipment/Maintenance", legend: " * †" },
        { text: "CRYPTOGRAPHIC Products and Services", value: "https://infosec.navy.mil/crypto", tab_title: "Equipment/Maintenance", legend: " *" },
        { text: "EOSS Feedback Requests", value: "https://navlogtd.navy.mil/EossFeedbackWeb/", tab_title: "Equipment/Maintenance", legend: " *" },
        { text: "Fleet Cosal Feedback Request (FCFBR)", value: "https://ds-itsmweb.dc3n.navy.mil/kinetic/DisplayPage?name=FleetCOSAL_Request", tab_title: "Equipment/Maintenance", legend: " *" },
        { text: "Military Engineering Data Asset Locator System (MEDALS)", value: "https://www.logisticsinformationservice.dla.mil/medals/Default.aspx", tab_title: "Equipment/Maintenance", legend: " *" },
        { text: "Naval Safety Center", value: "https://navalsafetycenter.navy.mil/", tab_title: "Equipment/Maintenance", legend: "" },
        { text: "Navy Data Environment (NDE)", value: "https://www.nde.navy.mil/", tab_title: "Equipment/Maintenance", legend: " *" },
        { text: "NTCSS/OOMA Support Request", value: "https://neitsm.dc3n.navy.mil/arsys", tab_title: "Equipment/Maintenance", legend: " *" },
        { text: "Revised Alternative Dataflow Web (RADWeb)", value: "https://radpac.cdmd.navy.mil/", tab_title: "Equipment/Maintenance", legend: " *" },
        { text: "Sailor 2.1", value: "https://sailor.navy.mil/", tab_title: "Equipment/Maintenance", legend: " *" },
        { text: "Sailor to Engineer", value: "https://help.phdnswc.nmci.navy.mil/", tab_title: "Equipment/Maintenance", legend: " * †" },
        { text: "Access Ships' 3M Information System web site", value: "https://oars.nslc.navy.mil/oars/docs/index.html", tab_title: "Equipment/Maintenance", legend: " *" },
        { text: "View/Download the Ships' 3-M Manual (NAVSEA Instruction 4790.8D, 17 June 2021)", value: "/Documents/Ships_3m_manual_04790.008D.pdf", tab_title: "Equipment/Maintenance" },
        { text: "Download the Ships' 3M Manual Change/Correction Request form", value: "/Documents/Ships 3-M_Manual_Change_Correction_Request.pdf", tab_title: "Equipment/Maintenance" },
        { text: "NAVWAR Technical Support", value: "https://supportweb.sscno.nmci.navy.mil/", tab_title: "Equipment/Maintenance", legend: " *" },
        { text: "Technical Data Management Information System (TDMIS)", value: "https://mercury.tdmis.navy.mil/", tab_title: "Equipment/Maintenance", legend: " *" },
        { text: "Technical Manual Deficiency Evaluation Report (TMDER)", value: "https://nsdsa.dc3n.navy.mil/", tab_title: "Equipment/Maintenance", legend: " * †" }
      ],
      supply_and_logistics_tab: [
        { text: "LogTool", value: "http://logtool.net/", tab_title: "Supply and Logistics", legend: "" },
        { text: "Naval Supply Systems Command", value: "https://www.navsup.navy.mil/navsup", tab_title: "Supply and Logistics", legend: "" },
        { text: "One-Touch", value: "https://www.onetouch.navy.mil/", tab_title: "Supply and Logistics", legend: " *" },
        { text: "Priority Material Office - Integrated Supply Information System", value: "https://pmohq.nmci.navy.mil/", tab_title: "Supply and Logistics", legend: "" }
      ],
      training_and_education_tab: [
        { text: "Defense Acquisition University (DAU)", value: "https://www.dau.edu/", tab_title: "Training and Education", legend: "" },
        { text: "MyNavy HR", value: "https://www.mynavyhr.navy.mil/", tab_title: "Training and Education", legend: "" },
        { text: "MyNavy Portal", value: "https://my.navy.mil/", tab_title: "Training and Education", legend: "*" },
        { text: "Naval Air Warfare Center Training Systems Division (NAWCTSD)", value: "http://www.navair.navy.mil/nawctsd/", tab_title: "Training and Education", legend: "" },
        { text: "Naval Education and Training Command (NETC)", value: "https://www.netc.navy.mil/", tab_title: "Training and Education", legend: "" },
        { text: "Navy Doctrine Library System (NDLS)", value: "https://doctrine.navy.mil", tab_title: "Training and Education", legend: " *" },
        { text: "Navy Flying Hour Projection System (FHPS) Access Request", value: "https://www.nslc.navsea.navy.mil/FHP/FHPS_Access_Request.pdf", tab_title: "Training and Education", legend: "" },
        { text: "Navy Personnel Command (NPC)", value: "https://www.mynavyhr.navy.mil/Navy-Personnel-Command/", tab_title: "Training and Education", legend: "" }
      ],
      ordnance_tab: [
        { text: "All Weapons Information System (AWIS)", value: "https://awis.navair.navy.mil/awis/gateway/ncnvismodules.asp", tab_title: "Ordnance", legend: " * †" },
        { text: "New LIDOL users send a digitally signed email to LIDOL help desk to request access.", value: "mailto:KYPT_WA_LIDOLInfoDesk@navy.mil", tab_title: "Ordnance", legend: " †" },
        { text: "Existing LIDOL users click here to access the site.", value: "https://lidol.nmci.navy.mil/", tab_title: "Ordnance", legend: " * †" },
        { text: "Naval Ordnance Maintenance Management Program (NOMMP)", value: "https://awis.navair.navy.mil/redshirt/index.html", tab_title: "Ordnance", legend: " †" },
        { text: "Public NOSSA Website", value: "http://www.navsea.navy.mil/Organization/NOSSA.aspx", tab_title: "Ordnance", legend: "" },
        { text: "Restricted NOSSA Website", value: "https://nossa.dc3n.navy.mil/", tab_title: "Ordnance", legend: " *" }
      ],
      medical_tab: [
        { text: "Bureau of Medicine and Surgery (BUMED)", value: "https://www.med.navy.mil/Pages/Default.aspx", tab_title: "Medical", legend: "" },
        { text: "Medical Electronic Library", value: "https://www.med.navy.mil/sites/nmcp/Dept/SitePages/Library/NMeL.aspx", tab_title: "Medical", legend: "" },
        { text: "Naval Medical Logistics Command (NAVMEDLOGCOM)", value: "http://www.med.navy.mil/sites/nmlc/", tab_title: "Medical", legend: "" },
        { text: "TRICARE", value: "https://www.tricare.mil/", tab_title: "Medical", legend: "" }
      ],
      installations_facilities_tab: [
        { text: "Commander, Navy Installations (CNIC)", value: "https://www.cnic.navy.mil/", tab_title: "Installations / Facilities", legend: "" },
        { text: "Naval Facilities Command (NAVFAC)", value: "http://www.navfac.navy.mil/", tab_title: "Installations / Facilities", legend: "" },
        { text: "Navy Housing", value: "http://www.cnic.navy.mil/ffr/housing.html", tab_title: "Installations / Facilities", legend: "" }
      ],
      networks_and_computers_tab: [
        { text: "Navy Enterprise Resource Management (N-ERP)", value: "http://www.erp.navy.mil/", tab_title: "Networks and Computers", legend: "" },
        { text: "Navy Marine Corps Intranet (NMCI)", value: "https://homeport.navy.mil/home/", tab_title: "Networks and Computers", legend: " *" },
        { text: "ONE-Net Public Site", value: "https://www.navifor.usff.navy.mil/ncts-yokosuka/", tab_title: "Networks and Computers", legend: "" },
        { text: "ONE-Net Middle East Service Desk", value: "https://servicedesk.me.navy.mil/", tab_title: "Networks and Computers", legend: " †" },
        { text: "ONE-Net Far East Service Desk", value: "https://servicedesk.fe.navy.mil/", tab_title: "Networks and Computers", legend: " †" },
        { text: "ONE-Net European Union Service Desk", value: "https://servicedesk.eu.navy.mil/", tab_title: "Networks and Computers", legend: " †" }
      ],
      other_tab: [
        { text: "Naval Inspector General - Report Fraud, Waste or Mismanagement", value: "http://www.secnav.navy.mil/ig/", tab_title: "Other", legend: "" },
        { text: "Navy.mil", value: "http://www.navy.mil/", tab_title: "Other", legend: "" },
        { text: "Navy Research Development and Acquisition (ASN RD&A)", value: "http://www.secnav.navy.mil/rda/Pages/default.aspx", tab_title: "Other", legend: "" },
        { text: "NAVWAR PEO EIS", value: "https://www.navwar.navy.mil/peo-digital-home", tab_title: "Other", legend: "" },
        { text: "NAVWAR PEO EIS - Sea Warrior Program", value: "https://www.navwar.navy.mil/peo-mln-portfolio", tab_title: "Other", legend: "" },
        { text: "U.S. Fleet Forces Command (USFF)", value: "https://www.usff.navy.mil/", tab_title: "Other", legend: "" }
      ],
      support_community_provider_links_search: [
        { text: "Career Management System - Interactive Detailing (CMS-ID)", value: "https://www.cmsid.navy.mil/", tab_title: "Personnel/Manpower" },
        { text: "Defense Travel System (DTS)", value: "https://dtsproweb.defensetravel.osd.mil/dts-app/pubsite/all/view/", tab_title: "Personnel/Manpower" },
        { text: "DoN Travel and Purchase Card Program Office", value: "https://www.navsup.navy.mil/ccpmd", tab_title: "Personnel/Manpower" },
        { text: "Fleet and Family Support Center", value: "https://www.cnic.navy.mil/ffr/family_readiness.html", tab_title: "Personnel/Manpower" },
        { text: "Intelligence Community Wounded Warrior Program (ICWWP)", value: "http://www.dia.mil/Careers/Wounded-Warrior-Internship-Program/", tab_title: "Personnel/Manpower" },
        { text: "MyNavy HR", value: "https://www.mynavyhr.navy.mil/", tab_title: "Personnel/Manpower" },
        { text: "Navy Civilian Human Resources", value: "http://www.secnav.navy.mil/donhr", tab_title: "Personnel/Manpower" },
        { text: "Navy Household Goods Help Desk", value: "https://www.navsup.navy.mil/household/", tab_title: "Personnel/Manpower" },
        { text: "Navy Marine Corps Relief Society", value: "http://www.nmcrs.org/", tab_title: "Personnel/Manpower" },
        { text: "Navy Standard Integrated Personnel System (NSIPS)", value: "https://nsipsprod.nmci.navy.mil/", tab_title: "Personnel/Manpower" },
        { text: "MyNavy Career Center (MNCC)", value: "https://www.mynavyhr.navy.mil/Support-Services/MyNavy-Career-Center/", tab_title: "Personnel/Manpower" },

        { text: "Combat System Operational Sequencing System (CSOSS)", value: "https://nsdsa.dc3n.navy.mil/csoss", tab_title: "Equipment/Maintenance" },
        { text: "CRYPTOGRAPHIC Products and Services", value: "https://infosec.navy.mil/crypto", tab_title: "Equipment/Maintenance" },
        { text: "EOSS Feedback Requests", value: "https://navlogtd.navy.mil/EossFeedbackWeb/", tab_title: "Equipment/Maintenance" },
        { text: "Fleet Cosal Feedback Request (FCFBR)", value: "https://ds-itsmweb.dc3n.navy.mil/kinetic/DisplayPage?name=FleetCOSAL_Request", tab_title: "Equipment/Maintenance" },
        { text: "Military Engineering Data Asset Locator System (MEDALS)", value: "https://www.logisticsinformationservice.dla.mil/medals/Default.aspx", tab_title: "Equipment/Maintenance" },
        { text: "Naval Safety Center", value: "https://navalsafetycenter.navy.mil/", tab_title: "Equipment/Maintenance" },
        { text: "Navy Data Environment (NDE)", value: "https://www.nde.navy.mil/", tab_title: "Equipment/Maintenance" },
        { text: "NTCSS/OOMA Support Request", value: "https://neitsm.dc3n.navy.mil/arsys", tab_title: "Equipment/Maintenance" },
        { text: "Revised Alternative Dataflow Web (RADWeb)", value: "https://radpac.cdmd.navy.mil/", tab_title: "Equipment/Maintenance" },
        { text: "Sailor 2.1", value: "https://sailor.navy.mil/", tab_title: "Equipment/Maintenance" },
        { text: "Sailor to Engineer", value: "https://help.phdnswc.nmci.navy.mil/", tab_title: "Equipment/Maintenance" },
        { text: "Access Ships' 3M Information System web site", value: "https://oars.nslc.navy.mil/oars/docs/index.html", tab_title: "Equipment/Maintenance" },
        { text: "Download the Ships' 3-M Manual (NAVSEA Instruction 4790.8D, 17 June 2021)", value: "https://www.navsea.navy.mil/Resources/Instructions/", tab_title: "Equipment/Maintenance" },
        { text: "Download the Ships' 3M Manual Change/Correction Request form", value: "/Documents/Public Documents/Ships 3-M_Manual_Change_Correction_Request.pdf", tab_title: "Equipment/Maintenance" },
        { text: "NAVWAR Technical Support", value: "https://supportweb.sscno.nmci.navy.mil/", tab_title: "Equipment/Maintenance" },
        { text: "Technical Data Management Information System (TDMIS)", value: "https://mercury.tdmis.navy.mil/", tab_title: "Equipment/Maintenance" },
        { text: "Technical Manual Deficiency Evaluation Report (TMDER)", value: "https://nsdsa.dc3n.navy.mil/", tab_title: "Equipment/Maintenance" },

        { text: "LogTool", value: "http://logtool.net/", tab_title: "Supply and Logistics" },
        { text: "Naval Supply Systems Command", value: "https://www.navsup.navy.mil/navsup", tab_title: "Supply and Logistics" },
        { text: "One-Touch", value: "https://www.onetouch.navy.mil/", tab_title: "Supply and Logistics" },
        { text: "Priority Material Office - Integrated Supply Information System", value: "https://pmohq.nmci.navy.mil/", tab_title: "Supply and Logistics" },

        { text: "Defense Acquisition University (DAU)", value: "https://www.dau.edu/", tab_title: "Training and Education" },
        { text: "MyNavy Portal", value: "https://my.navy.mil/", tab_title: "Training and Education" },
        { text: "MyNavy HR", value: "https://www.mynavyhr.navy.mil/", tab_title: "Training and Education" },
        { text: "Naval Air Warfare Center Training Systems Division (NAWCTSD)", value: "http://www.navair.navy.mil/nawctsd/", tab_title: "Training and Education" },
        { text: "Naval Education and Training Command (NETC)", value: "https://www.netc.navy.mil/", tab_title: "Training and Education" },
        { text: "Navy Doctrine Library System (NDLS)", value: "https://ndls.nwdc.navy.mil/", tab_title: "Training and Education" },
        { text: "Navy Flying Hour Projection System (FHPS) Access Request", value: "https://www.nslc.navsea.navy.mil/FHP/FHPS_Access_Request.pdf", tab_title: "Training and Education" },
        { text: "Navy Personnel Command (NPC)", value: "http://www.npc.navy.mil/", tab_title: "Training and Education" },

        { text: "All Weapons Information System (AWIS)", value: "https://awis.navair.navy.mil/awis/gateway/ncnvismodules.asp", tab_title: "Ordnance" },
        { text: "New LIDOL users send a digitally signed email to LIDOL help desk to request access.", value: "mailto:KYPT_WA_LIDOLInfoDesk@navy.mil", tab_title: "Ordnance" },
        { text: "Existing LIDOL users click here to access the site.", value: "https://lidol.nmci.navy.mil/", tab_title: "Ordnance" },
        { text: "Naval Ordnance Maintenance Management Program (NOMMP)", value: "https://awis.navair.navy.mil/redshirt/index.html", tab_title: "Ordnance" },
        { text: "Public NOSSA Website", value: "http://www.navsea.navy.mil/Organization/NOSSA.aspx", tab_title: "Ordnance" },
        { text: "Restricted NOSSA Website", value: "https://nossa.dc3n.navy.mil/", tab_title: "Ordnance" },

        { text: "Bureau of Medicine and Surgery (BUMED)", value: "https://www.med.navy.mil/Pages/Default.aspx", tab_title: "Medical" },
        { text: "Medical Electronic Library", value: "https://www.med.navy.mil/sites/nmcp/Dept/SitePages/Library/NMeL.aspx", tab_title: "Medical" },
        { text: "Naval Medical Logistics Command (NAVMEDLOGCOM)", value: "http://www.med.navy.mil/sites/nmlc/", tab_title: "Medical" },
        { text: "TRICARE", value: "https://www.tricare.mil/", tab_title: "Medical" },

        { text: "Commander, Navy Installations (CNIC)", value: "https://www.cnic.navy.mil/", tab_title: "Installations/Facilities" },
        { text: "Naval Facilities Command (NAVFAC)", value: "http://www.navfac.navy.mil/", tab_title: "Installations/Facilities" },
        { text: "Navy Housing", value: "http://www.cnic.navy.mil/ffr/housing.html", tab_title: "Installations/Facilities" },

        { text: "Navy Enterprise Resource Management (N-ERP)", value: "http://www.erp.navy.mil/", tab_title: "Networks and Computers" },
        { text: "Navy Marine Corps Intranet (NMCI)", value: "https://homeport.navy.mil/home/", tab_title: "Networks and Computers" },
        { text: "ONE-Net Public Site", value: "https://www.navifor.usff.navy.mil/ncts-yokosuka/", tab_title: "Networks and Computers" },
        { text: "ONE-Net Middle East Service Desk", value: "https://servicedesk.me.navy.mil/", tab_title: "Networks and Computers" },
        { text: "ONE-Net Far East Service Desk", value: "https://servicedesk.fe.navy.mil/", tab_title: "Networks and Computers" },
        { text: "ONE-Net European Union Service Desk", value: "https://servicedesk.eu.navy.mil/", tab_title: "Networks and Computers" },

        { text: "Naval Inspector General - Report Fraud, Waste or Mismanagement", value: "http://www.secnav.navy.mil/ig/", tab_title: "Other" },
        { text: "Navy.mil", value: "http://www.navy.mil/", tab_title: "Other" },
        { text: "Navy Research Development and Acquisition (ASN RD&A)", value: "http://www.secnav.navy.mil/rda/Pages/default.aspx", tab_title: "Other" },
        { text: "NAVWAR PEO EIS", value: "https://www.navwar.navy.mil/peo-digital-home", tab_title: "Other" },
        { text: "NAVWAR PEO EIS - Sea Warrior Program", value: "https://www.navwar.navy.mil/peo-mln-portfolio", tab_title: "Other" },
        { text: "U.S. Fleet Forces Command (USFF)", value: "https://www.usff.navy.mil/", tab_title: "Other" }
      ],
      tools: [
        { img_src: require("../assets/partnering.png"), img_height: "50", img_width: "50", title: "Partnering", link: "/service" },
        { img_src: require("../assets/metrics.png"), img_height: "50", img_width: "50", title: "Business Intelligence", link: "/service" },
        { img_src: require("../assets/chat.png"), img_height: "50", img_width: "50", title: "Live Chat", link: "/redirectChat" }
      ],
      news_warning: [
        { text: "The DoD is transitioning to one common authentication (logon) certificate on CACs called the Personal Identity Verification (PIV) Authentication." },
        { text: "This will affect all NAVY 311 online resources requiring a CAC login." }
      ],
      pictures: [
        { src: "https://res.cloudinary.com/engineering-com/image/upload/w_640,h_640,c_limit,q_auto,f_auto/china_us_navy_img01_nlfwxd.jpg" },
        { src: "https://images04.military.com/sites/default/files/styles/full/public/media/news/service/2011/06/navy-officers-salute-380x25.jpg?itok=lDXaMupl" },
        { src: "http://employmentnews.gov.in/writereaddata/2312201687274CAREERS%20IN%20INDIAN%20NAVY%2039%20vol.png" }
      ],
      other_methods: [
        { title: "Phone:", subtitle1: "1-855-NAVY-311", subtitle2: "1-855-628-9311" },
        { title: "DSN:", subtitle1: "510-NAVY-311", subtitle2: "510-628-9311" },
        { title: "Naval Message:", subtitle1: "NAVY THREE ONE ONE NORFOLK VA", subtitle2: "" }
      ],
      crisis_help_line: { img_src: "https://www.veteranscrisisline.net/Content/images/VeteransCrisisLineLogo.png", link: "https://www.veteranscrisisline.net/" },
      what_we_do_tab: [
        { text: "Systems and equipment: (e.g., hull, mechanical and electrical, weapon systems, IT, technical data)." },
        { text: "Quality of life: (e.g., medical and chaplain care)." },
        { text: "Personnel: (e.g., career, manpower, training)." },
        { text: "Supply and logistics: (e.g., requisition follow-ups, ordnance, food service, household goods)." },
        { text: "Installations and facilities: (e.g., environmental, public works, community support)." }
      ],
      why_navy_311_tab: [
        { text: "NAVY 311 is not a new service, but rather a new name for the Customer Relationship Management (CRM) component of the Navy's Distance Support (DS) capability.  As such, NAVY 311 simplifies help desk access and easily identifies this assistance from among the many other important Fleet Distance Support services." },
        { text: "Many forward-thinking government organizations and municipalities are using centralized 3-1-1 call centers to cost-effectively expand citizen services and streamline operations.  In the same manner, NAVY 311 is focused on achieving Fleet customer service excellence through modern technology, timely feedback, and increased operational efficiency." }
      ],
      our_service_to_sailors_tab: [
        { text: "Have a question?  Then call NAVY 311.  It's that simple.  NAVY 311 is here to help Sailors perform their daily work and manage their Navy life." },
        { text: "You can call us about maintenance, ship parts and/or repair, personnel or career matters, training, quality of life, facilities, medical support, ordnance, or any other non-emergency, non-tactical topic." },
        { text: "The NAVY 311 service is available to Sailors and other Service members, military families, civilians, veterans, contractors, and the occasional inquisitive citizen." }
      ],
      benefits_of_navy_311_tab: [
        { text: "Provides Fleet access to authoritative information and assistance in near real-time, in port and at sea, and whenever and wherever afloat units are operating.", bold_text: "Reactive Service Delivery:" },
        { text: "Allows providers to push critical information to Fleet customers in anticipation of planned maintenance and/or operations.", bold_text: "Proactive Service Delivery:" },
        { text: "Integrates data from transactional support systems across the Navy to give Fleet customers and program offices a broader view of recurring systemic issues so they can make improved resource decisions.", bold_text: "Predictive Analysis:" },
        { text: "Enables decision makers to determine effectiveness of support community, identify requirements for resource reallocation, analyze return on investment (ROI), and other analyses.", bold_text: "Metrics:" },
        { text: "Supports a collective, modernized approach to data collection and exchange, standards, reporting metrics, and interaction across individual Navy contact centers.", bold_text: "Call Center Optimization:" }
      ],
      benefits_of_navy_311_description: [
        { text: "NAVY 311 aims to provide an enterprise framework for proactive service delivery to the Fleet and past and predictive analysis to leadership for fact-based resource decisions. Some key benefits of NAVY 311 include:" }
      ]
    }
  }
};
</script>

<style lang="scss">
.searchLink {
  margin-top: 10px;
}

.center_container {
  max-width: 1000px;
  margin: 0 auto;
}

.carousel {
  height: 200px;
  margin: 0 auto;
}

.list_item_style {
  height: 30px;
  font-size: 21px;
  font-weight: 400;
}

div.v-list-item__title {
  font-size: 18px;
}

.toolsTitle {
  margin-left: 0px;
}

.tabs-card {
  padding-bottom: 5px;
}

.news-card {
  min-height: 443px;
  padding-bottom: 5px;
}

.defaultfont {
  font-size: 16px;
  margin-bottom: 0px;
  margin-left: 10px;
  margin-right: 10px;
}

.centertext {
  margin: 15px;
  padding-bottom: 0px;
  text-align: center;
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

.tab-description {
  margin-left: 10px;
  margin-right: 10px;
  font-weight: 600;
}

.wdn-text-hidden {
  visibility: hidden;
}

label.v-label.theme--light {
  color: #000000;
}

.tool_icons {
  margin-right: 20px;
}

.gethelpcard {
  margin-top: 10px;
  padding: 12px;
  height: 135px;
}

.crisislink {
  margin-bottom: 30px;
  margin-left: 30px;
  margin-right: 30px;
}

.toolcard {
  min-height: 250px;
  margin: 0 auto;
}

.toolcardimg {
  max-width: 90px;
  max-height: 90px;
  margin: 0 auto;
}

.toolcardtext {
  margin: 10px;
}

.toolcardtitle {
  text-align: center;
  font-size: 23px;
}

.toolcardsubtext {
  text-align: center;
  margin: 0 auto;
}

.toolcardbutton {
  margin: 0 auto;
}

.btn_holder {
  display: flex;
  justify-content: center;
  width: 100%;
}

.toolcardaction {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: auto;
  right: auto;
  height: 45px;
}

.dialogbuttons {
  height: 45px;
  display: flex;
  justify-content: space-around;
}

.service-list-large {
  min-height: 260px;
  padding-bottom: 10px;
  margin-top: -10px;
}

.v-toolbar__content {
  justify-content: center;
}

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&family=Nunito&display=swap');

/*==========SCALE-IN==========*/
@-webkit-keyframes scale-in {
  0% {
    transform: scale(10, 10);
    opacity: 0;
  }

  100% {
    transform: scale(1, 1);
    opacity: 1;
  }
}

@keyframes scale-in {
  0% {
    transform: scale(10, 10);
    opacity: 0;
  }

  100% {
    transform: scale(1, 1);
    opacity: 1;
  }
}

/*==========ROLL-OUT==========*/
@-webkit-keyframes roll-out {
  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
}

@keyframes roll-out {
  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
}

body {
  background: #392f28;
}

main {
  width: 100%;
  overflow: hidden;
  font-family: 'Nunito Sans', sans-serif;
}

.hero {
  width: 100%;
  max-width: 1200px;
  height: 250px;
  text-align: center;
  margin: 0 auto;
  // background: #392f28;
  position: relative;
  color: #eeeeee;
}

.hero h1 {
  font-size: 2.3em;
  margin: auto;
  position: absolute;
  top: 176px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  text-shadow: 2px 2px rgb(1, 20, 56);
}

.hero img {
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));

}

.bar {
  width: 100%;
  height: 70px;
  background: -moz-linear-gradient(289deg, #f1f2f3 0%, #b8b8b9 36%, #808081 100%);
  background: -webkit-linear-gradient(289deg, #0b1d30 0%, #b8b8b9 36%, #808081 100%);
  background: -ms-linear-gradient(289deg, #86297a 0%, #b8b8b9 36%, #808081 100%);
  background: linear-gradient(161deg, #395a7c 0%, #23384b 36%, #0c1824 100%);
  opacity: 0.3;
  position: absolute;
  z-index: 0;
  left: 0;
  top: 170px;
}



@media all and (max-width: 768px) {
  .hero {
    height: 40vw;
  }

  .bar {
    height: 10vw;
    top: 16vw;
  }

  .hero h1 {
    font-size: 4vw;
    top: 17vw;
  }

  .hero p {
    font-size: 3vw;
    top: 19vw;
  }

}

.theme--light.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active),
.theme--light.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active)>.v-icon,
.theme--light.v-tabs>.v-tabs-bar .v-tab--disabled {
  color: black;
}

.toolTitle {
  font-weight: 400;
}

.subtitle {
  font-size: 13px;
}

.contactNavy311 {
  min-height: 443px;
}

.legend {
  text-align: center;
}

.v-btn_modal {
  text-align: center;
  font-size: 14px;
}

.v-btn_modal_sub {
  text-align: center;
  font-size: 10px;
}
</style>
