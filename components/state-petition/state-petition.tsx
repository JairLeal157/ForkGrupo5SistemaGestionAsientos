import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Callout, Spinner } from "@radix-ui/themes";

interface StatePetitionProps {
  statePetition: {
    status: "idle" | "success" | "error" | "loading";
    message: string;
  };
}

const StatePetition = ({ statePetition }: StatePetitionProps) => {
  return (
    <>
      {statePetition.status === "loading" && (
        <Callout.Root
          color="blue"
          role="alert"
          className="fixed z-[999] top-4 right-4 w-fit">
          <Callout.Icon>
            <Spinner size="2" />
          </Callout.Icon>
          <Callout.Text>{statePetition.message}</Callout.Text>
        </Callout.Root>
      )}
      {statePetition.status === "success" && (
        <Callout.Root
          color="green"
          role="alert"
          className="fixed z-[999] top-4 right-4 w-fit">
          <Callout.Icon>
            <ExclamationTriangleIcon />
          </Callout.Icon>
          <Callout.Text>{statePetition.message}</Callout.Text>
        </Callout.Root>
      )}
      {statePetition.status === "error" && (
        <Callout.Root
          color="red"
          role="alert"
          className="fixed z-[999] top-4 right-4 w-fit">
          <Callout.Icon>
            <ExclamationTriangleIcon />
          </Callout.Icon>
          <Callout.Text>{statePetition.message}</Callout.Text>
        </Callout.Root>
      )}
    </>
  );
};

export default StatePetition;
