import React from 'react';
import "./contact.css";
import { Typewriter } from 'react-simple-typewriter'

import Social from '../Social/Social';


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


const Contact = () => {
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
          <div className ="inline-cotainer">
          <Typewriter
                words={messages}
                loop={false}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
          </div>
          <p id="copyright">Copyright- Divanshu Sharma, 2022</p>
        </div>
        <div className='stuff'>
        <button className="btn" type="button">
                <a href='https://drive.google.com/uc?export=download&id=1dDrlYrpHG8Lvuvcqb3001IpLRGb-G0HM'>Download Resume</a>
            </button>
        <Social />
        </div>
      </article>
    </>
  );
};

export default Contact;
