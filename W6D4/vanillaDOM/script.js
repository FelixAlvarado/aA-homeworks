document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!
const submitButton = document.querySelector(".favorite-submit");
submitButton.addEventListener("click", (event) => {
event.preventDefault();

const favoriteCity = document.querySelector(".favorite-input");
const city = favoriteCity.value;
const newCity = document.createElement("li");
newCity.textContent = city;
favoriteCity.value = '';
const cityList = document.getElementById('sf-places');
cityList.appendChild(newCity);
});


  // adding new photos

  // --- your code here!
  const showButton = document.querySelector(".photo-show-button");
showButton.addEventListener("click", (event) => {
    const photoForm = document.querySelector(".photo-form-container");
    if (photoForm.className === "photo-form-container") {
      photoForm.className = "photo-form-container hidden";
    } else {
      photoForm.className = "photo-form-container";
    }
  });

  const addPhotoButton = document.querySelector(".photo-url-submit");
  addPhotoButton.addEventListener("click", (event) => {
    event.preventDefault();

    const photoLocation = document.querySelector(".photo-url-input");
    const link = photoLocation.value;
    photoLocation.value = "";
    const newPhoto = document.createElement("img");
    newPhoto.src = link;
    const listItem = document.createElement("li");
    listItem.appendChild(newPhoto);
    const photoList = document.querySelector(".dog-photos");
    photoList.appendChild(listItem);
  });



});
