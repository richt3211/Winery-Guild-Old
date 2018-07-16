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
    form.append('images', winery.images)
    form.append('name', winery.wineryname)
    console.log(form)
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