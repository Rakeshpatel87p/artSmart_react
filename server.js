const
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    unirest = require('unirest');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));

const server = app.listen(process.env.PORT || 8000, () => {
    let port = server.address().port;
    console.log('Connected Captain. Safe journey.');
    console.log('App now running on port', port);
});

// Gets random artwork from artsy
app.get('/artworks', (req, response) => {
    unirest.post('https://api.artsy.net/api/tokens/xapp_token')
        .headers({ 'Accept': 'application/json' })
        .send({ "client_id": "cd7051715d376f899232", "client_secret": "de9378d3d12c2cbfb24221e8b96d212c" })
        .end((res) => {
            unirest.get('https://api.artsy.net/api/artworks?sample=1')
                .headers({ 'Accept': 'application/json', 'X-XAPP-Token': res.body.token })
                .end((res_) => {
                    console.log(res_.body)
                    response.json(res_.body)
                })
        });
});
