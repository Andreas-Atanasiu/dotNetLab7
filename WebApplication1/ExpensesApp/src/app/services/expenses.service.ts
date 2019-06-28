import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Expense } from '../models/expense';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ExpenseService {
    // private expensesSubject: BehaviorSubject<any>;
    public expense: any;

    constructor(private http: HttpClient) {
        // this.expensesSubject = new BehaviorSubject<any>(null);
    }

    getAllExpenses() : Observable<any> {
        return this.http.get<any>(
            `https://localhost:44393/api/expense`);

        // return this.http.get<any>(`https://localhost:44365/api/expenses`)
        //     .pipe(map(response => {
        //         this.expenses = response;
        //         this.expensesSubject.next(this.expenses);
        //         return response;
        //     }));
    }
}