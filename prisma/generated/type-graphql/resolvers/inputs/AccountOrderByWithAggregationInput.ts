import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountAvgOrderByAggregateInput } from "../inputs/AccountAvgOrderByAggregateInput";
import { AccountCountOrderByAggregateInput } from "../inputs/AccountCountOrderByAggregateInput";
import { AccountMaxOrderByAggregateInput } from "../inputs/AccountMaxOrderByAggregateInput";
import { AccountMinOrderByAggregateInput } from "../inputs/AccountMinOrderByAggregateInput";
import { AccountSumOrderByAggregateInput } from "../inputs/AccountSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AccountOrderByWithAggregationInput", {})
export class AccountOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  provider?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  providerAccountId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  refresh_token?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  access_token?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  expires_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  token_type?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  scope?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  id_token?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  session_state?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => AccountCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: AccountCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AccountAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: AccountAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AccountMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: AccountMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AccountMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: AccountMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AccountSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: AccountSumOrderByAggregateInput | undefined;
}
