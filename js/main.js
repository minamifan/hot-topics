// GET THE REFERENCES
const container = document.querySelector(".content");
const links = document.querySelectorAll("nav ul li a");
let url = "./partials/home.html";

// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL
const loadContent = (urlFeed) => {
  fetch(urlFeed)
    .then((response) => response.text())
    .then((data) => {
      container.innerHTML = data;
    })
    .catch((error) => console.error(error));
};

// CALL loadContent WITH THE CURRENT VALUE OF url
loadContent(url);

// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL:
const selectContent = (event) => {
  // PREVENT DEFAULT BEHAVIOUR OF A LINK TAG
  event.preventDefault();

  // GET THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK
  url = event.target.href;

  // CALL THE FUNCTION loadContent PROVIDING THE href
  // VALUE OF THE CLICKED LINK AS THE VALUE FOR THE PARAMETER
  // OF loadContent FUNCTION.
  loadContent(url);
};

// REGISTER links FOR CLICK EVENT WITH selectContent AS EVENT HANDLER!
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", selectContent);
}
