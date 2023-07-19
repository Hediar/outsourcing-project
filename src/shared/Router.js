import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import GlobalStyle from '../style/GlobalStyle';
import Header from '../components/Header/Header';

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
