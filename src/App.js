import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Nav from './components/Nav';
import Main from './components/Main';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      
      <ChakraProvider>
        <Nav/>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            transition={Zoom}
            theme="dark"
          />
        <Main id="home"/>   
        <About id="about"/>
        <Projects id="projects"/>
        <Contact id="contact"/>
      </ChakraProvider>      
    </div>
  );
}

export default App;
