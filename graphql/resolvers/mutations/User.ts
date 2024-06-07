import { arg, extendType, nonNull, stringArg } from 'nexus';
import { EnumRoleName } from "../../types/EnumRoleName";

export const MutationUser = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('updateUser', {
      type: 'User',
      args: {
        userId: nonNull(stringArg()),
        name: stringArg(),
        role: arg({ type: EnumRoleName })
      },
      async resolve(_parent, args, ctx) {
        const updatedUser = await ctx.prisma.user.update({
          where: { id: args.userId },
          data: {
            name: args.name ?? undefined,
            role: args.role ?? undefined,
          }
        });
        return updatedUser;
      }
    });
  }
});
