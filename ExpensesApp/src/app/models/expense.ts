export class Expense {
    id?: number;
    description: string;
    sum: number;
    date: Date;
    currency: string;
    type: string;
    numberOfComments: number;
}
    
export class PaginatedFlowers {
        currentPage: number;
        numberOfPages: number;
        entries: Expense[];
    }
