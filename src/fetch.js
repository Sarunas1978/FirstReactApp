
export default function doFetch(search){
    // console.log(search);
    return fetch(`https://api.giphy.com/v1/gifs/search?api_key=nkV4IRRGJr4mFTMqnn49dtP0Tjg6ffaX&q=${search}&limit=&offset=&rating=g&lang=en`)
.then(result => result.json())
}