// Function to dynamically render the navbar
function renderNavbar(targetElementId) {
  const targetElement = document.getElementById(targetElementId);
  if (!targetElement) {
    console.error(`Target element with ID '${targetElementId}' not found.`);
    return;
  }

  // Create the navbar HTML content
  const navbarHTML = `
  <nav class="navbar navbar-expand-lg bg-light navbar-no-decoration">
    <div class="container-fluid">
      <!-- Branding -->
      <a class="navbar-brand d-flex align-items-center" href="index.html">Halle St. John</a>

      <!-- YouTube icon for small screens (visible next to title) -->
      <a
        class="nav-link d-inline-flex align-items-center d-lg-none ms-2 navbar-icon-link"
        href="https://www.youtube.com/@hallebobally337"
        target="_blank"
        aria-label="YouTube channel"
      >
        <i class="bi bi-youtube navbar-icon"></i>
      </a>
      <!-- Instagram icon for small screens -->
      <a
        class="nav-link d-inline-flex align-items-center d-lg-none me-3 navbar-icon-link"
        href="https://www.instagram.com/hallebobally_cle/"
        target="_blank"
        aria-label="Instagram"
      >
        <i class="bi bi-instagram navbar-icon"></i>
      </a>

      <!-- Toggler for mobile view -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar links -->
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav me-auto">
          <a class="nav-link d-inline-flex align-items-center" href="index.html">Home</a>
          <a class="nav-link d-inline-flex align-items-center" href="about.html">About</a>

          <!-- Dropdown Menu -->
          <div class="nav-item dropdown d-inline-flex align-items-center">
            <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Services
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="hallebobally.html">Halle Bo Bally</a></li>
              <li><a class="dropdown-item" href="princessparties.html">Princess Parties</a></li>
              <!-- <li><a class="dropdown-item" href="#">Story Time</a></li> -->
              <li><a class="dropdown-item" href="vocalist.html">Vocalist</a></li>
              <li><a class="dropdown-item" href="theater.html">Theater</a></li>
            </ul>
          </div>

          <a class="nav-link d-inline-flex align-items-center" href="media.html">Media</a>
          <a class="nav-link d-inline-flex align-items-center" href="contact.html">Contact</a>
          <a
            class="nav-link d-none d-lg-inline-flex align-items-center align-self-center navbar-icon-link"
            href="https://www.youtube.com/@hallebobally337"
            target="_blank"
            aria-label="YouTube channel"
          >
            <i class="bi bi-youtube navbar-icon"></i>
          </a>
          <a
            class="nav-link d-none d-lg-inline-flex align-items-center align-self-center navbar-icon-link"
            href="https://www.instagram.com/hallebobally_cle/reels/"
            target="_blank"
            aria-label="Instagram"
          >
            <i class="bi bi-instagram navbar-icon"></i>
          </a>
        </div>
        <div class="navbar-nav">
          <!-- <a class="nav-link" href="#"><i class="bi bi-twitter"></i></a>
          <a class="nav-link" href="#"><i class="bi bi-facebook"></i></a>
          <a class="nav-link" href="#"><i class="bi bi-linkedin"></i></a> -->
        </div>
      </div>
    </div>
  </nav>
  `;

  // Insert the navbar into the target element
  targetElement.innerHTML = navbarHTML;
}

// Function to dynamically render the contact form
function renderContactForm(targetElementId) {
  const targetElement = document.getElementById(targetElementId);
  if (!targetElement) {
    console.error(`Target element with ID '${targetElementId}' not found.`);
    return;
  }

  // Create the form HTML content
  const formHTML = `
  <section class="container-fluid px-5 py-5 contact-section" id="contact">
    <div class="row"> 
      <div class="col-lg-12 text-center">
        <h3 class="display-3 mb-4">Let's talk about everything!</h3>
        <h5 class="arial">
          Don't like forms? Send me an email instead. <a href="mailto:hallebbstories@gmail.com">hallebbstories@gmail.com</a>
        </h5>
        <h5 class="arial mb-3">
          Want to talk on the phone? Give me a call at <a href="tel:216-577-2428">216-577-2428</a>
        </h5>
      </div>
      <div class="col-12 col-lg-4 mx-auto pb-3 p-0">
        <p class="display-5 my-4 text-center">Contact Form</p>
        <form id="myCustomForm" class="needs-validation" novalidate>
          <!-- first name -->
          <div class="mb-3">
            <label for="firstname" class="form-label arial">First Name</label>
            <input type="text" class="form-control" id="firstname" name="entry.251350530" required>
            <div class="invalid-feedback">
              Please enter your first name.
            </div>
          </div>
          <!-- last name -->
          <div class="mb-3">
            <label for="lastname" class="form-label arial">Last Name</label>
            <input type="text" class="form-control" id="lastname" name="entry.1691571590" required>
            <div class="invalid-feedback">
              Please enter your last name.
            </div>
          </div>
          <!-- email -->
          <div class="mb-3">
            <label for="email" class="form-label arial">Email</label>
            <input type="email" class="form-control" id="email" name="entry.1731961914" required>
            <div class="invalid-feedback">
              Please enter a valid email address.
            </div>
          </div>

          <!-- hidden input for selected reason -->
          <input type="hidden" id="selectedReason" name="entry.52929734" value="Halle Bo Bally">

          <!-- reason -->
          <div class="mb-3 arial">
            <label class="form-label arial">Reason for Contact</label>
            <div>
              <input type="radio" id="reason_halle" name="reason" value="Halle Bo Bally" checked>
              <label for="reason_halle">Halle Bo Bally</label>
            </div>
            <div>
              <input type="radio" id="reason_princess" name="reason" value="Princess Parties">
              <label for="reason_princess">Princess Parties</label>
            </div>
            <div>
              <input type="radio" id="reason_vocalist" name="reason" value="Vocalist for Hire">
              <label for="reason_vocalist">Vocalist for Hire</label>
            </div>
            <div>
              <input type="radio" id="reason_other" name="reason" value="Other">
              <label for="reason_other">Other</label>
            </div>

            <div class="invalid-feedback">
              Please select a reason for contacting me.
            </div>
          </div>
          <!-- message -->
          <div class="mb-3">
            <label for="message" class="form-label arial">Message</label>
            <textarea class="form-control" id="message" name="entry.365137442" rows="5" required></textarea>
            <div class="invalid-feedback">
              Please enter a message.
            </div>
          </div>

          <!-- phone -->
          <div class="mb-3">
            <label for="phone" class="form-label arial">Phone Number</label>
            <input type="text" class="form-control" id="phone" name="entry.1460823130" required>
            <div class="invalid-feedback">
              Please enter a valid phone number.
            </div>
          </div>

          <!-- submit button -->
          <div class="text-center">
            <button class="btn btn-success text-white m-1 py-2 px-4 arial" type="submit"><strong>Send
                Message</strong></button>
            <div id="submitSuccessMessage" class="alert alert-success mt-3 d-none" role="alert">
              Thanks for reaching out! I'll get back to you soon!
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- footer -->
    <footer class="text-center py-3">
      <p class="arial">&copy; <span id="current-year"></span> Halle St. John</p>
      <span>
        <!-- <a class="" href="#"><i class="bi bi-twitter"></i></a> -->
        <!-- <a class="" href="#"><i class="bi bi-facebook"></i></a> -->
        <a class="" href="https://www.youtube.com/@hallebobally337" target="_blank">
          <i class="bi bi-youtube" style="font-size: 2.5rem; color: #ff69b4;"></i>
        </a>
        <a class="ms-2" href="https://www.instagram.com/hallebobally_cle/reels/" target="_blank">
          <i class="bi bi-instagram" style="font-size: 2.2rem; color: #ff69b4;"></i>
        </a>
        
        <!-- <a class="" href="#"><i class="bi bi-linkedin"></i></a> -->
      </span>
    </footer>
  </section>
  `;

  // Insert the form into the target element
  targetElement.innerHTML = formHTML;

  // Set up the form event listeners and validation
  initializeFormEvents();
}

// Function to initialize form event listeners and validation
function initializeFormEvents() {
  var formId = "1FAIpQLSd2sEDtvU3rFtk_FV2mhkfmx2f3wt5JBKSxwTO7c9ES6Au8QA";
  var form = document.getElementById('myCustomForm');
  var validationMessages = document.getElementsByClassName('invalid-feedback');
  var selectedReasonInput = document.getElementById('selectedReason');
  var radioButtons = document.querySelectorAll('input[type="radio"][name="reason"]');

  if (!form) {
    console.error('Form not found after insertion.');
    return;
  }

  // Set up radio button change events
  radioButtons.forEach(function (radio) {
    radio.addEventListener('change', function () {
      selectedReasonInput.value = this.value;
    });
  });

  // Set up form submission
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    if (!this.checkValidity()) {
      event.stopPropagation(); // Stop the form from submitting
      Array.from(validationMessages).forEach(function (message) {
        if (message.previousElementSibling && message.previousElementSibling.tagName === 'INPUT' && !message.previousElementSibling.validity.valid) {
          message.style.display = 'block';
        }
      });
      this.classList.add('was-validated');
      return; // Prevent the form from submitting
    }

    var formData = new FormData(this);

    fetch(`https://docs.google.com/forms/d/e/${formId}/formResponse`, {
      method: 'POST',
      body: formData,
      mode: 'no-cors' // CORS must be set to 'no-cors'
    }).then(response => {
      document.getElementById('submitSuccessMessage').classList.remove('d-none');
      this.reset(); // Optionally reset the form after submission
      this.classList.remove('was-validated');
      Array.from(validationMessages).forEach(function (message) {
        message.style.display = 'none';
      });
    }).catch(error => {
      console.error('Error:', error);
    });
  });

  // Set up input validation events
  Array.from(form.elements).forEach(function (input) {
    input.addEventListener('input', function () {
      if (this.validity.valid) {
        if (this.nextElementSibling && this.nextElementSibling.classList.contains('invalid-feedback')) {
          this.nextElementSibling.style.display = 'none';
        }
      }
    });
  });

  // Set the current year in the footer
  var currentYear = new Date().getFullYear();
  document.getElementById('current-year').textContent = currentYear;
}

// Function to initialize dropdown functionality for the navbar
function initializeNavbarEvents() {
  // If you need additional initialization for the navbar (like special dropdown handling)
  // You can add it here. Bootstrap's dropdowns should work automatically with their data attributes.

  // Example: Manual initialization of dropdowns if needed
  // const dropdownToggleElements = document.querySelectorAll('.dropdown-toggle');
  // dropdownToggleElements.forEach(dropdown => {
  //   dropdown.addEventListener('click', function() {
  //     const dropdownMenu = this.nextElementSibling;
  //     dropdownMenu.classList.toggle('show');
  //   });
  // });
}

// Function to render all components on any page
function renderComponents(options = {}) {
  const defaults = {
    navbar: true,
    navbarContainerId: 'navbar-container',
    contactForm: true,
    contactFormContainerId: 'contact-and-footer'
  };

  const settings = { ...defaults, ...options };

  if (settings.navbar && document.getElementById(settings.navbarContainerId)) {
    renderNavbar(settings.navbarContainerId);
    initializeNavbarEvents();
  }

  if (settings.contactForm && document.getElementById(settings.contactFormContainerId)) {
    renderContactForm(settings.contactFormContainerId);
  }
}

// Call these functions when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Render all components with default settings
  renderComponents();
});