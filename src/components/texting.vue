<template>
  <div class="center_container">
    <v-container fluid>
      <template>
        <v-card>
            <v-toolbar flat color="#072F5F" dark>
                <v-toolbar-title><h4 class="toolTitle">Text Messaging NAVY 311</h4></v-toolbar-title>
            </v-toolbar>
            <div class="cardContent">
                <v-stepper v-model="step" vertical>
                    <v-stepper-step step="1" :complete="step > 1">
                        Step 1
                      </v-stepper-step>
                      <v-stepper-content step="1">
                        <v-card outlined class="mb-6">
                          <div class="cardEdgePadding">
                              <p class="mainText">In the "To" field of your text, address your message to Navy311@navy.mil</p>
                              <p class="subText">This may sound odd, but try it! Nearly all wireless carriers support this capability.</p>
                              <p class="subText"><span style="color: blue;">TIP: </span>For your convenience, you may want to create a NAVY 311 contact in your mobile device's address book with Navy311@navy.mil as the mobile number.</p>
                          </div>
                        </v-card>
                        <v-btn color="primary" @click="step = 2">Continue</v-btn>
                      </v-stepper-content>
                      <v-stepper-step step="2" :complete="step > 2">
                        Step 2
                      </v-stepper-step>
                      <v-stepper-content step="2">
                        <v-card outlined class="mb-6">
                          <div class="cardEdgePadding">
                            <p class="mainText">Compose your text message. Please include your first and last name. Send your message.</p>
                            <p class="subText">When composing your text message, it would be helpful if you would also include your first and last name. Doing this allows us to properly record your support request in our Customer Relationship Management (CRM) system which will ensure your question gets the attention it deserves and the answer you need.</p>
                            <p class="subText"><span style="color: red;">IMPORTANT: </span>Text messaging from a cellular telephone is an insecure means of communication. Do not contact the NAVY 311 Call Center via text message if you have a request that contains business sensitive information, For Official Use Only (FOUO) information or indicates the degradation of a military system. Such requests should be made via telephone from a trusted location or by encrypted email. Never discuss classified information over an unclassified means of communication. Classified requests must be made via classified communication channels.</p>
                          </div>
                        </v-card>
                        <v-btn color="primary" @click="step = 3">Continue</v-btn>
                        <v-btn text @click="step = 1">Go Back</v-btn>
                      </v-stepper-content>
                      <v-stepper-step step="3" :complete="step > 3">
                        Step 3
                      </v-stepper-step>
                      <v-stepper-content step="3">
                        <v-card outlined class="mb-6">
                          <div class="cardEdgePadding">
                            <p class="mainText">A NAVY 311 Call Center Professional will reply via text message to address your concern, ask for any additional information they might need and create a help desk ticket. If you would like, you can even have tracking emails sent to your email inbox for your records!</p>
                            <p class="subText"><span style="color: green;">PROBLEMS WHILE TEXTING? </span>In the event that you experience an issue while corresponding via text message, please call the NAVY 311 Help Desk at 1-855-NAVY-311 (1-855-628-9311).</p>
                            <p class="subText"><span style="color: red;">NOTE: </span>The Navy does not charge a fee for calling or texting NAVY 311 but, depending on the contract you have with your mobile device's carrier, standard calling rates and/or data fees may apply with them.</p>
                          </div>
                        </v-card>
                        <v-btn color="primary" @click="step = 4">Continue</v-btn>
                        <v-btn text @click="step = 2">Go Back</v-btn>
                      </v-stepper-content>
                      <v-stepper-step step="4" :complete="step > 3">
                        Finish
                      </v-stepper-step>
                      <v-stepper-content step="4">
                        <v-btn text @click="step = 3">Go Back</v-btn>
                      </v-stepper-content>
                </v-stepper>
            </div>
        </v-card>
      </template>
    </v-container>
    <h1 class="wdn-text-hidden">Texting</h1>
  </div>
</template>

<script>
export default {
    name: 'TextingPage',
    methods: {
       visit: function (link) {
            window.open(link);
        }
    },
    data: function () {
      return {
        step: '1'
      }
    }
}
</script>
<style lang="scss">
.cardContent{
    text-align: center;
    padding: 15px;
}
.linkClass{
    overflow-wrap: break-word;
}
.center_container{
    max-width: 1000px;
    margin: 0 auto;
}
.wdn-text-hidden{
  visibility: hidden;
}
.btn_holder{
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 15px;
  }
.toolTitle{
  font-weight: 400;
}
.dialogbuttons{
    height: 45px;
    display: flex;
    justify-content: space-around;
}
.centerbut{
    text-align: center;
    margin: 0;
    padding: 0;
}
.cardEdgePadding{
    margin: 20px;
}
.mainText{
    font-size: 19px;
    font-weight: 500;
}
.subText{
    font-size: 15px;
}

</style>