<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  }
}
</script>
<template>
    <div>
        <!-- end footer -->
      <footer>
         <div class="container-fluid">
            <div class="row">
               <div class="col-md-12">
                  <div class="full footer_top">
                     <div class="container">
                        <div class="row footer_rows">
                           <div class="col-lg-3 col-md-6 col-sm-12">
                              <div class="f_logo">
                                 <img src="../../assets/img/logo.png" alt="#" />
                              </div>
                              <div class="full">
                                 <p>Charming Fascinators is a millinery that specializes in creating unique and elegant accessories for your hair.</p>
                              </div>
                           </div>
                           <div class="col-lg-3 col-md-6">
                              <div class="full heading_footer">
                                 <h3>Quick Links</h3>
                              </div>
                              <div class="full">
                                 <ul class="footer_link">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="about">About</a></li>
                                    <li><a href="/what-we-do">What we do</a></li>
                                    <li><a href="/catalogue">Catalogue</a></li>
                                    <li><a href="testimonial">Testimonial</a></li>
                                    <li><a href="/contact-us">Contact us</a></li>
                                 </ul>
                              </div>
                           </div>
                           <div class="col-lg-3 col-md-6">
                              <div class="full heading_footer">
                                 <h3>Instagram</h3>
                              </div>
                              <div class="full">
                                 <ul class="footer_link_intas">
                                    <li>
                                       <span><img src="../../assets/images/f_in_blog.png" alt="#" /></span>
                                       <span>Unleash your inner fashionista with our trend-setting hair accessories.</span>
                                    </li>
                                    <li>
                                       <span><img src="../../assets/images/f_in_blog2.png" alt="#" /></span>
                                       <span>Embrace a fresh, fashionable approach to your wedding day style.</span>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <div class="col-lg-3 col-md-6 ">
                              <div class="full heading_footer">
                                 <h3>Subscribe</h3>
                              </div>
                              <div class="full footer_form">
                                 <form id="contactform" action="https://formsubmit.io/send/callonjayb@gmail.com" method="POST">
                                    <input name="_redirect" type="hidden" id="name" value="https://charming-fascinators.netlify.app/">
                                    <fieldset>
                                       <legend></legend>
                                       <div class="row">
                                          <div class="col-md-12">
                                             <div class="full">
                                                <input type="email" placeholder="Your Email" name="email" id="email" required/>
                                             </div>
                                             <input name="_formsubmit_id" type="text" style="display:none">
                                             <div class="full">
                                                <button type="submit" v-on:click="submitSweetAlert"><input value="Submit" type="submit" hidden>Subscribe</button>
                                             </div>
                                          </div>
                                       </div>
                                    </fieldset>
                                 </form>
                              </div>
                           </div>
                           <div class="col-12">
                              <div class="row margin_top_50">
                                 <div class="col-md-10 offset-md-1">
                                    <div class="row">
                                       <div class="col-md-4 col-sm-12">
                                          <div class="full cont_info">
                                             <i class="fa fa-map-marker"></i>
                                             <span>Accra - Ghana</span>
                                          </div>
                                       </div>
                                       <div class="col-md-4 col-sm-12">
                                          <div class="full cont_info">
                                             <i class="fa fa-phone"></i>
                                             <span>Call +233 20 732 4350 <br/>
                                                Call +233 55 848 0096</span>
                                          </div>
                                       </div>
                                       <div class="col-md-4 col-sm-12">
                                          <div class="full cont_info">
                                             <i class="fa fa-envelope"></i>
                                             <span class="text-break">callonjayb@gmail.com</span>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
      <!-- end footer -->
      <!-- cpy -->
      <div class="cpy">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="full center">
                     <ul class="social_icon">
                        <!-- <li><a href="#"><i class="fa fa-facebook-f"></i></a></li> -->
                        <!-- <li><a href="#"><i class="fa fa-twitter"></i></a></li> -->
                        <!-- <li><a href="#"><i class="fa fa-linkedin"></i></a></li> -->
                        <li><a href="https://instagram.com/charming_fascinators"><i class="fa fa-instagram"></i></a></li>
                        <!-- <li><a href="#"><i class="fa fa-youtube-play"></i></a></li> -->
                     </ul>
                  </div>
                  <div class="full text_align_center">
                     <p>&copy; {{ date }} <a href="https://html.design">Charming Millinery</a>. All Rights Reserved.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- end cpy -->
    </div>
</template>
<script>

export default {
   methods: {
        submitSweetAlert() {
         this.$swal({
            icon: 'success',
            title: 'Your submission was successful.',
            timer: 10000
         })
      }
   }
}

</script>