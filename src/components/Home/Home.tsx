
import Welcome from './Welcome';
import Projects from './Projects';
import ContactMe from './ContactMe';
import TechnologiesSection from './TechnologiesSection';

const Home = () => {
  return (
    <div>
      <Welcome /> 
      <TechnologiesSection />
      <Projects />
      <ContactMe />
    </div>
  );
};

export default Home;
