import { useMemo } from 'react';
import { Tooltip } from 'react-tippy';
import PageWrapper from './PageWrapper';

// Exact birth date: March 1, 2003 (22 years old in 2025)
const BIRTH = new Date('2003-03-01T00:00:00Z');
const YEAR_MILLIS = 31556952000;

const Home = () => {
  const age = useMemo(() => Math.floor((Date.now() - BIRTH.getTime()) / YEAR_MILLIS), []);

  return (
    <PageWrapper forceReadableWidth>
      <h1>What I Do</h1>
      <p>
        Adib. {/* @ts-ignore */}
        <Tooltip arrow title={'March 1, 2003'}>
          {age}
        </Tooltip>{' '}
        y/o student developer and cybersecurity enthusiast.
      </p>
      <p>
        Thanks for visiting my portfolio. I'm currently a 3rd year student at EMSI (École Marocaine des Sciences de l'Ingénieur) in Casablanca, Morocco. I'm passionate about cybersecurity, programming, and technology, developing solutions from the vibrant tech scene of Casablanca.
      </p>
      <p>
        With expertise in full-stack web development, C/C++ programming, and cybersecurity assessments, I deliver secure, scalable, and user-centric solutions. My technical approach combines industry best practices with innovative problem-solving to address complex challenges.
      </p>

      <h3>About My Technical Journey</h3>

      <p>
        As a cybersecurity enthusiast, I understand that security isn't just a feature but a fundamental 
        aspect of software design. Through my studies and personal projects, I've developed a deep 
        appreciation for secure coding practices and vulnerability assessment. I believe that strong 
        technical foundations combined with security awareness create truly valuable software solutions.
      </p>

      <h3>My Formula 1 Statistics Project</h3>
      <p>
        One of my notable projects is a comprehensive statistical analysis of Formula 1 data from 1950 to 2024. 
        This project involved data collection, processing, and visualization to provide insights into racing 
        trends, driver performances, and team strategies throughout F1 history. I leveraged various data analysis 
        tools to create interactive visualizations that tell the story of Formula 1's evolution over decades.
      </p>

      <p>
        This project demonstrates my ability to work with large datasets, implement efficient algorithms, 
        and present complex information in an accessible format. My passion for both technology and Formula 1 
        drove me to create a system that racing enthusiasts can use to explore the rich history of the sport.
      </p>
    </PageWrapper>
  );
};

export default Home;
