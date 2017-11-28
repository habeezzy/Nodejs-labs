routes.get("/", function(req, res) {
  res.send("this is your baseline endpoint");
});

routes.get("/tasklist", function(req, res) {
res.send("GET request successful");
console.log("GET request successful");
});
routes.delete("/tasklist", function(req, res) {
res.send("DELETE request successful");
console.log("DELETE request successful");
});
routes.post("/tasklist", function(req, res) {
res.send("POST request successful");
console.log("POST request successful");
});
routes.put("/tasklist", function(req, res) {
res.send("PUT request successful");
console.log("PUT request successful");
});

module.exports = routes;
