import React, { useState, useEffect } from 'react';

export default function ContactDetails({ contactId, setSelectedContactId }) {
  const [contactDetails, setContactDetails] = useState(null);

  useEffect(() => {
    async function fetchContactDetails() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${contactId}`
        );
        const result = await response.json();
        setContactDetails(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContactDetails();
  }, [contactId]);

  return (
    <div>
      <h2>Contact Details</h2>
      {contactDetails ? (
        <div>
          <p>Name: {contactDetails.name}</p>
          <p>Email: {contactDetails.email}</p>
          <p>Phone: {contactDetails.phone}</p>
          <button onClick={() => setSelectedContactId(null)}>Go Back</button>
        </div>
      ) : (
        <p>Loading contact details...</p>
      )}
    </div>
  );
}