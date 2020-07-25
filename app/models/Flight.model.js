const sql = require("./db.js");

//constructor
function Flight(flightNo, depCity, arrCity, airlineName, planeModel) {
    this.flightNo = flight.flightNo;
    this.depCity = flight.depCity;
    this.arrCity = flight.arrCity;
    this.airlineName = flight.airlineName;
    this.planeModel = flight.planeModel;
};
//const Flight = function(flight) {
    //this.flightNo = flight.flightNo;
    //this.depCity = flight.depCity;
    //this.arrCity = flight.arrCity;
    //this.airlineName = flight.airlineName;
    //this.planeModel = flight.planeModel;
//};

Flight.create = (newFlight, result) => {
    //Create a Flight
    sql.query("insert into flight set flightNo = ?, depCity = ?, arrCity = ?, airlineName = ?, planeModel = ?", 
    [newFlight.flightNo, newFlight.depCity, newFlight.arrCity, newFlight.airlineName, newFlight.planeModel], 
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