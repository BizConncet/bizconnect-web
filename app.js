
// MODAL
const navbarLoginBtn = document.getElementById("navbar-login-btn");
const authModal = document.getElementById("auth-modal");
const closeModal = document.getElementById("close-modal");

navbarLoginBtn.addEventListener("click", ()=> authModal.classList.add("show"));
closeModal.addEventListener("click", ()=> authModal.classList.remove("show"));

// SUBMIT IDEA
const ideaForm = document.getElementById("idea-form");
const ideasList = document.getElementById("ideas-list");

ideaForm.addEventListener("submit", e => {
  e.preventDefault();
  const title = document.getElementById("idea-title").value;
  const desc = document.getElementById("idea-desc").value;
  const tags = document.getElementById("idea-tags").value;
  const ideaEl = document.createElement("div");
  ideaEl.classList.add("idea-item");
  ideaEl.innerHTML = `<h4>${title}</h4><p>${desc}</p><small>Tags: ${tags}</small>`;
  ideasList.prepend(ideaEl);
  ideaForm.reset();
});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});
