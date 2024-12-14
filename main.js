const portfolioBoxes = document.querySelectorAll('.portfolio-box');
const socialLinks = document.querySelectorAll('.social a');

function openLink(element) {
    const link = element.getAttribute('data-link');
    if (link) {
        window.open(link, '_blank');
    }
}

portfolioBoxes.forEach(box => {
    box.addEventListener('click', () => {
        openLink(box);
    });
});

socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        openLink(link);
    });
});

let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  navbar.classList.toggle("open-menu");
  menu.classList.toggle("move");
};
window.onscroll = () => {
  navbar.classList.remove("open-menu");
  menu.classList.remove("move");
};

// Use Live Server To Work The Form
// Email JSbx bx-link-alt
function validate() {
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let msg = document.querySelector(".message");
  let sendBtn = document.querySelector(".send-btn");

  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (name.value == "" || email.value == "" || msg.value == "") {
      emptyerror();
    } else {
      sendmail(name.value, email.value, msg.value);
      success();
    }
  });
}
validate();

function sendmail(name, email, msg) {
  // User Your Service id and template id here
  emailjs.send("service_olkdqmy","template_n59m5oj", {
    from_name: email,
    to_name: name,
    message: msg,
  });
}

function emptyerror() {
  swal({
    title: "Oh No....",
    text: "Fields cannot be empty!",
    icon: "error",
  });
}
function success() {
  swal({
    title: "Email sent successfully",
    text: "I already answered you :)",
    icon: "success",
  });
}
// Header Background Change On Scroll
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("header-active", window.scrollY > 0);
});

// Scroll Top
let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
});
