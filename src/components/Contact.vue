<template>
    <div class="contact">
        <!-- Start Banner Slider -->
      <div id="inner_pade" class="banner-slider new_banner">
         <div class="container">
            <div class="row">
               <div class="col-sm-12">
                  <div class="full">
                      <h2>Contact us</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- End Banner Slider -->
      <section>
         <div class="container">
            <div class="row margin_top_50">
                <div class="col-md-12">
                <div class="row">
                    <div class="col-md-4">
                        <div class="full cont_info">
                            <i class="fa fa-map-marker"></i>
                            <span>Accra - Ghana</span>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="full cont_info">
                            <i class="fa fa-phone"></i>
                            <span>Call +233 20 732 4350 <br/>
                            Call +233 55 848 0096</span>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="full cont_info">
                            <i class="fa fa-envelope"></i>
                            <span class="text-break">callonjayb@gmail.com</span>
                        </div>
                    </div>
                </div>
                </div>
            </div>
         </div>
      </section>
      <!-- section -->
      <section class="layout_padding request_form">
         <div class="container">
            <div class="row">

               <div class="col-md-8 offset-md-2">
                  <div class="full text_align_center">
                     <h3>Request A Call Back</h3>
                     <p>Thank you for your interest in our products. Please leave a message<br> with your order details and we will get back to you as soon as possible.</p>
                  </div>
                  <div class="full">
                     <form id="contactform" class="form_main" action="https://formsubmit.io/send/a9b23765-b4ea-41bd-8e76-3a79cce09cbe" method="POST">
                        <input name="_redirect" type="hidden" id="name" value="https://charming-fascinators.netlify.app/">
                         <fieldset>
                            <legend></legend>
                            <div class="row">
                              <div class="col-md-10 offset-md-1">
                                 <div class="full field">
                                     <input type="text" name="name" placeholder="Your Name" id="name" required />
                                 </div>
                                 <div class="full field">
                                     <input type="text" name="number" placeholder="Phone Number" required />
                                 </div>
                                 <div class="full field">
                                     <input type="email" name="email" placeholder="Email" id="email" required />
                                 </div>
                                 <div class="full field">
                                    <textarea placeholder="Message" name="comment" id="comment"></textarea>
                                 </div>
                                 <input name="_formsubmit_id" type="text" style="display:none">
                                 <div class="full field center">
                                    <button type="submit" v-on:click="sweetAlert"><input value="Submit" type="submit" hidden>Send</button>
                                 </div>
                              </div>
                            </div>
                         </fieldset>
                      </form>
                  </div>
               </div>

            </div>
         </div>
      </section>
      <!-- end section -->
    </div>
</template>

<script>

export default {
   methods: {
        sweetAlert() {
         this.$swal({
            icon: 'success',
            title: 'Your submission was successful.',
            timer: 10000
         })
      }
   }
}

</script>