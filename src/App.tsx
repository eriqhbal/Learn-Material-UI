import './App.css'
import { MuiButton, 
         MuiTypography, 
         MuiTextField, 
         MuiSelect,
         MuiRadioButton,
         MuiCheckbox,
         MuiSwitch,
         MuiRating, 
         MuiAutoComplete,
         MuiBox,
         MuiStack,
         MuiGrid,
         MuiPaper,
         MuiCard,
         MuiAccordion,
         MuiImagelist,
         MuiNavbar,
         MuiMenu,
         MuiLink,
         MuiBreadCrumbs,
         MuiDrawer,
         MuiSpeedDial,
         MuiBottomNavigation,
         MuiAvatar,
         MuiBadge,
         MuiList,
         MuiChip,
         MuiTooltip,
         MuiTable,
         MuiAlert,
         MuiSnackbar,
         MuiDialog,
         MuiProgress,
         MuiSkeleton,
         MuiLoadingButton,
         MuiDatePicker,
         MuiRangeDatePicker,
         MuiTabs,
         MuiTimeline,
         MuiMasonry,
         MuiResponsiveness,
         MuiBoxThemeCustom,
         MuiTransferList,
         TransferList} from './Components';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { createTheme, colors, ThemeProvider } from '@mui/material';

const theme = createTheme({
  status: {
    danger: "#A91D3A",
  },
  palette: {
    secondary: {
      main: colors.teal[300],
    },
    neutral: {
      main: colors.brown[600],
      darker: colors.brown[800]
    }
  },
});


function App() {

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="app">
          {/* <MuiTypography/> */}
          {/* <MuiButton/> */}
          {/* <MuiTextField/> */}
          {/* <MuiSelect/> */}
          {/* <MuiRadioButton/> */}
          {/* <MuiCheckbox/> */}
          {/* <MuiSwitch/> */}
          {/* <MuiRating/> */}
          {/* <MuiAutoComplete/> */}
          {/* <MuiBox/> */}
          {/* <MuiStack/> */}
          {/* <MuiGrid/> */}
          {/* <MuiPaper/> */}
          {/* <MuiCard/> */}
          {/* <MuiAccordion/> */}
          {/* <MuiImagelist/> */}
          {/* <MuiNavbar/> */}
          {/* <MuiMenu/> */}
          {/* <MuiLink/> */}
          {/* <MuiBreadCrumbs/> */}
          {/* <MuiDrawer/> */}
          {/* <MuiSpeedDial/> */}
          {/* <MuiBottomNavigation/> */}
          {/* <MuiAvatar/> */}
          {/* <MuiBadge/> */}
          {/* <MuiList/> */}
          {/* <MuiChip/> */}
          {/* <MuiTooltip/> */}
          {/* <MuiTable/> */}
          {/* <MuiAlert/> */}
          {/* <MuiSnackbar/> */}
          {/* <MuiDialog/> */}
          {/* <MuiProgress/> */}
          {/* <MuiSkeleton/> */}
          {/* <MuiLoadingButton /> */}
          {/* <MuiDatePicker/> */}
          {/* <MuiRangeDatePicker/> */}
          {/* <MuiTabs/> */}
          {/* <MuiTimeline/> */}
          {/* <MuiMasonry/> */}
          {/* <MuiResponsiveness /> */}
          {/* <MuiBoxThemeCustom/> */}
          {/* <MuiTransferList/> */}
          <TransferList/>
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App
