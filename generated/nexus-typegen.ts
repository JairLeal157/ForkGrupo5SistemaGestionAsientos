/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { core, connectionPluginCore } from "nexus"

declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * Adds a Relay-style connection to the type, with numerous options for configuration
     *
     * @see https://nexusjs.org/docs/plugins/connection
     */
    connectionField<FieldName extends string>(
      fieldName: FieldName,
      config: connectionPluginCore.ConnectionFieldConfig<TypeName, FieldName>
    ): void
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
  Enum_RoleName: "ADMIN" | "USER"
  EstadoReserva: "checkin" | "checkout" | "reservado"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Habitacion: { // root type
    libre?: boolean | null; // Boolean
    numero_habitacion?: number | null; // Int
  }
  Query: {};
  Reserva: { // root type
    estado?: NexusGenEnums['EstadoReserva'] | null; // EstadoReserva
    id?: string | null; // String
    numero_habitacion?: number | null; // Int
  }
  User: { // root type
    email?: string | null; // String
    id?: string | null; // String
    image?: string | null; // String
    name?: string | null; // String
    role?: NexusGenEnums['Enum_RoleName'] | null; // Enum_RoleName
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Habitacion: { // field return type
    libre: boolean | null; // Boolean
    numero_habitacion: number | null; // Int
    reservas: Array<NexusGenRootTypes['Reserva'] | null> | null; // [Reserva]
  }
  Query: { // field return type
    reserva: NexusGenRootTypes['Reserva'] | null; // Reserva
    reservas: Array<NexusGenRootTypes['Reserva'] | null> | null; // [Reserva]
    reservasPorEstado: Array<NexusGenRootTypes['Reserva'] | null> | null; // [Reserva]
    user: NexusGenRootTypes['User'] | null; // User
    users: Array<NexusGenRootTypes['User'] | null> | null; // [User]
  }
  Reserva: { // field return type
    estado: NexusGenEnums['EstadoReserva'] | null; // EstadoReserva
    habitacion: NexusGenRootTypes['Habitacion'] | null; // Habitacion
    id: string | null; // String
    numero_habitacion: number | null; // Int
    usuario: NexusGenRootTypes['User'] | null; // User
  }
  User: { // field return type
    email: string | null; // String
    id: string | null; // String
    image: string | null; // String
    name: string | null; // String
    reservas: Array<NexusGenRootTypes['Reserva'] | null> | null; // [Reserva]
    role: NexusGenEnums['Enum_RoleName'] | null; // Enum_RoleName
  }
}

export interface NexusGenFieldTypeNames {
  Habitacion: { // field return type name
    libre: 'Boolean'
    numero_habitacion: 'Int'
    reservas: 'Reserva'
  }
  Query: { // field return type name
    reserva: 'Reserva'
    reservas: 'Reserva'
    reservasPorEstado: 'Reserva'
    user: 'User'
    users: 'User'
  }
  Reserva: { // field return type name
    estado: 'EstadoReserva'
    habitacion: 'Habitacion'
    id: 'String'
    numero_habitacion: 'Int'
    usuario: 'User'
  }
  User: { // field return type name
    email: 'String'
    id: 'String'
    image: 'String'
    name: 'String'
    reservas: 'Reserva'
    role: 'Enum_RoleName'
  }
}

export interface NexusGenArgTypes {
  Query: {
    reserva: { // args
      reservaId: string; // String!
    }
    reservasPorEstado: { // args
      estado: NexusGenEnums['EstadoReserva']; // EstadoReserva!
    }
    user: { // args
      userId: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = keyof NexusGenEnums;

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