const jwt = require('jsonwebtoken')
const Learner = require('../models/Learner')

const auth = async (req, res, next)=>{
  try {
      const token = req.header('Authorization').replace('Bearer ','')
      const decoded = jwt.verify (token, 'testing')
      const learner = await Learner.findById({ _id: decoded._id, 'tokens.token': token})

      if(!learner){
          throw new Error()
      }

      req.learner = learner
      next()
  } catch (e) {
      res.status(401).send({ error: 'please authenticate.'})
  }
}

module.exports = auth