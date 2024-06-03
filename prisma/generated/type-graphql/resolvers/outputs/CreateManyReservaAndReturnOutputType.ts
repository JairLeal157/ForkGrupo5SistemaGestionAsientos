import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Habitacion } from "../outputs/Habitacion";
import { User } from "../outputs/User";
import { EstadoReserva } from "../../enums/EstadoReserva";

@TypeGraphQL.ObjectType("CreateManyReservaAndReturnOutputType", {})
export class CreateManyReservaAndReturnOutputType {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  numero_habitacion!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  usuarioId!: string;

  @TypeGraphQL.Field(_type => EstadoReserva, {
    nullable: false
  })
  estado!: "reservado" | "checkin" | "checkout";

  @TypeGraphQL.Field(_type => Habitacion, {
    nullable: false
  })
  habitacion!: Habitacion;

  @TypeGraphQL.Field(_type => User, {
    nullable: false
  })
  usuario!: User;
}
