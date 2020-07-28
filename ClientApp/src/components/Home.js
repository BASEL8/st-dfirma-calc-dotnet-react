import React from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Home = () => {
  return (

    <div className="h-100 d-flex align-items-center justify-content-center flex-column">
      <h1 className="mb-2">Home Page</h1>
      <LinkContainer className="ml-2" to={'/calculate'}>
        <Button>Räkna</Button>
      </LinkContainer>
    </div>
  )
}
export default Home;