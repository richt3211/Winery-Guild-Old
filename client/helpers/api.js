const getWineries = () => 
    fetch('/wineries') //calling an http request on the home directory of the page. Should be called whenever the home page is loaded
    .then(res => {
        return res.json()
    })
const addWinery = winery =>
    //calling an http request on the home directory to add a winery based on the vue instance data on the form.
    fetch('/wineries', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(winery)
    })
    .then(res => res.send())
const updateWinery = winery => {
    const form = new FormData()
    for (var key in winery) {
        if (winery.hasOwnProperty(key)) {
            if (winery[key]){
                form.append(`${key}`, winery[key])
            }
            
        }
    }
    // form.append('logo', winery.images[1])
    // form.append('bgImg', winery.images[0])
    // form.append('wineryname', winery.wineryname)
    // form.append('status', winery.status)
    // form.append('videourl', winery.videourl)
    // form.append('websiteurl', winery.websiteurl)
    // form.append('description', winery.description)
    // form.append('phone', winery.description)
    // form.append('email', winery.email)
    return fetch(`/wineries/${winery._id}`, {
        method: 'PUT',
        body: form
    })
    .then(res => res.json())
    .catch(e => console.log(e))
}

export default {
    getWineries,
    addWinery,
    updateWinery
}