import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReservaWhereUniqueInput } from "../../../inputs/ReservaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueReservaOrThrowArgs {
  @TypeGraphQL.Field(_type => ReservaWhereUniqueInput, {
    nullable: false
  })
  where!: ReservaWhereUniqueInput;
}
