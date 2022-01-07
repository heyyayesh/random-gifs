const img = document.querySelector('img');
const searchBox = document.getElementById('search');
const okBtn = document.getElementById('ok');
const shuffleBtn = document.getElementById('shuffle');

let searchTerm = 'cats';

async function loadGif(term){
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=QbEkjBq8o6r7Ivx6lrwh8twaHnqMbKM7&s=${term}`, {mode: 'cors'})
    const gifData = await response.json();
    img.src = gifData.data.images.original.url;
}

okBtn.addEventListener('click', () => {
    if(searchBox.value.trim == null){
        searchTerm = 'cats';
    }
    else{
        searchTerm = searchBox.value;
    }
    loadGif(searchTerm);
});

shuffleBtn.addEventListener('click', () => {
    loadGif(searchTerm);
});

loadGif('cats');