import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';  // useNavigate import qilinadi
import './ContactUs.css'
import '../Home/Home'

export const ContactUs = () => {
  const form = useRef();
  const navigate = useNavigate();  // useNavigate hookini chaqiramiz

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('ibrohim2008-id-2121', 'ibrohim2121-tempalte', form.current, {
        publicKey: '2kiCXw15ioMJYt8m5',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // Email muvaffaqiyatli yuborilgandan so‘ng, Home sahifasiga yo‘naltiramiz
          navigate('/');  // Bu yerda Home sahifasi (/) ga yo'naltirish amalga oshiriladi
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

 
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className='back'>
      {/* <Home /> */}
      <div className='login-popup'>
        <form className="login-popup-container" ref={form} onSubmit={sendEmail}>
          <div className="login-popup-title">
            <h1 className='lll'>Sign up for the course:</h1>
          </div>
          <div className="login-popup-inputs">
            <input type="text" placeholder='Your Name*' name='to_name' />
            <input type="tel" placeholder='+998*' name='to_number'/>
          </div>
          <button type="submit" onClick={handleClick}>Send</button>
        </form>
        {showAlert && (
        <div style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "white",
          color: "black",
          padding: "20px 40px",
          borderRadius: "5px",
          zIndex: "9999"
        }}>
          Sent! Wait for the response of the specialist
        </div>
      )}
      </div>
    </div>
  );
};

export default ContactUs;