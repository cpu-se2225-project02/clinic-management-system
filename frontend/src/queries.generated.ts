/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

import * as Types from './generated/graphql';

export type AllPatientsQueryVariables = Types.Exact<{

  con?: Types.InputMaybe<Types.Scalars['String']>;

}>;





export type AllPatientsQuery = (

  { __typename?: 'Query' }

  & { patients?: Types.Maybe<Array<Types.Maybe<(

    { __typename?: 'Patient' }

    & Pick<Types.Patient, 'id' | 'f_name' | 'l_name' | 'm_name' | 'suffix' | 'sex' | 'age' | 'address' | 'constactNo'>

  )>>> }

);



export type AddPatientMutationVariables = Types.Exact<{

  newPatient: Types.PatientInput;

}>;





export type AddPatientMutation = (

  { __typename?: 'Mutation' }

  & { addPatient?: Types.Maybe<(

    { __typename?: 'Patient' }

    & Pick<Types.Patient, 'id' | 'l_name' | 'f_name' | 'm_name' | 'address' | 'age' | 'suffix' | 'sex' | 'birthdate'>

  )> }

);



export type GetPatientQueryVariables = Types.Exact<{

  id: Types.Scalars['Int'];

}>;





export type GetPatientQuery = (

  { __typename?: 'Query' }

  & { specificPatient?: Types.Maybe<(

    { __typename?: 'Patient' }

    & Pick<Types.Patient, 'l_name' | 'f_name' | 'm_name' | 'sex' | 'suffix' | 'id' | 'address' | 'birthdate' | 'age' | 'constactNo' | 'email'>

  )> }

);



export type EditAPatientMutationVariables = Types.Exact<{

  thePatient: Types.PatientInput;

  pid: Types.Scalars['Int'];

}>;





export type EditAPatientMutation = (

  { __typename?: 'Mutation' }

  & { editPatient?: Types.Maybe<(

    { __typename?: 'Patient' }

    & Pick<Types.Patient, 'suffix' | 'f_name' | 'l_name' | 'm_name' | 'sex' | 'address' | 'birthdate' | 'age' | 'constactNo' | 'email'>

  )> }

);



export type GetAllAppointmentsQueryVariables = Types.Exact<{ [key: string]: never; }>;





export type GetAllAppointmentsQuery = (

  { __typename?: 'Query' }

  & { appointments?: Types.Maybe<Array<Types.Maybe<(

    { __typename?: 'Appointment' }

    & Pick<Types.Appointment, 'dt_start' | 'dt_end' | 'name' | 'id'>

    & { doctor?: Types.Maybe<(

      { __typename?: 'Doctor' }

      & Pick<Types.Doctor, 'doc_name' | 'id'>

    )>, patient?: Types.Maybe<(

      { __typename?: 'Patient' }

      & Pick<Types.Patient, 'f_name' | 'l_name'>

    )> }

  )>>> }

);



export type GetPatientAccountQueryVariables = Types.Exact<{

  patientId: Types.Scalars['Int'];

}>;





export type GetPatientAccountQuery = (

  { __typename?: 'Query' }

  & { account?: Types.Maybe<Array<Types.Maybe<(

    { __typename?: 'Bill' }

    & Pick<Types.Bill, 'id' | 'paymnt_dt' | 'ammnt_cost' | 'ammnt_paid'>

  )>>> }

);



export type AddPaymentMutationVariables = Types.Exact<{

  newPayment: Types.PaymentInput;

}>;





export type AddPaymentMutation = (

  { __typename?: 'Mutation' }

  & { addPayment?: Types.Maybe<(

    { __typename?: 'Bill' }

    & Pick<Types.Bill, 'id' | 'paymnt_dt' | 'ammnt_cost' | 'ammnt_paid'>

    & { patient?: Types.Maybe<(

      { __typename?: 'Patient' }

      & Pick<Types.Patient, 'id' | 'f_name' | 'l_name'>

    )> }

  )> }

);



export type DeleteAPatientMutationVariables = Types.Exact<{

  patientID: Types.Scalars['Int'];

}>;





export type DeleteAPatientMutation = (

  { __typename?: 'Mutation' }

  & { deletePatient?: Types.Maybe<(

    { __typename?: 'Patient' }

    & Pick<Types.Patient, 'l_name' | 'f_name' | 'm_name' | 'suffix' | 'sex' | 'age' | 'birthdate' | 'address'>

  )> }

);



export type AllDocsQueryVariables = Types.Exact<{ [key: string]: never; }>;





export type AllDocsQuery = (

  { __typename?: 'Query' }

  & { allDoctors?: Types.Maybe<Array<Types.Maybe<(

    { __typename?: 'Doctor' }

    & Pick<Types.Doctor, 'doc_name' | 'id'>

  )>>> }

);



export type AddAnAppointmentMutationVariables = Types.Exact<{

  appointment: Types.AppointmentInput;

}>;





export type AddAnAppointmentMutation = (

  { __typename?: 'Mutation' }

  & { addAppointment?: Types.Maybe<(

    { __typename?: 'Appointment' }

    & Pick<Types.Appointment, 'dt_start' | 'dt_end'>

  )> }

);



export type EdiAnAppointmentMutationVariables = Types.Exact<{

  theAppointment: Types.AppointmentInput;

  aId: Types.Scalars['Int'];

}>;





export type EdiAnAppointmentMutation = (

  { __typename?: 'Mutation' }

  & { editAppointment?: Types.Maybe<(

    { __typename?: 'Appointment' }

    & Pick<Types.Appointment, 'name' | 'dt_start' | 'dt_end' | 'doc_id'>

  )> }

);



export type DeleteAnAppointmentMutationVariables = Types.Exact<{

  appId: Types.Scalars['Int'];

}>;





export type DeleteAnAppointmentMutation = (

  { __typename?: 'Mutation' }

  & { deleteAppointment?: Types.Maybe<(

    { __typename?: 'Appointment' }

    & Pick<Types.Appointment, 'id'>

  )> }

);



export type DisplayMedNotesQueryVariables = Types.Exact<{

  pID: Types.Scalars['Int'];

}>;





export type DisplayMedNotesQuery = (

  { __typename?: 'Query' }

  & { patientMedNotes?: Types.Maybe<Array<Types.Maybe<(

    { __typename?: 'MedicalNotes' }

    & Pick<Types.MedicalNotes, 'date_noted' | 'id' | 'title' | 'med_notes'>

    & { doctor?: Types.Maybe<(

      { __typename?: 'Doctor' }

      & Pick<Types.Doctor, 'doc_name'>

    )> }

  )>>> }

);



export type AddAMedNoteMutationVariables = Types.Exact<{

  newMedNote: Types.MedNotesInput;

}>;





export type AddAMedNoteMutation = (

  { __typename?: 'Mutation' }

  & { addMedNotes?: Types.Maybe<(

    { __typename?: 'MedicalNotes' }

    & Pick<Types.MedicalNotes, 'med_notes' | 'title' | 'doc_id'>

  )> }

);



export type AddDoctorMutationVariables = Types.Exact<{

  newDoctor: Types.DoctorInput;

}>;





export type AddDoctorMutation = (

  { __typename?: 'Mutation' }

  & { addDoctor?: Types.Maybe<(

    { __typename?: 'Doctor' }

    & Pick<Types.Doctor, 'id' | 'doc_name'>

    & { appointments?: Types.Maybe<Array<Types.Maybe<(

      { __typename?: 'Appointment' }

      & Pick<Types.Appointment, 'id'>

    )>>> }

  )> }

);



export type AddPrescriptionMutationVariables = Types.Exact<{

  newPrescription: Types.AddPrescriptionInput;

}>;





export type AddPrescriptionMutation = (

  { __typename?: 'Mutation' }

  & { addPrescription?: Types.Maybe<(

    { __typename?: 'Prescription' }

    & Pick<Types.Prescription, 'id' | 'pres_name' | 'pres_dos' | 'patient_id'>

  )> }

);



export type EditPrescriptionMutationVariables = Types.Exact<{

  editedPrescription: Types.EditPrescriptionInput;

  prescriptionId: Types.Scalars['Int'];

}>;





export type EditPrescriptionMutation = (

  { __typename?: 'Mutation' }

  & { editPrescription?: Types.Maybe<(

    { __typename?: 'Prescription' }

    & Pick<Types.Prescription, 'id' | 'pres_name' | 'pres_dos' | 'patient_id'>

  )> }

);



export type PatientPrescriptionsQueryVariables = Types.Exact<{

  patientId: Types.Scalars['Int'];

}>;





export type PatientPrescriptionsQuery = (

  { __typename?: 'Query' }

  & { patientPrescriptions?: Types.Maybe<Array<Types.Maybe<(

    { __typename?: 'Prescription' }

    & Pick<Types.Prescription, 'id' | 'pres_name' | 'pres_dos'>

  )>>> }

);



export type PatientAppointmentsQueryVariables = Types.Exact<{

  pID: Types.Scalars['Int'];

}>;





export type PatientAppointmentsQuery = (

  { __typename?: 'Query' }

  & { specificAppointment?: Types.Maybe<Array<Types.Maybe<(

    { __typename?: 'Appointment' }

    & Pick<Types.Appointment, 'name' | 'dt_start' | 'dt_end'>

  )>>> }

);



export type DeletePrescriptionMutationVariables = Types.Exact<{

  prescId: Types.Scalars['Int'];

}>;





export type DeletePrescriptionMutation = (

  { __typename?: 'Mutation' }

  & { deletePrescription?: Types.Maybe<(

    { __typename?: 'Prescription' }

    & Pick<Types.Prescription, 'id' | 'pres_name' | 'patient_id'>

  )> }

);



export type AllDoctorsQueryVariables = Types.Exact<{ [key: string]: never; }>;





export type AllDoctorsQuery = (

  { __typename?: 'Query' }

  & { allDoctors?: Types.Maybe<Array<Types.Maybe<(

    { __typename?: 'Doctor' }

    & Pick<Types.Doctor, 'doc_name'>

  )>>> }

);



export type AllPaymentsQueryVariables = Types.Exact<{ [key: string]: never; }>;





export type AllPaymentsQuery = (

  { __typename?: 'Query' }

  & { allPayments?: Types.Maybe<Array<Types.Maybe<(

    { __typename?: 'Bill' }

    & Pick<Types.Bill, 'ammnt_paid'>

  )>>> }

);



export type AddBillMutationVariables = Types.Exact<{

  bill: Types.BillInput;

}>;





export type AddBillMutation = (

  { __typename?: 'Mutation' }

  & { addBill?: Types.Maybe<(

    { __typename?: 'Bill' }

    & Pick<Types.Bill, 'ammnt_cost' | 'patient_id'>

  )> }

);



export type InvoiceQueryVariables = Types.Exact<{

  pID: Types.Scalars['Int'];

}>;





export type InvoiceQuery = (

  { __typename?: 'Query' }

  & { invoice?: Types.Maybe<Array<Types.Maybe<(

    { __typename?: 'Bill' }

    & Pick<Types.Bill, 'ammnt_cost'>

    & { patient?: Types.Maybe<(

      { __typename?: 'Patient' }

      & Pick<Types.Patient, 'l_name' | 'f_name'>

    )> }

  )>>> }

);

export type PatientMedHistoryQueryVariables = Types.Exact<{
  patientId: Types.Scalars['Int'];
}>;


export type PatientMedHistoryQuery = (
  { __typename?: 'Query' }
  & { patientMedHistory?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'MedicalHistory' }
    & Pick<Types.MedicalHistory, 'id' | 'patient_id' | 'diagnosis' | 'treatment_plan' | 'description'>
  )>>> }
);

export type AddMedHistoryMutationVariables = Types.Exact<{
  newMedHistory: Types.AddMedHistoryInput;
}>;


export type AddMedHistoryMutation = (
  { __typename?: 'Mutation' }
  & { addMedHistory?: Types.Maybe<(
    { __typename?: 'MedicalHistory' }
    & Pick<Types.MedicalHistory, 'id' | 'diagnosis' | 'treatment_plan' | 'patient_id'>
  )> }
);

export type EditMedHistoryMutationVariables = Types.Exact<{
  editedMedHistory: Types.EditMedHistoryInput;
  medicalhistoryId: Types.Scalars['Int'];
}>;


export type EditMedHistoryMutation = (
  { __typename?: 'Mutation' }
  & { editMedHistory?: Types.Maybe<(
    { __typename?: 'MedicalHistory' }
    & Pick<Types.MedicalHistory, 'id' | 'diagnosis' | 'treatment_plan' | 'description' | 'patient_id'>
  )> }
);

export type DeleteMedHistoryMutationVariables = Types.Exact<{
  medicalhistoryId: Types.Scalars['Int'];
}>;


export type DeleteMedHistoryMutation = (
  { __typename?: 'Mutation' }
  & { deleteMedHistory?: Types.Maybe<(
    { __typename?: 'MedicalHistory' }
    & Pick<Types.MedicalHistory, 'id' | 'diagnosis' | 'treatment_plan' | 'description'>
  )> }
);


export const AllPatientsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllPatients"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"con"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"patients"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"Variable","name":{"kind":"Name","value":"con"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"f_name"}},{"kind":"Field","name":{"kind":"Name","value":"l_name"}},{"kind":"Field","name":{"kind":"Name","value":"m_name"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"sex"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"constactNo"}}]}}]}}]} as unknown as DocumentNode<AllPatientsQuery, AllPatientsQueryVariables>;
export const AddPatientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddPatient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newPatient"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PatientInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addPatient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"newPatient"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newPatient"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"l_name"}},{"kind":"Field","name":{"kind":"Name","value":"f_name"}},{"kind":"Field","name":{"kind":"Name","value":"m_name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"sex"}},{"kind":"Field","name":{"kind":"Name","value":"birthdate"}}]}}]}}]} as unknown as DocumentNode<AddPatientMutation, AddPatientMutationVariables>;
export const GetPatientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPatient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"specificPatient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"patientId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"l_name"}},{"kind":"Field","name":{"kind":"Name","value":"f_name"}},{"kind":"Field","name":{"kind":"Name","value":"m_name"}},{"kind":"Field","name":{"kind":"Name","value":"sex"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"birthdate"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"constactNo"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<GetPatientQuery, GetPatientQueryVariables>;
export const EditAPatientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"editAPatient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"thePatient"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PatientInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editPatient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"editedPatient"},"value":{"kind":"Variable","name":{"kind":"Name","value":"thePatient"}}},{"kind":"Argument","name":{"kind":"Name","value":"patientId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"f_name"}},{"kind":"Field","name":{"kind":"Name","value":"l_name"}},{"kind":"Field","name":{"kind":"Name","value":"m_name"}},{"kind":"Field","name":{"kind":"Name","value":"sex"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"birthdate"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"constactNo"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<EditAPatientMutation, EditAPatientMutationVariables>;
export const GetAllAppointmentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllAppointments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"appointments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dt_start"}},{"kind":"Field","name":{"kind":"Name","value":"dt_end"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"doctor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"doc_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"patient"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"f_name"}},{"kind":"Field","name":{"kind":"Name","value":"l_name"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllAppointmentsQuery, GetAllAppointmentsQueryVariables>;
export const GetPatientAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPatientAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"patientId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"patientId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"patientId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"paymnt_dt"}},{"kind":"Field","name":{"kind":"Name","value":"ammnt_cost"}},{"kind":"Field","name":{"kind":"Name","value":"ammnt_paid"}}]}}]}}]} as unknown as DocumentNode<GetPatientAccountQuery, GetPatientAccountQueryVariables>;
export const AddPaymentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddPayment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newPayment"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addPayment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"newPayment"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newPayment"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"paymnt_dt"}},{"kind":"Field","name":{"kind":"Name","value":"ammnt_cost"}},{"kind":"Field","name":{"kind":"Name","value":"ammnt_paid"}},{"kind":"Field","name":{"kind":"Name","value":"patient"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"f_name"}},{"kind":"Field","name":{"kind":"Name","value":"l_name"}}]}}]}}]}}]} as unknown as DocumentNode<AddPaymentMutation, AddPaymentMutationVariables>;
export const DeleteAPatientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteAPatient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"patientID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePatient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"patientId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"patientID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"l_name"}},{"kind":"Field","name":{"kind":"Name","value":"f_name"}},{"kind":"Field","name":{"kind":"Name","value":"m_name"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"sex"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"birthdate"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]} as unknown as DocumentNode<DeleteAPatientMutation, DeleteAPatientMutationVariables>;
export const AllDocsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allDocs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allDoctors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"doc_name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AllDocsQuery, AllDocsQueryVariables>;
export const AddAnAppointmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addAnAppointment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"appointment"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AppointmentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addAppointment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"newAppointment"},"value":{"kind":"Variable","name":{"kind":"Name","value":"appointment"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dt_start"}},{"kind":"Field","name":{"kind":"Name","value":"dt_end"}}]}}]}}]} as unknown as DocumentNode<AddAnAppointmentMutation, AddAnAppointmentMutationVariables>;
export const EdiAnAppointmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ediAnAppointment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"theAppointment"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AppointmentInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"aId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editAppointment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"editedAppointment"},"value":{"kind":"Variable","name":{"kind":"Name","value":"theAppointment"}}},{"kind":"Argument","name":{"kind":"Name","value":"appointmentID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"aId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"dt_start"}},{"kind":"Field","name":{"kind":"Name","value":"dt_end"}},{"kind":"Field","name":{"kind":"Name","value":"doc_id"}}]}}]}}]} as unknown as DocumentNode<EdiAnAppointmentMutation, EdiAnAppointmentMutationVariables>;
export const DeleteAnAppointmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteAnAppointment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"appId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteAppointment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"appID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"appId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteAnAppointmentMutation, DeleteAnAppointmentMutationVariables>;
export const DisplayMedNotesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DisplayMedNotes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"patientMedNotes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"patient_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date_noted"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"med_notes"}},{"kind":"Field","name":{"kind":"Name","value":"doctor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"doc_name"}}]}}]}}]}}]} as unknown as DocumentNode<DisplayMedNotesQuery, DisplayMedNotesQueryVariables>;
export const AddAMedNoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddAMedNote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newMedNote"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MedNotesInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addMedNotes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"newMedNotes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newMedNote"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"med_notes"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"doc_id"}}]}}]}}]} as unknown as DocumentNode<AddAMedNoteMutation, AddAMedNoteMutationVariables>;
export const AddDoctorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddDoctor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newDoctor"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DoctorInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addDoctor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"newDoctor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newDoctor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"doc_name"}},{"kind":"Field","name":{"kind":"Name","value":"appointments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<AddDoctorMutation, AddDoctorMutationVariables>;
export const AddPrescriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddPrescription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newPrescription"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddPrescriptionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addPrescription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"newPrescription"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newPrescription"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pres_name"}},{"kind":"Field","name":{"kind":"Name","value":"pres_dos"}},{"kind":"Field","name":{"kind":"Name","value":"patient_id"}}]}}]}}]} as unknown as DocumentNode<AddPrescriptionMutation, AddPrescriptionMutationVariables>;
export const EditPrescriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditPrescription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editedPrescription"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditPrescriptionInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"prescriptionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editPrescription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"prescriptionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"prescriptionId"}}},{"kind":"Argument","name":{"kind":"Name","value":"editedPrescription"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editedPrescription"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pres_name"}},{"kind":"Field","name":{"kind":"Name","value":"pres_dos"}},{"kind":"Field","name":{"kind":"Name","value":"patient_id"}}]}}]}}]} as unknown as DocumentNode<EditPrescriptionMutation, EditPrescriptionMutationVariables>;
export const PatientPrescriptionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PatientPrescriptions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"patientId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"patientPrescriptions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"patientId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"patientId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pres_name"}},{"kind":"Field","name":{"kind":"Name","value":"pres_dos"}}]}}]}}]} as unknown as DocumentNode<PatientPrescriptionsQuery, PatientPrescriptionsQueryVariables>;
export const PatientAppointmentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PatientAppointments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"specificAppointment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"patientID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"dt_start"}},{"kind":"Field","name":{"kind":"Name","value":"dt_end"}}]}}]}}]} as unknown as DocumentNode<PatientAppointmentsQuery, PatientAppointmentsQueryVariables>;
export const DeletePrescriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePrescription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"prescId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePrescription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"prescriptionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"prescId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pres_name"}},{"kind":"Field","name":{"kind":"Name","value":"patient_id"}}]}}]}}]} as unknown as DocumentNode<DeletePrescriptionMutation, DeletePrescriptionMutationVariables>;
export const AllDoctorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllDoctors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allDoctors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"doc_name"}}]}}]}}]} as unknown as DocumentNode<AllDoctorsQuery, AllDoctorsQueryVariables>;
export const AllPaymentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllPayments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allPayments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ammnt_paid"}}]}}]}}]} as unknown as DocumentNode<AllPaymentsQuery, AllPaymentsQueryVariables>;
export const AddBillDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addBill"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bill"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BillInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addBill"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"newBill"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bill"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ammnt_cost"}},{"kind":"Field","name":{"kind":"Name","value":"patient_id"}}]}}]}}]} as unknown as DocumentNode<AddBillMutation, AddBillMutationVariables>;
export const InvoiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Invoice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"invoice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"patientId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ammnt_cost"}},{"kind":"Field","name":{"kind":"Name","value":"patient"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"l_name"}},{"kind":"Field","name":{"kind":"Name","value":"f_name"}}]}}]}}]}}]} as unknown as DocumentNode<InvoiceQuery, InvoiceQueryVariables>;
export const PatientMedHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"patientMedHistory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"patientId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"patientMedHistory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"patientId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"patientId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"patient_id"}},{"kind":"Field","name":{"kind":"Name","value":"diagnosis"}},{"kind":"Field","name":{"kind":"Name","value":"treatment_plan"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<PatientMedHistoryQuery, PatientMedHistoryQueryVariables>;
export const AddMedHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddMedHistory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newMedHistory"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddMedHistoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addMedHistory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"newMedHistory"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newMedHistory"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"diagnosis"}},{"kind":"Field","name":{"kind":"Name","value":"treatment_plan"}},{"kind":"Field","name":{"kind":"Name","value":"patient_id"}}]}}]}}]} as unknown as DocumentNode<AddMedHistoryMutation, AddMedHistoryMutationVariables>;
export const EditMedHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditMedHistory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editedMedHistory"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditMedHistoryInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"medicalhistoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editMedHistory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"medicalhistoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"medicalhistoryId"}}},{"kind":"Argument","name":{"kind":"Name","value":"editedMedHistory"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editedMedHistory"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"diagnosis"}},{"kind":"Field","name":{"kind":"Name","value":"treatment_plan"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"patient_id"}}]}}]}}]} as unknown as DocumentNode<EditMedHistoryMutation, EditMedHistoryMutationVariables>;
export const DeleteMedHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteMedHistory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"medicalhistoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteMedHistory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"medicalhistoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"medicalhistoryId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"diagnosis"}},{"kind":"Field","name":{"kind":"Name","value":"treatment_plan"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<DeleteMedHistoryMutation, DeleteMedHistoryMutationVariables>;


export type PatientReferralsQueryVariables = Types.Exact<{

  patientId: Types.Scalars['Int'];

}>;





export type PatientReferralsQuery = (

  { __typename?: 'Query' }

  & { patientReferrals?: Types.Maybe<Array<Types.Maybe<(

    { __typename?: 'Referral' }

    & Pick<Types.Referral, 'id' | 'hosp_name'>

    & { patient?: Types.Maybe<(

      { __typename?: 'Patient' }

      & Pick<Types.Patient, 'id' | 'f_name' | 'l_name' | 'm_name'>

    )>, doctor?: Types.Maybe<(

      { __typename?: 'Doctor' }

      & Pick<Types.Doctor, 'id' | 'doc_name'>

    )> }

  )>>> }

);



export type AddReferralMutationVariables = Types.Exact<{

  newReferral: Types.ReferralInput;

}>;





export type AddReferralMutation = (

  { __typename?: 'Mutation' }

  & { addReferral?: Types.Maybe<(

    { __typename?: 'Referral' }

    & Pick<Types.Referral, 'id' | 'hosp_name'>

    & { patient?: Types.Maybe<(

      { __typename?: 'Patient' }

      & Pick<Types.Patient, 'id'>

    )>, doctor?: Types.Maybe<(

      { __typename?: 'Doctor' }

      & Pick<Types.Doctor, 'id'>

    )> }

  )> }

);



export type DeleteReferralMutationVariables = Types.Exact<{

  referralId: Types.Scalars['Int'];

}>;





export type DeleteReferralMutation = (

  { __typename?: 'Mutation' }

  & { deleteReferral?: Types.Maybe<(

    { __typename?: 'Referral' }

    & Pick<Types.Referral, 'id' | 'hosp_name'>

    & { doctor?: Types.Maybe<(

      { __typename?: 'Doctor' }

      & Pick<Types.Doctor, 'id'>

    )>, patient?: Types.Maybe<(

      { __typename?: 'Patient' }

      & Pick<Types.Patient, 'id'>

    )> }

  )> }

);



export type EditReferralMutationVariables = Types.Exact<{

  editedReferral: Types.EditReferralInput;

  referralID: Types.Scalars['Int'];

}>;





export type EditReferralMutation = (

  { __typename?: 'Mutation' }

  & { editReferral?: Types.Maybe<(

    { __typename?: 'Referral' }

    & Pick<Types.Referral, 'id' | 'hosp_name'>

    & { doctor?: Types.Maybe<(

      { __typename?: 'Doctor' }

      & Pick<Types.Doctor, 'id'>

    )>, patient?: Types.Maybe<(

      { __typename?: 'Patient' }

      & Pick<Types.Patient, 'id'>

    )> }

  )> }

);



export const PatientReferralsDocument = {
  kind: 'Document',
  definitions: [{
    kind: 'OperationDefinition',
    operation: 'query',
    name: { kind: 'Name', value: 'PatientReferrals' },
    variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'patientId' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } } }],
    selectionSet: {
      kind: 'SelectionSet',
      selections: [{
        kind: 'Field', name: { kind: 'Name', value: 'patientReferrals' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'patientID' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'patientId' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'hosp_name' } }, { kind: 'Field', name: { kind: 'Name', value: 'patient' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'f_name' } }, { kind: 'Field', name: { kind: 'Name', value: 'l_name' } }, { kind: 'Field', name: { kind: 'Name', value: 'm_name' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'doctor' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'doc_name' } }] } }] },
      }],
    },
  }],
} as unknown as DocumentNode<PatientReferralsQuery, PatientReferralsQueryVariables>;

export const AddReferralDocument = {
  kind: 'Document',
  definitions: [{
    kind: 'OperationDefinition',
    operation: 'mutation',
    name: { kind: 'Name', value: 'AddReferral' },
    variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'newReferral' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ReferralInput' } } } }],
    selectionSet: {
      kind: 'SelectionSet',
      selections: [{
        kind: 'Field', name: { kind: 'Name', value: 'addReferral' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'newReferral' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'newReferral' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'patient' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'doctor' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'hosp_name' } }] },
      }],
    },
  }],
} as unknown as DocumentNode<AddReferralMutation, AddReferralMutationVariables>;

export const DeleteReferralDocument = {
  kind: 'Document',
  definitions: [{
    kind: 'OperationDefinition',
    operation: 'mutation',
    name: { kind: 'Name', value: 'DeleteReferral' },
    variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'referralId' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } } }],
    selectionSet: {
      kind: 'SelectionSet',
      selections: [{
        kind: 'Field', name: { kind: 'Name', value: 'deleteReferral' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'referralId' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'referralId' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'doctor' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'hosp_name' } }, { kind: 'Field', name: { kind: 'Name', value: 'patient' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }] } }] },
      }],
    },
  }],
} as unknown as DocumentNode<DeleteReferralMutation, DeleteReferralMutationVariables>;

export const EditReferralDocument = {
  kind: 'Document',
  definitions: [{
    kind: 'OperationDefinition',
    operation: 'mutation',
    name: { kind: 'Name', value: 'EditReferral' },
    variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'editedReferral' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'EditReferralInput' } } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'referralID' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } } }],
    selectionSet: {
      kind: 'SelectionSet',
      selections: [{
        kind: 'Field', name: { kind: 'Name', value: 'editReferral' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'referralID' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'referralID' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'editedReferral' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'editedReferral' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'hosp_name' } }, { kind: 'Field', name: { kind: 'Name', value: 'doctor' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'patient' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }] } }] },
      }],
    },
  }],
} as unknown as DocumentNode<EditReferralMutation, EditReferralMutationVariables>;
