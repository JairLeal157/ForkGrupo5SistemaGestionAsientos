import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReservaOrderByWithRelationInput } from "../../../inputs/ReservaOrderByWithRelationInput";
import { ReservaWhereInput } from "../../../inputs/ReservaWhereInput";
import { ReservaWhereUniqueInput } from "../../../inputs/ReservaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateReservaArgs {
  @TypeGraphQL.Field(_type => ReservaWhereInput, {
    nullable: true
  })
  where?: ReservaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReservaOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ReservaOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ReservaWhereUniqueInput, {
    nullable: true
  })
  cursor?: ReservaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
