import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReservaWhereInput } from "../../../inputs/ReservaWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyReservaArgs {
  @TypeGraphQL.Field(_type => ReservaWhereInput, {
    nullable: true
  })
  where?: ReservaWhereInput | undefined;
}