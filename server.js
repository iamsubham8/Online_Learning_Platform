// How to serving html file wtih css (statically ) using express js.
const express = require('express');
const path = require('path');
const app  = express(); // Create express app


//This is used for access the css file statically those available in public folder.
app.use(express.static(path.join(__dirname, 'OnlineLearning')));


app.get('/post', (req, res) => {
        //This is used for access the HTML file those available in public folder
        res.sendFile(path.join(__dirname, 'OnlineLearning','home.html'));
});

app.listen(4500, (err) => {
            if (err) 
                console.log("Some error occured"); 
            else
                console.log("fistewing at Port 4500");

});
