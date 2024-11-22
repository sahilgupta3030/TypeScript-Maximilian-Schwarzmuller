// // // // Generic class.....

// class DataStorage<T extends string | number | boolean | object> {
//     private data: T[] = [];

//     addItem(item: T) {
//         this.data.push(item);
//     }

//     removeItem(item: T) {
//         if (this.data.indexOf(item) === -1) {
//             return;
//         }
//         this.data.splice(this.data.indexOf(item), 1);
//     }

//     getItems() {
//         return [...this.data];
//     }
// }

// const textStorage = new DataStorage<string>();
// textStorage.addItem('Max');
// textStorage.addItem('Chandler1');
// textStorage.addItem('Chandler2');
// textStorage.addItem('Chandler3');
// textStorage.removeItem('Max');
// textStorage.removeItem('Chandler2');
// console.log(textStorage.getItems());




// const objStorage = new DataStorage<object>();
// const maxObj = { name: 'Max' };
// objStorage.addItem(maxObj);
// objStorage.addItem({ name: 'Chandler1' });
// objStorage.addItem({ name: 'Chandler2' });
// objStorage.addItem({ name: 'Chandler3' });

// objStorage.removeItem(maxObj);
// // objStorage.removeItem({name: 'Chandler2'});
// // objStorage.removeItem({name: 'Chandler3'});
// // Javascript/Typescript compares objects by reference, not by value.
// console.log(objStorage.getItems());