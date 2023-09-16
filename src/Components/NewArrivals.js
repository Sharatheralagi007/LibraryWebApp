import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React, { useEffect, useState } from 'react';
const apiKey=encodeURIComponent(process.env.API_KEY);
function NewArrivals() {
  const [newArrivals, setNewArrivals] = useState([]); // An array of ISBNs
  const [books, setBooks] = useState([]);
   
  const fetchISBNs = async () => {
    try {
      const response = await axios.get('http://localhost:5000/isbn'); // Replace with your backend server URL
      setNewArrivals(response.data);
    } catch (error) {
      console.error('Error fetching ISBNs:', error);
    }
  };

  // Function to fetch book details by ISBN
  // const fetchBookDetails = (isbn) => {
  //   axios
  //     .get('https://cors-anywhere.herokuapp.com/' + `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${apiKey}`)
  //     .then((response) => {
  //       const data = response.data;
  //       console.log(data)
  //       if (data.items && data.items.length > 0) {
  //         const bookInfo = data.items[0].volumeInfo;
  //         setBooks((prevBooks) => [
  //           ...prevBooks,
  //           {
  //             id: isbn,
  //             title: bookInfo.title,
  //             author: bookInfo.authors ? bookInfo.authors[0] : 'Unknown',
  //             cover: bookInfo.imageLinks ? bookInfo.imageLinks.thumbnail : '',
  //           },
  //         ]);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching book data:', error);
  //     });
  // };
  const fetchBookDetails = (isbn) => {
  axios
    .get(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`)
    .then((response) => {
      const data = response.data;
      console.log(data);

      // Check if the response contains data for the ISBN
      if (`ISBN:${isbn}` in data) {
        const bookInfo = data[`ISBN:${isbn}`];
        setBooks((prevBooks) => [
          ...prevBooks,
          {
            id: isbn,
            title: bookInfo.title,
            author: bookInfo.authors ? bookInfo.authors[0].name : 'Unknown',
            cover: bookInfo.cover ? bookInfo.cover.large : '', // You may adjust the cover image size here
          },
        ]);
      }
    })
    .catch((error) => {
      console.error('Error fetching book data:', error);
    });
};

  
  useEffect(() => {
   
    // Replace this array with your list of ISBNs
    fetchISBNs();

    // Fetch book details for each ISBN in the list
    newArrivals.forEach((isbn) => {
      isbn =encodeURIComponent(isbn)
      fetchBookDetails(isbn);
    });
  }, []);
console.log(books)
  return (
    <section className="new-arrivals">
      <h2>New Arrivals</h2>
      <Carousel showArrows={true} showStatus={false} showThumbs={false} infiniteLoop={true}>
        {books.map((book) => (
          <div key={book.id}>
            <img src={book.cover} alt={book.title} />
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <button>Learn More</button>
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default NewArrivals;
