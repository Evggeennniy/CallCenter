import React from "react";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const PaymentsModal = ({ open, onClose, date, setDate }) => (
  <Modal open={open} onClose={onClose} sx={{ zIndex: 2000 }}>
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        minWidth: '100vw',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0,0,0,0.4)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 2,
          width: 1920,
          height: 700,
          maxWidth: '95vw',
          maxHeight: '95vh',
          justifyContent: 'center',
          position: 'relative',
          background: 'transparent',
        }}
      >
        <Box sx={{ background: '#fff', minWidth: 540, maxWidth: 540, width: 540, minHeight: 590, height: 590, p: 4, display: 'flex', flexDirection: 'column', borderRadius: '10px', '.dark-theme &': { background: '#101522' } }}>
          <Typography sx={{ color: '#232B3E', fontWeight: 700, fontSize: 22, mb: 2, '.dark-theme &': { color: '#fff' } }}>
            Виберіть день
          </Typography>
          <Calendar
            value={date}
            onChange={setDate}
            locale="uk-UA"
          />
          <style>{`
            .react-calendar {
              background: #fff;
              border-radius: 16px;
              border: none;
              color: #232B3E;
              width: 100%;
              font-family: inherit;
            }
            .dark-theme .react-calendar {
              background: #101522;
              color: #fff;
            }
            .react-calendar__navigation {
              display: flex;
              justify-content: center;
              align-items: center;
              margin-bottom: 16px;
              background: none;
            }
            .react-calendar__navigation button {
              background: #ECEEF2;
              color: #232B3E;
              border: none;
              border-radius: 50%;
              width: 40px;
              height: 40px;
              font-size: 24px;
              margin: 0 8px;
              cursor: pointer;
              transition: background 0.2s;
            }
            .dark-theme .react-calendar__navigation button {
              background: #232B3E;
              color: #fff;
            }
            .react-calendar__navigation__label {
              font-size: 20px;
              font-weight: 500;
              color: #232B3E;
            }
            .dark-theme .react-calendar__navigation__label {
              color: #fff;
            }
            .react-calendar__month-view__weekdays {
              text-align: center;
              color:rgb(255, 255, 255);
              font-weight: 500;
              font-size: 16px;
            }
            .dark-theme .react-calendar__month-view__weekdays {
              color:rgb(255, 255, 255);
            }
            .react-calendar__month-view__weekdays__weekday {
              padding: 8px 0;
            }
            .react-calendar__tile {
              background: none;
              color: #232B3E;
              font-size: 18px;
              border-radius: 50%;
              height: 40px;
              width: 40px;
              margin: 2px auto;
              transition: background 0.2s;
            }
            .dark-theme .react-calendar__tile {
              color: #fff;
            }
            .react-calendar__tile--active, .custom-selected {
              background: #605DFF !important;
              color: #fff !important;
            }
            .react-calendar__tile:enabled:hover {
              background:rgb(255, 255, 255);
              color: #232B3E;
            }
            .dark-theme .react-calendar__tile:enabled:hover {
              background: #232B3E;
              color: #fff;
            }
            .react-calendar__tile--now {
              background: none;
              color: #232B3E;
              border: 1px solid #605DFF;
            }
            .dark-theme .react-calendar__tile--now {
              color: #fff;
            }
          `}</style>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, flex: 1, minWidth: 800, height: '100%' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
            <Box sx={{ background: '#fff', borderRadius: '16px', flex: 1, minHeight: 214, height: 214, p: 3, display: 'flex', flexDirection: 'column', boxShadow: '0 2px 8px rgba(0,0,0,0.01)', '.dark-theme &': { background: '#101522' } }}>
              <Typography sx={{ color: '#232B3E', fontWeight: 700, fontSize: 20, mb: 3, '.dark-theme &': { color: '#fff' } }}>
                Ваші показники
              </Typography>
              <Box sx={{ borderTop: '1px solid #ECEEF2', mt: 1, '.dark-theme &': { borderTop: '1px solid #232B3E' } }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1, borderBottom: '1px solid #ECEEF2', '.dark-theme &': { borderBottom: '1px solid #232B3E' } }}>
                <Typography sx={{ color: '#232B3E', fontWeight: 400, fontSize: 17, '.dark-theme &': { color: '#fff' } }}>% допродажу</Typography>
                <Typography style={{ color: '#22C55E', fontWeight: 600, fontSize: 17 }}>72%</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1, borderBottom: '1px solid #ECEEF2', '.dark-theme &': { borderBottom: '1px solid #232B3E' } }}>
                <Typography sx={{ color: '#232B3E', fontWeight: 400, fontSize: 17, '.dark-theme &': { color: '#fff' } }}>Середній чек</Typography>
                <Typography style={{ color: '#F87171', fontWeight: 600, fontSize: 17 }}>140₴</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1 }}>
                <Typography sx={{ color: '#232B3E', fontWeight: 400, fontSize: 17, '.dark-theme &': { color: '#fff' } }}>Замов/год</Typography>
                <Typography style={{ color: '#FACC15', fontWeight: 600, fontSize: 17 }}>4-5</Typography>
              </Box>
            </Box>
            <Box sx={{ background: '#fff', borderRadius: '16px', flex: 1, minHeight: 214, height: 214, p: 3, display: 'flex', flexDirection: 'column', boxShadow: '0 2px 8px rgba(0,0,0,0.01)', '.dark-theme &': { background: '#101522' } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Typography sx={{ color: '#232B3E', fontWeight: 700, fontSize: 26, '.dark-theme &': { color: '#fff' } }}>
                  Показники відпрацьованого
                </Typography>
                <IconButton onClick={onClose} sx={{ color: '#232B3E', fontSize: 36, p: 0, ml: 2, '&:hover': { color: '#232B3E' }, '.dark-theme &': { color: '#fff', '&:hover': { color: '#fff' } } }}>
                  &times;
                </IconButton>
              </Box>
              <Box sx={{ borderTop: '1px solid #ECEEF2', mt: 1, '.dark-theme &': { borderTop: '1px solid #232B3E' } }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1, borderBottom: '1px solid #ECEEF2', '.dark-theme &': { borderBottom: '1px solid #232B3E' } }}>
                <Typography sx={{ color: '#232B3E', fontWeight: 400, fontSize: 17, '.dark-theme &': { color: '#fff' } }}>Години</Typography>
                <Typography sx={{ color: '#232B3E', fontWeight: 600, fontSize: 17, '.dark-theme &': { color: '#fff' } }}>6:06</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1, borderBottom: '1px solid #ECEEF2', '.dark-theme &': { borderBottom: '1px solid #232B3E' } }}>
                <Typography sx={{ color: '#232B3E', fontWeight: 400, fontSize: 17, '.dark-theme &': { color: '#fff' } }}>Графік</Typography>
                <Typography sx={{ color: '#232B3E', fontWeight: 600, fontSize: 17, '.dark-theme &': { color: '#fff' } }}>8-12</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1 }}>
                <Typography sx={{ color: '#232B3E', fontWeight: 400, fontSize: 17, '.dark-theme &': { color: '#fff' } }}>Факти</Typography>
                <Typography sx={{ color: '#232B3E', fontWeight: 600, fontSize: 17, '.dark-theme &': { color: '#fff' } }}>6</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ background: '#fff', borderRadius: '16px', minHeight: 175, height: 350, width: '100%', p: 3, display: 'flex', flexDirection: 'column', boxShadow: '0 2px 8px rgba(0,0,0,0.01)', '.dark-theme &': { background: '#101522' } }}>
            <Typography sx={{ color: '#232B3E', fontWeight: 700, fontSize: 20, mb: 5, '.dark-theme &': { color: '#fff' } }}>
              Штрафи та бонуси
            </Typography>
            <Box sx={{ borderTop: '1px solid #ECEEF2', mt: 1, '.dark-theme &': { borderTop: '1px solid #232B3E' } }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1, borderBottom: '1px solid #ECEEF2', '.dark-theme &': { borderBottom: '1px solid #232B3E' } }}>
              <Typography sx={{ color: '#232B3E', fontWeight: 400, fontSize: 17, '.dark-theme &': { color: '#fff' } }}>Штраф</Typography>
              <Typography sx={{ color: '#232B3E', fontWeight: 600, fontSize: 17, '.dark-theme &': { color: '#fff' } }}>0₴</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1, borderBottom: '1px solid #ECEEF2', '.dark-theme &': { borderBottom: '1px solid #232B3E' } }}>
              <Typography sx={{ color: '#232B3E', fontWeight: 400, fontSize: 17, '.dark-theme &': { color: '#fff' } }}>Зароблено</Typography>
              <Typography sx={{ color: '#232B3E', fontWeight: 600, fontSize: 17, '.dark-theme &': { color: '#fff' } }}>1150₴</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1 }}>
              <Typography sx={{ color: '#232B3E', fontWeight: 400, fontSize: 17, '.dark-theme &': { color: '#fff' } }}>Бонус</Typography>
              <Typography sx={{ color: '#232B3E', fontWeight: 600, fontSize: 17, '.dark-theme &': { color: '#fff' } }}>100₴</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  </Modal>
);

export default PaymentsModal; 