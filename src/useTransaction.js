import  { useContext } from 'react';
import { ExpenseTrackerContext } from './context/context';
import { incomeCategories, expenseCategories, resetCategories } from './constants/categories';


const useTransactions = (title) => {

    resetCategories();

    const { transactions } = useContext(ExpenseTrackerContext);

    const transactionPerType = transactions.filter((t) => t.type === title);

    const total = transactionPerType.reduce((acc, currentVal) => acc += currentVal.amount, 0);

    const categories = title === 'Income' ? incomeCategories : expenseCategories;

    let jan=0;
    let feb=0;
    let mar=0;
    let apr=0;
    let may=0;
    let jun=0;
    let jul=0;
    let aug=0;
    let sep=0;
    let oct=0;
    let nov=0;
    let dec=0;

    let jane=0;
    let febe=0;
    let mare=0;
    let apre=0;
    let maye=0;
    let june=0;
    let jule=0;
    let auge=0;
    let sepe=0;
    let octe=0;
    let nove=0;
    let dece=0;
    transactions.map((t)=>{
        if(t.type==="Income"){

            if(new Date(t.date).getMonth()===0){
                jan+=t.amount
            }
            else if(new Date(t.date).getMonth()===1){
                feb+=t.amount
            }
            else if(new Date(t.date).getMonth()===2){
                mar+=t.amount
            }
            else if(new Date(t.date).getMonth()===3){
                apr+=t.amount
            }
            else if(new Date(t.date).getMonth()===4){
                may+=t.amount
            }
            else if(new Date(t.date).getMonth()===5){
                jun+=t.amount
            }
            else if(new Date(t.date).getMonth()===6){
                jul+=t.amount
            }
            else if(new Date(t.date).getMonth()===7){
                aug+=t.amount
            }
            else if(new Date(t.date).getMonth()===8){
                sep+=t.amount
            }
            else if(new Date(t.date).getMonth()===9){
                oct+=t.amount
            }
            else if(new Date(t.date).getMonth()===10){
                nov+=t.amount
            }
            else {
                dec+=t.amount
            }
        }else{
            if(new Date(t.date).getMonth()===0){
                jane+=t.amount
            }
            else if(new Date(t.date).getMonth()===1){
                febe+=t.amount
            }
            else if(new Date(t.date).getMonth()===2){
                mare+=t.amount
            }
            else if(new Date(t.date).getMonth()===3){
                apre+=t.amount
            }
            else if(new Date(t.date).getMonth()===4){
                maye+=t.amount
            }
            else if(new Date(t.date).getMonth()===5){
                june+=t.amount
            }
            else if(new Date(t.date).getMonth()===6){
                jule+=t.amount
            }
            else if(new Date(t.date).getMonth()===7){
                auge+=t.amount
            }
            else if(new Date(t.date).getMonth()===8){
                sepe+=t.amount
            }
            else if(new Date(t.date).getMonth()===9){
                octe+=t.amount
            }
            else if(new Date(t.date).getMonth()===10){
                nove+=t.amount
            }
            else {
                dece+=t.amount
            }

        }})
    

    transactionPerType.forEach((t) => {
        const category = categories.find((c) => c.type === t.category)
        if(category) category.amount += t.amount
    })

    const filteredCategories = categories.filter((sc) => sc.amount > 0);

    const chartData = {
        datasets: [{
            data: filteredCategories.map((c) => c.amount),
            backgroundColor: filteredCategories.map((c) => c.color),
        }],
            labels: filteredCategories.map((c) => c.type),
    };

    

    const LineData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
        {
            label: "Incom dataset",
            data: [jan,feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "green"
        },
        {
            label: "Expense dataset",
            data: [jane,febe, mare, apre, maye, june, jule, auge, sepe, octe, nove, dece],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "red"
        }
        ]}

        console.log(transactions.map((t)=>t))
        console.log(oct)
        console.log(octe)
        console.log(LineData)

        

    return { filteredCategories, total, chartData,LineData };}
export default useTransactions;
