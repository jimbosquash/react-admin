import { Box } from "@mui/system";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      ></Box>
      <Header title="DASHBOARD" subtitle="welcome to dashboard" />
    </Box>
  );
};

export default Dashboard;
