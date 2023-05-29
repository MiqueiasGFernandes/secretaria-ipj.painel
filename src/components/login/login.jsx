import { Link, LoginForm } from 'react-admin';

import LockIcon from '@mui/icons-material/Lock';
import { Avatar, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import {
  useEffect,
  useRef,
  useState,
} from 'react';
import SignUpForm from '../signup';

const PREFIX = 'RaLogin';
export const LoginClasses = {
  card: `${PREFIX}-card`,
  avatar: `${PREFIX}-avatar`,
  icon: `${PREFIX}-icon`,
};

const Root = styled('div', {
  name: PREFIX,
  overridesResolver: (_props, styles) => styles.root,
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  height: '1px',
  alignItems: 'center',
  justifyContent: 'flex-start',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundImage:
    'radial-gradient(circle at 50% 14em, #313264 0%, #00023b 60%, #00023b 100%)',

  [`& .${LoginClasses.card}`]: {
    minWidth: 300,
    marginTop: '6em',
  },
  [`& .${LoginClasses.avatar}`]: {
    margin: '1em',
    display: 'flex',
    justifyContent: 'center',
  },
  [`& .${LoginClasses.icon}`]: {
    backgroundColor: theme.palette.secondary[500],
  },
}));

export default function Login(props) {
  const { children, backgroundImage, ...rest } = props;
  const [activeForm, setActiveForm] = useState('LOGIN');

  const ACTIVE_FORM = {
    LOGIN:
  <div>
    <LoginForm />
    <Link
      to="/#"
      onClick={(event) => { event.preventDefault(); setActiveForm('SIGNUP'); }}
      style={{
        textAlign: 'center',
        width: '100%',
        display: 'block',
      }}
    >
      Crie uma conta agora

    </Link>
  </div>,
    SIGNUP: <SignUpForm setActiveForm={setActiveForm} />,
  };

  const containerRef = useRef();
  let backgroundImageLoaded = false;

  const updateBackgroundImage = () => {
    if (!backgroundImageLoaded && containerRef.current) {
      containerRef.current.style.backgroundImage = `url(${backgroundImage})`;
      backgroundImageLoaded = true;
    }
  };

  // Load background image asynchronously to speed up time to interactive
  const lazyLoadBackgroundImage = () => {
    if (backgroundImage) {
      const img = new Image();
      img.onload = updateBackgroundImage;
      img.src = backgroundImage;
    }
  };

  useEffect(() => {
    if (!backgroundImageLoaded) {
      lazyLoadBackgroundImage();
    }
  });
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Root {...rest} ref={containerRef}>
      <Card className={LoginClasses.card}>
        <div className={LoginClasses.avatar}>
          <Avatar className={LoginClasses.icon}>
            <LockIcon />
          </Avatar>
        </div>
        {ACTIVE_FORM[activeForm]}
        <div style={{
          padding: '0px 20px 20px',
        }}
        />
      </Card>
    </Root>
  );
}
