const { launches, addNewLaunch } = require("../../models/launches.model");
function getAllLaunches(req, res) {
  console.log("hi");
  return res.status(200).json(Array.from(launches.values()));
}

function httpAddNewLaunch(res, req) {
  const launch = req.body;
  if(!launch.mission || !launch.rocket || !launch.launchDate || !launch.destination){
    return res.status(400).json({
        success: false,
        error: 'missing required launch property',
        message: 'enter all the details',
    });
  }
  launch.launchDate = new Date(launch.launchDate);
  if(isNaN(launch.launchDate)){
    return res.status(400).json({
        error: 'invalid launch date'
    });
  }
  addNewLaunch(launch);
  return res.status(201).json(launch);
}

module.exports = {
  getAllLaunches,
  httpAddNewLaunch,
};
