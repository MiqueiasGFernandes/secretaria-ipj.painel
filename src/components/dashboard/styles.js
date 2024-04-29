// eslint-disable-next-line import/no-extraneous-dependencies
import { makeStyles } from '@mui/styles';
import memberIcon from '../../assets/icons/members.svg';
import frequencyIcon from '../../assets/icons/frequent.svg';

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
    backgroundColor: 'blue',
    color: 'whitesmoke',
  },
  indicator_card_green: {
    backgroundColor: 'green',
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
});

export default useStyles;
