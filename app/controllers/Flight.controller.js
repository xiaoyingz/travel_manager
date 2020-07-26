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
        //airlineName: req.body.airlineName,
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

exports.findOne = (req, res) => {
  Flight.findByDepCity(req.params.depCity, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Flight with id ${req.params.depCity}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Flight with flightNo " + req.params.depCity
        });
      }
    } else res.send(data);
  });
};

exports.delete = (req, res) => {
  Flight.remove(req.params.flightNo, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Flight with flightNo ${req.params.flightNo}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Flight with id " + req.params.flightNo
        });
      }
    } else res.send({ message: `Flight was deleted successfully!` });
  });
};