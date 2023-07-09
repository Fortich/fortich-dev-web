import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Index from './Index/index';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PostDetail from './PostDetail/post_detail';


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
        <Index>
          <Routes>
            <Route exact path='/'
              element={
                <PostList posts={posts} />
              }
            />
            <Route exact path='/fstab'
              element={
                <PostDetail post={Fstab} />
              }
            />
            <Route exact path='/llaves-ssh'
              element={
                <PostDetail post={LlavesSsh} />
              }
            />
            <Route exact path='/malos-olores'
              element={
                <PostDetail post={MalosOlores} />
              }
            />
            <Route exact path='/logica-de-predicados'
              element={
                <PostDetail post={Predicados} />
              }
            />
            <Route exact path='/logica-de-proposiciones'
              element={
                <PostDetail post={Proposiciones} />
              }
            />
            <Route exact path='/vida'
              element={
                <PostDetail post={Vida} />
              }
            />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Index>
      </BrowserRouter>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
