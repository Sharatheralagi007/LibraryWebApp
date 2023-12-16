import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BookCoverflow = () => {
  const [isbnList, setIsbnList] = useState([]);
  const [bookDetails, setBookDetails] = useState([]);

  useEffect(() => {
    // Fetch ISBNs from your database (replace with your actual API endpoint)
    axios.get('/isbn')
      .then((response) => {
        setIsbnList(response.data); // Assuming response.data is an array of ISBNs
      })
      .catch((error) => {
        console.error('Error fetching ISBNs:', error);
      });
  }, []);

  useEffect(() => {
    // Fetch book details for each ISBN
    const fetchBookDetails = async (isbn) => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=AIzaSyCGOtqj4rax9LanpExmqEXr2Us1safT5MU`
        );
        if (response.data.items && response.data.items.length > 0) {
          const bookData = response.data.items[0].volumeInfo;
          setBookDetails((prevDetails) => [...prevDetails, bookData]);
        }
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };

    // Iterate through the ISBN list and fetch book details
    if (Array.isArray(isbnList)) {
      isbnList.forEach((isbn) => {
        fetchBookDetails(isbn);
      });
    } else {
      console.error('isbnList is not an array');
    }
    
  }, [isbnList]);

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 5,
    speed: 500,
    focusOnSelect: true,
  };

  return (
    
    <div className="book-coverflow">
      {bookDetails.length === 0 ? (
        <div className="no-arrivals-message">No new arrivals</div>
      ) : (
        <Slider {...settings}>
          {bookDetails.map((book, index) => (
            <div key={index} className="book-card">
              <img src={book.imageLinks.thumbnail} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.authors && book.authors.join(', ')}</p>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default BookCoverflow;
