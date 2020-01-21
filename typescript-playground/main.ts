import { Test } from "./test";

const test = new Test(42);


interface Book {
    title: string;
}

interface Book2 {
    title: string;
    year: number;
}

const book = {
    title: 'Angular',
    year: 2020
};


function test2(b: Book2) {
    console.log(b);
}

// gültiger Aufruf
test2(book);