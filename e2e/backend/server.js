let express = require('express');

let app = express();


// READ == GET
// passive request for data, does not make any changes
app.get('./app/home', function(req, res) {
    res.send("rique has sent a GET request");
});


// CREATE === POST
// active request, makes a change, creates something
// access to request body
app.post('/', function(req, res) {
    console.log (req);
    res.send("rique has sent a POST request");
});


// UPDATE === PUT

app.put('/', function(req, res) {
    res.send("rique has sent a PUT request");
});


// DELETE === DELETE
app.delete('/', function(req, res) {
    res.send("rique has sent a DELETE request");
});

app.listen(4200);


