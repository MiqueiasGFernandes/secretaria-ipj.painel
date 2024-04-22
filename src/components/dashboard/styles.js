import memberIcon from '../../assets/icons/members.svg';

export default {
  container: {
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    card: {
      backgroundColor: 'blue',
      color: 'whitesmoke',
      paddingRight: 15,
    },
    bg: {
      backgroundImage: `url(${memberIcon})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center right',
      backgroundSize: '20%',
    },
  },
};
