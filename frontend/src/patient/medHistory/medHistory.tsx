import React, { useState } from 'react';
import { useMutation, useQuery } from 'urql';
import { Spinner } from 'react-bootstrap';
import { RiAddFill } from 'react-icons/ri';
import { BiEdit } from 'react-icons/bi';
import { MdDeleteOutline } from 'react-icons/md';
import { DeleteMedHistoryDocument, PatientMedHistoryDocument } from '../../queries.generated';

interface PatientID {
    pID: undefined | number
}

export default function MedicalHistory({ pID }: PatientID) {
  const [addMedHistoryBtn, setAddMedHistoryBtn] = useState(false);
  const [updateMedHistory, setUpdateMedHistoryBtn] = useState(false);
  const [editBtnValue, setEditBtnValue] = useState(0);
  const [deleteMedHistory, setDeleteMedHistory] = useMutation(DeleteMedHistoryDocument);

  const [patientMedHistory] = useQuery({
    query: PatientMedHistoryDocument,
    variables: {
      patientId: pID as number,
    },
  });

  const { data, error, fetching } = patientMedHistory;
  if (fetching) {
    return <Spinner animation="border" role="status" />;
  }

  if (error) {
    console.log(error);
    return <div>Insertion unsuccessful</div>;
  }

  if (deleteMedHistory.error) {
    console.log(error);
    return <div>Deletion unsuccessful</div>;
  }
  const deletemedHistory = (id: number) => {
    setDeleteMedHistory({
      medicalhistoryId: id,
    });
  };

  const onEditBtnClicked = (value: number) => {
    setEditBtnValue(value);
    setUpdateMedHistoryBtn(true);
  };
}
