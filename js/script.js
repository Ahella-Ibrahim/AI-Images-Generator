
const api = "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"
const inp = document.getElementById('inp')
const images = document.querySelector('.images')

const getImage = async () => {
    //make a request to openia api
    const methods = {
        method: "POST",
        headers: { // old: haders >> headers
            "Content-Type": " application/json",
            "Authorization": `Bearer ${api}`

        },
        body: JSON.stringify(
            {
                "prompt": inp.value, // old : promt >> prompt
                "n": 3,
                "size": "256x256"
            }
        )
    }
    const res = await fetch("https://api.openai.com/v1/images/generations", methods)


    //parse the response as json
    const data = await res.json()
    const listImages =data.data;
    images.innerHTML = ''
    listImages.map(photo =>{
        const contaainer = document.createElement("div")
        images.append(contaainer)
        const img = document.createElement("img")
        contaainer.append(img)
        img.src = photo.url

    })

}