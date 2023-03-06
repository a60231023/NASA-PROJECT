const { launches, addNewLaunch } = require("../../models/launches.model");
function getAllLaunches(req, res) {
  console.log("hi");
  return res.status(200).json(Array.from(launches.values()));
}

function httpAddNewLaunch(res, req) {
  const launch = req.body;
  launch.launchDate = new Date(launch.launchDate);
  addNewLaunch(launch);
  return res.status(201).json(launch);
}

module.exports = {
  getAllLaunches,
  httpAddNewLaunch,
};
