const ExpenseSchema= require("../models/incomeModel")
//This is the method for adding,validating the income field
exports.addExpense = async (req, res) => {
    //this  line 5 is used to check the database req-->request from mongodb, 
    /*
    whether its pinging in treminal or not?
    console.log(req.body);

    lets create the distructors
    JavaScript Object Destructuring is the syntax for 
    extracting values from an object property and assigning them to a variable. 
    The destructuring is also possible for JavaScript Arrays. By default, 
    the object key name becomes the variable that holds the respective value.
    */
    const{ title, amount, category, description, date } = req.body

    //lets create the instance for the IncomeModel
    const income= ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    })

    // console.log(income)

    //27's==>its output will be in treminal 
    /*
    You are listening to port:  5000
Db Connected!!!
{
  title: 'SpendWise',
  amount: 45,
  type: 'Income',
  date: 2024-10-09T18:30:00.000Z,
  category: 'rent',
  description: 'from Income',
  _id: new ObjectId('660af7b16e04938517802730')      
}
*/
    //but this data is not saved to the database(db)
    //so need a way to save that data request from db by using Try and catch

    try{
        //validations
        if(!title || !category || !description || !date){
            //status(400) is a warning
            return res.status(400).json({message: "All fields are required!"}) 
        }
        if(amount <= 0 || !amount == "number"){//if amount not a num
            return res.status(400).json({message: "All fields are required!"}) 
        }
        await income.save()
        //status(200) say its okay
        res.status(200).json({message: "Expense added"})
    }catch (error){
        //status(500) says Internal Server Error
        res.status(500).json({message: "Server Error!!!(at validation)"})
    }

}

//this method will get the data 
exports.getExpense = async (req, res) => {
    try{// we need to sorted such that the recently added income should be at the top 
        const incomes = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)//its prints income's data
    }
    catch (error){
        res.status(500).json({message: "Server Error!(at getIncome)"})
    }

}

//Noe lets make the delete function/method
exports.deleteExpense = async (req, res) => {
    //here every income data has the unique id
    //so using that id we and delete that data
    const {id} =req.params;//that id will come from params anta
    ExpenseSchema.findByIdAndDelete(id)
    .then((income) => {
        res.status(200).json({message: "Expense Deleted"})
    })
    .catch((err)=>{
        res.status(500).json({message: "Server Error"})

    })    

}

