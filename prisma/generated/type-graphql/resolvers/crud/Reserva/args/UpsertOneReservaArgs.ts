import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReservaCreateInput } from "../../../inputs/ReservaCreateInput";
import { ReservaUpdateInput } from "../../../inputs/ReservaUpdateInput";
import { ReservaWhereUniqueInput } from "../../../inputs/ReservaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneReservaArgs {
  @TypeGraphQL.Field(_type => ReservaWhereUniqueInput, {
    nullable: false
  })
  where!: ReservaWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReservaCreateInput, {
    nullable: false
  })
  create!: ReservaCreateInput;

  @TypeGraphQL.Field(_type => ReservaUpdateInput, {
    nullable: false
  })
  update!: ReservaUpdateInput;
}
