import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

import * as Types from './generated/graphql';

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

export type EditAnAppointmentMutationVariables = Types.Exact<{

  theAppointment: Types.AppointmentInput;

  aId: Types.Scalars['Int'];

}>;

export type EditAnAppointmentMutation = (

  { __typename?: 'Mutation' }

  & { editAppointment?: Types.Maybe<(

    { __typename?: 'Appointment' }

    & Pick<Types.Appointment, 'name' | 'dt_start' | 'dt_end' | 'doc_id'>

  )> }

);

export const AllPatientsDocument = {
  kind: 'Document',
  definitions: [{
    kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'AllPatients' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'patients' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'f_name' } }, { kind: 'Field', name: { kind: 'Name', value: 'l_name' } }, { kind: 'Field', name: { kind: 'Name', value: 'm_initial' } }, { kind: 'Field', name: { kind: 'Name', value: 'suffix' } }, { kind: 'Field', name: { kind: 'Name', value: 'sex' } }, { kind: 'Field', name: { kind: 'Name', value: 'age' } }, { kind: 'Field', name: { kind: 'Name', value: 'address' } }, { kind: 'Field', name: { kind: 'Name', value: 'birthdate' } }] } }] },
  }],
} as unknown as DocumentNode<AllPatientsQuery, AllPatientsQueryVariables>;

export const AddPatientDocument = {
  kind: 'Document',
  definitions: [{
    kind: 'OperationDefinition',
    operation: 'mutation',
    name: { kind: 'Name', value: 'AddPatient' },
    variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'newPatient' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'PatientInput' } } } }],
    selectionSet: {
      kind: 'SelectionSet',
      selections: [{
        kind: 'Field', name: { kind: 'Name', value: 'addPatient' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'newPatient' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'newPatient' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'l_name' } }, { kind: 'Field', name: { kind: 'Name', value: 'f_name' } }, { kind: 'Field', name: { kind: 'Name', value: 'm_initial' } }, { kind: 'Field', name: { kind: 'Name', value: 'address' } }, { kind: 'Field', name: { kind: 'Name', value: 'age' } }, { kind: 'Field', name: { kind: 'Name', value: 'suffix' } }, { kind: 'Field', name: { kind: 'Name', value: 'sex' } }, { kind: 'Field', name: { kind: 'Name', value: 'birthdate' } }] },
      }],
    },
  }],
} as unknown as DocumentNode<AddPatientMutation, AddPatientMutationVariables>;

export const GetPatientDocument = {
  kind: 'Document',
  definitions: [{
    kind: 'OperationDefinition',
    operation: 'query',
    name: { kind: 'Name', value: 'GetPatient' },
    variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } } }],
    selectionSet: {
      kind: 'SelectionSet',
      selections: [{
        kind: 'Field', name: { kind: 'Name', value: 'specificPatient' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'patientId' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'l_name' } }, { kind: 'Field', name: { kind: 'Name', value: 'f_name' } }, { kind: 'Field', name: { kind: 'Name', value: 'm_initial' } }, { kind: 'Field', name: { kind: 'Name', value: 'sex' } }, { kind: 'Field', name: { kind: 'Name', value: 'suffix' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'address' } }, { kind: 'Field', name: { kind: 'Name', value: 'birthdate' } }, { kind: 'Field', name: { kind: 'Name', value: 'age' } }] },
      }],
    },
  }],
} as unknown as DocumentNode<GetPatientQuery, GetPatientQueryVariables>;

export const EditAPatientDocument = {
  kind: 'Document',
  definitions: [{
    kind: 'OperationDefinition',
    operation: 'mutation',
    name: { kind: 'Name', value: 'editAPatient' },
    variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'thePatient' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'PatientInput' } } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'pid' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } } }],
    selectionSet: {
      kind: 'SelectionSet',
      selections: [{
        kind: 'Field', name: { kind: 'Name', value: 'editPatient' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'editedPatient' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'thePatient' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'patientId' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'pid' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'suffix' } }, { kind: 'Field', name: { kind: 'Name', value: 'f_name' } }, { kind: 'Field', name: { kind: 'Name', value: 'l_name' } }, { kind: 'Field', name: { kind: 'Name', value: 'm_initial' } }, { kind: 'Field', name: { kind: 'Name', value: 'sex' } }, { kind: 'Field', name: { kind: 'Name', value: 'address' } }, { kind: 'Field', name: { kind: 'Name', value: 'birthdate' } }, { kind: 'Field', name: { kind: 'Name', value: 'age' } }] },
      }],
    },
  }],
} as unknown as DocumentNode<EditAPatientMutation, EditAPatientMutationVariables>;

export const GetAllAppointmentsDocument = {
  kind: 'Document',
  definitions: [{
    kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'getAllAppointments' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'appointments' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'dt_start' } }, { kind: 'Field', name: { kind: 'Name', value: 'dt_end' } }, { kind: 'Field', name: { kind: 'Name', value: 'name' } }, { kind: 'Field', name: { kind: 'Name', value: 'doc_id' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'patient' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'f_name' } }, { kind: 'Field', name: { kind: 'Name', value: 'l_name' } }] } }] } }] },
  }],
} as unknown as DocumentNode<GetAllAppointmentsQuery, GetAllAppointmentsQueryVariables>;

export const AddPrescriptionDocument = {
  kind: 'Document',
  definitions: [{
    kind: 'OperationDefinition',
    operation: 'mutation',
    name: { kind: 'Name', value: 'addPrescription' },
    variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'newPresc' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'PrescriptionInput' } } } }],
    selectionSet: {
      kind: 'SelectionSet',
      selections: [{
        kind: 'Field', name: { kind: 'Name', value: 'addPrescription' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'newPrescription' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'newPresc' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'pres_name' } }, { kind: 'Field', name: { kind: 'Name', value: 'pres_dos' } }] },
      }],
    },
  }],
} as unknown as DocumentNode<AddPrescriptionMutation, AddPrescriptionMutationVariables>;

export const DeleteAPatientDocument = {
  kind: 'Document',
  definitions: [{
    kind: 'OperationDefinition',
    operation: 'mutation',
    name: { kind: 'Name', value: 'deleteAPatient' },
    variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'patientID' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } } }],
    selectionSet: {
      kind: 'SelectionSet',
      selections: [{
        kind: 'Field', name: { kind: 'Name', value: 'deletePatient' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'patientId' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'patientID' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'l_name' } }, { kind: 'Field', name: { kind: 'Name', value: 'f_name' } }, { kind: 'Field', name: { kind: 'Name', value: 'm_initial' } }, { kind: 'Field', name: { kind: 'Name', value: 'suffix' } }, { kind: 'Field', name: { kind: 'Name', value: 'sex' } }, { kind: 'Field', name: { kind: 'Name', value: 'age' } }, { kind: 'Field', name: { kind: 'Name', value: 'birthdate' } }, { kind: 'Field', name: { kind: 'Name', value: 'address' } }] },
      }],
    },
  }],
} as unknown as DocumentNode<DeleteAPatientMutation, DeleteAPatientMutationVariables>;

export const AllDocsDocument = {
  kind: 'Document',
  definitions: [{
    kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'allDocs' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'allDoctors' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'doc_name' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }] } }] },
  }],
} as unknown as DocumentNode<AllDocsQuery, AllDocsQueryVariables>;

export const AddAnAppointmentDocument = {
  kind: 'Document',
  definitions: [{
    kind: 'OperationDefinition',
    operation: 'mutation',
    name: { kind: 'Name', value: 'addAnAppointment' },
    variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'appointment' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'AppointmentInput' } } } }],
    selectionSet: {
      kind: 'SelectionSet',
      selections: [{
        kind: 'Field', name: { kind: 'Name', value: 'addAppointment' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'newAppointment' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'appointment' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'dt_start' } }, { kind: 'Field', name: { kind: 'Name', value: 'dt_end' } }] },
      }],
    },
  }],
} as unknown as DocumentNode<AddAnAppointmentMutation, AddAnAppointmentMutationVariables>;

export const EditAnAppointmentDocument = {
  kind: 'Document',
  definitions: [{
    kind: 'OperationDefinition',
    operation: 'mutation',
    name: { kind: 'Name', value: 'editAnAppointment' },
    variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'theAppointment' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'AppointmentInput' } } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'aId' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } } }],
    selectionSet: {
      kind: 'SelectionSet',
      selections: [{
        kind: 'Field', name: { kind: 'Name', value: 'editAppointment' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'editedAppointment' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'theAppointment' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'appointmentID' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'aId' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }, { kind: 'Field', name: { kind: 'Name', value: 'dt_start' } }, { kind: 'Field', name: { kind: 'Name', value: 'dt_end' } }, { kind: 'Field', name: { kind: 'Name', value: 'doc_id' } }] },
      }],
    },
  }],
} as unknown as DocumentNode<EditAnAppointmentMutation, EditAnAppointmentMutationVariables>;
