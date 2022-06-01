import React from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';

interface props {
    onDeleteTrue: () => void
    onDeleteFalse: () => void
}
function ConfirmDelete({ onDeleteTrue, onDeleteFalse }: props) {
  const onDeleteBtnClicked = () => {
    onDeleteTrue();
  };
  const onCancelBtnClicked = () => {
    onDeleteFalse();
  };
  return (
    <div>
      <div className="popup">
        <div className="popup-inner">
          <div>
            <RiErrorWarningLine size={50} />
            <h2>Confirm Delete</h2>
          </div>
          <div>
            <button
              className="btn btn-danger mt-2 float-end"
              type="button"
              onClick={onDeleteBtnClicked}
            >
              Delete
            </button>
            <button
              className="btn btn-primary mt-2 float-end"
              type="button"
              onClick={onCancelBtnClicked}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDelete;
