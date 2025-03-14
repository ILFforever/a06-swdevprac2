'use client'

import LocationDateReserve from "@/components/DateReserve";
import { TextField, ThemeProvider, createTheme } from "@mui/material";

// Create a custom MUI theme with black text
const theme = createTheme({
  palette: {
    text: {
      primary: '#000000',
    },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'black',
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          color: 'black',
        },
      },
    },
  },
});

export default function Bookings() {
  return (
    <ThemeProvider theme={theme}>
      <main className="w-[100%] flex flex-col items-center space-y-4 text-black">
        <div className="text-xl font-medium text-black bg-white px-6 py-3 rounded-lg shadow-md">New Booking</div>
        
        <div className="w-fit space-y-2">
          <div className="text-md text-left text-black font-semibold bg-white px-4 py-2 rounded-lg shadow-sm">
            Event Date and Venue
          </div>
          <LocationDateReserve/>
          
          <div className="mt-6 space-y-4 bg-white p-6 rounded-lg shadow-md">
            <TextField
              fullWidth
              variant="standard"
              label="Name-Lastname"
              name="Name-Lastname"
              required
            />
            
            <TextField
              fullWidth
              variant="standard"
              label="Contact-Number"
              name="Contact-Number"
              required
            />
          </div>
        </div>
        
        <button className="block rounded-md bg-blue-600 hover:bg-blue-700 px-4 py-2 shadow-sm text-white font-medium">
          Book Venue
        </button>
      </main>
    </ThemeProvider>
  );
}