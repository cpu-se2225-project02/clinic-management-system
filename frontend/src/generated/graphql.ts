export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export interface Appointment {
  readonly __typename?: 'Appointment';
  readonly date_time: Scalars['String'];
  readonly id: Scalars['Int'];
  readonly patient?: Maybe<Patient>;
}

export interface AppointmentInput {
  readonly date_time: Scalars['String'];
  readonly patient_id: Scalars['Int'];
}

export interface Mutation {
  readonly __typename?: 'Mutation';
  readonly addAppointment?: Maybe<Appointment>;
  readonly addPatient?: Maybe<Patient>;
  readonly addPrescription?: Maybe<Prescription>;
  readonly editPatient?: Maybe<Patient>;
}


export interface MutationAddAppointmentArgs {
  newAppointment: AppointmentInput;
}


export interface MutationAddPatientArgs {
  newPatient: PatientInput;
}


export interface MutationAddPrescriptionArgs {
  newPrescription: PrescriptionInput;
}


export interface MutationEditPatientArgs {
  editedPatient: PatientInput;
  patientId: Scalars['Int'];
}

export interface Patient {
  readonly __typename?: 'Patient';
  readonly address: Scalars['String'];
  readonly age: Scalars['Int'];
  readonly appointments?: Maybe<ReadonlyArray<Maybe<Appointment>>>;
  readonly birthdate: Scalars['String'];
  readonly f_name: Scalars['String'];
  readonly id: Scalars['Int'];
  readonly l_name: Scalars['String'];
  readonly m_initial?: Maybe<Scalars['String']>;
  readonly sex: Scalars['String'];
  readonly suffix?: Maybe<Scalars['String']>;
}

export interface PatientInput {
  readonly address: Scalars['String'];
  readonly age: Scalars['Int'];
  readonly birthdate: Scalars['String'];
  readonly f_name: Scalars['String'];
  readonly l_name: Scalars['String'];
  readonly m_initial?: InputMaybe<Scalars['String']>;
  readonly sex: Scalars['String'];
  readonly suffix?: InputMaybe<Scalars['String']>;
}

export interface Prescription {
  readonly __typename?: 'Prescription';
  readonly pres_dos: Scalars['Int'];
  readonly pres_name: Scalars['String'];
}

export interface PrescriptionInput {
  readonly pres_dos: Scalars['Int'];
  readonly pres_name: Scalars['String'];
}

export interface Query {
  readonly __typename?: 'Query';
  readonly appointments?: Maybe<ReadonlyArray<Maybe<Appointment>>>;
  readonly helloWorld?: Maybe<Scalars['String']>;
  readonly hi?: Maybe<Scalars['String']>;
  readonly patients?: Maybe<ReadonlyArray<Maybe<Patient>>>;
  readonly specificPatient?: Maybe<Patient>;
}


export interface QuerySpecificPatientArgs {
  patientId: Scalars['Int'];
}
