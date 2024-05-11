// eslint-disable-next-line import/no-extraneous-dependencies
import { makeStyles } from '@mui/styles';
import memberIcon from '../../assets/icons/members.svg';
import frequencyIcon from '../../assets/icons/frequent.svg';
import requestIconDash from '../../assets/icons/request-dash.svg';

const useStyles = makeStyles({
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
  indicator_card_blue: {
    backgroundColor: '#2980b9',
    color: 'whitesmoke',
  },
  indicator_card_yellow: {
    backgroundColor: '#f1c40f',
    color: 'whitesmoke',
  },
  indicator_card_green: {
    backgroundColor: '#27ae60',
    color: 'whitesmoke',
  },
  indicator_bg: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center right',
    backgroundSize: '20%',
  },
  indicator_bg_members: {
    backgroundImage: `url(${memberIcon})`,
  },
  indicator_bg_freq: {
    backgroundImage: `url(${frequencyIcon})`,
  },
  indicator_bg_req: {
    backgroundImage: `url(${requestIconDash})`,
  },
});

export default useStyles;
