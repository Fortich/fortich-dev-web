import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Index from './Index/index';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostDetail from './PostDetail/post_detail';

import Marriage from './Marriage/index'
import PostList from './PostList/post_list';
import LlavesSsh from './Posts/llaves-ssh'
import MalosOlores from './Posts/malos-olores';
import Predicados from './Posts/predicados';
import Proposiciones from './Posts/proposiciones';
import Vida from './Posts/vida';
import PageNotFound from './PageNotFound/page_not_found';
import AboutMe from './AboutMe/about_me';
import Fstab from './Posts/fstab';

const root = ReactDOM.createRoot(document.getElementById('root'));
const posts = [
  Fstab,
  LlavesSsh,
  MalosOlores,
  Predicados,
  Proposiciones,
  Vida,
]
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/'
          element={
            <Index>
              <PostList posts={posts} />
            </Index>
          }
        />
        <Route exact path='/matri'
          element={
            <Marriage />
          }
        />
        <Route exact path='/fstab'
          element={
            <Index>
              <PostDetail post={Fstab} />
            </Index>
          }
        />
        <Route exact path='/llaves-ssh'
          element={
            <Index>
              <PostDetail post={LlavesSsh} />
            </Index>
          }
        />
        <Route exact path='/malos-olores'
          element={
            <Index>
              <PostDetail post={MalosOlores} />
            </Index>
          }
        />
        <Route exact path='/logica-de-predicados'
          element={
            <Index>
              <PostDetail post={Predicados} />
            </Index>
          }
        />
        <Route exact path='/logica-de-proposiciones'
          element={
            <Index>
              <PostDetail post={Proposiciones} />
            </Index>
          }
        />
        <Route exact path='/vida'
          element={
            <Index>
              <PostDetail post={Vida} />
            </Index>
          }
        />
        <Route path="/about-me"
          element={
            <Index>
              <AboutMe />
            </Index>
          }
        />
        <Route path="*"
          element={
            <Index>
              <PageNotFound />
            </Index>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
