const express = require('express')
const router = express.Router()
const Board = require('../../models/Board');
const User = require('../../models/User');

router.get('/', async (req, res, next) => {
 
  try {
    const boards = await Board.find({userId: req.session.user._id})
    res.json(boards)    
  } catch (error) {
    res.status(404).json({msg: error})
  }
})


router.post('/create', async(req, res, next) => {
  
  const {boardTitle} = req.body
  console.log(boardTitle)
  try { 

    const user = await User.findById(req.session.user._id).select('-password')

    const newBoard = new Board({
      boardTitle,
      userId: req.session.user._id,
      topics: []
    })

    const board = newBoard.save()
    res.json(board)
   
  } catch (error) {
    res.status(404).json({msg: error})
    
  }
})


module.exports = router