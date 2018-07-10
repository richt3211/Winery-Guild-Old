const getWineries = () => 
    fetch('/wineries') //calling an http request on the home directory of the page. Should be called whenever the home page is loaded
    .then(res => {
        return res.json()
    })
const getWinery = (name) => {
    fetch(`/wineries/${}`)
}
const addWinery = winery =>
    //calling an http request on the home directory to add a winery based on the vue instance data on the form.
    fetch('/wineries', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(winery)
    })
    .then(res => res.json())

export default {
    getWineries,
    addWinery
}