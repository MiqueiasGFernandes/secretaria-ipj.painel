import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  container: {
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator_card: {
    backgroundColor: 'blue',
    color: 'whitesmoke',
    paddingRight: 15,
  },
  indicator_bg: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center right',
    backgroundSize: '20%',
  },
});
