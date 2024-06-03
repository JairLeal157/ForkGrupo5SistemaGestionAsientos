import * as TypeGraphQL from "type-graphql";

export enum EstadoReserva {
  reservado = "reservado",
  checkin = "checkin",
  checkout = "checkout"
}
TypeGraphQL.registerEnumType(EstadoReserva, {
  name: "EstadoReserva",
  description: undefined,
});
