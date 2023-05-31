<template>
    <div>
      <div id="mySidenav" class="sidenav" onclick="closeNav()">
        <ul class="menu_sidebar">
          <li><a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a></li>
          <li><router-link to="/" exact active-class="is-active-menu" onclick="closeNav()">01. Home</router-link></li>
          <li><router-link to="/about" exact active-class="is-active-menu" onclick="closeNav()">02. About</router-link></li>
          <li><router-link to="/what-we-do" exact active-class="is-active-menu" onclick="closeNav()">03. What we do</router-link></li>
          <!-- <li><router-link to="/testimonial" exact active-class="is-active-menu" onclick="closeNav()">04. Testimonial</router-link></li> -->
          <li><router-link to="/contact-us" exact active-class="is-active-menu" onclick="closeNav()">04. Contact Us</router-link></li>
        </ul>
      </div>
      <header class="header">
        <div class="header_top">
          <div class="container">
            <div class="row header-items">
              <div class="col-sm-6">
                <div class="full">
                  <span class="toggle_icon" style="cursor:pointer" onclick="openNav()"><i class="fa fa-bars"></i></span>
                  <div class="logo_circle">
                    <router-link to="/"><img class="img-responsive" src="../../assets/img/logo.png" alt="#" /></router-link>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
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
  