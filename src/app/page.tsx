'use client';
import { Box } from "@mui/material";
import MyPortfolio from "./MyPortfolio";

export default function Page() {
  return (
    <Box sx={{ backgroundColor: '#000000', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
      <MyPortfolio />
    </Box>
  );
}
