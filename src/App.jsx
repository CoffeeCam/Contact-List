import React, { useState } from 'react';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <div>
      {selectedContactId ? (
        <ContactDetails
          contactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </div>
  );
}