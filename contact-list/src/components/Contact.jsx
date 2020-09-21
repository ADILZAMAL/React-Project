import React from "react";

export default function Contact({ sl, contact }) {
  return (
    <tr>
      <td>{sl}</td>
      <td>{contact.name}</td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
    </tr>
  );
}
