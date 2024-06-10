import { UserRole, UserRoleConfig } from "@/types/types";
import { Badge, Heading } from "@radix-ui/themes";
import { Text } from "@radix-ui/themes/dist/esm/components/callout.js";
import { useSession } from "next-auth/react";

const UserBasicInfo = () => {
  const { data } = useSession();

  if (!data) return null;

  return (
    <article>
      <article className="flex flex-col gap-2 items-center">
        <div className="bg-purple-500 w-20 h-20 rounded-full grid place-items-center text-2xl font-bold">
          JW
        </div>
        <Heading as="h3" size="3">
          {data.user.name || "Nombre de usuario"}
        </Heading>
        <Text>{data.user.email || "email@example.com"}</Text>
        <Badge color={UserRoleConfig[data.user.role].color}>
          {UserRoleConfig[data.user.role].label ||
            UserRoleConfig[UserRole.USER].label}
        </Badge>
      </article>
    </article>
  );
};

export default UserBasicInfo;
