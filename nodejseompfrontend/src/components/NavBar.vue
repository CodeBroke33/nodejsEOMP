<template>
    <nav class="navbar navbar-expand-lg navbar-toggler bg-black justify-content-end ">

    <div class="container-fluid">
     <router-link to="/">
          <img class="img-fluid rounded-circle"  src="https://i.ibb.co/G745nfj/Only-Water-1.png" alt="logo"> 
     </router-link>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/">
                <b class="container text-white">Home</b>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">
                <b class="container text-white">About</b>
            </router-link>
          </li>
          <li class="nav-item">
              <router-link to="/products">
                <b class="container text-white">Products</b>
            </router-link>
          </li>
          <li class="nav-item">
              <router-link to="/admin">
                <b class="container text-white">Admin</b>
            </router-link>
          </li>
          <li class="nav-item">
              <router-link to="/contact">
                <b class="container text-white">Contact us</b>
            </router-link>
          </li>
          <!-- <li class="nav-item">
              <router-link to="/reachme">
                <b class="container text-black">Contact</b>
            </router-link>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
  <router-view/> 
  </template>
  
  <script>
      export default {
          data(){
              return
          }
      }
  </script>
  
  <style scoped>

  
  .navbar {
 display: auto;
 justify-content: end;
 align-items: end;  
 font-family:  Righteous;
 border-bottom: 2px solid #ffffff !important;
border-radius: 0%;
  }

  img[alt='logo']{
    width: 5rem;
    aspect-ratio: 1/1;
}

nav a.router-link-exact-active {
    color: #42a1b9;
  }
  </style>