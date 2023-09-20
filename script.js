const container = document.getElementById("container")

const fetImages =()=>{
    const APIurl =fetch("https://api.unsplash.com/photos/random/?client_id=_DDIVJSgdK-GI1wA3aHOtxC9YTt8tCY6-4jMk7guznY&count=30")

    APIurl.then((responce)=>{
        return responce.json();
    })
    .then((data)=>{
        // console.log(data)
        data.map((items)=>{
            // console.log(items.urls.small) ApI ke andar ke urls ke andar ke samll img

            const image = document.createElement('img')
            image.src = items.urls.small
            container.appendChild(image)
        })
    })
}

window.addEventListener("scroll" , ()=>{
    console.log(window.innerHeight) //Screen ki height return karega

    if(window.innerHeight+window.scrollY >= document.documentElement.scrollHeight){
        fetImages()
    }
})


fetImages()