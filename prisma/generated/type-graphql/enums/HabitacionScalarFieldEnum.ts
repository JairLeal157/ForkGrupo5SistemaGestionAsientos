import * as TypeGraphQL from "type-graphql";

export enum HabitacionScalarFieldEnum {
  numero_habitacion = "numero_habitacion",
  costo_dia = "costo_dia",
  libre = "libre"
}
TypeGraphQL.registerEnumType(HabitacionScalarFieldEnum, {
  name: "HabitacionScalarFieldEnum",
  description: undefined,
});
