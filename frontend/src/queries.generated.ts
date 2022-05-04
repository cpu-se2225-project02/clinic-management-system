import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import * as Types from './generated/graphql';

export type AllPatientsQueryVariables = Types.Exact<{ [key: string]: never; }>;

export type AllPatientsQuery = (
  { __typename?: 'Query' }
  & Pick<Types.Query, 'helloWorld'>
  & { patients?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Patient' }
    & Pick<Types.Patient, 'f_name' | 'l_name' | 'm_initial' | 'address'>
  )>>> }
);

export const AllPatientsDocument = {
  kind: 'Document',
  definitions: [{
    kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'AllPatients' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'patients' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'f_name' } }, { kind: 'Field', name: { kind: 'Name', value: 'l_name' } }, { kind: 'Field', name: { kind: 'Name', value: 'm_initial' } }, { kind: 'Field', name: { kind: 'Name', value: 'address' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'helloWorld' } }] },
  }],
} as unknown as DocumentNode<AllPatientsQuery, AllPatientsQueryVariables>;
