<template>
  <div id="app">
    <Content />
  </div>
</template>

<script>
import Content from './components/Content.vue'

export default {
  name: 'App',
  components: {
    Content
  }
}
</script>

<style>
@import "https://use.fontawesome.com/releases/v5.5.0/css/all.css";

body {
  overflow-x: hidden;
  font-family: Times, "Lobster", "Forte", sans-serif, Arial;
  color: rgb(80, 89, 98);
}

a:link {
  text-decoration: none;
}

ol li {
  list-style: none;
}

.offset:before {
  height: 3.8rem;
  margin-top: -3.8rem;
  content: "";
  display: block;
}

.logo {
  height: 90%;
  width: 50%;
}

/*==== Navbar ===*/

.navbar {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
}

.navbar-logo {
  height: 3rem;
  width: 20rem;
}

.navbar-nav li {
  padding-right: 0.7rem;
}

.navbar-dark .navbar-nav .nav-link {
  color: white;
  padding-top: 0.8rem;
}

.navbar-dark .navbar-nav .nav-link.active,
.navbar-dark .navbar-nav .nav-link:hover {
  color: rgb(250, 61, 61);
}

/*=== Slide ===*/

.carousel-item {
  height: 100vh;
}

.carousel-caption {
  position: absolute;
  text-transform: uppercase;
  top: 25%;
  width: 70%;

}

.carousel-caption h1 {
  font-size: 3.2rem;
  font-weight: 700;
  letter-spacing: 0.3rem;
  text-shadow: 0.3rem 0.3rem 0.8rem black;
  padding-bottom: 1rem;
}

.carousel-caption h3 {
  font-size: 1.8rem;
  text-shadow: 0.3rem 0.3rem 0.5rem black;
  padding-bottom: 1.6rem;
}

.btn-lg {
  border-width: medium;
  border-radius: 0;
  font-size: 1.1rem;
  border: 4px solid white;
  font-weight: bolder;
  background: rgba(192,192,192,0.1);
}

.btn-lg:hover {
  text-decoration: none;
  color: rgb(0, 0, 0);
  font-weight: 900;
  background-color: white;
}

.carousel-control-next,
.carousel-control-prev {
  background-color: rgba(250, 61, 61, 0.2);
  cursor: pointer;
  opacity: 0.2;
  transition: opacity 0.1s ease;
}

/*===== Project Section=======*/

.narrow {
  width: 75%;
  margin: 0 auto;
  padding-top: 2rem;
}

.btn-md {
  border-width: medium;
  border-radius: 0;
  padding: 0.6rem 1.1rem;
  text-transform: uppercase;
  margin: 1rem;
}

.jumbotron {
  border-radius: 0;
  padding: 3rem 0 2rem;
}

h3.heading {
  font-size: 1.9rem;
  font-weight: 700;
  text-transform: uppercase;
  padding-bottom: 0;
}

.heading-underline {
  width: 3rem;
  height: 0.2rem;
  background-color: rgb(250, 61, 61);
  margin: 0 auto 2rem;
}

/*======Project Ends======*/

/*=== Slide show portfolio===*/

.portfolio img {
  height: 400px;
  width: 500px;
  max-width: 100%;
  transition: transform 0.5s ease;
}

.row.no-padding [class*="col-"] {
  padding: 0;
}

.portfolio img:hover {
  transform: scale(1.1);
  cursor: pointer;
}

.portfolio {
  overflow: hidden;
}

.card {
  margin: 2rem;
}

.card-img-top {
  height: 700px;
}

/*=== End of portfolio*/

/*===Footer starts====*/

footer {
  background: rgb(66, 66, 66);
  color: white;
  padding: 2rem 0 3rem;
  margin-top: 1rem;
  text-align: center;
}

footer img {
  height: 20%;
  width: 30%;
  margin: 1rem 0;
}

footer a {
  color: white;
}

footer .fab {
  font-size: 1.6rem;
  margin: 0.2rem 0.5rem 0 0;
}

footer .fab:hover {
  color: rgb(250, 61, 61);
}

hr.seal {
  border-top: 0.2rem solid rgb(102, 107, 113);
  width: 100%;
}
/*=== Footer ends====*/

/*===Media Info*/
@media (max-width: 768px) {
  .carousel-caption h1 {
    font-size: 1.8rem;
    letter-spacing: 0.15rem;
    padding-bottom: 0.5rem;
  }

  .carousel-caption h3 {
    font-size: 1rem;
    padding-bottom: 1.2rem;
  }

  .btn-lg {
    font-size: 0.8rem;
  }

  .narrow h1 {
    font-size: 1.5rem;
  }

  p.lead {
    font-size: 1rem;
  }
}
</style>
