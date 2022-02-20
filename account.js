document.getElementById('cal-button').addEventListener('click', function(){
    const totalIncome = document.getElementById('total-income');
    const newTotalIncomText = totalIncome.value;
    const newTotalIncom = parseFloat(newTotalIncomText);
    totalIncome.value = '' ;
    //expense calculae
    //Food
    const FoodExpense = document.getElementById('food-input');
    const FoodExpenseText = FoodExpense.value;
    const newFoodExpense = parseFloat(FoodExpenseText);
    FoodExpense.value = '';
    //Rent
    const rentExpense = document.getElementById('rent-input');
    const rentExpenseText = rentExpense.value;
    const newrentExpense = parseFloat(rentExpenseText);
    rentExpense.value= '';
    //Clothes
    const clothesExpense = document.getElementById('clothes-input');
    const clothesExpenseText = clothesExpense.value;
    const newclothesExpense = parseFloat(clothesExpenseText);
    clothesExpense.value = '' ;
    //Total Expense
    const totalExpens = document.getElementById('total-expense');
    const totalExpensText = totalExpens.innerText;
    const previousTotalExpens = parseFloat(totalExpensText);
    let newTotalExpense = previousTotalExpens + newclothesExpense + newFoodExpense;

    totalExpens.innerText = newTotalExpense;

    // Total Balance
    const totalBalance = document.getElementById('balance');
    const priviousTotalBalanceText = totalBalance.innerText;
    /*const previousTotalBalance = parseFloat(priviousTotalBalanceText);*/
    const newTotalBalance = newTotalIncom - newTotalExpense;
    totalBalance.innerText = newTotalBalance;
   })

   /* -----------------------saving section--------------------------*/

   document.getElementById('saving-button').addEventListener('click', function(){
    const totalSaving = document.getElementById('saving-input');
    const savingInputText = totalSaving.value;
    const newTotalSaving = parseFloat(savingInputText);
    
    const newTotalSavingAmount = newTotalBalance * (newTotalSaving/100);


    const totalSavingAmount = document.getElementById('saving-amount');
    const totalSavingAmountText = totalSavingAmount.innerText;
    const previoustotalSavingAmountText = parseFloat(totalSavingAmountText);
    const currentAmount = previoustotalSavingAmountText + newTotalSavingAmount;

    totalSavingAmount.innerText = currentAmount;

   })