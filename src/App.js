import './App.css';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from './firebase.init';
import { useState } from 'react';

const auth = getAuth(app)
function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const [passError, setPassError] = useState('');
  const provider = new FacebookAuthProvider();
  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const handlePassword = (event) => {
    setPassword(event.target.value)
  }
  const handleFacebookbtn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .catch(
        error => {
          console.log(error)
        }
      )
  }
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }
    if (!/(?=.*[!@#$%^&*])/.test(password)) {
      setPassError('please set a strong password')
      return;
    }


    setValidated(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)

      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage, errorCode)
        // ..
      });

    event.preventDefault();
  }
  return (

    <div className="App">
      <Form noValidate validated={validated} onSubmit={handleSubmit} className='w-50 mx-auto mt-5'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid mail.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
        </Form.Group>
        <p className='text-danger'>{passError}</p>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <button onClick={handleFacebookbtn} className='btn-primary'>Facebook</button>
    </div>

  );
}

export default App;
