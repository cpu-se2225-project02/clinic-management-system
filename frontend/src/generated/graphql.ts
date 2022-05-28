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

export interface AddPrescriptionInput {
  readonly patient_id: Scalars['Int'];
  readonly pres_dos: Scalars['Int'];
  readonly pres_name: Scalars['String'];
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

export interface Bill {
  readonly __typename?: 'Bill';
  readonly ammnt_cost: Scalars['Float'];
  readonly ammnt_paid?: Maybe<Scalars['Float']>;
  readonly id: Scalars['Int'];
  readonly patient?: Maybe<Patient>;
  readonly patient_id: Scalars['Int'];
  readonly paymnt_dt?: Maybe<Scalars['String']>;
}

export interface BillInput {
  readonly ammnt_cost: Scalars['Float'];
  readonly patient_id: Scalars['Int'];
}

export interface Doctor {
  readonly __typename?: 'Doctor';
  readonly appointments?: Maybe<ReadonlyArray<Maybe<Appointment>>>;
  readonly doc_name: Scalars['String'];
  readonly id: Scalars['Int'];
}

export interface DoctorInput {
  readonly doc_name: Scalars['String'];
}

export interface EditPrescriptionInput {
  readonly pres_dos: Scalars['Int'];
  readonly pres_name: Scalars['String'];
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
  readonly addBill?: Maybe<Bill>;
  readonly addDoctor?: Maybe<Doctor>;
  readonly addMedNotes?: Maybe<MedicalNotes>;
  readonly addPatient?: Maybe<Patient>;
  readonly addPayment?: Maybe<Bill>;
  readonly addPrescription?: Maybe<Prescription>;
  readonly addReferral?: Maybe<Referral>;
  readonly deleteAppointment?: Maybe<Appointment>;
  readonly deletePatient?: Maybe<Patient>;
  readonly deletePrescription?: Maybe<Prescription>;
  readonly editAppointment?: Maybe<Appointment>;
  readonly editPatient?: Maybe<Patient>;
  readonly editPrescription?: Maybe<Prescription>;
}


export interface MutationAddAppointmentArgs {
  newAppointment: AppointmentInput;
}


export interface MutationAddBillArgs {
  newBill: BillInput;
}


export interface MutationAddDoctorArgs {
  newDoctor: DoctorInput;
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
  newPrescription: AddPrescriptionInput;
}


export interface MutationAddReferralArgs {
  newReferral: ReferralInput;
}


export interface MutationDeleteAppointmentArgs {
  appID: Scalars['Int'];
}


export interface MutationDeletePatientArgs {
  patientId: Scalars['Int'];
}


export interface MutationDeletePrescriptionArgs {
  prescriptionId: Scalars['Int'];
}


export interface MutationEditAppointmentArgs {
  appointmentID: Scalars['Int'];
  editedAppointment: AppointmentInput;
}


export interface MutationEditPatientArgs {
  editedPatient: PatientInput;
  patientId: Scalars['Int'];
}


export interface MutationEditPrescriptionArgs {
  editedPrescription: EditPrescriptionInput;
  prescriptionId: Scalars['Int'];
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

export interface PaymentInput {
  readonly ammnt_cost: Scalars['Float'];
  readonly ammnt_paid?: InputMaybe<Scalars['Float']>;
  readonly patient_id: Scalars['Int'];
  readonly paymnt_dt?: InputMaybe<Scalars['String']>;
}

export interface Prescription {
  readonly __typename?: 'Prescription';
  readonly id: Scalars['Int'];
  readonly patient?: Maybe<Patient>;
  readonly patient_id: Scalars['Int'];
  readonly pres_dos: Scalars['Int'];
  readonly pres_name: Scalars['String'];
}

export interface Query {
  readonly __typename?: 'Query';
  readonly account?: Maybe<ReadonlyArray<Maybe<Bill>>>;
  readonly allDoctors?: Maybe<ReadonlyArray<Maybe<Doctor>>>;
  readonly allPayments?: Maybe<ReadonlyArray<Maybe<Bill>>>;
  readonly appointments?: Maybe<ReadonlyArray<Maybe<Appointment>>>;
  readonly helloWorld?: Maybe<Scalars['String']>;
  readonly hi?: Maybe<Scalars['String']>;
  readonly high?: Maybe<Scalars['String']>;
  readonly invoice?: Maybe<ReadonlyArray<Maybe<Bill>>>;
  readonly patientMedNotes?: Maybe<ReadonlyArray<Maybe<MedicalNotes>>>;
  readonly patientPrescriptions?: Maybe<ReadonlyArray<Maybe<Prescription>>>;
  readonly patients?: Maybe<ReadonlyArray<Maybe<Patient>>>;
  readonly prescriptions?: Maybe<ReadonlyArray<Maybe<Prescription>>>;
  readonly specificAppointment?: Maybe<ReadonlyArray<Maybe<Appointment>>>;
  readonly specificPatient?: Maybe<Patient>;
}


export interface QueryAccountArgs {
  patientId: Scalars['Int'];
}


export interface QueryInvoiceArgs {
  patientId: Scalars['Int'];
}


export interface QueryPatientMedNotesArgs {
  patient_id: Scalars['Int'];
}


export interface QueryPatientPrescriptionsArgs {
  patientId: Scalars['Int'];
}


export interface QueryPatientsArgs {
  condition?: InputMaybe<Scalars['String']>;
}


export interface QuerySpecificAppointmentArgs {
  patientID: Scalars['Int'];
}


export interface QuerySpecificPatientArgs {
  patientId: Scalars['Int'];
}

export interface Referral {
  readonly __typename?: 'Referral';
  readonly doctor?: Maybe<Doctor>;
  readonly hosp_name: Scalars['String'];
  readonly id: Scalars['Int'];
  readonly patient?: Maybe<Patient>;
}

export interface ReferralInput {
  readonly doctor_id: Scalars['Int'];
  readonly hosp_name: Scalars['String'];
  readonly patient_id: Scalars['Int'];
}
