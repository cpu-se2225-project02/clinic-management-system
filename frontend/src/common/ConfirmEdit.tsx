/* eslint-disable linebreak-style */
import React from 'react';
import { Modal } from 'react-bootstrap';
import { RiErrorWarningLine } from 'react-icons/ri';

interface props {
  onEditTrue: () => void;
  onEditFalse: () => void;
  editModal: boolean;
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>

}
function ConfirmEdit({
  onEditTrue, onEditFalse, editModal, setEditModal,
}: props) {
  const onYesBtnClicked = () => {
    onEditTrue();
  };
  const onNoBtnClicked = () => {
    onEditFalse();
  };
  return (
    <Modal show={editModal} onHide={() => setEditModal(false)} className="mt-5 mb-5" backdrop="static">
      <Modal.Header closeButton>
        <span><RiErrorWarningLine size={40} /></span>
      </Modal.Header>
      <Modal.Body>

        <div>
          <span><h5>Save Changes?</h5></span>
        </div>
        <div>
          <button
            className="btn btn-danger mt-2 float-end"
            type="button"
            onClick={onYesBtnClicked}
          >
            Yes
          </button>
          <button
            className="btn btn-primary mt-2 float-end"
            type="button"
            onClick={onNoBtnClicked}
          >
            No
          </button>
        </div>

      </Modal.Body>
    </Modal>
  );
}

export default ConfirmEdit;
