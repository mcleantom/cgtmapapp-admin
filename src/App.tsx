import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import Layout from './pages/Layout';
import Dashboard from './pages/main/Dashboard';
import Companies from './pages/main/Companies';

// Theme
const theme = extendTheme({
  colors: {
    ui: {
      main: "#009688",
      secondary: "#EDF2F7",
      success: '#48BB78',
      danger: '#E53E3E',
    }
  },
  components: {
    Tabs: {
      variants: {
        enclosed: {
          tab: {
            _selected: {
              color: 'ui.main',
            },
          },
        },
      },
    },
  },
});

function App() {
  return (
    <>
      <Router>
        <ChakraProvider theme={theme}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/companies" element={<Companies />} />
            </Route>
          </Routes>
        </ ChakraProvider>
      </Router>
    </>
  )
}

export default App