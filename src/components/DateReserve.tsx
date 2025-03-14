'use client'

import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem } from '@mui/material'

export default function LocationDateReserve () {
  return (
    <div className="bg-white rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center shadow-md">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker className="bg-white text-black"/>
      </LocalizationProvider>
      <Select variant="standard" name="location" id="location" className="h-[2em] w-[200px] text-black">
        <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
        <MenuItem value="Spark">Spark Space</MenuItem>
        <MenuItem value="GrandTable">The Grand Table</MenuItem>
      </Select>
    </div>
  )
}