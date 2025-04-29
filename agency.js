"use strict";

/**add event listener on multiple elements */
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/** NARBAR TAGGLE FOR MOBILE */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};
addEventOnElements(navTogglers, "click", toggleNavbar);

/** HEADER
 * active header when scroll down to 100px
 */
const header = document.querySelector("[data-header]");
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

// ----------------------------------------------------------------------------------------------------
/** ACCORDION */

// CONTACT US MESSAGE
function sendToWhatsapp() {
  var email = document.getElementById("email").value.trim();
  var name = document.getElementById("name").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var brand = document.getElementById("brand").value.trim();
  var handle = document.getElementById("handle").value.trim();
  var message = document.getElementById("message").value.trim();

  // Optional: Basic validation
  if (!name || !phone || !message) {
    alert("Please fill out at least Name, Phone, and Message.");
    return;
  }

  var text =
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Phone: ${phone}\n` +
    `Brand: ${brand}\n` +
    `Handle: ${handle}\n` +
    `Message: ${message}`;

  var encodedText = encodeURIComponent(text);

  var url = "https://wa.me/2349032387513?text=" + encodedText;

  window.open(url, "_blank").focus();
}

// HERO VIDEO
function toggle() {
  var trailer = document.querySelector(".trailer");
  var video = document.querySelector("video");
  trailer.classList.toggle("active");
  video.pause();
  video.currentTime = 0;
}
