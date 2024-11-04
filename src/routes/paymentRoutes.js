const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  // Randomly generate success or failure
  const isSuccess = Math.random() > 0.5;

  if (isSuccess) {
    res.status(200).json({ status: 'success', message: 'Payment successful!' });
  } else {
    res.status(400).json({ status: 'failure', message: 'Payment failed. Please try again.' });
  }
});

router.all("/*",function(req,res){
    return res.status(400).send({status:false,message:"invalid path"})
})

module.exports = router;
