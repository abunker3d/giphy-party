const gifContainer = document.querySelector('.gif-container');

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = document.querySelector('input[type="text"]')
    getGiphy(userInput.value);
    userInput.value = '';
});

// #remove-btn removes all imgs (gifs)
const removeBtn = document.querySelector('#remove-btn');
removeBtn.addEventListener('click', function () {
    const allImg = document.querySelectorAll('img');
    for (let img of allImg) {
        img.remove();
    }
})

function randomNumber(max) {
    return Math.floor(Math.random() * max);
}

function addGif(url) {
    const gif = document.createElement('img');
    gif.src = url;
    gifContainer.append(gif);
}

async function getGiphy(userInput) {
    const paramObj = { q: userInput, api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym' };
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', { params: paramObj });
    const gifURL = res.data.data[randomNumber(50)].images.original.url;
    addGif(gifURL);
}

