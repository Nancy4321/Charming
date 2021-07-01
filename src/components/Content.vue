<template>
  <div class="main" data-spy="scroll" data-target="#navbarResponsive">
    <!-- <loading
      :active.sync="isLoading"
      :can-cancel="false"
      loader="dots"
      :is-full-page="fullPage"
      :height="height"
      :width="width"
      background-color="#6b6969"
    ></loading> -->
    <!-- Start Home Section-->
    <div id="home">
      <!-- Navigation Bar-->
      <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a class="navbar-logo" href="#">
          <img
            class="logo"
            src="@/assets/pics/logo1.png"
            style="width:60px; height:50px"
            alt="logo"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          style="margin-right: 25px;"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse"
          id="navbarResponsive"
          style="
     padding-right: 30px;"
        >
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
        class="carousel slide"
        data-ride="carousel"
        data-interval="3000"
      >
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
            :style="{
              'background-image':
                'url(' + require('../assets/pics/img1.jpg') + ')',
              'background-size': 'contain',
            }"
          >
            <div class="carousel-caption ">
              <h1>Welcome To <br />Charming Fascinators</h1>
              <h3>Everything Millinery and More</h3>
              <br />
              <a
                class="btn-lg"
                href="https://instagram.com/charming_fascinators?igshid=vu79aab7ur2w"
                >Click for More</a
              >
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
     
      !-- End of Slide show-->
    </div>

    <!--End Home Section-->

    <!--Start Project Section-->
    <div id="project" class="offset">
      <div class="col-12 narrow text-center">
        <h1>Charming Fascinators</h1>
        <p class="lead">
          Choose from our wide range of hats, beaded tiaras, hair bands etc.
        </p>
        <a
          class="btn btn-secondary btn-md"
          href="https://instagram.com/charming_fascinators?igshid=vu79aab7ur2w"
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
              <a href="/img/img08.312ccb8b.jpeg" target="_parent">
                <img src="../assets/pics/img08.jpeg" alt="sample" />
              </a>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="portfolio">
              <a href="/img/img03.02f00ab6.jpeg" target="_parent">
                <img src="../assets/pics/img03.jpeg" alt="sample" />
              </a>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="portfolio">
              <a href="/img/img04.e32c5b89.jpeg" target="_parent">
                <img src="../assets/pics/img04.jpeg" alt="sample" />
              </a>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="portfolio">
              <a href="/img/img1.af9c3a7b.jpeg" target="_parent">
                <img src="../assets/pics/img1.jpeg" alt="sample" />
              </a>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="portfolio">
              <a href="/img/img-6.bd3e0c06.jpeg" target="_parent">
                <img src="../assets/pics/img-6.jpeg" alt="sample" />
              </a>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="portfolio">
              <a href="/img/img09.86725611.jpeg" target="_parent">
                <img src="../assets/pics/img09.jpeg" alt="sample" />
              </a>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="portfolio">
              <a href="/img/img07.15e30708.jpeg" target="_parent">
                <img src="../assets/pics/img07.jpeg" alt="sample" />
              </a>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="portfolio">
              <a href="/img/img3.d647625a.jpeg" target="_parent">
                <img src="../assets/pics/img3.jpeg" alt="sample" />
              </a>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="portfolio">
              <a href="/img/img02.65c1fbac.jpeg" target="_parent">
                <img src="../assets/pics/img02.jpeg" alt="sample" />
              </a>
            </div>
          </div>

          <div class="narrow text-center">
            <div class="col-12">
              <p class="lead">Want to order any of our products?</p>
              <a
                class="btn btn-secondary btn-md"
                href="https://instagram.com/charming_fascinators?igshid=vu79aab7ur2w"
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
              src="../assets/pics/img-2.jpeg"
              alt="dress"
            />
            <div class="card-body">
              <h4>Beautiful fascinator for all occasions</h4>
              <p>Place your order now</p>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card text-center">
            <img
              class="card-img-top"
              src="../assets/pics/img2.jpeg"
              alt="dress"
            />
            <div class="card-body">
              <h4>Lady in beautiful fascinator</h4>
              <p>If you like what you see, contact us now</p>
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
              src="@/assets/pics/logo1.png"
              style="width:100px; height:100px"
              alt="logo"
            />
            <p>
              Customized fascinators, beaded tiaras, hair bands and many more
            </p>
            <strong>Contact Us</strong>
            <p>
              <a href="tel:0558480096"> 0558480096 </a><br />
              <a href="tel:0207324350"> 0207324350 </a><br />
              <a href="mailto:callonjayb@gmail.com"> callonjayb@gmail.com</a>
            </p>
            <p>
              <a href="https://www.facebook.com/" target="_blank"
                ><i class="fab fa-facebook-square"></i>
              </a>
              <a href="https://www.twitter.com/" target="_blank"
                ><i class="fab fa-twitter-square"></i>
              </a>
              <a
                href="https://instagram.com/charming_fascinators?igshid=vu79aab7ur2w"
                target="_blank"
                ><i class="fab fa-instagram"></i>
              </a>
            </p>
          </div>

          <hr class="seal" />
          <p>&copy; {{ date }} Charming Milnery. All rights reserved.</p>
        </div>
        <!--End of Row-->
      </footer>
    </div>
    <!--End Contact Section-->
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import axios from "axios";

export default {
  name: "main",
  components: {
    //Loading,
  },
  data() {
    return {
     // isLoading: false,
      height: 128,
      width: 128,
      date: new Date().getFullYear(),
    };
  },
  methods: {
    getHubs() {
     // this.isLoading = true;
      axios
        .get(
          "https://c3fymja220.execute-api.us-east-1.amazonaws.com/prod/all/hubs"
        )
        .then((res) => {
          this.searchData = res.data;
          this.data = this.searchData;
          this.isLoading = false;
        });
        //.catch(err => {
       //   this.isLoading = false;
       // });
    },
  },
  created() {
    this.getHubs();
  },
};
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

@media (max-width: 423px) {
  .navbar-logo {
    width: 0rem;
  }
}
</style>
