function getTotalBooksCount(books) {
  if (!books.length) return 0
  return books.length
}

function getTotalAccountsCount(accounts) {
  if (!accounts.length) return 0
  return accounts.length
}

function getBooksBorrowedCount(books) {
  return books.filter(books => !books.borrows[0].returned).length
}

function getMostCommonGenres(books) {
    let genres = []
    
    books.forEach(book => {
      
      let genreExists = genres.find(genre => genre.name === book.genre)
       
      if (genreExists === undefined){
          genres.push({name: book.genre, count: 1})
      } else { 
        genres.forEach(genre => {
          if (genre.name === genreExists.name) {
            genre.count++
          }
        })
      } 
    }) 
    return genres
      .sort((a, b) => b.count - a.count)
      .splice(0, 5)
  }


function getMostPopularBooks(books) {
  //use map to return a array with objects that have the book.title and borrows.length
  //sort from highest borrow count to lowest
  //only return the top 5
  return books.map(book => ({name: book.title, count: book.borrows.length}))
    .sort((a, b) => b.count - a.count)
    .splice(0, 5)
  
}

function getMostPopularAuthors(books, authors) {
//create empty array authorList
//loop through the books array 
//for each book 
//create new var find the authors.id that matchs the book authorId
//destructure the var to just be the first and last name
//create var that is the full name
//new var authorExists == authorList.find authorList.name === full name
//if undefined create new object with name: full name count: book.borrows.length
//else count == book.borrows.length

let authorList = []

books.forEach(book => {
let authorSearch = authors.find(author => author.id === book.authorId);

const {name: {first, last}} = authorSearch;

const fullName = `${first} ${last}`;

let authorExists = authorList.find(author => author.name === fullName);

if(authorExists === undefined){
  authorList.push({name: fullName, count: book.borrows.length})
} else {
  authorList.forEach(author => {
    if (author.name === fullName){
      author.count += book.borrows.length
    }
  })
}

})
return authorList.sort((a, b) => b.count - a.count).splice(0, 5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
