// // // // Utility types......
// // // Partial..
// interface CourseGoal {
//     title: string;
//     description: string;
//     completeUntil: Date;
// }

// function createCourseGoal(
//     title: string,
//     description: string,
//     date: Date
// ): CourseGoal {
//     // here used partially...
//     let courseGoal: Partial<CourseGoal> = {};
//     courseGoal.title = title;
//     courseGoal.description = description;
//     courseGoal.completeUntil = date;
//     return courseGoal as CourseGoal;
// }

// // // Readonly..
// const names: Readonly<string[]> = ['Chandler', 'Joey'];
// // names.push('Ross'); // Not working
// // names.pop(); // Not working