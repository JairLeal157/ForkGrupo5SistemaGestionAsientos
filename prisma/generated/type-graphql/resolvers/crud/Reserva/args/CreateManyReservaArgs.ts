import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReservaCreateManyInput } from "../../../inputs/ReservaCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyReservaArgs {
  @TypeGraphQL.Field(_type => [ReservaCreateManyInput], {
    nullable: false
  })
  data!: ReservaCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
