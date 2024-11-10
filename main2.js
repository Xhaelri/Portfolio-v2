/* Emailjs conncetion */
function sendEmail() {
    (function () {
      emailjs.init("pGjk905LPP7eWJ9fv");
    })();
    let content = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
    };
    emailjs.send("service_kdrx0on", "template_zf9hb2y", content).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Email successfully sent!");
      },
      function (error) {
        console.log("FAILED...", error);
        alert("Failed to send email. Please try again later.");
      }
    );
  }
  
  /* Form Validation */
  document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();
  
    let isValid = true;
  
    const name = document.getElementById("name").value;
    if (name.length < 3 || name.length > 25) {
      document.getElementById("nameError").textContent =
        "*Name must be between 3 and 25 characters.";
      isValid = false;
    } else {
      document.getElementById("nameError").textContent = "";
    }
  
    const email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent =
        "*Please enter a valid email address.";
      isValid = false;
    } else {
      document.getElementById("emailError").textContent = "";
    }
  
    const subject = document.getElementById("subject").value;
    if (subject.length < 2) {
      document.getElementById("subjectError").textContent =
        "*Please write a valid message.";
      isValid = false;
    } else {
      document.getElementById("subjectError").textContent = "";
    }
  
    if (isValid) {
      sendEmail();
    }
  });
  
  /* menu function */
  function closeMenuAndNavigate() {
    document.getElementById("menuToggle").checked = false;
  }
  /* observer*/
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } /* else {
        entry.target.classList.remove("show");
      } */
    });
  });
  
  const observingElements = document.querySelectorAll(".container");
  observingElements.forEach((el) => observer.observe(el));
  //
  
  const observerCard = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("card_show");
      } /*  else {
        entry.target.classList.remove("card_show");
      } */
    });
  });
  const observingCards = document.querySelectorAll(".card_hide");
  observingCards.forEach((el) => observerCard.observe(el));
  
  