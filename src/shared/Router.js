import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import GlobalStyle from '../style/GlobalStyle';

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
