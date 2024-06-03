import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  Account: crudResolvers.AccountCrudResolver,
  Session: crudResolvers.SessionCrudResolver,
  User: crudResolvers.UserCrudResolver,
  Habitacion: crudResolvers.HabitacionCrudResolver,
  Reserva: crudResolvers.ReservaCrudResolver,
  VerificationToken: crudResolvers.VerificationTokenCrudResolver
};
const actionResolversMap = {
  Account: {
    aggregateAccount: actionResolvers.AggregateAccountResolver,
    createManyAccount: actionResolvers.CreateManyAccountResolver,
    createOneAccount: actionResolvers.CreateOneAccountResolver,
    deleteManyAccount: actionResolvers.DeleteManyAccountResolver,
    deleteOneAccount: actionResolvers.DeleteOneAccountResolver,
    findFirstAccount: actionResolvers.FindFirstAccountResolver,
    findFirstAccountOrThrow: actionResolvers.FindFirstAccountOrThrowResolver,
    accounts: actionResolvers.FindManyAccountResolver,
    account: actionResolvers.FindUniqueAccountResolver,
    getAccount: actionResolvers.FindUniqueAccountOrThrowResolver,
    groupByAccount: actionResolvers.GroupByAccountResolver,
    updateManyAccount: actionResolvers.UpdateManyAccountResolver,
    updateOneAccount: actionResolvers.UpdateOneAccountResolver,
    upsertOneAccount: actionResolvers.UpsertOneAccountResolver
  },
  Session: {
    aggregateSession: actionResolvers.AggregateSessionResolver,
    createManySession: actionResolvers.CreateManySessionResolver,
    createOneSession: actionResolvers.CreateOneSessionResolver,
    deleteManySession: actionResolvers.DeleteManySessionResolver,
    deleteOneSession: actionResolvers.DeleteOneSessionResolver,
    findFirstSession: actionResolvers.FindFirstSessionResolver,
    findFirstSessionOrThrow: actionResolvers.FindFirstSessionOrThrowResolver,
    sessions: actionResolvers.FindManySessionResolver,
    session: actionResolvers.FindUniqueSessionResolver,
    getSession: actionResolvers.FindUniqueSessionOrThrowResolver,
    groupBySession: actionResolvers.GroupBySessionResolver,
    updateManySession: actionResolvers.UpdateManySessionResolver,
    updateOneSession: actionResolvers.UpdateOneSessionResolver,
    upsertOneSession: actionResolvers.UpsertOneSessionResolver
  },
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    getUser: actionResolvers.FindUniqueUserOrThrowResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  Habitacion: {
    aggregateHabitacion: actionResolvers.AggregateHabitacionResolver,
    createManyHabitacion: actionResolvers.CreateManyHabitacionResolver,
    createOneHabitacion: actionResolvers.CreateOneHabitacionResolver,
    deleteManyHabitacion: actionResolvers.DeleteManyHabitacionResolver,
    deleteOneHabitacion: actionResolvers.DeleteOneHabitacionResolver,
    findFirstHabitacion: actionResolvers.FindFirstHabitacionResolver,
    findFirstHabitacionOrThrow: actionResolvers.FindFirstHabitacionOrThrowResolver,
    habitacions: actionResolvers.FindManyHabitacionResolver,
    habitacion: actionResolvers.FindUniqueHabitacionResolver,
    getHabitacion: actionResolvers.FindUniqueHabitacionOrThrowResolver,
    groupByHabitacion: actionResolvers.GroupByHabitacionResolver,
    updateManyHabitacion: actionResolvers.UpdateManyHabitacionResolver,
    updateOneHabitacion: actionResolvers.UpdateOneHabitacionResolver,
    upsertOneHabitacion: actionResolvers.UpsertOneHabitacionResolver
  },
  Reserva: {
    aggregateReserva: actionResolvers.AggregateReservaResolver,
    createManyReserva: actionResolvers.CreateManyReservaResolver,
    createOneReserva: actionResolvers.CreateOneReservaResolver,
    deleteManyReserva: actionResolvers.DeleteManyReservaResolver,
    deleteOneReserva: actionResolvers.DeleteOneReservaResolver,
    findFirstReserva: actionResolvers.FindFirstReservaResolver,
    findFirstReservaOrThrow: actionResolvers.FindFirstReservaOrThrowResolver,
    reservas: actionResolvers.FindManyReservaResolver,
    reserva: actionResolvers.FindUniqueReservaResolver,
    getReserva: actionResolvers.FindUniqueReservaOrThrowResolver,
    groupByReserva: actionResolvers.GroupByReservaResolver,
    updateManyReserva: actionResolvers.UpdateManyReservaResolver,
    updateOneReserva: actionResolvers.UpdateOneReservaResolver,
    upsertOneReserva: actionResolvers.UpsertOneReservaResolver
  },
  VerificationToken: {
    aggregateVerificationToken: actionResolvers.AggregateVerificationTokenResolver,
    createManyVerificationToken: actionResolvers.CreateManyVerificationTokenResolver,
    createOneVerificationToken: actionResolvers.CreateOneVerificationTokenResolver,
    deleteManyVerificationToken: actionResolvers.DeleteManyVerificationTokenResolver,
    deleteOneVerificationToken: actionResolvers.DeleteOneVerificationTokenResolver,
    findFirstVerificationToken: actionResolvers.FindFirstVerificationTokenResolver,
    findFirstVerificationTokenOrThrow: actionResolvers.FindFirstVerificationTokenOrThrowResolver,
    verificationTokens: actionResolvers.FindManyVerificationTokenResolver,
    verificationToken: actionResolvers.FindUniqueVerificationTokenResolver,
    getVerificationToken: actionResolvers.FindUniqueVerificationTokenOrThrowResolver,
    groupByVerificationToken: actionResolvers.GroupByVerificationTokenResolver,
    updateManyVerificationToken: actionResolvers.UpdateManyVerificationTokenResolver,
    updateOneVerificationToken: actionResolvers.UpdateOneVerificationTokenResolver,
    upsertOneVerificationToken: actionResolvers.UpsertOneVerificationTokenResolver
  }
};
const crudResolversInfo = {
  Account: ["aggregateAccount", "createManyAccount", "createOneAccount", "deleteManyAccount", "deleteOneAccount", "findFirstAccount", "findFirstAccountOrThrow", "accounts", "account", "getAccount", "groupByAccount", "updateManyAccount", "updateOneAccount", "upsertOneAccount"],
  Session: ["aggregateSession", "createManySession", "createOneSession", "deleteManySession", "deleteOneSession", "findFirstSession", "findFirstSessionOrThrow", "sessions", "session", "getSession", "groupBySession", "updateManySession", "updateOneSession", "upsertOneSession"],
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  Habitacion: ["aggregateHabitacion", "createManyHabitacion", "createOneHabitacion", "deleteManyHabitacion", "deleteOneHabitacion", "findFirstHabitacion", "findFirstHabitacionOrThrow", "habitacions", "habitacion", "getHabitacion", "groupByHabitacion", "updateManyHabitacion", "updateOneHabitacion", "upsertOneHabitacion"],
  Reserva: ["aggregateReserva", "createManyReserva", "createOneReserva", "deleteManyReserva", "deleteOneReserva", "findFirstReserva", "findFirstReservaOrThrow", "reservas", "reserva", "getReserva", "groupByReserva", "updateManyReserva", "updateOneReserva", "upsertOneReserva"],
  VerificationToken: ["aggregateVerificationToken", "createManyVerificationToken", "createOneVerificationToken", "deleteManyVerificationToken", "deleteOneVerificationToken", "findFirstVerificationToken", "findFirstVerificationTokenOrThrow", "verificationTokens", "verificationToken", "getVerificationToken", "groupByVerificationToken", "updateManyVerificationToken", "updateOneVerificationToken", "upsertOneVerificationToken"]
};
const argsInfo = {
  AggregateAccountArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyAccountArgs: ["data", "skipDuplicates"],
  CreateOneAccountArgs: ["data"],
  DeleteManyAccountArgs: ["where"],
  DeleteOneAccountArgs: ["where"],
  FindFirstAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstAccountOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueAccountArgs: ["where"],
  FindUniqueAccountOrThrowArgs: ["where"],
  GroupByAccountArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyAccountArgs: ["data", "where"],
  UpdateOneAccountArgs: ["data", "where"],
  UpsertOneAccountArgs: ["where", "create", "update"],
  AggregateSessionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManySessionArgs: ["data", "skipDuplicates"],
  CreateOneSessionArgs: ["data"],
  DeleteManySessionArgs: ["where"],
  DeleteOneSessionArgs: ["where"],
  FindFirstSessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstSessionOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueSessionArgs: ["where"],
  FindUniqueSessionOrThrowArgs: ["where"],
  GroupBySessionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManySessionArgs: ["data", "where"],
  UpdateOneSessionArgs: ["data", "where"],
  UpsertOneSessionArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  FindUniqueUserOrThrowArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregateHabitacionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyHabitacionArgs: ["data", "skipDuplicates"],
  CreateOneHabitacionArgs: ["data"],
  DeleteManyHabitacionArgs: ["where"],
  DeleteOneHabitacionArgs: ["where"],
  FindFirstHabitacionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstHabitacionOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyHabitacionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueHabitacionArgs: ["where"],
  FindUniqueHabitacionOrThrowArgs: ["where"],
  GroupByHabitacionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyHabitacionArgs: ["data", "where"],
  UpdateOneHabitacionArgs: ["data", "where"],
  UpsertOneHabitacionArgs: ["where", "create", "update"],
  AggregateReservaArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyReservaArgs: ["data", "skipDuplicates"],
  CreateOneReservaArgs: ["data"],
  DeleteManyReservaArgs: ["where"],
  DeleteOneReservaArgs: ["where"],
  FindFirstReservaArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstReservaOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyReservaArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueReservaArgs: ["where"],
  FindUniqueReservaOrThrowArgs: ["where"],
  GroupByReservaArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyReservaArgs: ["data", "where"],
  UpdateOneReservaArgs: ["data", "where"],
  UpsertOneReservaArgs: ["where", "create", "update"],
  AggregateVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyVerificationTokenArgs: ["data", "skipDuplicates"],
  CreateOneVerificationTokenArgs: ["data"],
  DeleteManyVerificationTokenArgs: ["where"],
  DeleteOneVerificationTokenArgs: ["where"],
  FindFirstVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstVerificationTokenOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueVerificationTokenArgs: ["where"],
  FindUniqueVerificationTokenOrThrowArgs: ["where"],
  GroupByVerificationTokenArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyVerificationTokenArgs: ["data", "where"],
  UpdateOneVerificationTokenArgs: ["data", "where"],
  UpsertOneVerificationTokenArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & {
    _all?: MethodDecorator[];
    _query?: MethodDecorator[];
    _mutation?: MethodDecorator[];
  };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  const mutationOperationPrefixes = [
    "createOne", "createMany", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
  ];
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all;
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
      const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
      const mainDecorators = [
        ...allActionsDecorators ?? [],
        ...operationKindDecorators ?? [],
      ]
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(mainDecorators);
      } else {
        decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Account: relationResolvers.AccountRelationsResolver,
  Session: relationResolvers.SessionRelationsResolver,
  User: relationResolvers.UserRelationsResolver,
  Habitacion: relationResolvers.HabitacionRelationsResolver,
  Reserva: relationResolvers.ReservaRelationsResolver
};
const relationResolversInfo = {
  Account: ["user"],
  Session: ["user"],
  User: ["accounts", "sessions", "reservas"],
  Habitacion: ["reservas"],
  Reserva: ["habitacion", "usuario"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    const allActionsDecorators = relationResolverActionsConfig._all ?? [];
    const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
    for (const relationResolverActionName of relationResolverActionNames) {
      const maybeDecoratorsOrFn = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Account: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  Session: ["id", "sessionToken", "userId", "expires"],
  User: ["id", "name", "email", "emailVerified", "image", "role"],
  Habitacion: ["numero_habitacion", "costo_dia", "libre"],
  Reserva: ["id", "numero_habitacion", "usuarioId", "estado"],
  VerificationToken: ["identifier", "token", "expires"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateAccount: ["_count", "_avg", "_sum", "_min", "_max"],
  AccountGroupBy: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSession: ["_count", "_min", "_max"],
  SessionGroupBy: ["id", "sessionToken", "userId", "expires", "_count", "_min", "_max"],
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "name", "email", "emailVerified", "image", "role", "_count", "_min", "_max"],
  AggregateHabitacion: ["_count", "_avg", "_sum", "_min", "_max"],
  HabitacionGroupBy: ["numero_habitacion", "costo_dia", "libre", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateReserva: ["_count", "_avg", "_sum", "_min", "_max"],
  ReservaGroupBy: ["id", "numero_habitacion", "usuarioId", "estado", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateVerificationToken: ["_count", "_min", "_max"],
  VerificationTokenGroupBy: ["identifier", "token", "expires", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  AccountCountAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "_all"],
  AccountAvgAggregate: ["expires_at"],
  AccountSumAggregate: ["expires_at"],
  AccountMinAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  AccountMaxAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  SessionCountAggregate: ["id", "sessionToken", "userId", "expires", "_all"],
  SessionMinAggregate: ["id", "sessionToken", "userId", "expires"],
  SessionMaxAggregate: ["id", "sessionToken", "userId", "expires"],
  UserCount: ["accounts", "sessions", "reservas"],
  UserCountAggregate: ["id", "name", "email", "emailVerified", "image", "role", "_all"],
  UserMinAggregate: ["id", "name", "email", "emailVerified", "image", "role"],
  UserMaxAggregate: ["id", "name", "email", "emailVerified", "image", "role"],
  HabitacionCount: ["reservas"],
  HabitacionCountAggregate: ["numero_habitacion", "costo_dia", "libre", "_all"],
  HabitacionAvgAggregate: ["numero_habitacion", "costo_dia"],
  HabitacionSumAggregate: ["numero_habitacion", "costo_dia"],
  HabitacionMinAggregate: ["numero_habitacion", "costo_dia", "libre"],
  HabitacionMaxAggregate: ["numero_habitacion", "costo_dia", "libre"],
  ReservaCountAggregate: ["id", "numero_habitacion", "usuarioId", "estado", "_all"],
  ReservaAvgAggregate: ["numero_habitacion"],
  ReservaSumAggregate: ["numero_habitacion"],
  ReservaMinAggregate: ["id", "numero_habitacion", "usuarioId", "estado"],
  ReservaMaxAggregate: ["id", "numero_habitacion", "usuarioId", "estado"],
  VerificationTokenCountAggregate: ["identifier", "token", "expires", "_all"],
  VerificationTokenMinAggregate: ["identifier", "token", "expires"],
  VerificationTokenMaxAggregate: ["identifier", "token", "expires"],
  CreateManyAccountAndReturnOutputType: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
  CreateManySessionAndReturnOutputType: ["id", "sessionToken", "userId", "expires", "user"],
  CreateManyUserAndReturnOutputType: ["id", "name", "email", "emailVerified", "image", "role"],
  CreateManyHabitacionAndReturnOutputType: ["numero_habitacion", "costo_dia", "libre"],
  CreateManyReservaAndReturnOutputType: ["id", "numero_habitacion", "usuarioId", "estado", "habitacion", "usuario"],
  CreateManyVerificationTokenAndReturnOutputType: ["identifier", "token", "expires"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  AccountWhereInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
  AccountOrderByWithRelationInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
  AccountWhereUniqueInput: ["id", "provider_providerAccountId", "AND", "OR", "NOT", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
  AccountOrderByWithAggregationInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "_count", "_avg", "_max", "_min", "_sum"],
  AccountScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  SessionWhereInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires", "user"],
  SessionOrderByWithRelationInput: ["id", "sessionToken", "userId", "expires", "user"],
  SessionWhereUniqueInput: ["id", "sessionToken", "AND", "OR", "NOT", "userId", "expires", "user"],
  SessionOrderByWithAggregationInput: ["id", "sessionToken", "userId", "expires", "_count", "_max", "_min"],
  SessionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires"],
  UserWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "image", "role", "accounts", "sessions", "reservas"],
  UserOrderByWithRelationInput: ["id", "name", "email", "emailVerified", "image", "role", "accounts", "sessions", "reservas"],
  UserWhereUniqueInput: ["id", "email", "AND", "OR", "NOT", "name", "emailVerified", "image", "role", "accounts", "sessions", "reservas"],
  UserOrderByWithAggregationInput: ["id", "name", "email", "emailVerified", "image", "role", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "image", "role"],
  HabitacionWhereInput: ["AND", "OR", "NOT", "numero_habitacion", "costo_dia", "libre", "reservas"],
  HabitacionOrderByWithRelationInput: ["numero_habitacion", "costo_dia", "libre", "reservas"],
  HabitacionWhereUniqueInput: ["numero_habitacion", "AND", "OR", "NOT", "costo_dia", "libre", "reservas"],
  HabitacionOrderByWithAggregationInput: ["numero_habitacion", "costo_dia", "libre", "_count", "_avg", "_max", "_min", "_sum"],
  HabitacionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "numero_habitacion", "costo_dia", "libre"],
  ReservaWhereInput: ["AND", "OR", "NOT", "id", "numero_habitacion", "usuarioId", "estado", "habitacion", "usuario"],
  ReservaOrderByWithRelationInput: ["id", "numero_habitacion", "usuarioId", "estado", "habitacion", "usuario"],
  ReservaWhereUniqueInput: ["id", "AND", "OR", "NOT", "numero_habitacion", "usuarioId", "estado", "habitacion", "usuario"],
  ReservaOrderByWithAggregationInput: ["id", "numero_habitacion", "usuarioId", "estado", "_count", "_avg", "_max", "_min", "_sum"],
  ReservaScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "numero_habitacion", "usuarioId", "estado"],
  VerificationTokenWhereInput: ["AND", "OR", "NOT", "identifier", "token", "expires"],
  VerificationTokenOrderByWithRelationInput: ["identifier", "token", "expires"],
  VerificationTokenWhereUniqueInput: ["token", "identifier_token", "AND", "OR", "NOT", "identifier", "expires"],
  VerificationTokenOrderByWithAggregationInput: ["identifier", "token", "expires", "_count", "_max", "_min"],
  VerificationTokenScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "identifier", "token", "expires"],
  AccountCreateInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
  AccountUpdateInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
  AccountCreateManyInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  AccountUpdateManyMutationInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  SessionCreateInput: ["id", "sessionToken", "expires", "user"],
  SessionUpdateInput: ["id", "sessionToken", "expires", "user"],
  SessionCreateManyInput: ["id", "sessionToken", "userId", "expires"],
  SessionUpdateManyMutationInput: ["id", "sessionToken", "expires"],
  UserCreateInput: ["id", "name", "email", "emailVerified", "image", "role", "accounts", "sessions", "reservas"],
  UserUpdateInput: ["id", "name", "email", "emailVerified", "image", "role", "accounts", "sessions", "reservas"],
  UserCreateManyInput: ["id", "name", "email", "emailVerified", "image", "role"],
  UserUpdateManyMutationInput: ["id", "name", "email", "emailVerified", "image", "role"],
  HabitacionCreateInput: ["numero_habitacion", "costo_dia", "libre", "reservas"],
  HabitacionUpdateInput: ["numero_habitacion", "costo_dia", "libre", "reservas"],
  HabitacionCreateManyInput: ["numero_habitacion", "costo_dia", "libre"],
  HabitacionUpdateManyMutationInput: ["numero_habitacion", "costo_dia", "libre"],
  ReservaCreateInput: ["id", "estado", "habitacion", "usuario"],
  ReservaUpdateInput: ["id", "estado", "habitacion", "usuario"],
  ReservaCreateManyInput: ["id", "numero_habitacion", "usuarioId", "estado"],
  ReservaUpdateManyMutationInput: ["id", "estado"],
  VerificationTokenCreateInput: ["identifier", "token", "expires"],
  VerificationTokenUpdateInput: ["identifier", "token", "expires"],
  VerificationTokenCreateManyInput: ["identifier", "token", "expires"],
  VerificationTokenUpdateManyMutationInput: ["identifier", "token", "expires"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserRelationFilter: ["is", "isNot"],
  SortOrderInput: ["sort", "nulls"],
  AccountProviderProviderAccountIdCompoundUniqueInput: ["provider", "providerAccountId"],
  AccountCountOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  AccountAvgOrderByAggregateInput: ["expires_at"],
  AccountMaxOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  AccountMinOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  AccountSumOrderByAggregateInput: ["expires_at"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  SessionCountOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
  SessionMaxOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
  SessionMinOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  EnumEnum_RoleNameNullableFilter: ["equals", "in", "notIn", "not"],
  AccountListRelationFilter: ["every", "some", "none"],
  SessionListRelationFilter: ["every", "some", "none"],
  ReservaListRelationFilter: ["every", "some", "none"],
  AccountOrderByRelationAggregateInput: ["_count"],
  SessionOrderByRelationAggregateInput: ["_count"],
  ReservaOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image", "role"],
  UserMaxOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image", "role"],
  UserMinOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image", "role"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  EnumEnum_RoleNameNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DecimalFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  BoolFilter: ["equals", "not"],
  HabitacionCountOrderByAggregateInput: ["numero_habitacion", "costo_dia", "libre"],
  HabitacionAvgOrderByAggregateInput: ["numero_habitacion", "costo_dia"],
  HabitacionMaxOrderByAggregateInput: ["numero_habitacion", "costo_dia", "libre"],
  HabitacionMinOrderByAggregateInput: ["numero_habitacion", "costo_dia", "libre"],
  HabitacionSumOrderByAggregateInput: ["numero_habitacion", "costo_dia"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DecimalWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  EnumEstadoReservaFilter: ["equals", "in", "notIn", "not"],
  HabitacionRelationFilter: ["is", "isNot"],
  ReservaCountOrderByAggregateInput: ["id", "numero_habitacion", "usuarioId", "estado"],
  ReservaAvgOrderByAggregateInput: ["numero_habitacion"],
  ReservaMaxOrderByAggregateInput: ["id", "numero_habitacion", "usuarioId", "estado"],
  ReservaMinOrderByAggregateInput: ["id", "numero_habitacion", "usuarioId", "estado"],
  ReservaSumOrderByAggregateInput: ["numero_habitacion"],
  EnumEstadoReservaWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  VerificationTokenIdentifierTokenCompoundUniqueInput: ["identifier", "token"],
  VerificationTokenCountOrderByAggregateInput: ["identifier", "token", "expires"],
  VerificationTokenMaxOrderByAggregateInput: ["identifier", "token", "expires"],
  VerificationTokenMinOrderByAggregateInput: ["identifier", "token", "expires"],
  UserCreateNestedOneWithoutAccountsInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserUpdateOneRequiredWithoutAccountsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutSessionsInput: ["create", "connectOrCreate", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutSessionsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  AccountCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  SessionCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  ReservaCreateNestedManyWithoutUsuarioInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableDateTimeFieldUpdateOperationsInput: ["set"],
  NullableEnumEnum_RoleNameFieldUpdateOperationsInput: ["set"],
  AccountUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SessionUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ReservaUpdateManyWithoutUsuarioNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ReservaCreateNestedManyWithoutHabitacionInput: ["create", "connectOrCreate", "createMany", "connect"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  DecimalFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  BoolFieldUpdateOperationsInput: ["set"],
  ReservaUpdateManyWithoutHabitacionNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  HabitacionCreateNestedOneWithoutReservasInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutReservasInput: ["create", "connectOrCreate", "connect"],
  EnumEstadoReservaFieldUpdateOperationsInput: ["set"],
  HabitacionUpdateOneRequiredWithoutReservasNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserUpdateOneRequiredWithoutReservasNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumEnum_RoleNameNullableFilter: ["equals", "in", "notIn", "not"],
  NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedEnumEnum_RoleNameNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedDecimalFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDecimalWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedEnumEstadoReservaFilter: ["equals", "in", "notIn", "not"],
  NestedEnumEstadoReservaWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  UserCreateWithoutAccountsInput: ["id", "name", "email", "emailVerified", "image", "role", "sessions", "reservas"],
  UserCreateOrConnectWithoutAccountsInput: ["where", "create"],
  UserUpsertWithoutAccountsInput: ["update", "create", "where"],
  UserUpdateToOneWithWhereWithoutAccountsInput: ["where", "data"],
  UserUpdateWithoutAccountsInput: ["id", "name", "email", "emailVerified", "image", "role", "sessions", "reservas"],
  UserCreateWithoutSessionsInput: ["id", "name", "email", "emailVerified", "image", "role", "accounts", "reservas"],
  UserCreateOrConnectWithoutSessionsInput: ["where", "create"],
  UserUpsertWithoutSessionsInput: ["update", "create", "where"],
  UserUpdateToOneWithWhereWithoutSessionsInput: ["where", "data"],
  UserUpdateWithoutSessionsInput: ["id", "name", "email", "emailVerified", "image", "role", "accounts", "reservas"],
  AccountCreateWithoutUserInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  AccountCreateOrConnectWithoutUserInput: ["where", "create"],
  AccountCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  SessionCreateWithoutUserInput: ["id", "sessionToken", "expires"],
  SessionCreateOrConnectWithoutUserInput: ["where", "create"],
  SessionCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  ReservaCreateWithoutUsuarioInput: ["id", "estado", "habitacion"],
  ReservaCreateOrConnectWithoutUsuarioInput: ["where", "create"],
  ReservaCreateManyUsuarioInputEnvelope: ["data", "skipDuplicates"],
  AccountUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  AccountUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  AccountUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  AccountScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  SessionUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  SessionUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  SessionUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  SessionScalarWhereInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires"],
  ReservaUpsertWithWhereUniqueWithoutUsuarioInput: ["where", "update", "create"],
  ReservaUpdateWithWhereUniqueWithoutUsuarioInput: ["where", "data"],
  ReservaUpdateManyWithWhereWithoutUsuarioInput: ["where", "data"],
  ReservaScalarWhereInput: ["AND", "OR", "NOT", "id", "numero_habitacion", "usuarioId", "estado"],
  ReservaCreateWithoutHabitacionInput: ["id", "estado", "usuario"],
  ReservaCreateOrConnectWithoutHabitacionInput: ["where", "create"],
  ReservaCreateManyHabitacionInputEnvelope: ["data", "skipDuplicates"],
  ReservaUpsertWithWhereUniqueWithoutHabitacionInput: ["where", "update", "create"],
  ReservaUpdateWithWhereUniqueWithoutHabitacionInput: ["where", "data"],
  ReservaUpdateManyWithWhereWithoutHabitacionInput: ["where", "data"],
  HabitacionCreateWithoutReservasInput: ["numero_habitacion", "costo_dia", "libre"],
  HabitacionCreateOrConnectWithoutReservasInput: ["where", "create"],
  UserCreateWithoutReservasInput: ["id", "name", "email", "emailVerified", "image", "role", "accounts", "sessions"],
  UserCreateOrConnectWithoutReservasInput: ["where", "create"],
  HabitacionUpsertWithoutReservasInput: ["update", "create", "where"],
  HabitacionUpdateToOneWithWhereWithoutReservasInput: ["where", "data"],
  HabitacionUpdateWithoutReservasInput: ["numero_habitacion", "costo_dia", "libre"],
  UserUpsertWithoutReservasInput: ["update", "create", "where"],
  UserUpdateToOneWithWhereWithoutReservasInput: ["where", "data"],
  UserUpdateWithoutReservasInput: ["id", "name", "email", "emailVerified", "image", "role", "accounts", "sessions"],
  AccountCreateManyUserInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  SessionCreateManyUserInput: ["id", "sessionToken", "expires"],
  ReservaCreateManyUsuarioInput: ["id", "numero_habitacion", "estado"],
  AccountUpdateWithoutUserInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  SessionUpdateWithoutUserInput: ["id", "sessionToken", "expires"],
  ReservaUpdateWithoutUsuarioInput: ["id", "estado", "habitacion"],
  ReservaCreateManyHabitacionInput: ["id", "usuarioId", "estado"],
  ReservaUpdateWithoutHabitacionInput: ["id", "estado", "usuario"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

