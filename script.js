document.addEventListener('DOMContentLoaded', function () {
  var formId = "1FAIpQLSd2sEDtvU3rFtk_FV2mhkfmx2f3wt5JBKSxwTO7c9ES6Au8QA";
  var form = document.getElementById('myCustomForm');
  var validationMessages = document.getElementsByClassName('invalid-feedback');
  var selectedReasonInput = document.getElementById('selectedReason');
  var radioButtons = document.querySelectorAll('input[type="radio"][name="reason"]');

  radioButtons.forEach(function (radio) {
      radio.addEventListener('change', function () {
          selectedReasonInput.value = this.value;
      });
  });

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


document.addEventListener('DOMContentLoaded', function () {
  var currentYear = new Date().getFullYear(); // Get the current year
  document.getElementById('current-year').textContent = currentYear; // Set the current year in the footer
});


// Function to dynamically create Swiffy Sliders with variable media (images, videos, YouTube)
function createSwiffySlider(initialFolder, containerId, imageFolder, mediaList,) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error('Slider container not found:', containerId);
    return;
  }

  container.innerHTML = ''; // Clear any existing content in the container

  mediaList.forEach(media => {
    const path = `./content/${initialFolder}/${imageFolder}/${media.src}`;
    const li = document.createElement('li');
    li.style.cssText = 'display: flex; justify-content: center; align-items: center; height: 300px; overflow: hidden; opacity:1';  // Set height for all media types

    if (media.type === 'image') {
      const img = document.createElement('img');
      img.src = path;
      img.className = 'img-fluid rounded shadow';
      img.style.cssText = `height: 100%; width: auto; object-fit: contain; object-position: ${media.object_position ? media.object_position : 'center'};`;
      img.alt = "Event Image " + path.match(/([^\/]+)$/)[0];
      li.appendChild(img);
    } else if (media.type === 'video') {
      // create image element
      const img = document.createElement('img');
      img.src = `./content/${initialFolder}/${imageFolder}/${media.screenshot}`;
      img.alt = "Video Thumbnail"
      img.id = media.imageId;
      img.className = 'img-fluid rounded shadow h-100';
      li.appendChild(img);
      const video = document.createElement('video');
      video.id = media.videoId;
      video.className = 'w-100';
      video.controls = true;
      video.style.cssText = 'max-height: 300px; display: none;';
      const source = document.createElement('source');
      source.src = path;
      source.type = 'video/mp4';
      video.appendChild(source);
      li.appendChild(video);

      img.addEventListener('click', () => {
        const videoContainer = img.parentNode;
        const videoElement = videoContainer.querySelector('video');
        img.style.display = 'none';
        videoElement.style.display = 'block';
        videoElement.play();
      });
    } else if (media.type === 'youtube') {
      const iframe = document.createElement('iframe');
      iframe.width = media.width;
      iframe.height = media.height;
      iframe.src = `https://www.youtube.com/embed/${media.src}`;
      iframe.className = 'w-100';
      iframe.allow = '';
      // iframe.style.cssText = 'max-height: 300px;';
      iframe.setAttribute('frameborder', "0");
      iframe.setAttribute('allowfullscreen', "");
      li.appendChild(iframe);
    }

    container.appendChild(li);
  });
}
