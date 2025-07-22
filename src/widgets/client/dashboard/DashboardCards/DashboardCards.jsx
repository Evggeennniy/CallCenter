import { Box } from "@mui/material";
import StatCard from "../../../../shared/StatCard/StatCard";
import {
  AttachMoney,
  Percent,
  ReceiptLong,
  CreditCard,
} from "@mui/icons-material";
export default function DashboardCards() {
  return (
    <Box display="flex" gap={2}>
      <Box flex={1}>
        <StatCard
          title="Ваш баланс"
          value="-670₴"
          icon={<ReceiptLong />}
          light={true}
        />
      </Box>
      <Box flex={1}>
        <StatCard
          title="Сьогодні списано"
          value="100₴"
          icon={<CreditCard />}
          light={true}
        />
      </Box>
      <Box flex={1}>
        <StatCard title="Грн за замов." value="18" icon={<AttachMoney />} />
      </Box>
      <Box flex={1}>
        <StatCard title="% долу" value="20" icon={<Percent />} />
      </Box>
    </Box>
  );
}
