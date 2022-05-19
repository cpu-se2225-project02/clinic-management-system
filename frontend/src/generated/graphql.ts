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
  readonly doc_id: Scalars['Int'];
  readonly dt_end: Scalars['String'];
  readonly dt_start: Scalars['String'];
  readonly id: Scalars['Int'];
  readonly name: Scalars['String'];
  readonly patient?: Maybe<Patient>;
}

export interface AppointmentInput {
  readonly doc_id: Scalars['Int'];
  readonly dt_end: Scalars['String'];
  readonly dt_start: Scalars['String'];
  readonly name: Scalars['String'];
  readonly patient_id: Scalars['Int'];
}

export interface Doctor {
  readonly __typename?: 'Doctor';
  readonly appointments: ReadonlyArray<Appointment>;
  readonly doc_name: Scalars['String'];
  readonly id: Scalars['Int'];
}

export interface MedNotesInput {
  readonly date_noted: Scalars['String'];
  readonly med_notes: Scalars['String'];
  readonly patient_id: Scalars['Int'];
  readonly title: Scalars['String'];
}

export interface MedicalNotes {
  readonly __typename?: 'MedicalNotes';
  readonly date_noted: Scalars['String'];
  readonly id: Scalars['Int'];
  readonly med_notes: Scalars['String'];
  readonly patient?: Maybe<Patient>;
  readonly title: Scalars['String'];
}

export interface Mutation {
  readonly __typename?: 'Mutation';
  readonly addAppointment?: Maybe<Appointment>;
  readonly addMedNotes?: Maybe<MedicalNotes>;
  readonly addPatient?: Maybe<Patient>;
  readonly addPayment?: Maybe<Payment>;
  readonly addPrescription?: Maybe<Prescription>;
  readonly deleteAppointment?: Maybe<Appointment>;
  readonly deletePatient?: Maybe<Patient>;
  readonly editAppointment?: Maybe<Appointment>;
  readonly editPatient?: Maybe<Patient>;
}


export interface MutationAddAppointmentArgs {
  newAppointment: AppointmentInput;
}


export interface MutationAddMedNotesArgs {
  newMedNotes: MedNotesInput;
}


export interface MutationAddPatientArgs {
  newPatient: PatientInput;
}


export interface MutationAddPaymentArgs {
  newPayment: PaymentInput;
}


export interface MutationAddPrescriptionArgs {
  newPrescription: PrescriptionInput;
}


export interface MutationDeleteAppointmentArgs {
  appID: Scalars['Int'];
}


export interface MutationDeletePatientArgs {
  patientId: Scalars['Int'];
}


export interface MutationEditAppointmentArgs {
  appointmentID: Scalars['Int'];
  editedAppointment: AppointmentInput;
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
  readonly constactNo: Scalars['String'];
  readonly email?: Maybe<Scalars['String']>;
  readonly f_name: Scalars['String'];
  readonly id: Scalars['Int'];
  readonly l_name: Scalars['String'];
  readonly m_name?: Maybe<Scalars['String']>;
  readonly sex: Scalars['String'];
  readonly suffix?: Maybe<Scalars['String']>;
}

export interface PatientInput {
  readonly address: Scalars['String'];
  readonly age: Scalars['Int'];
  readonly birthdate: Scalars['String'];
  readonly constactNo: Scalars['String'];
  readonly email?: InputMaybe<Scalars['String']>;
  readonly f_name: Scalars['String'];
  readonly l_name: Scalars['String'];
  readonly m_name?: InputMaybe<Scalars['String']>;
  readonly sex: Scalars['String'];
  readonly suffix?: InputMaybe<Scalars['String']>;
}

export interface Payment {
  readonly __typename?: 'Payment';
  readonly ammnt_cost: Scalars['Float'];
  readonly ammnt_payed: Scalars['Float'];
  readonly id: Scalars['Int'];
  readonly patient?: Maybe<Patient>;
  readonly paymnt_dt: Scalars['String'];
}

export interface PaymentInput {
  readonly ammnt_cost: Scalars['Float'];
  readonly ammnt_payed: Scalars['Float'];
  readonly patient_id: Scalars['Int'];
  readonly paymnt_dt: Scalars['String'];
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
  readonly account?: Maybe<ReadonlyArray<Maybe<Payment>>>;
  readonly allDoctors?: Maybe<ReadonlyArray<Maybe<Doctor>>>;
  readonly allPayments?: Maybe<ReadonlyArray<Maybe<Payment>>>;
  readonly appointments?: Maybe<ReadonlyArray<Maybe<Appointment>>>;
  readonly helloWorld?: Maybe<Scalars['String']>;
  readonly hi?: Maybe<Scalars['String']>;
  readonly high?: Maybe<Scalars['String']>;
  readonly patientMedNotes?: Maybe<ReadonlyArray<Maybe<MedicalNotes>>>;
  readonly patients?: Maybe<ReadonlyArray<Maybe<Patient>>>;
  readonly specificPatient?: Maybe<Patient>;
}


export interface QueryAccountArgs {
  patientId: Scalars['Int'];
}


export interface QueryPatientMedNotesArgs {
  patient_id: Scalars['Int'];
}


export interface QuerySpecificPatientArgs {
  patientId: Scalars['Int'];
}
