import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/mainPage.css'; // Make sure to create this CSS file based on the design

const MainPage = () => {
  return (
    <div className="main-hub">
      <div className="hub-grid"></div>
      
      <div className="hub-content">
        <h1 className="hub-title">Select Interface Mode</h1>
        
        <div className="mode-selection">
          
          {/* Option 1: Terminal */}
          <Link to="/terminal" className="mode-card terminal">
            <div className="icon">_&gt;</div>
            <div className="mode-name">Terminal</div>
            <div className="mode-desc">
              Command Line Interface.<br/>
              For developers who prefer raw data.
            </div>
          </Link>

          {/* Option 2: Interstellar */}
          <Link to="/interstellar" className="mode-card interstellar">
            <div className="icon">⚛</div>
            <div className="mode-name">Interstellar</div>
            <div className="mode-desc">
              3D Interactive Experience.<br/>
              Visual & Immersive.
            </div>
          </Link>

          {/* Option 3: Spotlight */}
          <Link to="/spotlight" className="mode-card spotlight">
            <div className="icon">★</div>
            <div className="mode-name">Spotlight</div>
            <div className="mode-desc">
              Clean & Professional.<br/>
              Standard UI/UX design.
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default MainPage;