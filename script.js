
  // JavaScript function to inject header and footer
  async function injectHeaderAndFooter() {
    var scriptJQuery = document.createElement('script');
    scriptJQuery.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js";
    var linkStylesCss = document.createElement('link');
    linkStylesCss.href = "styles.css";
    linkStylesCss.rel = "stylesheet";
    document.head.appendChild(linkStylesCss);
    var linkStylesCssOne = document.createElement('link');
    linkStylesCssOne.href = "styles-res-577-768.css";
    linkStylesCssOne.rel = "stylesheet";
    var linkStylesCssTwo = document.createElement('link');
    linkStylesCssTwo.href = "styles-res-769-992.css";
    linkStylesCssTwo.rel = "stylesheet";
    var linkStylesCssThree = document.createElement('link');
    linkStylesCssThree.href = "styles-res-max-576.css";
    linkStylesCssThree.rel = "stylesheet";
    var linkStackpathBootstrap = document.createElement('link');
    linkStackpathBootstrap.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css";
    linkStackpathBootstrap.rel = "stylesheet";
    var scriptJQuerySec = document.createElement('script');
    scriptJQuerySec.src = "https://code.jquery.com/jquery-3.5.1.slim.min.js";
    
    var scriptJQueryThird = document.createElement('script');
    scriptJQueryThird.src = "https://code.jquery.com/jquery-3.6.0.min.js";
    var scriptJQueryFourth = document.createElement('script');
    scriptJQueryFourth.src = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/js/bootstrap.bundle.min.js";
    var scriptJSElivr = document.createElement('script');
    scriptJSElivr.src = "https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js";
    var scriptBootstrap = document.createElement('script');
    scriptBootstrap.src = "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js";
    var scriptFontawesome = document.createElement('script');
    scriptFontawesome.src = "https://kit.fontawesome.com/a076d05399.js";
    var linkLogo = document.createElement('link');
    linkLogo.href = 'logo.webp';
    linkLogo.rel = 'icon';
    linkLogo.type = 'image/x-icon';
    // var pageTitle = document.createElement('title');
    // pageTitle.innerHTML = 'Lilium | ' + window.location.pathname.split('/').pop();

    
    document.head.appendChild(linkLogo);
    // document.head.appendChild(pageTitle);
    document.head.appendChild(scriptJQuerySec);
    document.head.appendChild(scriptJQueryThird);
    document.head.appendChild(scriptJQueryFourth);
    document.head.appendChild(scriptJSElivr);
    document.head.appendChild(scriptJQuery);
    document.head.appendChild(linkStackpathBootstrap);
    document.head.appendChild(scriptBootstrap);
    document.head.appendChild(linkStylesCss);
    document.head.appendChild(linkStylesCssOne);
    document.head.appendChild(linkStylesCssTwo);
    document.head.appendChild(linkStylesCssThree);
    document.head.appendChild(scriptFontawesome);
    
    // Create a new header element
    const header = document.createElement('header');
    header.innerHTML = `
    <!-- Navbar and logo -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <a class="navbar-brand" href="index.html">
      <img src="logo.webp" alt="Company Logo">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto bg-black">
        <li class="nav-item">
          <a class="nav-link" href="services.html">Services</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Company
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="about.html">About</a>
            <a class="dropdown-item" href="team.html">Our Team</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact.html">Contact</a>
        </li>
        </ul>
        <div class="nav-item" style="padding: 10px;"></div>
        <div class="nav-item">
          <a class="btn btn-primary get-a-quote-navbar get-a-quote" href="contact.html">Get a Quote</a>
        </div>
    </div>
  </nav>
    `;
  
    // Create a new footer element
    const footer = document.createElement('footer');
    footer.innerHTML = `
    <div class="footer-column">
    <h5>Contact</h5>
    <p>Uziel 52, Jerusalem</p>
    <p>Phone: (+) 972 58 763 0661</p>
    <p>Email: office@liliumsolutions.com</p>
    <br />
    
    <a class="btn get-a-quote" href="contact.html">Get a Quote</a>
    <br />
    <p class="copyright">
    <br />
      &copy; 2023 by Lilium LTD.
    </p>
  </div>

  <div class="footer-column">
  <h5>Menu</h5>
<a href="index.html">Home</a>
  <br />
  <a href="services.html">Services</a>
  <br />
  <a href="about.html">About</a>
  <br />
  <a href="contact.html">Contact</a>
    </div>
    
  <div class="footer-column">
  <h5>Follow us on</h5>
<a href="facebook.com">Facebook</a>
  <br />
  <a href="linkedin.com">LinkedIn</a>
  <br />
  <a href="twitter.com">Twitter</a>
    </div>
    `;
  
    // Get the main content element
    const mainContent = document.querySelector('main');
  
    // Insert the header before the main content
    await mainContent.parentNode.insertBefore(header, mainContent);
  
    // Append the footer after the main content
    await mainContent.parentNode.appendChild(footer);
    addActiveLinktoActiveNavLink();
    window.scrollTo(0, 0);
    fadeEffect();
  }
  
  function addActiveLinktoActiveNavLink() {
    // Get the current HTML file name
    var currentFileName = location.pathname.split("/").slice(-1)[0];

    // Get all nav-link items
    var navLinks = document.getElementsByTagName("a");

    // Loop through nav-link items and check if the file name matches
    for (var i = 0; i < navLinks.length; i++) {
      var linkFileName = navLinks[i].getAttribute("href").split("/").slice(-1)[0];
      // Add the "active-link" class if the file name matches
      if (linkFileName === currentFileName) {
        navLinks[i].classList.add("active-link");
      }
    }
  }
  // Call the injectHeaderAndFooter function when the page finishes loading
  window.addEventListener('load', injectHeaderAndFooter);

  async function fadeEffect() {
    // Fade in the main content container
    // var mainContent = document.querySelector('.main-content-container');
    // mainContent.classList.add('fade-in');
  
    // Get all elements in the page
    var allElements = document.querySelectorAll('*');
    await allElements.forEach(async function(element) {
      if (element.classList.contains('fade-in')) {
        await element.classList.remove('fade-in');
      }
    });

    // Delay and fade in each element
    await allElements.forEach(function(element, index) {
      if (element.classList.contains('fade-on-scroll')) return;
      element.classList.add('fade-in');
    });

    // Fade in the body after the page is loaded
    document.body.classList.add('loaded');
  }
  
  function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    var windowWidth = (window.innerWidth || document.documentElement.clientWidth);
  
    var vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    var horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
  
    return (vertInView && horInView);
  }

  function handleScroll() {
    var elements = document.querySelectorAll('.fade-on-scroll');

    
    for (var i = 0; i < elements.length; i++) {
      if (isElementInViewport(elements[i])) {
        elements[i].classList.remove('fade-on-scroll');
        elements[i].classList.add('fade-in');
      }
    }
  }

  window.addEventListener('scroll', handleScroll);
