const { launches, addNewLaunch } = require("../../models/launches.model");
function getAllLaunches(req, res) {
  console.log("hi");
  console.log(launches);
  return res.status(200).json(Array.from(launches.values()));
}

function httpAddNewLaunch(req, res) {
  const launch = req.body;
  if (!launch) {
    return res.status(400).json({
      success: false,
      error: 'launch is not defined',
    });
  }
  if(!launch.mission || !launch.rocket || !launch.launchDate || !launch.target){
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
function httpAbortLaunch(req, res){
  const launchId = Number(req.params.id);
  console.log(launchId);
  console.log(launches);
  //comes back as string params.id
  if(!(launches.has(launchId))){
    console.log('i am insind launches not found');
    console.log(launches);
    return res.status(400).json({
      error: 'Launch not found',
    });
  }
  //launch.delete(launchId)
  const aborted = launches.get(launchId);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted;

}

module.exports = {
  getAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch,
};
