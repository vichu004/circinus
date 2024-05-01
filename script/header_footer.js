window.addEventListener("load",()=>{
    window.alert("welcome")
})
class specialHeader extends HTMLElement{
    ConectedCallback(){
        this.innerHTML=`
        <div class="container-fluid">
        <nav class="navbar" style="background-color: #114232;">
          <div class="container-fluid">
            <img src="images/circinus logo.jpg" alt="" width="100px" height="100px">
            <a class="navbar-brand fs-1" href="index.html" style="color:white">Circinus</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon navbar-dark"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title fs-2" id="offcanvasNavbarLabel">Menu</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body" style="background-color: #bcbc8b;">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 fs-4 ">
                  <li class="nav-item">
                    <a class="nav-link font-bold" aria-current="page" href="index.html"><b>Home</b></a>
                  </li>
                  <li class="nav-item font-weight-bold">
                    <a class="nav-link " aria-current="page" href="product.html"><b>Products</b></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link font-weight-bold" href="aboutus.html"><b>About Us</b></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link font-weight-bold" href="faqs.html"><b>Faqs</b></a>
                  </li>
              </div>
            </div>
          </div>
        </nav>
      </div>`
    }
}
class specialFooter extends HTMLElement{
    ConectedCallback(){
        this.innerHTML=`
        <div class="container my-5">

    <footer class="text-center text-lg-start" style="background-color: #114232;">
      <div class="container d-flex justify-content-center py-5">
        <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" style="background-color: white; opacity: 0.8;">
          <i class="fab fa-facebook-f" style="color: black;"></i>
        </button>
        <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" style="background-color: white; opacity: 0.8;">
          <i class="fa-brands fa-youtube" style="color: black;"></i>
        </button>
        <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" style="background-color: white; opacity: 0.8;">
          <i class="fa-brands fa-instagram" style="color: black;"></i>
        </button>
        <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" style="background-color: white; opacity: 0.8;">
          <i class="fa-brands fa-twitter" style="color: black;"></i>
        </button>
       
       
      </div>
  
      <!-- Copyright -->
      <div class="text-center text-white p-3" style="background-color: rgba(0, 0, 0, 0.2);">
        © 2024 Copyright:
        <a class="text-white" href="https://mdbootstrap.com/">Circinus.in</a>
      </div>
      <!-- Copyright -->
    </footer>
    
  </div>`
    }
}
customElements.define("sp-header",specialHeader);
customElements.define("sp-footer",specialFooter);