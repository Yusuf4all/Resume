window.addEventListener('load', init);
function init() {
  scrollAnimation();
}

function scrollAnimation() {
  var skills = document.querySelector("#skills");
  var service = document.querySelector("#service");
  var projects = document.querySelector("#Projects");
  var contact = document.querySelector("#contact");
  var about = document.querySelector("#about");
  window.addEventListener("scroll", function () {

      if ($(window).scrollTop() && window.innerWidth > 768) {
          $('#header').addClass('change');
      } else {
          $('#header').removeClass('change');
      }

    var scrollY = window.scrollY;
    var skillsoffset = skills.offsetTop;
    var serviceoffset = service.offsetTop;
    var projectsoffset = projects.offsetTop;
    var aboutoffset = about.offsetTop;
    var contactoffset = contact.offsetTop;
    serviceoffset -= scrollY;
    skillsoffset -= scrollY;
    projectsoffset -= scrollY;
    contactoffset -= scrollY;
    aboutoffset -= scrollY;

    if (skillsoffset < window.innerHeight / 2 - 100) {
      skills.className = 'skills-animate';
    }

    else {
      skills.className = '';
    }

    if (serviceoffset < window.innerHeight / 2 - 100) {
      service.className = 'service-animate';
    }

    else {
      service.className = '';
    }

    if (projectsoffset < window.innerHeight / 2 - 100) {
      projects.className = 'projects-animate';
    }

    else {
      projects.className = '';
    }

    if (aboutoffset < window.innerHeight / 2 - 100) {
      about.className = 'about-animate';
    }

    else {
      about.className = '';
    }

    if (contactoffset < window.innerHeight / 2 - 100) {
      contact.className = 'contact-animate';
    }

    else {
      contact.className = '';
    }

  })
}

