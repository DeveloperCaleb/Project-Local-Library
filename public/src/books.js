function findAuthorById(authors, id) {
  //search through an array of authors and return the item that matches the id
  return authors.find(author => author.id === id);
}

function findBookById(books, id) {
  //search through and array of books and return the books that has the matching id
  return books.find(book => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  //sort books into two arrays, if the books has been checked out put in array 1 if not array 2
  //return array with both arrays in it.
 
  //return books.map( books => books.filter(books => !books.borrows[0].returned), books.filter(book => books.borrows[0].returned));

  const checkedOut = books.filter(books => !books.borrows[0].returned);
  const inStock = books.filter(books => books.borrows[0].returned);
  return [checkedOut, inStock];
}

function getBorrowersForBook(book, accounts) {
  //return an array of accounts that are chosed if the id of an account is found in the books borrowed section return with the returned status
  //filter through the accounts and return an array of accounts that are in the borrowed section

   //let accountFilter = accounts.filter(accounts => accounts.id === book.borrows.filter(book => book.id))
  //return accountFilter

  let accountList = []
  const bookBorrowed = book.borrows;
  bookBorrowed.forEach(borrowed => accounts.forEach(account => {
    if (account.id === borrowed.id){
      account.returned = borrowed.returned
      accountList.push(account)
    }
  }))
  return accountList.splice(0, 10)
  }

  //let accountFilter = accounts.filter(accounts => accounts.id === book.borrows.filter(book => book.id))
  //return accountFilter


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
