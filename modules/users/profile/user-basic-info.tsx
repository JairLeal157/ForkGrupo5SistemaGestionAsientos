import { Badge, Heading } from "@radix-ui/themes";
import { Text } from "@radix-ui/themes/dist/esm/components/callout.js";

const UserBasicInfo = () => {
  return (
    <article>
      <article className="flex flex-col gap-2 items-center">
        <div className="bg-purple-500 w-20 h-20 rounded-full grid place-items-center text-2xl font-bold">
          JW
        </div>
        <Heading as="h3" size="3">
          Jose Waldo
        </Heading>
        <Text>josferw@gmail.com</Text>
        <Badge color="bronze">Administrador</Badge>
      </article>
    </article>
  );
};

export default UserBasicInfo;
