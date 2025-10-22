import { styled } from '@mui/material/styles';

import iconSvg from '@assets/icons/request-dash.svg'
import { IconOptions } from './icon.type';

export const RequestsPendingIcon = styled('div')((options: IconOptions) => ({
  backgroundRepeat: 'no-repeat',
  backgroundPosition: options.backgroundPosition || 'center right',
  backgroundSize: `${options.backgroundSize || 20}%`,
  backgroundImage: `url("${iconSvg}")`,
  width: '100%',
  height: '100%'
}))