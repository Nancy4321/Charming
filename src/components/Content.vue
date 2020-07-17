<template>
  <div class="main" data-spy="scroll" data-target="#navbarResponsive">
    <!-- Start Home Section-->
    <div id="home">
      <!-- Navigation Bar-->
      <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a class="navbar-logo" href="#">
          <img
            class="logo"
            src="@/assets/pics/logo.jpg"
            alt="logo"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ol class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#project">Project</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#slideShow">SlideShow</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#order">Order</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
          </ol>
        </div>
      </nav>

      <!--Start Slide Show-->
      <div
        id="carouselExampleIndicators"
        class="carousel slide" data-ride="carousel" data-interval="3000">
        <!--
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExamleIndicators"
            data-slide-to="0"
            class="active"
          ></li>

          <li data-target="#carouselExamleIndicators" data-slide-to="1"></li>
          
           <li data-target="#carouselExamleIndicators" data-slide-to="2"></li>

          <li data-target="#carouselExamleIndicators" data-slide-to="3"></li>
        </ol>  -->
        <div class="carousel-inner" role="listbox">
         
          <!-- Slide 1-->
          <div
            class="carousel-item active"
            style="background-image: url(https://images.pexels.com/photos/2952204/pexels-photo-2952204.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500);"
          >
            <div class="carousel-caption ">
              <h1>Welcome To <br />Charming Fashion</h1>
              <h3>Everything fashion and More</h3>
              <a class="btn-lg" href="#project">Click for More</a>
            </div>
          </div>
          <!-- Slide 2-->
          <div
            class="carousel-two"
            style="background-image: url(https://images.pexels.com/photos/908934/pexels-photo-908934.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500);"
          ></div>

          <!-- Slide 3-->
          <div
            class="carousel-three"
            style="background-image: url(https://images.pexels.com/photos/2474257/pexels-photo-2474257.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500);"
          ></div>
        </div>
        
        <!-- Slide 4-->
          <div
            class="carousel-four"
            style="background-image: url(https://images.pexels.com/photos/1436328/pexels-photo-1436328.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500);"
          ></div>
        </div>
        <!-- End of Carousel Inner-->

        <!-- Prev and Next Buttons-->
      <!--
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>
     -->
      <!-- End of Slide show-->
    </div>

    <!--End Home Section-->

    <!--Start Project Section-->
    <div id="project" class="offset">
      <div class="col-12 narrow text-center">
        <h1>Charming Fashion</h1>
        <p class="lead">African fashion showcase</p>
        <a
          class="btn btn-secondary btn-md"
          href="https://www.pexels.com/search/african%20fashion/"
          target="_blank"
          >Check it out. It's Free!!!</a
        >
      </div>
    </div>
    <!--End Project Section-->

    <!-- Start SlideShow Section-->
    <div id="slideShow" class="offset">
      <div class="jumbotron container-fluid">
        <div class="col-12 text-center">
          <h3 class="heading">Portfolio</h3>
          <div class="heading-underline"></div>
        </div>

        <div class="row no-padding">
          <div class="col-sm-4">
            <div class="portfolio">
              <a
                href="https://images.pexels.com/photos/3276685/pexels-photo-3276685.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                target="_parent"
              >
                <img
                  src="https://images.pexels.com/photos/3276685/pexels-photo-3276685.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="sample"
                />
              </a>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="portfolio">
              <a
                href="https://images.pexels.com/photos/949671/pexels-photo-949671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                target="_parent"
              >
                <img
                  src="https://images.pexels.com/photos/949671/pexels-photo-949671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="sample"
                />
              </a>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="portfolio">
              <a
                href="https://images.pexels.com/photos/2170387/pexels-photo-2170387.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                target="_parent"
              >
                <img
                  src="https://images.pexels.com/photos/2170387/pexels-photo-2170387.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="sample"
                />
              </a>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="portfolio">
              <a
                href="https://images.pexels.com/photos/3195980/pexels-photo-3195980.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                target="_parent"
              >
                <img
                  src="https://images.pexels.com/photos/3195980/pexels-photo-3195980.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="sample"
                />
              </a>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="portfolio">
              <a
                href="https://images.pexels.com/photos/2994574/pexels-photo-2994574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                target="_parent"
              >
                <img
                  src="https://images.pexels.com/photos/2994574/pexels-photo-2994574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="sample"
                />
              </a>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="portfolio">
              <a
                href="https://images.pexels.com/photos/908310/pexels-photo-908310.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                target="_parent"
              >
                <img
                  src="https://images.pexels.com/photos/908310/pexels-photo-908310.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="sample"
                />
              </a>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="portfolio">
              <a
                href="https://images.pexels.com/photos/952629/pexels-photo-952629.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                target="_parent"
              >
                <img
                  src="https://images.pexels.com/photos/952629/pexels-photo-952629.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="sample"
                />
              </a>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="portfolio">
              <a
                href="https://images.pexels.com/photos/2873674/pexels-photo-2873674.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                target="_parent"
              >
                <img
                  src="https://images.pexels.com/photos/2873674/pexels-photo-2873674.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="sample"
                />
              </a>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="portfolio">
              <a
                href="https://images.pexels.com/photos/2562497/pexels-photo-2562497.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                target="_parent"
              >
                <img
                  src="https://images.pexels.com/photos/2562497/pexels-photo-2562497.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="sample"
                />
              </a>
            </div>
          </div>

          <div class="narrow text-center">
            <div class="col-12">
              <p class="lead">Want to order any of our products?</p>
              <a
                class="btn btn-secondary btn-md"
                href="https://www.google.com"
                target="_blank"
                >Products</a
              >
            </div>
          </div>
        </div>
        <!--End of Row-->
      </div>
      <!--End of Jumbotron-->
    </div>

    <!--End SlideShow Section-->

    <!-- Start Order Section-->
    <div id="order" class="offset">
      <div class="col-12 text-center">
        <h3 class="heading">Order</h3>
        <div class="heading-underline"></div>
      </div>

      <div class="row padding">
        <div class="col-md-6">
          <div class="card text-center">
            <img
              class="card-img-top"
              src="https://images.pexels.com/photos/2395921/pexels-photo-2395921.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="dress"
            />
            <div class="card-body">
              <h4>Lady in beautiful dress</h4>
              <p>If you like what you see, call us now</p>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card text-center">
            <img
              class="card-img-top"
              src="https://images.pexels.com/photos/2704172/pexels-photo-2704172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="dress"
            />
            <div class="card-body">
              <h4>Lady in beautiful yellow dress</h4>
              <p>If you like what you see, contact at us now</p>
            </div>
          </div>
        </div>
      </div>
      <!-- End of Row-->
    </div>
    <!--End Order Section-->

    <!-- Start Contact Section-->
    <div id="contact" class="offset">
      <footer>
        <div class="row justify-content-center">
          <div class="col-md-5" text-center>
            <img
              class="logo-foot"
              src="https://lh3.googleusercontent.com/y3yu5xC2LIuuBW07AvBzsk8csQwmtkc6JGYfPZs4GaUnLbEh8LwOOC8k-kV_nqqIdmdsOA=s123"
              alt="logo"
            />
            <p>Discover amazing collections of women's clothes.</p>
            <strong>Contact Us</strong>
            <p>
              0507730300 <br />
              0246674425 <br />
              fashioncentral@gmail.com
            </p>
            <p>
              <a href="https://www.facebook.com/" target="_blank"
                ><i class="fab fa-facebook-square"></i>
              </a>
              <a href="https://www.twitter.com/" target="_blank"
                ><i class="fab fa-twitter-square"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank"
                ><i class="fab fa-instagram"></i>
              </a>
            </p>
          </div>

          <hr class="seal" />
          <p>
            &copy; 2020 Charming Milnery. All rights reserved.
          </p>
        </div>
        <!--End of Row-->
      </footer>
    </div>
    <!--End Contact Section-->
  </div>
</template>

<script>
export default {
  name: 'main',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
