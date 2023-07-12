/** @format */

import React, {FC} from "react";

interface AlertProps {
  message: string;
  onClose: () => void;
}

/** Alerts for our error messages etc...*/
const Alert: FC<AlertProps> = ({ message, onClose }) => {
  return (
    
    <div className="modal is-active has-text-centered">
      <div className="modal-background" onClick={onClose}>
        <div className="modal-card">
          <header className="modal-card-head has-background-danger">
            <p>{message}</p>
          </header>
          <footer className="modal-card-foot" style={{justifyContent: 'center'}}>
              <button className="button" onClick={onClose}>
              Close
              </button>
          </footer>
          
        </div>
      </div>

    </div>
    
  );
};
export default Alert;


