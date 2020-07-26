const sql = require("./db.js");

//constructor
//function Flight(flightNo, depCity, arrCity, airlineName, planeModel) {
    //this.flightNo = flight.flightNo;
    //this.depCity = flight.depCity;
    //this.arrCity = flight.arrCity;
    //this.airlineName = flight.airlineName;
    //this.planeModel = flight.planeModel;
//};
const Flight = function(flight) {
    this.flightNo = flight.flightNo;
    this.depCity = flight.depCity;
    this.arrCity = flight.arrCity;
    //this.airlineName = flight.airlineName;
    this.planeModel = flight.planeModel;
};

Flight.create = (newFlight, result) => {
    //Create a Flight
    sql.query("insert into flight set depCity = ?, arrCity = ?, flightNo = ?, planeModel = ?", 
    [newFlight.depCity, newFlight.arrCity, newFlight.flightNo, newFlight.planeModel], 
    (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created flight: ", {id: res.insertId, ...newFlight});
        result(null, {id: res.insertId, ...newFlight});
    });
};
Flight.findByDepCity = (depCity, result) => {
    sql.query(`SELECT * FROM flight WHERE depCity = ${depCity}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found flight: ", res);
        result(null, res);
        return;
      }
  
      // not found Flight with the depCity
      result({ kind: "not_found" }, null);
    });
  };

  Flight.remove = (flightNo, result) => {
    sql.query("DELETE FROM flight WHERE flightNo = ?", flightNo, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found Flight with the flightNo
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted flight with flightNo: ", flightNo);
      result(null, res);
    });
  };

  module.exports = Flight;