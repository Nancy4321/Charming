<script>
  export default {
    methods: {
      openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      },
      closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      },
    },
  };
</script>  
<template>
    <div>
      <div id="mySidenav" class="sidenav">
        <ul class="menu_sidebar">
          <li><a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a></li>
          <li><router-link to="/">01. Home</router-link></li>
          <li><router-link to="/about">02. About</router-link></li>
          <li><router-link to="/what-we-do">03. What we do</router-link></li>
          <li><router-link to="/testimonial">04. Testimonial</router-link></li>
          <li><router-link to="/contact">05. Contact Us</router-link></li>
        </ul>
      </div>
      <header class="header">
        <div class="header_top">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="full">
                  <span class="toggle_icon" style="cursor:pointer" @click="openNav">&times;</span>
                  <div class="logo_circle">
                    <router-link to="/"><img class="img-responsive" src="../../assets/img/logo.png" alt="#" /></router-link>
                  </div>
                </div>
              </div>
              <div class="col-md-8">
                <div class="float-right">
                  <ul class="top_links">
                    <li><a href="https://instagram.com/charming_fascinators"><i class="fa fa-instagram"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
</template>
  
  