import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HabitacionOrderByWithRelationInput } from "../../../inputs/HabitacionOrderByWithRelationInput";
import { HabitacionWhereInput } from "../../../inputs/HabitacionWhereInput";
import { HabitacionWhereUniqueInput } from "../../../inputs/HabitacionWhereUniqueInput";
import { HabitacionScalarFieldEnum } from "../../../../enums/HabitacionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstHabitacionOrThrowArgs {
  @TypeGraphQL.Field(_type => HabitacionWhereInput, {
    nullable: true
  })
  where?: HabitacionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [HabitacionOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: HabitacionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => HabitacionWhereUniqueInput, {
    nullable: true
  })
  cursor?: HabitacionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [HabitacionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"numero_habitacion" | "costo_dia" | "libre"> | undefined;
}
