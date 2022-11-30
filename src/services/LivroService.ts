import { equal } from "assert";

interface BookInterface {
  id: number | null;
  title: string;
  author: string;
  year: number;
  numPag: number;
}

interface EditBookParamsInterface {
  title?: string;
  author?: string;
  year?: number;
  numPag?: number;
}

const books: Array<BookInterface> = [
  {
    id: 1,
    title: "A Odisséia de Jonas",
    author: "Thomas Crawling",
    year: 2001,
    numPag: 197,
  },
  {
    id: 2,
    title: "Jonas e a sociedade escondida",
    author: "Claire Crawling",
    year: 2004,
    numPag: 158,
  },
];

let idAdd = 2;

class BooksService {
  getAll() {
    return books;
  }

  getById(id: number) {
    const book = books.find((book) => book.id === id);
    return book;
  }

  merge(book: BookInterface) {
    const id = book.id;
    if (!id) {
      book.id = idAdd + 1;
      idAdd = book.id;
      books.push(book);
      return book;
    }

    const exists = this.getById(id);

    if (exists) {
      books.forEach((element, index) => {
        if (element.id === book.id) {
          books[index] = book;
          return;
        }
      });

      return book;
    }
    return false;
  }

  delete(id: number) {
    const book = this.getById(id);

    if (!book) {
      return false;
    }

    const index = books.findIndex((el) => el.id === book.id);

    books.splice(index, 1);

    return true;
  }

  editParams(id: number, params: EditBookParamsInterface) {
    const index = books.findIndex((book) => book.id === id);

    if (index === -1) {
      return false;
    }

    let book = books[index];

    console.log(params);

    if (params.title) {
      book.title = params.title as string;
    }
    if (params.author) {
      book.author = params.author as string;
    }
    if (params.year) {
      book.year = params.year as number;
    }
    if (params.numPag) {
      book.numPag = params.numPag as number;
    }

    books[index] = book;

    console.log(book);
    return true;
  }
}

export { BooksService };
