const flipCard = document.querySelector(".flip-card");
//создали переменную карточки
const cardFront = document.querySelector("#card-front");
// создали переменную карточки, которая содержит англ слово
const cardBack = document.querySelector("#card-back");
// создали переменную карточки, которая содержит русск слово

const nextBtn = document.querySelector("#next");
// создали переменную кнопки "вперёд"
const backBtn = document.querySelector("#back");
// создали переменную кнопки "назад"

const shuffleWords = document.querySelector('#shuffle-words');
// создали переменную кнопки 'Перемешать слова'

const testBtn = document.querySelector("#exam")
    // создали переменную кнопки "Тестирование"; 

const words = [{
        word: "собака",
        engWord: "dog",
        example: "For children under three years old dog is the best live toy."
    },
    {
        word: "кот",
        engWord: "cat",
        example: "My cat is very old and fat."
    },
    {
        word: "медведь",
        engWord: 'bear',
        example: "A mama bear and her papa bear cared for their playful cubs"
    },
    {
        word: "кролик",
        engWord: 'rabbit',
        example: "Against the snow, the white rabbit was invisible."
    },
    {
        word: "мышь",
        engWord: 'mouse',
        example: "This time we will deal with mouse events."
    }
]

flipCard.addEventListener("click", function(event) {
    this.classList.toggle("active");
})


const currentWords = [...words];
//coздали переменную, чтобы работать с массивом(перебрать)

function makeCard({ word, engWord, example }) {
    cardFront.querySelector("h1").textContent = engWord;
    cardBack.querySelector("h1").textContent = word;
    cardBack.querySelector("p span").textContent = example;
};
//функция создания карточки

function getCard(arr) {
    arr.forEach((item) => {
        makeCard(item);
    })
};

getCard(currentWords);

function getRandomCard(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

shuffleWords.addEventListener('click', () => {
    makeCard(getRandomCard(currentWords));
});