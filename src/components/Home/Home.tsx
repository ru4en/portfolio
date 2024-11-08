
import Welcome from './Welcome';  // Import the Welcome component
import Projects from './Projects';  // Import the Projects component

const Home = () => {
  return (
    <div>
      <Welcome />  {/* Render the Welcome component */}
      <Projects />  {/* Render the Welcome component */}
      <Welcome />  {/* Render the Welcome component */}
    </div>
  );
};

export default Home;
