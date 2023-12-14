let userName0: string;
userName0 = "Inod";

// let userName0 = 23;
// let userName = "Inod";

/**
 * Primitive types
 * we can follow below both
 */

// let userName: string = "Inod";
let userName = "Inod";
// let userAge: number = 31;
let userAge = 31;
// let isValid: boolean = true;
let isValid = true;

/**
 * Browser only knows about js, then we need to compile this ts code to js
 * we can use npx tsc FILENAME.ts (if already have install tsc in globally we can use tsc FILENAME.ts)
 * Then it is create same code with javascript
 * we can see, it has remove type annotations and converted in to a bascic js code
 * But we are not going to compile every time
 * instead of, we can identify erros with support of the IDE
 */

/** we can combine types in typescript */
let userId: string | number = "abc1";
userId = 123;

/** Working with object types */

// let user: object;

// user = "Inod"; !Error

// user = {
//     name: "Inod",
//     age: 31,
//     isAdmin: true,
//     id: "abc", // 123
// };

/**
 * above code is also accepted. but we also can assign an empty object to it,
 * user = {}
 * we need to prevent this
 */

let user: {
    name: string;
    age: 31;
    isAdmin: boolean;
    id: string | number;
};

user = {
    name: "Inod",
    age: 31,
    isAdmin: true,
    id: "abc", // 123
};

/////// working with Arrays //////////

// let hobbies: Array<string>;
let hobbies: string[]; // number[], boolean[]

// ex: let users: { name: string; age: number }[];

hobbies = ["Traveling", "Sports", "Reading"];

/////// working with functions //////////

/**
 *
 * @param a number 1
 * @param b number 2
 * since this function not going to return anythin we have to set return type as `void`
 * also we can set `undefined`, it would be working fine. But use `void` programmertically
 */

// function add(a: number, b: number): void {
//     const result = a + b;
//     console.log("[iw] result ---> ", result);
// }

/**
 *
 * @param a number 1
 * @param b number 2
 * @returns sum of number 1 and number 2
 */
function add(a: number, b: number): number {
    const result = a + b;
    return result;
}
