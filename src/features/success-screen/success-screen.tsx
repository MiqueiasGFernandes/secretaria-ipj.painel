
import { Typography } from '@mui/material';
import { Link } from 'react-admin';
import { useStyles } from './styles';


type Options = {
  title: string,
  message: string,
  callbackBtnText: string
  callbackAction: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

export function SuccessScreen(options: Options) {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Typography fontSize={20}>
        {options.title}
        <br /><br />
        {options.message}
      </Typography>
      <Link
        to="#"
        onClick={options.callbackAction}
        className={classes.returnToLoginLink}
      >
        <Typography fontSize={20}>
          {options.callbackBtnText}
        </Typography>
      </Link>
    </div>
  );
}
