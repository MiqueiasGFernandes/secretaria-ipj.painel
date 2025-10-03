import { styled } from '@mui/material/styles';

import iconSvg from '@assets/icons/frequent.svg';
import { IconOptions } from './icon.type';


export const FrequentersIcon = styled('div')((options: IconOptions) => ({
  backgroundRepeat: 'no-repeat',
  backgroundPosition: options.backgroundPosition || 'center right',
  backgroundSize: `${options.backgroundSize || 20}%`,
  backgroundImage: `url(${iconSvg})`,
}))