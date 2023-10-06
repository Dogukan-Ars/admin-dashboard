import { useState } from "react"
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar"
import 'react-pro-sidebar/dist/css/styles.css'
import { Box, IconButton, Typography, useTheme } from "@mui/material"
import { Link } from "react-router-dom"
import { tokens } from "../../theme"
import LightModeOutlined from "@mui/icons-material/LightModeOutlined"
import HomeOutlined from "@mui/icons-material/HomeOutlined"
import PeopleOutlined from "@mui/icons-material/PeopleOutlined"
import ContactOutlined from "@mui/icons-material/ContactOutlined"
import ReceiptOutlined from "@mui/icons-material/ReceiptOutlined"
import PersonOutlined from "@mui/icons-material/PersonOutlined"
import CalendarTodayOutlined from "@mui/icons-material/CalendarTodayOutlined"
import HelpOutlined from "@mui/icons-material/HelpOutlined"
import BarOutlined from "@mui/icons-material/BarOutlined"
import PieChartOutlined from "@mui/icons-material/PieChartOutlined"
import TimeOutlined from "@mui/icons-material/TimeOutlined"
import MenuOutlined from "@mui/icons-material/MenuOutlined"
import MapOutlined from "@mui/icons-material/MapOutlined"


const Sidebar = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [selected, setSelected] = useState("Dashboard")

  return (
    <div>Sidebar</div>
  )
}

export default Sidebar