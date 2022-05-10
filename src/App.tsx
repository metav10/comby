import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Router } from './Router';
import { GlobalStyle } from './style/GlobalStyle';

function App() {
  return (
    <HelmetProvider>
      <RecoilRoot>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap" rel="stylesheet" />
        </Helmet>
        <GlobalStyle />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </RecoilRoot>
    </HelmetProvider>
  );
}

export default App;
