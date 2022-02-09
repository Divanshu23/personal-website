import React, { useState, useEffect, useRef } from 'react';
import "./contact.css";
import Social from '../Social/Social';


// Validates the first half of an email address.
const validateText = (text) => {
  // NOTE: Passes RFC 5322 but not tested on google's standard.
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/;
  return re.test(text) || text.length === 0;
};

const messages = [
  'hi',
  'hello',
  "reached here! and are ready to contact me?",
  'you-can-email-me-at-literally-anything! Really',
  'well, not anything. But most things',
  'like-this: How are you?',
  'or-this: You are hired! :)',
  'but not this :(  ',
  'you.can.also.email.me.with.specific.topics.like',
  'please-work-for-us',
  'help',
  'or-I-really-like-your-website',
  'I\'ll-stop-distracting-you-now',
  'thank you',
];

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay) {
      const id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }
    return () => {}; // pass linter
  }, [delay]);
};

const Contact = () => {
  const hold = 50; // ticks to wait after message is complete before rendering next message
  const delay = 50; // tick length in mS

  const [idx, updateIter] = useState(0); // points to current message
  const [message, updateMessage] = useState(messages[idx]);
  const [char, updateChar] = useState(messages[idx].length); // points to current char
  const [isActive, setIsActive] = useState(true); // disable when all messages are printed

  useInterval(() => {
    let newIdx = idx;
    let newChar = char;
    if (char - hold >= messages[idx].length) {
      newIdx += 1;
      newChar = 0;
    }
    if (newIdx === messages.length) {
      setIsActive(false);
    } else {
      updateMessage(messages[newIdx].slice(0, newChar));
      updateIter(newIdx);
      updateChar(newChar + 1);
    }
  }, isActive ? delay : null);

  return (
    <> 
        <article className="post" id="contact">
        <header>
          <div className="title">
            <h2>Contact Me</h2>
          </div>
        </header>
        <div className="email-at">
          <p>Feel free to get in touch. You can email anything like  </p>
          <div
            className="inline-container"
            style={validateText(message) ? {} : { color: 'red' }}
            onMouseEnter={() => setIsActive(false)}
            onMouseLeave={() => (idx < messages.length) && setIsActive(true)}
          >
              <span>{message}</span>
          </div>
          <p id="copyright">Copyright- Divanshu Sharma, 2022</p>
        </div>
        <Social />
      </article>
    </>
  );
};

export default Contact;
