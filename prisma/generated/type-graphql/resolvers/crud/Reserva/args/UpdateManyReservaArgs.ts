import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReservaUpdateManyMutationInput } from "../../../inputs/ReservaUpdateManyMutationInput";
import { ReservaWhereInput } from "../../../inputs/ReservaWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyReservaArgs {
  @TypeGraphQL.Field(_type => ReservaUpdateManyMutationInput, {
    nullable: false
  })
  data!: ReservaUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ReservaWhereInput, {
    nullable: true
  })
  where?: ReservaWhereInput | undefined;
}
