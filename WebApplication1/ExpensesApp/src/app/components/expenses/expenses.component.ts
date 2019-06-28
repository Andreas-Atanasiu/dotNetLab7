import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expenses.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

    public expenses: any = null;
    public displayedColumns: string[] = ['description','sum','date','currency','type','numberOfComments'];

    constructor(private expenseService: ExpenseService) {
      this.getAllExpenses();
        
      }

    ngOnInit() {
    }

    getAllExpenses(){
      this.expenseService.getAllExpenses().subscribe(e => {
        this.expenses = e;
        console.log(e);
      });
    }

   
}
