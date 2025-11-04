import React from 'react'

const Source = ({ data }) => {
  return (
    <div>
      <p>First Name: {data.firstName}</p>
      <p>Last Name: {data.lastName}</p>
      <p>Email: {data.email}</p>
    </div>
  );
};


export default Source