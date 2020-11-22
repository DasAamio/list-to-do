<template>
  <div>
    <!--carousel starting-->

    <landing-page-carousel/>

    <!--carousel Ending-->

    <landing-page-get-service/>


    <!--About Us Starting-->

    <landing-page-about-us/>

    <!--About Us Ending-->



    <!--How to Get Service-->

    <landing-page-services/>

    <!--How to Get Service-->


    <!--We Provide starting-->



    <!--We Provide Ending-->

    <landing-page-faq/>



    <!--Our service hub User-->

    <landing-page-service-user/>

    <!--Our service hub User-->

    <!--FAQ-->


    <!--FAQ-->




    <!--contact Page starting-->

    <landing-page-contact/>

    <!--contact Page starting-->

  </div>
</template>

<script>

import LandingPageCarousel from "@/components/LandingPage/LandingPageCarousel";
import LandingPageAboutUs from "@/components/LandingPage/LandingPageAboutUs";
import LandingPageServices from "@/components/LandingPage/LandingPageServices";
import LandingPageGetService from "@/components/LandingPage/LandingPageGetService";
import LandingPageServiceUser from "@/components/LandingPage/LandingPageServiceUser";
import LandingPageContact from "@/components/LandingPage/LandingPageContact";
import LandingPageFaq from "@/components/LandingPage/LandingPageFaq";

export default {
  name: "WelComePage",
  components:{
    LandingPageCarousel,
    LandingPageAboutUs,
    LandingPageServices,
    LandingPageGetService,
    LandingPageServiceUser,
    LandingPageContact,
    LandingPageFaq
  },
  data() {
    return {
      input: "",
      model: 0,
    }
  }
}
</script>

<style scoped>
</style>
