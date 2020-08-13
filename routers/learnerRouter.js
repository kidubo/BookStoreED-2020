const express = require ('express')
const Learner = require('../models/Learner')
const { find } = require('../models/Learner')
const auth = require('../middleware/auth')
const router = new express.Router()


router.post('/signup', async (req, res)=>{
    
    const learner = new Learner(req.body)

    try{

        await learner.save()
        const token = learner.generateAuthToken()
        res.status(201).send(learner)

    }catch(e){
        res.status(500).send()
    }
})



router.post('/learner/login', async (req, res , next) =>{
    try {
        
        const learner = await Learner.findByCredential(req.body.email, req.body.password)
        const token = await learner.generateAuthToken()
        res.send({ learner, token})
        
    } catch (e) {
        res.status(400).send(e)
        
    }
})



router.get('/learner/me', auth , async (req, res)=>{
   res.send(req.learner)
})

router.get('/learners/:id', auth, async (req, res)=>{
    const _id = req.params.id

    try {
        const learner = await Learner.findById(_id)

        if(!learner){
            return res.status(404).send('No User found')
        }

        res.send(learner)
        
    } catch (e) {
        res.status(400).send(e)
        
    }
})


router.patch('/learner/:id', auth, async (req, res, next)=>{
    const _id = req.params.id
    const updates = Object.keys(req.boy)
    const allowedUpdates = ['firstName','lastName','email','password','phone']
    const isValidOperator = updates.every((updates)=>{
        allowedUpdates.includes(updates)
    })

    if(!isValidOperator){
        return res.status(404).send({'Error': 'Invalid updates'})
    }

    try {
        updates.forEach((update)=>{
            req.learner[update] = req.body[update]
        })

        await req.learner.save()
        res.send(req.user)

    } catch (e) {
        res.status(400).send(e)
        
    }
})


module.exports = router