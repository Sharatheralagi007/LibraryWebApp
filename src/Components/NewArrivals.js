import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function NewArrivals() {
  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    // Fetch new arrivals data from your database or API
    fetch('your-api-endpoint-for-new-arrivals')
      .then((response) => response.json())
      .then((data) => setNewArrivals(data))
      .catch((error) => console.error('Error fetching new arrivals:', error));
  }, []);

  // Check if newArrivals is empty
  if (newArrivals.length === 0) {
    return (
      <section className="new-arrivals">
        <h2>New Arrivals</h2>
        <p>Sorry, there are currently no new arrivals available. Please check back later.</p>
      </section>
    );
  }

  return (
    <section className="new-arrivals">
      <h2>New Arrivals</h2>
      <Carousel showArrows={true} showStatus={false} showThumbs={false} infiniteLoop={true}>
        {newArrivals.map((book) => (
          <div key={book.id}>
            <img src={book.imageUrl} alt={book.title} />
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
