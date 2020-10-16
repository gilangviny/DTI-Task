/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import './index.css';
import './App.css';
import Header from './pages/header';
import { Home, About, Skills, Work, Contact } from './pages';
import routes from './config/route';
import Footer from './pages/footer';

// eslint-disable-next-line react/prefer-stateless-function
const isUserAuthenticated = true;
const about = {
  title: 'About',
  subTitle: "I'am Viny gilang ramadhan",
  text:
    'saya adalah seorang mahasiswa semester 7 jurusan Informatika telkom university. Berasal dari kota kecil yang berada di provinsi Jawa tengah, terkenal dengan Candi Borobudur nya yang megah',
};

const skills = {
  title: 'Skills',
  subTitle: 'Profesional Skills',
  text: 'Dibawah ini adalah beberapa skills set yang saya miliki.',
};

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={() => {
//         if (isUserAuthenticated) {
//           return <Component />;
//         }
//         return <Redirect to="/contact" />;
//       }}
//     />
//   );
// };

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <main className="l-main">
          {routes.map((route) => {
            return (
              <Route
                path={route.path}
                component={route.component}
                key={route.path}
              />
            );
          })}
        </main>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
