const toggle = document.getElementById("toggle"),
  links = document.getElementById("links");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.textContent = open ? "×" : "☰";
});
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "☰";
  }),
);
document.querySelectorAll(".question").forEach((btn) =>
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq-item"),
      was = item.classList.contains("active");
    document.querySelectorAll(".faq-item").forEach((x) => {
      x.classList.remove("active");
      x.querySelector(".question").setAttribute("aria-expanded", "false");
      x.querySelector(".question span:last-child").textContent = "+";
    });
    if (!was) {
      item.classList.add("active");
      btn.setAttribute("aria-expanded", "true");
      btn.querySelector("span:last-child").textContent = "−";
    }
  }),
);

const consultForm = document.getElementById("consultForm");
const thankyou-message = document.getElementById("thank-you");

thankyou-message.style.display = "none";
consultForm.addEventListener("submit", (e) => {
  e.preventDefault();
  consultForm.style.display = "none";
});
// const consultForm = document.getElementById("consultForm");
// const formMessage = document.getElementById("message");
// const submitButton = consultForm.querySelector('button[type="submit"]');

// consultForm.addEventListener("submit", async (event) => {
//   event.preventDefault();

//   const formData = new FormData(consultForm);
//   submitButton.disabled = true;
//   submitButton.textContent = "Sending...";

//   formMessage.textContent = "Please wait. Sending your request...";

//   try {
//     const response = await fetch("send-email.php", {
//       method: "POST",
//       body: formData,
//     });
//     const result = await response.json();

//     if (!response.ok || !result.success) {
//       throw new Error(result.message || "Unable to send your request.");
//     }
//     formMessage.textContent = result.message;
//     consultForm.reset();
//   } catch (error) {
//     formMessage.textContent = error.message;
//   } finally {
//     submitButton.disabled = false;
//     submitButton.textContent = "Request My Free Call →";
//   }
// });
