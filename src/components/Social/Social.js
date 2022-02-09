import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope';
import "./social.css"

const Social = () => {
  return (
    <div>
      <p className="social-container">
        <a target="_blank" rel="noreferrer"
          href="https://www.linkedin.com/in/divanshu-sharma/"
          className="linkedin social"
        >
          <FontAwesomeIcon icon={faLinkedin} size="5x" />
        </a>
        <a target="_blank" rel="noreferrer"
          href="https://github.com/Divanshu23"
          className="github social"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} size="5x" />
        </a>
        <a target="_blank" rel="noreferrer"
          href={'mailto:sharma.divanshu30@gmail.com'}
          className="email social"
        >
          <FontAwesomeIcon icon={faEnvelope} size="5x" />
        </a>
      </p>
    </div>
  );
}

export default Social;