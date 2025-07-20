import ToggleColorMode from "./components/ToggleColorMode";
import Views from "./components/Views";
import ChakraWeb from "./pages/ChakraWeb"
import { ChakraProvider, Box, extendTheme } from '@chakra-ui/react';
// import Navbar from '../components/chakra_web/Navbar';
// import Hero from '../components/chakra_web/Hero';
// import Features from '../components/chakra_web/Features';
// import Footer from '../components/chakra_web/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Docs from './pages/Docs';
import Examples from './pages/Examples';
import Blog from './pages/Blogs';
import NotFound from './pages/NotFound';
import Components from './pages/Components';


const theme = extendTheme({
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
});


function App() {
  return (
    // <>
    //   {/* <Views /> */}
    //   {/* <ToggleColorMode /> */}
    //   <ChakraWeb />
    // </>
    // Update the App.js return statement
<ChakraProvider theme={theme}>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
            <Route path="/components" element={<Components />} />
            <Route path="/examples" element={<Examples />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
</ChakraProvider>
  );
}

export default App;