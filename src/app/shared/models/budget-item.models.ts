export class BudgetItem {
  constructor(public description: string, public amount: number, public type: 'INCOME' | 'EXPENSE') {
  }
}
