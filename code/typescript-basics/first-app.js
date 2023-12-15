// var __assign = (this && this.__assign) || function () {
//     __assign = Object.assign || function(t) {
//         for (var s, i = 1, n = arguments.length; i < n; i++) {
//             s = arguments[i];
//             for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
//                 t[p] = s[p];
//         }
//         return t;
//     };
//     return __assign.apply(this, arguments);
// };
// var userName0;
// userName0 = "Inod";
// // let userName0 = 23;
// // let userName = "Inod";
// /**
//  * Primitive types
//  * we can follow below both
//  */
// // let userName: string = "Inod";
// var userName = "Inod";
// // let userAge: number = 31;
// var userAge = 31;
// // let isValid: boolean = true;
// var isValid = true;
// /**
//  * Browser only knows about js, then we need to compile this ts code to js
//  * we can use npx tsc FILENAME.ts (if already have install tsc in globally we can use tsc FILENAME.ts)
//  * Then it is create same code with javascript
//  * we can see, it has remove type annotations and converted in to a bascic js code
//  * But we are not going to compile every time
//  * instead of, we can identify erros with support of the IDE
//  */
// /** we can combine types in typescript */
// var userId = "abc1";
// userId = 123;
// var user;
// user = {
//     name: "Inod",
//     age: 31,
//     isAdmin: true,
//     id: "abc", // 123
// };
// /////// working with Arrays //////////
// // let hobbies: Array<string>;
// var hobbies; // number[], boolean[]
// // ex: let users: { name: string; age: number }[];
// hobbies = ["Traveling", "Sports", "Reading"];
// /////// working with functions //////////
// /**
//  *
//  * @param a number 1
//  * @param b number 2
//  * since this function not going to return anythin we have to set return type as `void`
//  * also we can set `undefined`, it would be working fine. But use `void` programmertically
//  */
// // function add(a: number, b: number): void {
// //     const result = a + b;
// //     console.log("[iw] result ---> ", result);
// // }
// /**
//  *
//  * @param a number 1
//  * @param b number 2
//  * @returns sum of number 1 and number 2
//  */
// function add(a, b) {
//     var result = a + b;
//     return result;
// }
// function calculate(a, b, calcFn) {
//     calcFn(a, b);
// }
// calculate(5, 2, add);
// var creds;
// creds = {
//     username: "inodw1",
//     email: "inodwagachchi@gmail.com",
// };
// /**
//  * There are 2 keywords to define object types
//  * `type` & `interface` why?
//  * type can use other definitions like unions. But, interface specify for object definitions
//  *
//  * thers is an another example below, it has used Credentials interface to implement AuthCredentials class
//  * we can add additional parameters to that AuthCredentials
//  * If there is a login function and it takes parameter credentials which define with Credentials interface
//  * login(new AuthCredentials()); when we call like this ts will understand it has define with Credentials interface.
//  * This is an another reason to use interface
//  */
// var AuthCredentials = /** @class */ (function () {
//     function AuthCredentials() {
//     }
//     return AuthCredentials;
// }());
// function login(credentials) { }
// login(creds);
// login(new AuthCredentials());
// var admin;
// admin = {
//     permissions: ["login"],
//     userName: "inod",
// };
// var role;
// role = "admin";
// role = "user";
// role = "editor";
// // role = "manager"; // Type Error
// /////// adding type guards //////////
// function performAction(action, role) {
//     if (role === "admin" && typeof action === "string") {
//         //
//     }
// }
// /**
//  * Important: You can NOT check if a value meets the definition of a custom type (type alias) or interface type.
//  * These are TypeScript-specific features for which no JavaScript equivalent exists.
//  * Therefore, since those if checks need to run at runtime,
//  * you can't write any code that would be able to check for those types at runtime.
//  * For example, the below code won't work
//  * because the User type does not exist once the code is compiled to JavaScript:
//  *
//         type User = {
//         name: string;
//         age: number;
//         };

//         type Admin = {
//         name: string;
//         age: number;
//         permissions: string[];
//         };

//         function login(u: User | Admin) { // Error
//         if (typeof u === User) {
//             // do something
//         }
//         }

//     But you could check for the existence of the permissions property
//     since only the Admin object will have one:

//         function login(u: User | Admin) {
//             if ('permissions' in u) {
//                 // do something
//             }
//         }

//     This code would work at runtime.
//  */
// /////// generic types //////////
// var roles;
// roles = ["admin", "user"];
// var textStorage = {
//     storage: [],
//     add: function (data) {
//         this.storage.push(data);
//     },
// };
// var userStorage = {
//     storage: [{ name: "inod", age: 31, isAdmin: true, id: "abc123" }],
//     add: function (user) { },
// };
// function merge(a, b) {
//     return __assign(__assign({}, a), b);
// }
// var newUser = merge({ name: "inod" }, { age: 31 });
