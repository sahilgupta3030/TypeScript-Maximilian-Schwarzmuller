// // // // Intersection type.......
// type Something = number | string;
// type Numeric = boolean | number;
// type Universal = Something & Numeric; // intersection..

// // // another example..
// type Admin = {
//     name: string,
//     privileges: string[]
// }
// type Employee = {
//     name: string,
//     startDate: Date
// }

// type ElevatedEmployee = Admin & Employee; // intersection..

// let employee1: ElevatedEmployee = {
//     name: "steve",
//     privileges: ["system", "personal"],
//     startDate: new Date()
// }


// // // // Type guards.....
// function add(a: Something, b: Something) {
//     // this is type-guard
//     if (typeof a === 'string' || typeof b === 'string') {
//         return a.toString() + b.toString();
//     }
//     return a + b;
// }

// // more complex example..
// type UnknownEmployee = Admin | Employee;

// function printEmployeeInformation(emp: UnknownEmployee) {
//     console.log(emp.name);
//     // use keyword "in"
//     if ('privileges' in emp) {
//         console.log(emp.privileges);
//     }
//     if ('startDate' in emp) {
//         console.log(emp.startDate);
//     }
// }

// printEmployeeInformation(employee1);




// // //

// class Car {
//     drive() {
//         console.log("driving....");
//     }
// }

// class Truck {
//     drive() {
//         console.log("driving a truck...");
//     }

//     loadingCargo(amt: number) {
//         console.log("Loading Cargo: " + amt);
//     }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(veh: Vehicle) {
//     veh.drive();
//     // if ('loadingCargo' in veh) {
//     //     veh.loadingCargo(45);
//     // }
//     // alternatively......
//     if (veh instanceof Truck) {
//         veh.loadingCargo(45);
//     }
// }

// useVehicle(v1);
// useVehicle(v2);