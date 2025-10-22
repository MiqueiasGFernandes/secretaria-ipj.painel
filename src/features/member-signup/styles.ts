import { makeStyles } from "@mui/styles";
import { isMobile } from 'react-device-detect';

const useStyles = makeStyles({
  container: {
    padding: isMobile ? '5vh 2.5vw' : '10vh 25vw',
  },
  content: { justifyContent: 'center', alignItems: 'center' }
})

export { useStyles }