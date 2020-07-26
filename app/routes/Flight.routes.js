module.exports = app => {
    const flights = require("../controllers/Flight.controller.js");
  
    // Create a new Flight
    app.post("/flights", flights.create);
  
    // Retrieve all Customers
    //app.get("/customers", customers.findAll);
  
    // Retrieve a single flight with flightNo
    app.get("/flights/:depCity", flights.findOne);
  
    // Update a Customer with customerId
    //app.put("/customers/:customerId", customers.update);
  
    // Delete a Flight with fligthNo
    app.delete("/flights/:flightNo", flights.delete);
  
    // Create a new Customer
    //app.delete("/customers", customers.deleteAll);
  };