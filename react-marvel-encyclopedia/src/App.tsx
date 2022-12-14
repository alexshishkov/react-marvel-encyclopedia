import React from 'react';
import { Route, Routes } from 'react-router';
import AboutUs from 'components/AboutMe/AboutMe';
import Encyclopedia from 'components/Encyclopedia/Encyclopedia';
import Header from 'components/Header/Header';
import PageNotFound from 'components/PageNotFound/PageNotFound';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/Encyclopedia" element={<Encyclopedia />} />
        <Route path="/" element={<Encyclopedia />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
