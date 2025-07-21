import React, { useState } from "react";
import { Card, Box, Typography, } from "@mui/material";
import EarningsModal from '../../../../shared/Layout/EarningsModal';

const paymentsData = [
  { date: "01.07.2025", hours: 45, debt: "730₴", percent: 5, salary: "18 030₴", rating: 96 },
  { date: "11.07.2025", hours: 45, debt: "730₴", percent: 5, salary: "18 030₴", rating: 96 },
  { date: "21.07.2025", hours: 45, debt: "730₴", percent: 5, salary: "18 030₴", rating: 96 },
];

const Earnings = () => {
  const [showBlocks, setShowBlocks] = useState(false);

  return (
    <>
      <Card
        sx={{
          background: 'var(--whiteColor)',
          color: 'var(--whiteColor)',
          borderRadius: 3,
          p: 3,
          minHeight: 80,
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer'
        }}
        onClick={() => setShowBlocks(true)}
      >
        <Box sx={{ mr: 2 }}>
          <span role="img" aria-label="money" style={{ fontSize: 32 }}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M31.6673 18.5699C31.1141 18.4905 30.5582 18.431 30.0007 18.3916M10.0007 21.6083C9.43176 21.5683 8.87621 21.5088 8.33398 21.4299M24.1673 19.9999C24.1673 21.105 23.7283 22.1648 22.9469 22.9462C22.1655 23.7276 21.1057 24.1666 20.0007 24.1666C18.8956 24.1666 17.8358 23.7276 17.0544 22.9462C16.273 22.1648 15.834 21.105 15.834 19.9999C15.834 18.8948 16.273 17.835 17.0544 17.0536C17.8358 16.2722 18.8956 15.8333 20.0007 15.8333C21.1057 15.8333 22.1655 16.2722 22.9469 17.0536C23.7283 17.835 24.1673 18.8948 24.1673 19.9999Z" stroke="var(--primaryColor)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20.0007 32.4999C17.7807 33.5366 14.8623 34.1666 11.6673 34.1666C9.89065 34.1666 8.20065 33.9716 6.66732 33.6216C4.16732 33.0483 3.33398 31.5433 3.33398 28.9766V11.0233C3.33398 9.38158 5.06732 8.25492 6.66732 8.62158C8.20065 8.97158 9.89065 9.16659 11.6673 9.16659C14.8623 9.16659 17.7807 8.53659 20.0007 7.49992C22.2207 6.46325 25.139 5.83325 28.334 5.83325C30.1107 5.83325 31.8007 6.02825 33.334 6.37825C35.9707 6.98325 36.6673 8.53325 36.6673 11.0233V28.9766C36.6673 30.6183 34.934 31.7449 33.334 31.3783C31.8007 31.0283 30.1107 30.8333 28.334 30.8333C25.139 30.8333 22.2207 31.4633 20.0007 32.4999Z" stroke="var(--primaryColor)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </Box>
        <Box>
          <Typography style={{ color: 'var(--bodyColor)', fontWeight: 400, fontSize:'14px', lineHeight:'21px', letterSpacing:0 }}>
            Заробіток за вчора
          </Typography>
          <Typography sx={{ color: 'var(--blackColor)', '.dark-theme &': { color: 'var(--whiteColor)' } }} style={{fontWeight: 700, fontSize:'20px',}}>
            670₴  <span style={{ color: 'var(--successColor)', fontSize: '13px', fontWeight:400, lineHeight:'19.5px', paddingLeft:'5px' }}>невиплачено</span>
          </Typography>
        </Box>
      </Card>
      <EarningsModal
        open={showBlocks}
        onClose={() => setShowBlocks(false)}
        paymentsData={paymentsData}
      />
    </>
  );
};

export default Earnings;