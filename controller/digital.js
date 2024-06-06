var DIGITAL = require('../model/digital')

exports.signup = async function(req, res, next) {
  try {
    req.body.userID = req.userID
    req.body.profileIMAGE = req.file.filename
      let create = await DIGITAL.create(req.body)
      res.status(201).json({
        status: "success",
        message: "create suucessfull",
        create
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message:error.message
      })
    }
};
  exports.getdata = async function(req, res, next) {
    try {
      let create = await DIGITAL.find({userID:req.userID}).populate('userID')
      res.status(201).json({
        status: "success",
        message: "found suucessfull",
        create
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message:error.message
      })
    }
};
  