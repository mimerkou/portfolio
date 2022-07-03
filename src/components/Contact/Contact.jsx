import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();

  // Name input
  const [name, setName] = useState('');
  const [nameTouched, setNameTouched] = useState(false);

  const nameIsValid = name.trim() !== '';
  const nameIsInvalid = !nameIsValid && nameTouched;

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const nameBlurHandler = (e) => {
    setNameTouched(true);
  };

  // Email input
  const [email, setEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);

  const emailIsValid = email.trim() !== '';
  const emailIsInvalid = !emailIsValid && emailTouched;

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const emailBlurHandler = (e) => {
    setEmailTouched(true);
  };

  // Message
  const [message, setMessage] = useState('');
  const [messageTouched, setMessageTouched] = useState(false);

  const messageIsValid = message.trim() !== '';
  const messageIsInvalid = !messageIsValid && messageTouched;

  const messageChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  const messageBlurHandler = (e) => {
    setMessageTouched(true);
  };

  // Errors
  const [nameError, setNameError] = useState({});
  const [emailError, setEmailError] = useState({});
  const [messageError, setMessageError] = useState({});

  // Success state
  const [success, setSuccess] = useState('');

  // Form submit handler
  const formSubmitHandler = (e) => {
    e.preventDefault();

    setNameTouched(true);
    setEmailTouched(true);
    setMessageTouched(true);

    if (!nameIsValid && !emailIsValid && !messageIsValid) {
      return;
    }

    const isValid = formValidation();

    if (isValid) {
      emailjs
        .sendForm(
          'gmail',
          'email_template_id',
          e.target,
          'user_hjiXLSO3lG0J6BG4oNO4M'
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();

      setName('');
      setNameTouched(false);

      setEmail('');
      setEmailTouched(false);

      setMessage('');
      setMessageTouched(false);
    }

    console.log(name);
    console.log(email);
    console.log(message);
  };

  const formValidation = () => {
    const nameError = {};
    const emailError = {};
    const messageError = {};
    let success = '';
    let isValid = true;

    if (nameIsValid && emailIsValid && messageIsValid) {
      success =
        'I have received your request and I will reply within 1 working day!';
      setSuccess(success);
      isValid = true;
    }

    if (nameIsInvalid) {
      nameError.nameErr = 'Name must not be empty';
      isValid = false;
    }

    if (emailIsInvalid) {
      emailError.emailErr = 'Email must not be empty';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailError.emailErr = 'Email address is not valid.';
      isValid = false;
    }

    if (messageIsInvalid) {
      messageError.messageErr = 'Message must not be empty';
      isValid = false;
    }

    setNameError(nameError);
    setEmailError(emailError);
    setMessageError(messageError);

    return isValid;
  };

  const nameClasses = nameIsInvalid ? 'name invalid' : 'name';
  const emailClasses = emailIsInvalid ? 'email invalid' : 'email';
  const messageClasses = messageIsInvalid ? 'message invalid' : 'message';

  return (
    <section className="contact-container" id="contact">
      <div className="contact-info">
        <h2>Get In Touch</h2>
        <div className="underline"></div>
        <p className="website">
          If you have a website or an idea in mind, feel free to contact me, get
          a quick estimate and a plan for making it live.
        </p>

        <br />

        <p className="required-fields">
          Please fill in the form below. All fields are required.
        </p>
        <form ref={formRef} onSubmit={formSubmitHandler}>
          <div className="form-control">
            <div className={nameClasses}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
              />
              {nameIsInvalid && (
                <p className="error-text">Name must not be empty</p>
              )}
              {/* {Object.keys(nameError).map((key, index) => {
                return (
                  <p key={index} className="error-text">
                    {nameError[key]}
                  </p>
                );
              })} */}
            </div>

            <div className={emailClasses}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
              />
              {emailIsInvalid && (
                <p className="error-text">Email must not be empty</p>
              )}
              {/* {Object.keys(emailError).map((key, index) => {
                return (
                  <p key={index} className="error-text">
                    {emailError[key]}
                  </p>
                );
              })} */}
            </div>

            <div className={messageClasses}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                cols="25"
                rows="10"
                value={message}
                onChange={messageChangeHandler}
                onBlur={messageBlurHandler}
              ></textarea>
              {messageIsInvalid && (
                <p className="error-text">Message must not be empty</p>
              )}
              {/* {Object.keys(messageError).map((key, index) => {
                return (
                  <p key={index} className="error-text">
                    {messageError[key]}
                  </p>
                );
              })} */}
            </div>
          </div>
          <button type="submit" className="btn btn-send">
            Send
          </button>
          {success && <p className="success-text">{success}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
