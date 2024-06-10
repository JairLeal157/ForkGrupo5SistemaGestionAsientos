import { Box, Tabs, Text } from "@radix-ui/themes";
import TabListUserBookings from "./list/tab-list-user-booking";
import TabHistoryUserBooking from "./history/tab-history-user";

const BookingModule = () => {
  return (
    <Tabs.Root defaultValue="userBookings">
      <Tabs.List>
        <Tabs.Trigger value="userBookings">Mis reservas</Tabs.Trigger>
        <Tabs.Trigger value="historialUserBookings">Historial</Tabs.Trigger>
      </Tabs.List>

      <Box pt="3">
        <Tabs.Content value="userBookings">
          <TabListUserBookings />
        </Tabs.Content>

        <Tabs.Content value="historialUserBookings">
          <TabHistoryUserBooking />
        </Tabs.Content>
      </Box>
    </Tabs.Root>
  );
};

export default BookingModule;
