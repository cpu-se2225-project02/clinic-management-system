import * as Types from './generated/graphql';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type AllPatientsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type AllPatientsQuery = (
  { __typename?: 'Query' }
  & { patients?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Patient' }
    & Pick<Types.Patient, 'id' | 'f_name' | 'l_name' | 'm_initial' | 'suffix' | 'sex' | 'age' | 'address' | 'birthdate'>
  )>>> }
);

export type AddPatientMutationVariables = Types.Exact<{
  newPatient: Types.PatientInput;
}>;


export type AddPatientMutation = (
  { __typename?: 'Mutation' }
  & { addPatient?: Types.Maybe<(
    { __typename?: 'Patient' }
    & Pick<Types.Patient, 'id' | 'l_name' | 'f_name' | 'm_initial' | 'address' | 'age' | 'suffix' | 'sex' | 'birthdate'>
  )> }
);

export type GetPatientQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type GetPatientQuery = (
  { __typename?: 'Query' }
  & { specificPatient?: Types.Maybe<(
    { __typename?: 'Patient' }
    & Pick<Types.Patient, 'l_name' | 'f_name' | 'm_initial' | 'sex' | 'suffix' | 'id' | 'address' | 'birthdate' | 'age'>
  )> }
);

export type GetPrescriptionQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type GetPrescriptionQuery = (
  { __typename?: 'Query' }
  & { patientPrescriptions?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Prescription' }
    & Pick<Types.Prescription, 'pres_name' | 'pres_dos'>
    & { patient?: Types.Maybe<(
      { __typename?: 'Patient' }
      & Pick<Types.Patient, 'id'>
    )> }
  )>>> }
);

export type EditAPrescriptionMutationVariables = Types.Exact<{
  thePrescription: Types.PrescriptionInput;
  pid: Types.Scalars['Int'];
}>;


export type EditAPrescriptionMutation = (
  { __typename?: 'Mutation' }
  & { editPrescription?: Types.Maybe<(
    { __typename?: 'Prescription' }
    & Pick<Types.Prescription, 'pres_name' | 'pres_dos'>
    & { patient?: Types.Maybe<(
      { __typename?: 'Patient' }
      & Pick<Types.Patient, 'id'>
    )> }
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
    & Pick<Types.Patient, 'suffix' | 'f_name' | 'l_name' | 'm_initial' | 'sex' | 'address' | 'birthdate' | 'age'>
  )> }
);

export type GetAllAppointmentsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllAppointmentsQuery = (
  { __typename?: 'Query' }
  & { appointments?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Appointment' }
    & Pick<Types.Appointment, 'dt_start' | 'dt_end' | 'name' | 'doc_id' | 'id'>
    & { patient?: Types.Maybe<(
      { __typename?: 'Patient' }
      & Pick<Types.Patient, 'f_name' | 'l_name'>
    )> }
  )>>> }
);

export type AddPrescriptionMutationVariables = Types.Exact<{
  newPresc: Types.PrescriptionInput;
}>;


export type AddPrescriptionMutation = (
  { __typename?: 'Mutation' }
  & { addPrescription?: Types.Maybe<(
    { __typename?: 'Prescription' }
    & Pick<Types.Prescription, 'pres_name' | 'pres_dos'>
  )> }
);

export type DeletePrescriptionMutationVariables = Types.Exact<{
  prescriptionId: Types.Scalars['Int'];
}>;


export type DeletePrescriptionMutation = (
  { __typename?: 'Mutation' }
  & { deletePrescription?: Types.Maybe<(
    { __typename?: 'Prescription' }
    & Pick<Types.Prescription, 'pres_name' | 'pres_dos'>
    & { patient?: Types.Maybe<(
      { __typename?: 'Patient' }
      & Pick<Types.Patient, 'id'>
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
    & Pick<Types.Patient, 'l_name' | 'f_name' | 'm_initial' | 'suffix' | 'sex' | 'age' | 'birthdate' | 'address'>
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
  )>>> }
);

export type AddAMedNoteMutationVariables = Types.Exact<{
  newMedNote: Types.MedNotesInput;
}>;


export type AddAMedNoteMutation = (
  { __typename?: 'Mutation' }
  & { addMedNotes?: Types.Maybe<(
    { __typename?: 'MedicalNotes' }
    & Pick<Types.MedicalNotes, 'med_notes' | 'title'>
  )> }
);


export const AllPatientsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllPatients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"patients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"f_name"}},{"kind":"Field","name":{"kind":"Name","value":"l_name"}},{"kind":"Field","name":{"kind":"Name","value":"m_initial"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"sex"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"birthdate"}}]}}]}}]} as unknown as DocumentNode<AllPatientsQuery, AllPatientsQueryVariables>;
export const AddPatientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddPatient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newPatient"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PatientInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addPatient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"newPatient"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newPatient"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"l_name"}},{"kind":"Field","name":{"kind":"Name","value":"f_name"}},{"kind":"Field","name":{"kind":"Name","value":"m_initial"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"sex"}},{"kind":"Field","name":{"kind":"Name","value":"birthdate"}}]}}]}}]} as unknown as DocumentNode<AddPatientMutation, AddPatientMutationVariables>;
export const GetPatientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPatient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"specificPatient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"patientId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"l_name"}},{"kind":"Field","name":{"kind":"Name","value":"f_name"}},{"kind":"Field","name":{"kind":"Name","value":"m_initial"}},{"kind":"Field","name":{"kind":"Name","value":"sex"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"birthdate"}},{"kind":"Field","name":{"kind":"Name","value":"age"}}]}}]}}]} as unknown as DocumentNode<GetPatientQuery, GetPatientQueryVariables>;
export const GetPrescriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPrescription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"patientPrescriptions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"patientId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pres_name"}},{"kind":"Field","name":{"kind":"Name","value":"pres_dos"}},{"kind":"Field","name":{"kind":"Name","value":"patient"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetPrescriptionQuery, GetPrescriptionQueryVariables>;
export const EditAPrescriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"editAPrescription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"thePrescription"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PrescriptionInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editPrescription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"editedPrescription"},"value":{"kind":"Variable","name":{"kind":"Name","value":"thePrescription"}}},{"kind":"Argument","name":{"kind":"Name","value":"prescriptionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pres_name"}},{"kind":"Field","name":{"kind":"Name","value":"pres_dos"}},{"kind":"Field","name":{"kind":"Name","value":"patient"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<EditAPrescriptionMutation, EditAPrescriptionMutationVariables>;
export const EditAPatientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"editAPatient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"thePatient"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PatientInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editPatient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"editedPatient"},"value":{"kind":"Variable","name":{"kind":"Name","value":"thePatient"}}},{"kind":"Argument","name":{"kind":"Name","value":"patientId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"f_name"}},{"kind":"Field","name":{"kind":"Name","value":"l_name"}},{"kind":"Field","name":{"kind":"Name","value":"m_initial"}},{"kind":"Field","name":{"kind":"Name","value":"sex"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"birthdate"}},{"kind":"Field","name":{"kind":"Name","value":"age"}}]}}]}}]} as unknown as DocumentNode<EditAPatientMutation, EditAPatientMutationVariables>;
export const GetAllAppointmentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllAppointments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"appointments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dt_start"}},{"kind":"Field","name":{"kind":"Name","value":"dt_end"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"doc_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"patient"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"f_name"}},{"kind":"Field","name":{"kind":"Name","value":"l_name"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllAppointmentsQuery, GetAllAppointmentsQueryVariables>;
export const AddPrescriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addPrescription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newPresc"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PrescriptionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addPrescription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"newPrescription"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newPresc"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pres_name"}},{"kind":"Field","name":{"kind":"Name","value":"pres_dos"}}]}}]}}]} as unknown as DocumentNode<AddPrescriptionMutation, AddPrescriptionMutationVariables>;
export const DeletePrescriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deletePrescription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"prescriptionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePrescription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"prescriptionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"prescriptionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pres_name"}},{"kind":"Field","name":{"kind":"Name","value":"pres_dos"}},{"kind":"Field","name":{"kind":"Name","value":"patient"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<DeletePrescriptionMutation, DeletePrescriptionMutationVariables>;
export const DeleteAPatientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteAPatient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"patientID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePatient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"patientId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"patientID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"l_name"}},{"kind":"Field","name":{"kind":"Name","value":"f_name"}},{"kind":"Field","name":{"kind":"Name","value":"m_initial"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"sex"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"birthdate"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]} as unknown as DocumentNode<DeleteAPatientMutation, DeleteAPatientMutationVariables>;
export const AllDocsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allDocs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allDoctors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"doc_name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AllDocsQuery, AllDocsQueryVariables>;
export const AddAnAppointmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addAnAppointment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"appointment"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AppointmentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addAppointment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"newAppointment"},"value":{"kind":"Variable","name":{"kind":"Name","value":"appointment"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dt_start"}},{"kind":"Field","name":{"kind":"Name","value":"dt_end"}}]}}]}}]} as unknown as DocumentNode<AddAnAppointmentMutation, AddAnAppointmentMutationVariables>;
export const EdiAnAppointmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ediAnAppointment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"theAppointment"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AppointmentInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"aId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editAppointment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"editedAppointment"},"value":{"kind":"Variable","name":{"kind":"Name","value":"theAppointment"}}},{"kind":"Argument","name":{"kind":"Name","value":"appointmentID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"aId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"dt_start"}},{"kind":"Field","name":{"kind":"Name","value":"dt_end"}},{"kind":"Field","name":{"kind":"Name","value":"doc_id"}}]}}]}}]} as unknown as DocumentNode<EdiAnAppointmentMutation, EdiAnAppointmentMutationVariables>;
export const DeleteAnAppointmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteAnAppointment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"appId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteAppointment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"appID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"appId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteAnAppointmentMutation, DeleteAnAppointmentMutationVariables>;
export const DisplayMedNotesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DisplayMedNotes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"patientMedNotes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"patient_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date_noted"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"med_notes"}}]}}]}}]} as unknown as DocumentNode<DisplayMedNotesQuery, DisplayMedNotesQueryVariables>;
export const AddAMedNoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddAMedNote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newMedNote"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MedNotesInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addMedNotes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"newMedNotes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newMedNote"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"med_notes"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<AddAMedNoteMutation, AddAMedNoteMutationVariables>;