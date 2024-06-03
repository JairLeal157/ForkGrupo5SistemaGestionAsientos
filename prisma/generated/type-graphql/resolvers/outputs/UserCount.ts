import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCountAccountsArgs } from "./args/UserCountAccountsArgs";
import { UserCountReservasArgs } from "./args/UserCountReservasArgs";
import { UserCountSessionsArgs } from "./args/UserCountSessionsArgs";

@TypeGraphQL.ObjectType("UserCount", {})
export class UserCount {
  accounts!: number;
  sessions!: number;
  reservas!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "accounts",
    nullable: false
  })
  getAccounts(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountAccountsArgs): number {
    return root.accounts;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "sessions",
    nullable: false
  })
  getSessions(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountSessionsArgs): number {
    return root.sessions;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "reservas",
    nullable: false
  })
  getReservas(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountReservasArgs): number {
    return root.reservas;
  }
}
