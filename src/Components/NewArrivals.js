import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


function NewArrivals() {
  const [isbnList, setIsbnList] = useState([]);
  const [bookDetails, setBookDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchISBNs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/isbn');
        const extractedISBNs = response.data.map((item) => item.isbn);
        setIsbnList(extractedISBNs);
        console.log(isbnList);

        
      } catch (error) {
        console.error('Error fetching ISBNs:', error);
      }
    };

    fetchISBNs();
  }, []); // Run once when the component mounts

  useEffect(() => {
    setIsLoading(true); // Set loading state before fetching book details

    const fetchBookDetails = async (isbn) => {
      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=AIzaSyCGOtqj4rax9LanpExmqEXr2Us1safT5MU`);
        if (response.data.items && response.data.items.length > 0) {
          const bookData = response.data.items[0].volumeInfo;
          setBookDetails((prevDetails) => [...prevDetails, bookData]);
        }
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };
    if(isbnList.length===0){
    console.log("isbnNull")
    }
    // Check if isbnList is not empty before fetching book details
    if (isbnList.length > 0) {
      Promise.all(isbnList.map((isbn) => fetchBookDetails(isbn)))
        .then(() => setIsLoading(false)) // Set loading state to false when all details are fetched
        .catch((error) => console.error('Error fetching book details:', error));
    } else {
      setIsLoading(false);
      console.log("Mpt") // If isbnList is empty, set loading state to false
    }
  }, [isbnList]); // Run whenever isbnList changes

  return (
    <div>
      <h1>New Arrivals</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Carousel>
          {bookDetails.map((book, index) => (
            <div key={index}>
              <img src={book.imageLinks?.smallThumbnail} alt={`Cover for ${book.title}`} />
              <h2>Title: {book.title}</h2>
              <p>Author(s): {book.authors ? book.authors.join(', ') : 'N/A'}</p>
              {/* Add more book information here */}
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
  
}

export default NewArrivals;
