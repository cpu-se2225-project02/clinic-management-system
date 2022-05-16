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
  PatientInput: { // input type
    address: string; // String!
    age: number; // Int!
    birthdate: string; // String!
    f_name: string; // String!
    l_name: string; // String!
    m_initial?: string | null; // String
    sex: string; // String!
    suffix?: string | null; // String
  }
  PrescriptionInput: { // input type
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
  Mutation: {};
  Patient: { // root type
    address: string; // String!
    age: number; // Int!
    birthdate: string; // String!
    f_name: string; // String!
    id: number; // Int!
    l_name: string; // String!
    m_initial?: string | null; // String
    sex: string; // String!
    suffix?: string | null; // String
  }
  Prescription: { // root type
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
  Mutation: { // field return type
    addAppointment: NexusGenRootTypes['Appointment'] | null; // Appointment
    addPatient: NexusGenRootTypes['Patient'] | null; // Patient
    addPrescription: NexusGenRootTypes['Prescription'] | null; // Prescription
    deletePatient: NexusGenRootTypes['Patient'] | null; // Patient
    deletePrescription: NexusGenRootTypes['Prescription'] | null; // Prescription
    editPatient: NexusGenRootTypes['Patient'] | null; // Patient
    editPrescription: NexusGenRootTypes['Prescription'] | null; // Prescription
  }
  Patient: { // field return type
    address: string; // String!
    age: number; // Int!
    appointments: Array<NexusGenRootTypes['Appointment'] | null> | null; // [Appointment]
    birthdate: string; // String!
    f_name: string; // String!
    id: number; // Int!
    l_name: string; // String!
    m_initial: string | null; // String
    sex: string; // String!
    suffix: string | null; // String
  }
  Prescription: { // field return type
    pres_dos: number; // Int!
    pres_name: string; // String!
  }
  Query: { // field return type
    allDoctors: Array<NexusGenRootTypes['Doctor'] | null> | null; // [Doctor]
    appointments: Array<NexusGenRootTypes['Appointment'] | null> | null; // [Appointment]
    helloWorld: string | null; // String
    hi: string | null; // String
    patients: Array<NexusGenRootTypes['Patient'] | null> | null; // [Patient]
    prescriptions: Array<NexusGenRootTypes['Prescription'] | null> | null; // [Prescription]
    specificPatient: NexusGenRootTypes['Patient'] | null; // Patient
    specificPrescription: NexusGenRootTypes['Prescription'] | null; // Prescription
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
  Mutation: { // field return type name
    addAppointment: 'Appointment'
    addPatient: 'Patient'
    addPrescription: 'Prescription'
    deletePatient: 'Patient'
    deletePrescription: 'Prescription'
    editPatient: 'Patient'
    editPrescription: 'Prescription'
  }
  Patient: { // field return type name
    address: 'String'
    age: 'Int'
    appointments: 'Appointment'
    birthdate: 'String'
    f_name: 'String'
    id: 'Int'
    l_name: 'String'
    m_initial: 'String'
    sex: 'String'
    suffix: 'String'
  }
  Prescription: { // field return type name
    pres_dos: 'Int'
    pres_name: 'String'
  }
  Query: { // field return type name
    allDoctors: 'Doctor'
    appointments: 'Appointment'
    helloWorld: 'String'
    hi: 'String'
    patients: 'Patient'
    prescriptions: 'Prescription'
    specificPatient: 'Patient'
    specificPrescription: 'Prescription'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    addAppointment: { // args
      newAppointment: NexusGenInputs['AppointmentInput']; // AppointmentInput!
    }
    addPatient: { // args
      newPatient: NexusGenInputs['PatientInput']; // PatientInput!
    }
    addPrescription: { // args
      newPrescription: NexusGenInputs['PrescriptionInput']; // PrescriptionInput!
    }
    deletePatient: { // args
      patientId: number; // Int!
    }
    deletePrescription: { // args
      prescriptionId: number; // Int!
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
    specificPatient: { // args
      patientId: number; // Int!
    }
    specificPrescription: { // args
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