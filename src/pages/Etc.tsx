import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import PageWrapper from './PageWrapper';

const Etc = () => (
  <PageWrapper forceReadableWidth>
    <Helmet>
      <title>Contact</title>
    </Helmet>
    <h1>Contact & Links</h1>
    <h2>About Me</h2>
    <p>
      Thanks for visiting my portfolio. I'm currently a 3rd year student at EMSI (École Marocaine des Sciences de l'Ingénieur) in Casablanca, Morocco.
      I'm passionate about cybersecurity, programming, and technology, developing solutions from the vibrant tech scene of Casablanca.
    </p>
    <h2>Social Media</h2>
    <p>
      You can find me on these platforms:
    </p>
    <ul>
      <li>
        Twitter: <a href={'https://twitter.com/zyiz'} target="_blank" rel="noopener noreferrer">@zyiz</a>
      </li>
      <li>
        GitHub: <a href={'https://github.com/lilrawry'} target="_blank" rel="noopener noreferrer">@lilrawry</a>
      </li>
    </ul>
    <h2>Contact</h2>
    <p>
      Feel free to reach out to me through Twitter DMs or connect with me on GitHub. I'm always interested in discussing
      new projects, especially in the fields of web development and cybersecurity.
    </p>
    <h2>Projects</h2>
    <ul>
      <li>
        <Link to={'/where'}>View my portfolio</Link>
      </li>
      <li>
        <a href="https://web-production-5336.up.railway.app/" target="_blank" rel="noopener noreferrer">
          Room Reservation System
        </a>
      </li>
    </ul>
  </PageWrapper>
);

export default Etc;
