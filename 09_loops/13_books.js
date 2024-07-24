// Declaring books with their title, genre, and publish year
let books = [
    { title: 'Book 1', genre: 'Fiction', publish: 2010 },
    { title: 'Book 2', genre: 'Non-Fiction', publish: 2015 },
    { title: 'Book 3', genre: 'Fiction', publish: 2012 },
    { title: 'Book 4', genre: 'Non-Fiction', publish: 2018 },
    { title: 'Book 5', genre: 'Fiction', publish: 2013 },
    { title: 'Book 6', genre: 'Non-Fiction', publish: 2016 },
    { title: 'Book 7', genre: 'Fiction', publish: 2011 },
    { title: 'Book 8', genre: 'Non-Fiction', publish: 2014 },
    { title: 'Book 9', genre: 'Fiction', publish: 2017 },
    { title: 'Book 10', genre: 'Non-Fiction', publish: 2020 },
    { title: 'Book 11', genre: 'Fiction', publish: 2009 },
    { title: 'Book 12', genre: 'Non-Fiction', publish: 2019 },
  ];
  
  // Filter books by genre 'Fiction'
  let userBooks = books.filter((bk) => bk.genre === 'Fiction');
  
  // Filter fiction books published in or after 2020
  let userBooksOne = userBooks.filter((bk) => bk.publish >= 2020);
  
  // Filter fiction books published in or after 2016
  let userBooksTwo= userBooks.filter((bk) => 
    {
        return bk.publish >= 2016 && bk.genre === 'Fiction'}) 
  
  console.log("Fiction books: ", userBooks);
  console.log("Fiction books published in or after 2020: ", userBooksOne);
  console.log("Fiction books published in or after 2016 and are fiction type: ", userBooksTwo);
  