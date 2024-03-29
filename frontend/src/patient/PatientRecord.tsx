/* eslint-disable react/require-default-props */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable radix */
import React, { useState } from 'react';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import './PatientRecord.css';
import { useQuery } from 'urql';
import { MdInfoOutline, MdArrowBackIos, MdAccountBalanceWallet } from 'react-icons/md';
import { FaFilePrescription, FaHospitalAlt, FaNotesMedical } from 'react-icons/fa';
import { AiFillSchedule } from 'react-icons/ai';
import { RiFolderHistoryFill } from 'react-icons/ri';
import { GetPatientDocument } from '../queries.generated';
import PatientInformation from './PatientInformation';
// eslint-disable-next-line no-unused-vars
import Prescription from './prescription/Prescription';
// import PrescriptionForm from './prescription/PrescriptionForm';
import MedicalNotes from './mednotes/MedicalNotes';
import PatientAccount from './account/PatientAccount';
import Header from '../common/Header';
import Sidebars from '../common/Sidebars';
import SpecificAppointment from './appointment/SpecificAppointment';
import Footer from '../common/Footer';
import Referral from './referral/Referral';
import MedicalHistory from './medHistory/medHistory';

interface OpProps {
  accountToggle?: boolean
}

export default function PatientRecord({ accountToggle = false }: OpProps) {
  const navigate = useNavigate();
  const params = useParams() as any;
  const patiendID = parseInt(params.id);
  const [PrescriptionBtn, setPrescBtn] = useState(false);
  const [AccountBtn, setAccBtn] = useState(false);
  const [MedNotesBtn, setMedNotesBtn] = useState(false);
  const [AppointmentBtn, setAppointmentBtn] = useState(accountToggle);
  const [ReferralBtn, setReferralBtn] = useState(false);
  const [MedHist, setMedHist] = useState(false);
  const [allPatients] = useQuery({
    query: GetPatientDocument,
    variables: {
      id: patiendID,
    },
  });

  const handleBtnClick = (handler: React.Dispatch<React.SetStateAction<boolean>>, state: boolean) => {
    setPrescBtn(false);
    setAccBtn(false);
    setMedNotesBtn(false);
    setAppointmentBtn(false);
    setReferralBtn(false);
    setMedHist(false);
    handler(!state);
  };
  const { data } = allPatients;

  return (
    <Container fluid>
      <Row>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <Header />
      </Row>
      <Row>
        <Col xs={2} className="sidebar-box p-0">
          <Sidebars />
        </Col>

        <Col xs={10} className="patientRecordPage mt-3">
          <Row>
            <Col xs={12}>

              <h5 className="h5">
                <button type="button" className="backPLBtn" onClick={() => navigate('/patients')}>
                  <MdArrowBackIos size={20} />
                </button>
                <MdInfoOutline size={20} className="appointment-icon" />
                Patient Record
              </h5>
            </Col>
          </Row>

          <Col>
            <PatientInformation pId={data?.specificPatient?.id} />
          </Col>
          <Col className="list border d-grid gap-2">
            <Button
              variant="primary"
              className="patient-btns"
              onClick={() => handleBtnClick(setPrescBtn, PrescriptionBtn)}
            >
              <FaFilePrescription size={30} />
              {' '}
              PRESCRIPTIONS
            </Button>
            {PrescriptionBtn && <Prescription pID={data?.specificPatient?.id} />}
          </Col>
          <Col className="list border d-grid gap-2">
            <Button
              variant="primary"
              className="patient-btns"
              onClick={() => handleBtnClick(setReferralBtn, ReferralBtn)}
            >
              <FaHospitalAlt size={30} />
              {' '}
              REFERRALS
            </Button>
            {ReferralBtn && <Referral pID={data?.specificPatient?.id} />}
          </Col>
          <Col className="list border d-grid gap-2">
            <Button
              variant="primary"
              className="patient-btns"
              onClick={() => handleBtnClick(setMedHist, MedHist)}
            >
              <RiFolderHistoryFill size={30} />
              {' '}
              MEDICAL HISTORY
            </Button>
            {MedHist && <MedicalHistory pID={data?.specificPatient?.id} />}
          </Col>
          <Col className="list border d-grid gap-2">
            <Button
              variant="primary"
              className="patient-btns"
              onClick={() => handleBtnClick(setAccBtn, AccountBtn)}
            >
              <MdAccountBalanceWallet size={30} />
              {' '}
              ACCOUNTS
            </Button>
            {AccountBtn && <PatientAccount pID={data?.specificPatient?.id} />}
          </Col>

          <Col className="list border d-grid gap-2">
            <Button
              variant="primary"
              className="patient-btns"
              onClick={() => handleBtnClick(setMedNotesBtn, MedNotesBtn)}
            >
              <FaNotesMedical size={30} />
              {' '}
              MEDICAL NOTES
            </Button>
            {MedNotesBtn && <MedicalNotes pId={data?.specificPatient?.id} />}
          </Col>
          <Col className="list border d-grid gap-2">
            <Button
              variant="primary"
              className="patient-btns"
              onClick={() => handleBtnClick(setAppointmentBtn, AppointmentBtn)}
            >
              <AiFillSchedule size={30} />
              {' '}
              APPOINTMENTS
            </Button>
            {AppointmentBtn && <SpecificAppointment pId={data?.specificPatient?.id} />}
          </Col>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}
