import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer  from './Components/Footer';
import Hero from './Components/Hero';
import Skills from './Components/Skill';
import Projects from './Components/Project';
import Contact from './Components/Contact';

function App() {
  return (
    <>
      <Header />
      <Hero/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>

    </>
  );
}

export default App;
