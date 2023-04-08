import React from 'react';
import './index_footer_bar.css';

/**
 * Index footer bar.
 * @return {JSX} Index footer bar component.
 */
export default function IndexFooterBar() {
  return (
    <footer className="darker-background">
      <div className="text-center p-3 text-white" >
        © 2023 Copyright <a className="text-white" href="https://fortich.dev/">Fortich.Dev</a>
      </div>
    </footer>
  );
}
