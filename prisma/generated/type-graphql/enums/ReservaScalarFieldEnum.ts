import * as TypeGraphQL from "type-graphql";

export enum ReservaScalarFieldEnum {
  id = "id",
  numero_habitacion = "numero_habitacion",
  usuarioId = "usuarioId",
  estado = "estado"
}
TypeGraphQL.registerEnumType(ReservaScalarFieldEnum, {
  name: "ReservaScalarFieldEnum",
  description: undefined,
});
