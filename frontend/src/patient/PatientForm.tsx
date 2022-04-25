import React from "react";
import "./PatientForm.css";

interface Popup {
  postButton: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PatientForm({ postButton }: Popup) {
  return (
    <>
      <div className="popup">
        <div className="popup-inner">
          <button onClick={() => postButton(false)} className="btn close-btn">
            X
          </button>
        </div>
      </div>
    </>
  );
}
