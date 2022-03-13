function findAccountById(accounts, id) {
  return accounts.find((accounts) => accounts.id === id)
};

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => a.name.last < b.name.last ? -1 : 1);
};

function getTotalNumberOfBorrows(account, books) {
return books.filter(books => books.borrows.find(borrows => borrows.id === account.id)).length
};

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter(books => books.borrows.find(borrows => borrows.id === account.id && borrows.returned == false))
    .map(book => ({...book, author: authors.find(authors => authors.id === book.authorId)}));
   
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

