import React from 'react';
import { Modal } from 'react-bootstrap';
import { RiErrorWarningLine } from 'react-icons/ri';

export interface Props {
  onDeleteTrue: () => void;
  onDeleteFalse: () => void;
  deleteModal: boolean;
  deleteModalBtn: React.Dispatch<React.SetStateAction<boolean>>

}
function ConfirmDelete({
  onDeleteTrue, onDeleteFalse, deleteModal, deleteModalBtn,
}: Props) {
  const onDeleteBtnClicked = () => {
    onDeleteTrue();
  };
  const onCancelBtnClicked = () => {
    onDeleteFalse();
  };
  return (
    <Modal show={deleteModal} onHide={() => deleteModalBtn(false)} data-testid="delete" className="mt-5 mb-5" backdrop="static">
      <Modal.Header closeButton>
        <span><RiErrorWarningLine size={40} /></span>
      </Modal.Header>
      <Modal.Body>

        <div>
          <span><h5>Are you sure you want to delete this?</h5></span>
        </div>
        <div>
          <button
            data-testid="delete-btn"
            className="btn btn-danger mt-2 float-end"
            type="button"
            onClick={onDeleteBtnClicked}
          >
            Confirm
          </button>
          <button
            data-testid="cancel-btn"
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
