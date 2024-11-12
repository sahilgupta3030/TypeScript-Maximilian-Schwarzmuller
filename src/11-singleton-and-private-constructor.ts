// class AccountingDepartment1 {
//     // A private static instance to hold the single instance of the class
//     private static instance: AccountingDepartment1;
//     private lastReport: string;

//     // Private constructor prevents instantiation from outside the class
//     private constructor(private reports: string[]) {
//         this.lastReport = reports[0] || '';
//     }

//     // Static method to get the single instance of the class (Singleton pattern)
//     static getInstance() {
//         // If no instance exists, create a new one; otherwise, return the existing instance
//         if (!AccountingDepartment1.instance) {
//             AccountingDepartment1.instance = new AccountingDepartment1([]);
//         }
//         return AccountingDepartment1.instance;
//     }

//     addReport(text: string) {
//         this.reports.push(text);
//         this.lastReport = text;
//     }

//     get mostRecentReport() {
//         if (this.lastReport) {
//             return this.lastReport;
//         }
//         throw new Error('No report found.');
//     }
// }

// // Usage
// const accounting2 = AccountingDepartment1.getInstance();
// const accounting3 = AccountingDepartment1.getInstance();

// // Verifies that both variables hold the same instance (Singleton pattern)
// console.log(accounting2 === accounting3); // true, both are the same instance

// // Adds a report via accounting2 and retrieves it via accounting3
// accounting2.addReport("Annual Financial Report");
// console.log(accounting3.mostRecentReport);