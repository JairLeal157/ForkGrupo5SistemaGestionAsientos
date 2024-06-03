import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReservaCreateManyUsuarioInput } from "../inputs/ReservaCreateManyUsuarioInput";

@TypeGraphQL.InputType("ReservaCreateManyUsuarioInputEnvelope", {})
export class ReservaCreateManyUsuarioInputEnvelope {
  @TypeGraphQL.Field(_type => [ReservaCreateManyUsuarioInput], {
    nullable: false
  })
  data!: ReservaCreateManyUsuarioInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
