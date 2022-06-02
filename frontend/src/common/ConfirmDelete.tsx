import React from 'react';
import { Modal } from 'react-bootstrap';
import { RiErrorWarningLine } from 'react-icons/ri';

interface props {
  onDeleteTrue: () => void;
  onDeleteFalse: () => void;
  deleteModal: boolean;
  deleteModalBtn: React.Dispatch<React.SetStateAction<boolean>>

}
function ConfirmDelete({
  onDeleteTrue, onDeleteFalse, deleteModal, deleteModalBtn,
}: props) {
  const onDeleteBtnClicked = () => {
    onDeleteTrue();
  };
  const onCancelBtnClicked = () => {
    onDeleteFalse();
  };
  return (
    <Modal show={deleteModal} onHide={() => deleteModalBtn(false)} className="mt-5 mb-5" backdrop="static">
      <Modal.Header closeButton>
        <span><RiErrorWarningLine size={40} /></span>
      </Modal.Header>
      <Modal.Body>

        <div>
          <span><h5>Are you sure you want to delete this?</h5></span>
        </div>
        <div>
          <button
            className="btn btn-danger mt-2 float-end"
            type="button"
            onClick={onDeleteBtnClicked}
          >
            Confirm
          </button>
          <button
            className="btn btn-primary mt-2 float-end"
            type="button"
            onClick={onCancelBtnClicked}
          >
            Cancel
          </button>
        </div>

      </Modal.Body>
    </Modal>
  );
}

export default ConfirmDelete;
