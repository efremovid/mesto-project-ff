// @todo: Темплейт карточки

// @todo: DOM узлы
const containerListCards = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;
// @todo: Функция создания карточки
function createCard (cardData, deleteCard) {
    const elementCard = cardTemplate.cloneNode(true)
    const deleteBtn = elementCard.querySelector('.card__delete-button')
    const cardImg = elementCard.querySelector('.card__image')
    const cardTitle = elementCard.querySelector('.card__title')
    cardTitle.textContent = cardData.name
    cardImg.src = cardData.link
    cardImg.alt = cardData.name
    deleteBtn.addEventListener('click', deleteCard)
    return elementCard
}
// @todo: Функция удаления карточки
function deleteCardCallBack (e) {
    e.target.closest('.places__item').remove()
}
// @todo: Вывести карточки на страницу
function renderCard () {
    for (let i = 0; i < initialCards.length; i++) {
        const cardElement = createCard(initialCards[i], deleteCardCallBack)
        containerListCards.append(cardElement)
    }
}

renderCard ()
