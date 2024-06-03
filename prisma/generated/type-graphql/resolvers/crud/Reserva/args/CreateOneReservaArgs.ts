import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReservaCreateInput } from "../../../inputs/ReservaCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneReservaArgs {
  @TypeGraphQL.Field(_type => ReservaCreateInput, {
    nullable: false
  })
  data!: ReservaCreateInput;
}
