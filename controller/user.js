var USER = require('../model/users')
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt')

exports.sequre = async function(req, res, next) { 
    try {
        let token = req.headers.authorization
        if (!token) {
            throw new Error('please attach a token')
        }
        var decoded = jwt.verify(token, 'DEMO')
        
        req.userID = decoded.id

        let userchaeck = await USER.findById(decoded.id)
        if (!userchaeck) {
            throw new Error('user not found')
        }
        next()

    } catch (error) {
      res.status(404).json({
        status: "fail",
        message:error.message
      })
    }
};
exports.create = async function(req, res, next) { 
    try {

        req.body.password = await bcrypt.hash(req.body.password,10)
        let create = await USER.create(req.body)
        var token = jwt.sign({ id: create._id }, 'DEMO');

      res.status(201).json({
        status: "success..!!",
        message: "create successfull",
          create,
    token
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message:error.message
      })
    }
};
  exports.login = async function(req, res, next) {
    try {
      let find = await USER.findOne({email:req.body.email})
      if (!find) {
        throw new Error('user not found')
        }
        let passverify = await bcrypt.compare(req.body.password, find.password)
        if (!passverify) {
            throw new Error('password not verify')
        }
      res.status(201).json({
        status: "success..!!",
        message: "login successful",
        find
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message:error.message
      })
    }
};
  exports.find =async function(req, res, next) {
    try {
      let find = await USER.find(req.body)
      res.status(201).json({
        status: "success..!!",
        message: "found successful",
        find
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message:error.message
      })
    }
};
  exports.update = async function(req, res, next) {
    try {
    let update =    await USER.findByIdAndUpdate(req.params.id)
      res.status(201).json({
        status: "success..!!",
          message: "update successfully",
          update
        
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message:error.message
      })
    }
};
  exports.delete = async function(req, res, next) {
    try {
        await USER.findByIdAndDelete(req.params.id)
      res.status(201).json({
        status: "success..!!",
        message: "delete successful"
        
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message:error.message
      })
    }
  };