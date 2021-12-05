import React from 'react';
import App from '../../components/Tasks/App'
import '../../components/Tasks/index.css';

function Sub() {
  return ( 
    <div className="Sub">
        <App/>
        <footer className="footer">
          ©CyberOrc
        </footer>
    </div>
  );
}

export default Sub;