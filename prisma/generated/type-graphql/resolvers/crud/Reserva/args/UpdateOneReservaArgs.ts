import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReservaUpdateInput } from "../../../inputs/ReservaUpdateInput";
import { ReservaWhereUniqueInput } from "../../../inputs/ReservaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneReservaArgs {
  @TypeGraphQL.Field(_type => ReservaUpdateInput, {
    nullable: false
  })
  data!: ReservaUpdateInput;

  @TypeGraphQL.Field(_type => ReservaWhereUniqueInput, {
    nullable: false
  })
  where!: ReservaWhereUniqueInput;
}
