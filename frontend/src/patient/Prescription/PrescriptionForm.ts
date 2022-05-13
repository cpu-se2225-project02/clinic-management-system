import React, { useState } from 'react';
import './PatientForm.css';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { useMutation } from 'urql';
import { Modal, Spinner } from 'react-bootstrap';
import { AddPrescription } from '../queries.generated';



