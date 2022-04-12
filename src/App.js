import './App.css';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import { getAuth } from "firebase/auth";
import app from './firebase.init';

const auth = getAuth(app)
function App() {
  const handleEmail = (event) => {
    console.log(event.target.value)
  }
  const handlePassword = (event) => {
    console.log(event.target.value)
  }
  const handleSubmit = (event) => {
    console.log('form submitt')
    event.preventDefault();
  }
  return (

    <div className="App">
      <Form onSubmit={handleSubmit} className='w-50 mx-auto mt-5'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
