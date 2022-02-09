import "./home.css";
import { Typewriter } from 'react-simple-typewriter'
import Social from "../Social/Social";
import Particle from "../Particle/Particle";
const Home = () => {
  return (
    <>
      {/* <Particle /> */}
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h4 className="typewriter">
              <Typewriter
                words={['System.out.println("Hello There!");', "print('Hello World')", "Console.log('Welcome to my Website');", 'Console.Writeline("Hey!");', 'cout << "Hello!" << endl;']}
                loop={false}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h4>
            <h1 className="i-name">Divanshu Sharma</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Software Developer</div>
                <div className="i-title-item">Web Developer</div>
                <div className="i-title-item">Android Developer</div>
                <div className="i-title-item">Full-Stack Developer</div>
                <div className="i-title-item">Basketball Player</div>
              </div>
            </div>
          </div>
        </div>
        <div className="i-right">
          <div className="i-right-wrapper">
            <div className="desc-container">
            <p className="i-desc">
              I am a student at BCIT in Computer Science Program. I love to innovate and develop new solutions to problems.
              I am self-learner kind of a person who is always curious about reading and learning new technologies along with
              improving current knowledge. I am graduating in Summer 2022 and looking for opportunities in the field of software development
              or web development.
            </p>
            </div>
            <div className="contact" >
            <button onClick={() => { window.location.href = "/contact" }} id="btn">Let's Work Together?
            </button>
            <Social />
            </div>
   
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;