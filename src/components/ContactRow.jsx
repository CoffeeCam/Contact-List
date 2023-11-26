import React from 'react';

export default function ContactRow({ setSelectedContactId, contact }) {
  return (
    <li
      onClick={() => {
        setSelectedContactId(contact.id);
      }}
      style={{ cursor: 'pointer' }}
    >
      {contact.name}
    </li>
  );
}