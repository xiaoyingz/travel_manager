module.exports = app => {
    const flights = require("../controllers/Flight.controller.js");
  
    // Create a new Flight
    app.post("/flights", flights.create);
  
    // Retrieve all Customers
    //app.get("/customers", customers.findAll);
  
    // Retrieve a single Customer with customerId
    //app.get("/customers/:customerId", customers.findOne);
  
    // Update a Customer with customerId
    //app.put("/customers/:customerId", customers.update);
  
    // Delete a Customer with customerId
   // app.delete("/customers/:customerId", customers.delete);
  
    // Create a new Customer
    //app.delete("/customers", customers.deleteAll);
  };