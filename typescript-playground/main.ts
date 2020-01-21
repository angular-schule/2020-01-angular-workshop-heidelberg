import { Test } from "./test";

const test = new Test(42);


const fn = (book: Book, { title }: Book) => 
  ({ 
    ...book,
    title
  });

interface Book {
    title: string;
}


const book = {
    title: 'Angular',
    year: 2020
};

const result = fn(book, { title: 'React' });

console.table(result);