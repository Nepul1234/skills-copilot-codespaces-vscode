// Create web server
var express = require('express');
var app = express();
// Create a router
var router = express.Router();
// Create a comments array
var comments = [
  {name: 'John', message: 'Hello'},
  {name: 'Jane', message: 'Hi'}
];
// Create a route for getting comments
router.get('/comments', function(req, res) {
  res.send(comments);
});
// Create a route for posting a new comment
router.post('/comments', function(req, res) {
  comments.push(req.body);
  res.send(comments);
});
// Create a route for deleting a comment
router.delete('/comments/:index', function(req, res) {
  comments.splice(req.params.index, 1);
  res.send(comments);
});
// Create a route for updating a comment
router.put('/comments/:index', function(req, res) {
  comments[req.params.index] = req.body;
  res.send(comments);
});
// Use the router
app.use(router);
// Start the server
app.listen(3000);
// End of comments.js
