document.addEventListener('DOMContentLoaded', function () {
    var formId = "1FAIpQLSehsrCqZrw0rwtZTA4aoFl58kkmRcgzYJLEFzDNSML8iliqCQ";
    var form = document.getElementById('myCustomForm');
    var validationMessages = document.getElementsByClassName('invalid-feedback');

    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent default form submission

      if (!this.checkValidity()) {
        event.stopPropagation(); // Stop the form from submitting
        Array.from(validationMessages).forEach(function (message) {
          if (message.previousElementSibling && !message.previousElementSibling.validity.valid) {
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

    Array.from(form.elements).forEach(function (input) {
      input.addEventListener('input', function () {
        if (this.validity.valid) {
          if (this.nextElementSibling && this.nextElementSibling.classList.contains('invalid-feedback')) {
            this.nextElementSibling.style.display = 'none';
          }
        }
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var currentYear = new Date().getFullYear(); // Get the current year
    document.getElementById('current-year').textContent = currentYear; // Set the current year in the footer
  });