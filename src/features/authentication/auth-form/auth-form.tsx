import { CardContent, styled } from "@mui/material";
import { StyledFormClasses } from "../styles/styles";

const StyledForm = styled('div', {
  name: 'RaLogin',
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

  [`& .${StyledFormClasses.card}`]: {
    minWidth: 300,
    marginTop: '6em',
  },
  [`& .${StyledFormClasses.avatar}`]: {
    margin: '1em',
    display: 'flex',
    justifyContent: 'center',
  },
  [`& .${StyledFormClasses.icon}`]: {
    backgroundColor: theme.palette.secondary["light"],
  },
})) as React.ElementType;


type AuthFormOptions = {
  children: React.ReactNode,
  onSubmit: (values: any) => void
}

export function AuthForm({ children, onSubmit }: AuthFormOptions) {
  return <StyledForm 
      mode="onChange" 
      noValidate
      onSubmit={onSubmit}
    >
      <CardContent>
        {children}
      </CardContent>
  </StyledForm>
}