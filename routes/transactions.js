//we should make sure to import the functions from income and expense
const { addExpense, getExpense, deleteExpense } = require('../controllers/expense')
const {addIncome,getIncomes, deleteIncome } = require('../controllers/income')

const router= require('express').Router()

//To check the db requests and responcess with thw connected db
/*
router.get('/', (req, res) =>{
    res.send("HELLLLO")
})
*/
router.post('/add-income', addIncome)//addIncome is going to come from controller block 
    //this line 13 will bw thw end point for the funtion getIncome
    .get('/get-incomes', getIncomes)
    // .delete('delete-income/:parameter-->id')
    .delete('/delete-income/:id', deleteIncome)
    
    .post('/add-expense', addExpense)
    .get('/get-expenses', getExpense)
    .delete('/delete-expense/:id', deleteExpense)

module.exports = router