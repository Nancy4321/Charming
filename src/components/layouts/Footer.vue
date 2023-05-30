<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
  methods: {
    goToAboutPage() {
      this.$router.push('/about'); 
    },
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
                        <div class="row">
                           <div class="col-md-3 col-sm-12">
                              <div class="full f_logo">
                                 <img src="../../assets/images/footer_img.png" alt="#" />
                              </div>
                              <div class="full">
                                 <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna strud exercitation</p>
                              </div>
                           </div>
                           <div class="col-md-3">
                              <div class="full heading_footer">
                                 <h3>Quick Links</h3>
                              </div>
                              <div class="full">
                                 <ul class="footer_link">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="about">About</a></li>
                                    <li><a href="what-we-do">What we do</a></li>
                                    <li><a href="testimonial">Testimonial</a></li>
                                    <li><a href="contact">Contact us</a></li>
                                 </ul>
                              </div>
                           </div>
                           <div class="col-md-3">
                              <div class="full heading_footer">
                                 <h3>Instagram</h3>
                              </div>
                              <div class="full">
                                 <ul class="footer_link_intas">
                                    <li>
                                       <span><img src="../../assets/images/f_in_blog.png" alt="#" /></span>
                                       <span>Consectetur Adipiscing</span>
                                    </li>
                                    <li>
                                       <span><img src="../../assets/images/f_in_blog2.png" alt="#" /></span>
                                       <span>Consectetur Adipiscing</span>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <div class="col-md-3 ">
                              <div class="full heading_footer">
                                 <h3>Subscribe</h3>
                              </div>
                              <div class="full footer_form">
                                 <form>
                                    <fieldset>
                                       <legend></legend>
                                       <div class="row">
                                          <div class="col-md-12">
                                             <div class="full">
                                                <input type="email" placeholder="Your Email" name="_email" />
                                             </div>
                                             <div class="full">
                                                <button>Subscribe</button>
                                             </div>
                                          </div>
                                       </div>
                                    </fieldset>
                                 </form>
                              </div>
                           </div>
                           <div class="col-md-12">
                              <div class="row margin_top_50">
                                 <div class="col-md-10 offset-md-1">
                                    <div class="row">
                                       <div class="col-sm-4">
                                          <div class="full cont_info">
                                             <i class="fa fa-map-marker"></i>
                                             <span>Location</span>
                                          </div>
                                       </div>
                                       <div class="col-sm-4">
                                          <div class="full cont_info">
                                             <i class="fa fa-phone"></i>
                                             <span>Call +233 20 732 4350 <br/>
                                                Call +233 55 848 0096</span>
                                          </div>
                                       </div>
                                       <div class="col-sm-4">
                                          <div class="full cont_info">
                                             <i class="fa fa-envelope"></i>
                                             <span>callonjayb@gmail.com</span>
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
<style>
.footer{
    padding: 0 15vw!important;
}
.full.cont_info .fa.fa-phone{
    font-size: 17px;
}
@media screen and (width:768px){
    .footer{
    padding: 0 5vw!important;
}
}
</style>