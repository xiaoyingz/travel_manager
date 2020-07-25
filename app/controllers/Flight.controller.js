const Flight = require("../models/Flight.model.js");

exports.create = (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
    }

    //create a flight
    const flight = new Flight({
        flightNo: req.body.flightNo,
        depCity: req.body.depCity,
        arrCity: req.body.arrCity,
        airlineName: req.body.airlineName,
        planeModel: req.body.planeModel
    });

    //save flight in db
    Flight.create(flight, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Flight."
          });
        else res.send(data);
      });
};