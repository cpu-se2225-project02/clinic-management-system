/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */







declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  AppointmentInput: { // input type
    doc_id: number; // Int!
    dt_end: string; // String!
    dt_start: string; // String!
    name: string; // String!
    patient_id: number; // Int!
  }
  MedNotesInput: { // input type
    date_noted: string; // String!
    med_notes: string; // String!
    patient_id: number; // Int!
    title: string; // String!
  }
  PatientInput: { // input type
    address: string; // String!
    age: number; // Int!
    birthdate: string; // String!
    constactNo: string; // String!
    email?: string | null; // String
    f_name: string; // String!
    l_name: string; // String!
    m_name?: string | null; // String
    sex: string; // String!
    suffix?: string | null; // String
  }
  PaymentInput: { // input type
    ammnt_cost: number; // Float!
    ammnt_payed: number; // Float!
    patient_id: number; // Int!
    paymnt_dt: string; // String!
  }
  PrescriptionInput: { // input type
    id: number; // Int!
    patient_id: number; // Int!
    pres_dos: number; // Int!
    pres_name: string; // String!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Appointment: { // root type
    doc_id: number; // Int!
    dt_end: string; // String!
    dt_start: string; // String!
    id: number; // Int!
    name: string; // String!
  }
  Doctor: { // root type
    doc_name: string; // String!
    id: number; // Int!
  }
  MedicalNotes: { // root type
    date_noted: string; // String!
    id: number; // Int!
    med_notes: string; // String!
    title: string; // String!
  }
  Mutation: {};
  Patient: { // root type
    address: string; // String!
    age: number; // Int!
    birthdate: string; // String!
    constactNo: string; // String!
    email?: string | null; // String
    f_name: string; // String!
    id: number; // Int!
    l_name: string; // String!
    m_name?: string | null; // String
    sex: string; // String!
    suffix?: string | null; // String
  }
  Payment: { // root type
    ammnt_cost: number; // Float!
    ammnt_payed: number; // Float!
    id: number; // Int!
    paymnt_dt: string; // String!
  }
  Prescription: { // root type
    id: number; // Int!
    pres_dos: number; // Int!
    pres_name: string; // String!
  }
  Query: {};
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Appointment: { // field return type
    doc_id: number; // Int!
    dt_end: string; // String!
    dt_start: string; // String!
    id: number; // Int!
    name: string; // String!
    patient: NexusGenRootTypes['Patient'] | null; // Patient
  }
  Doctor: { // field return type
    appointments: NexusGenRootTypes['Appointment'][]; // [Appointment!]!
    doc_name: string; // String!
    id: number; // Int!
  }
  MedicalNotes: { // field return type
    date_noted: string; // String!
    id: number; // Int!
    med_notes: string; // String!
    patient: NexusGenRootTypes['Patient'] | null; // Patient
    title: string; // String!
  }
  Mutation: { // field return type
    addAppointment: NexusGenRootTypes['Appointment'] | null; // Appointment
    addMedNotes: NexusGenRootTypes['MedicalNotes'] | null; // MedicalNotes
    addPatient: NexusGenRootTypes['Patient'] | null; // Patient
    addPayment: NexusGenRootTypes['Payment'] | null; // Payment
    addPrescription: NexusGenRootTypes['Prescription'] | null; // Prescription
    deleteAppointment: NexusGenRootTypes['Appointment'] | null; // Appointment
    deletePatient: NexusGenRootTypes['Patient'] | null; // Patient
    deletePrescription: NexusGenRootTypes['Prescription'] | null; // Prescription
    editAppointment: NexusGenRootTypes['Appointment'] | null; // Appointment
    editPatient: NexusGenRootTypes['Patient'] | null; // Patient
    editPrescription: NexusGenRootTypes['Prescription'] | null; // Prescription
  }
  Patient: { // field return type
    address: string; // String!
    age: number; // Int!
    appointments: Array<NexusGenRootTypes['Appointment'] | null> | null; // [Appointment]
    birthdate: string; // String!
    constactNo: string; // String!
    email: string | null; // String
    f_name: string; // String!
    id: number; // Int!
    l_name: string; // String!
    m_name: string | null; // String
    sex: string; // String!
    suffix: string | null; // String
  }
  Payment: { // field return type
    ammnt_cost: number; // Float!
    ammnt_payed: number; // Float!
    id: number; // Int!
    patient: NexusGenRootTypes['Patient'] | null; // Patient
    paymnt_dt: string; // String!
  }
  Prescription: { // field return type
    id: number; // Int!
    patient: NexusGenRootTypes['Patient'] | null; // Patient
    pres_dos: number; // Int!
    pres_name: string; // String!
  }
  Query: { // field return type
    account: Array<NexusGenRootTypes['Payment'] | null> | null; // [Payment]
    allDoctors: Array<NexusGenRootTypes['Doctor'] | null> | null; // [Doctor]
    allPayments: Array<NexusGenRootTypes['Payment'] | null> | null; // [Payment]
    appointments: Array<NexusGenRootTypes['Appointment'] | null> | null; // [Appointment]
    helloWorld: string | null; // String
    hi: string | null; // String
    high: string | null; // String
    patientMedNotes: Array<NexusGenRootTypes['MedicalNotes'] | null> | null; // [MedicalNotes]
    patientPrescriptions: Array<NexusGenRootTypes['Prescription'] | null> | null; // [Prescription]
    patients: Array<NexusGenRootTypes['Patient'] | null> | null; // [Patient]
    prescriptions: Array<NexusGenRootTypes['Prescription'] | null> | null; // [Prescription]
    specificPatient: NexusGenRootTypes['Patient'] | null; // Patient
  }
}

export interface NexusGenFieldTypeNames {
  Appointment: { // field return type name
    doc_id: 'Int'
    dt_end: 'String'
    dt_start: 'String'
    id: 'Int'
    name: 'String'
    patient: 'Patient'
  }
  Doctor: { // field return type name
    appointments: 'Appointment'
    doc_name: 'String'
    id: 'Int'
  }
  MedicalNotes: { // field return type name
    date_noted: 'String'
    id: 'Int'
    med_notes: 'String'
    patient: 'Patient'
    title: 'String'
  }
  Mutation: { // field return type name
    addAppointment: 'Appointment'
    addMedNotes: 'MedicalNotes'
    addPatient: 'Patient'
    addPayment: 'Payment'
    addPrescription: 'Prescription'
    deleteAppointment: 'Appointment'
    deletePatient: 'Patient'
    deletePrescription: 'Prescription'
    editAppointment: 'Appointment'
    editPatient: 'Patient'
    editPrescription: 'Prescription'
  }
  Patient: { // field return type name
    address: 'String'
    age: 'Int'
    appointments: 'Appointment'
    birthdate: 'String'
    constactNo: 'String'
    email: 'String'
    f_name: 'String'
    id: 'Int'
    l_name: 'String'
    m_name: 'String'
    sex: 'String'
    suffix: 'String'
  }
  Payment: { // field return type name
    ammnt_cost: 'Float'
    ammnt_payed: 'Float'
    id: 'Int'
    patient: 'Patient'
    paymnt_dt: 'String'
  }
  Prescription: { // field return type name
    id: 'Int'
    patient: 'Patient'
    pres_dos: 'Int'
    pres_name: 'String'
  }
  Query: { // field return type name
    account: 'Payment'
    allDoctors: 'Doctor'
    allPayments: 'Payment'
    appointments: 'Appointment'
    helloWorld: 'String'
    hi: 'String'
    high: 'String'
    patientMedNotes: 'MedicalNotes'
    patientPrescriptions: 'Prescription'
    patients: 'Patient'
    prescriptions: 'Prescription'
    specificPatient: 'Patient'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    addAppointment: { // args
      newAppointment: NexusGenInputs['AppointmentInput']; // AppointmentInput!
    }
    addMedNotes: { // args
      newMedNotes: NexusGenInputs['MedNotesInput']; // MedNotesInput!
    }
    addPatient: { // args
      newPatient: NexusGenInputs['PatientInput']; // PatientInput!
    }
    addPayment: { // args
      newPayment: NexusGenInputs['PaymentInput']; // PaymentInput!
    }
    addPrescription: { // args
      newPrescription: NexusGenInputs['PrescriptionInput']; // PrescriptionInput!
    }
    deleteAppointment: { // args
      appID: number; // Int!
    }
    deletePatient: { // args
      patientId: number; // Int!
    }
    deletePrescription: { // args
      prescriptionId: number; // Int!
    }
    editAppointment: { // args
      appointmentID: number; // Int!
      editedAppointment: NexusGenInputs['AppointmentInput']; // AppointmentInput!
    }
    editPatient: { // args
      editedPatient: NexusGenInputs['PatientInput']; // PatientInput!
      patientId: number; // Int!
    }
    editPrescription: { // args
      editedPrescription: NexusGenInputs['PrescriptionInput']; // PrescriptionInput!
      prescriptionId: number; // Int!
    }
  }
  Query: {
    account: { // args
      patientId: number; // Int!
    }
    patientMedNotes: { // args
      patient_id: number; // Int!
    }
    patientPrescriptions: { // args
      patientId: number; // Int!
    }
    specificPatient: { // args
      patientId: number; // Int!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}