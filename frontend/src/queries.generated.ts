import * as Types from './generated/graphql';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type AllPatientsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type AllPatientsQuery = (
  { __typename?: 'Query' }
  & Pick<Types.Query, 'helloWorld'>
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


export const AllPatientsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllPatients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"patients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"f_name"}},{"kind":"Field","name":{"kind":"Name","value":"l_name"}},{"kind":"Field","name":{"kind":"Name","value":"m_initial"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"sex"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"birthdate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"helloWorld"}}]}}]} as unknown as DocumentNode<AllPatientsQuery, AllPatientsQueryVariables>;
export const AddPatientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddPatient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newPatient"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PatientInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addPatient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"newPatient"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newPatient"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"l_name"}},{"kind":"Field","name":{"kind":"Name","value":"f_name"}},{"kind":"Field","name":{"kind":"Name","value":"m_initial"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"sex"}},{"kind":"Field","name":{"kind":"Name","value":"birthdate"}}]}}]}}]} as unknown as DocumentNode<AddPatientMutation, AddPatientMutationVariables>;