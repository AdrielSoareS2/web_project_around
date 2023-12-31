const popup = document.querySelector(".popup");
const editPopupButton = document.querySelector(".profile__edit-button");
const closePopupButton = document.querySelector(".popup__close-icon");
const form = document.querySelector(".popup__form");
const inputName = document.querySelector(".popup__form-input_name"); 
const inputAbout = document.querySelector(".popup__form-input_about");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__job");
const addPopupButton = document.querySelector(".profile__add-button");
const inputTitle = document.querySelector(".popup__form-input_title");
const inputImage = document.querySelector(".popup__form-input_link");
const popupAdd = document.querySelector(".popup-add");
const closePopupAddButton = document.querySelector(".popup-close");
const cardName = document.querySelector(".elements__card-name");
const cardImage = document.querySelector(".elements__card-img");
const popupImage = document.querySelector(".popup-image");




editPopupButton.addEventListener("click", function () {
    popup.classList.add("popup_opened");
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
});

closePopupButton.addEventListener("click", function() {
    popup.classList.remove("popup_opened")
});


function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    popup.classList.remove("popup_opened");
  }
  
  form.addEventListener("submit", handleProfileFormSubmit);


function addCard(cardData) {
    const templateCard = document.querySelector("#template-card");
    const cardElement = templateCard.content.cloneNode(true);
  
    const nameElement = cardElement.querySelector(".elements__description-text");
    nameElement.textContent = cardData.name;
    
    const imageElement = cardElement.querySelector(".elements__card-image");
    imageElement.src = cardData.image;
    imageElement.alt = cardData.name;
  
    const popupImage = document.querySelector(".popup-image");
  
    imageElement.addEventListener("click", () => {
      const popupZoom = document.querySelector(".popup__image-zoom");
      popupZoom.src = cardData.image;
      const popupDescription = document.querySelector(".popup__description-text");
      popupDescription.textContent = cardData.name;
      popupImage.classList.add("popup_opened");
    });
    
    const closeZoom = document.querySelector(".popup__close-zoom");
    closeZoom.addEventListener("click", () => {
      popupImage.classList.remove("popup_opened");
    })
  
    const cardList = document.querySelector(".elements__card");
    cardList.prepend(cardElement);
  
    const trashButton = document.querySelector(".elements__button-trash");
    trashButton.addEventListener("click", () => {
      const removeElement = trashButton.closest(".elements__card-li");
      removeElement.remove();
    });
  
    const likeButton = document.querySelector(".elements__button-like");
    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("elements__button-like_active");
    });
  }

  const initialCards = [
    {
      name: "Vale de Yosemite",
      image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    },
    {
      name: "Lago Louise",
      image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    },
    {
      name: "Montanhas Carecas",
      image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
    },
    {
      name: "Latemar",
      image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
    },
    {
      name: "Parque Nacional da Vanoise ",
      image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
    },
    {
      name: "Lago di Braies",
      image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
    }
];

initialCards.forEach(addCard);


addPopupButton.addEventListener("click", () => {
  popupAdd.classList.add("popup_opened");
  inputTitle.value = "";
  inputImage.value = "";
});

closePopupAddButton.addEventListener("click", function() {
  popupAdd.classList.remove("popup_opened");
});

const formAdd = document.querySelector(".popup__form_add");

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const inputTitle = document.querySelector(".popup__form-input_title");
  const inputImage = document.querySelector(".popup__form-input_link");

  const cardData = {
    name: inputTitle.value,
    image: inputImage.value,
  };
  
  addCard(cardData);
  popupAdd.classList.remove("popup_opened");
} 
formAdd.addEventListener("submit", handleCardFormSubmit);

const closePopups = (event) => {
  if (event.key === 'Escape') {
    popup.classList.remove("popup_opened");
    popupImage.classList.remove("popup_opened");
    popupAdd.classList.remove("popup_opened");
  } 
  event.target.removeEventListener('keydown', closePopups);

  if (event.target) {
    event.target.classList.remove("popup_opened");
  }
  event.target.removeEventListener('click', closePopups);
}

document.addEventListener('keydown', closePopups);
document.addEventListener('click', closePopups);