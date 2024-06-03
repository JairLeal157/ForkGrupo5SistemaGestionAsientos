import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { VerificationTokenIdentifierTokenCompoundUniqueInput } from "../inputs/VerificationTokenIdentifierTokenCompoundUniqueInput";
import { VerificationTokenWhereInput } from "../inputs/VerificationTokenWhereInput";

@TypeGraphQL.InputType("VerificationTokenWhereUniqueInput", {})
export class VerificationTokenWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  token?: string | undefined;

  @TypeGraphQL.Field(_type => VerificationTokenIdentifierTokenCompoundUniqueInput, {
    nullable: true
  })
  identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [VerificationTokenWhereInput], {
    nullable: true
  })
  AND?: VerificationTokenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationTokenWhereInput], {
    nullable: true
  })
  OR?: VerificationTokenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationTokenWhereInput], {
    nullable: true
  })
  NOT?: VerificationTokenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  expires?: DateTimeFilter | undefined;
}
