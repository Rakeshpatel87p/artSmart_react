const axios = require('axios');

var backgroundImage = {
    // getBackgroundImage() {
    //     fetch('https://api.artsy.net/api/tokens/xapp_token', myInit) // Call the fetch function passing the url of the API as a parameter
    //         .then(function(response) {
    //             console.log(response);
    //         })
    //         .catch(function(err) {
    //             // This is where you run code if the server returns any errors
    //         })
    // },

    getBackgroundImageAxios() {
        return axios.get('/artworks')
        	.then(function(data) {
                console.log(data)
            })
            .catch(function(err) {
                console.log(err)
            })

    }
    // getBackgroundImageAxios() {
    //     return axios.post('https://api.artsy.net/api/tokens/xapp_token', {
    //             client_id: "cd7051715d376f899232",
    //             client_secret: "de9378d3d12c2cbfb24221e8b96d212c"
    //         })
    //         .then(function(info) {
    //             console.log(info.data.token);
    //             return info.data.token;
    //         })
    //         .then(function(tokenLogin) {
    //             let configHeaders = {
    //                 headers: { 'Accept': 'application/json', 'X-XAPP-Token': tokenLogin }
    //             };

    //             return axios.get('https://api.artsy.net/api/artworks?sample=1', configHeaders)
    //         })
    //         .catch(function(error) {
    //             console.log(error)
    //         })
    // }

};

module.exports = backgroundImage

// const myHeaders = new Headers({'Accept': 'application/json'})

// const loginDetails = {
// 	client_id: "cd7051715d376f899232", 
//     client_secret: "de9378d3d12c2cbfb24221e8b96d212c"
// }

// const data = new FormData();

// data.append("json", JSON.stringify(loginDetails))

// const myInit = {
//     method: 'post',
//     headers: myHeaders,
//     body: data
// }
