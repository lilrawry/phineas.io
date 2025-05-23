import PageWrapper from './PageWrapper';
import Technology from '../components/Technology';
import {
  PythonLogo,
  ReactLogo,
  TypescriptLogo,
  CPlusPlusLogo,
  DjangoLogo,
  SecurityLogo
} from '../components/Icons';
import { Helmet } from 'react-helmet';

const How = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Skills</title>
      </Helmet>
      <h1>My Technical Skills</h1>
      <p>
        I work with a diverse set of technologies focusing on both development and cybersecurity. 
        Below are some of the key technologies I use regularly in my projects.
      </p>

      <Technology
        color="#3776AB"
        icon={<PythonLogo />}
        name="Python"
        type="Backend, Data Analysis"
        useCase={'Building Django web applications and data analysis pipelines for complex projects'}
      />

      <Technology
        color="#232340"
        icon={<ReactLogo />}
        name="React"
        type="Frontend framework"
        useCase={'Creating responsive and interactive user interfaces for web applications'}
      />

      <Technology
        color="#007acc"
        icon={<TypescriptLogo />}
        name="TypeScript"
        type="Web Development"
        useCase={'Developing type-safe frontend applications with better maintainability'}
      />

      <Technology
        color="#00599C"
        icon={<CPlusPlusLogo />}
        name="C/C++"
        type="Systems Programming"
        useCase={'Developing efficient algorithms and data structures for performance-critical applications'}
      />

      <Technology
        color="#092E20"
        icon={<DjangoLogo />}
        name="Django"
        type="Web Framework"
        useCase={'Building full-stack web applications with robust authentication and database systems'}
      />

      <Technology
        color="#EE0000"
        icon={<SecurityLogo />}
        name="CSecurity"
        type="Ethical Hacking"
        useCase={'Performing security assessments, vulnerability scanning, and penetration testing'}
      />
    </PageWrapper>
  );
};

export default How;
