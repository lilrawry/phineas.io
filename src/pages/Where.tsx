import PageWrapper from './PageWrapper';
import Co from '../components/Co';
import styled from 'styled-components';
import Repo from '../components/Repo';
import { Helmet } from 'react-helmet';

// Project icons - topic-specific professional set
const roomReservationIcon = '/easyroom-logo-small.png'; // Your custom EasyRoom logo
const formula1Icon = '/formula-1-logo.png'; // Your custom Formula 1 logo
const securityIcon = 'https://cdn-icons-png.flaticon.com/512/2665/2665038.png'; // Security shield with lock
const cppIcon = 'https://cdn-icons-png.flaticon.com/512/6132/6132222.png'; // C++ coding icon

const Where = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <h1>My Projects & Experience</h1>
      <h3>Academic Projects</h3>
      <CoWrapper>
        <Co
          url="https://web-production-5336.up.railway.app/"
          name="EasyRoom"
          iconReference={roomReservationIcon}
          tagline="Room Reservation System"
          role={'Full-stack Developer'}
          pretext={'2925'}
          what={
            'A comprehensive room reservation management system built with Django that allows users to book, manage, and track room reservations. Features include user authentication, calendar integration, and real-time availability updates.'
          }
        />
        <Co
          url="https://formula-1-f97w7s7ro-lilrawrys-projects.vercel.app/Formula1-Webpage/index.html"
          name="Formula 1 Statistics Project"
          iconReference={formula1Icon}
          tagline="Data Analysis & Visualization"
          role={'Lead Developer'}
          pretext={'2024'}
          what={
            'A comprehensive statistical analysis of Formula 1 data from 1950 to 2024, with interactive visualizations of racing trends, driver performances, and team strategies.'
          }
        />
        <Co
          url="#"
          name="Cybersecurity Assessment Tool"
          iconReference={securityIcon}
          tagline="Security & Networking"
          role={'Security Researcher'}
          pretext={'2023'}
          what={
            'Developed a tool for ethical hacking practice that helps identify common vulnerabilities in web applications and network configurations.'
          }
        />
        <Co
          url="#"
          name="C++ Data Structures Library"
          iconReference={cppIcon}
          tagline="Systems Programming"
          role={'Core Developer'}
          pretext={'2022'}
          what={'Created an efficient library of data structures and algorithms in C++ with comprehensive documentation and testing suite.'}
        />
      </CoWrapper>

      <h3>Technical Skills & Projects</h3>
      <Repo
        name={'Django Web Development'}
        url={'#'}
        primaryLanguage={'Python'}
        description="Full-stack web applications with Django, including authentication, database modeling, and RESTful APIs"
      />
      <Repo
        name={'Systems Programming'}
        url={'#'}
        primaryLanguage={'C/C++'}
        description="Low-level programming for efficient algorithms, data structures, and system operations"
      />
      <Repo
        name={'Ethical Hacking'}
        url={'#'}
        primaryLanguage={'Python/Bash'}
        description="Security assessment tools, vulnerability scanning, and penetration testing techniques"
      />
      <Repo
        name={'Data Analysis'}
        url={'#'}
        primaryLanguage={'Python'}
        description="Statistical analysis and visualization of complex datasets using pandas, matplotlib, and other data science tools"
      />
    </PageWrapper>
  );
};

const CoWrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 2rem 2rem;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export default Where;
