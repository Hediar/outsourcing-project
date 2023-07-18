import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Detail from '../pages/Detail';
import GlobalStyle from '../style/GlobalStyle';
import Header from '../components/Header/Header';

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        {/* <Route path="/detail/:id" element={<Detail />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
