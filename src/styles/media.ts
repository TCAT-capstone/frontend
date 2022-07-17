import { css, CSSObject, SimpleInterpolation } from 'styled-components';

type DeviceType = 'small' | 'medium' | 'large';

const sizes: Record<DeviceType, number> = {
  small: 375,
  medium: 1060,
  large: 1610,
};

const media = Object.entries(sizes).reduce((acc, [key, value]) => {
  return {
    ...acc,
    [key]: (first: CSSObject | TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => css`
      @media (max-width: ${value}px) {
        ${css(first, ...interpolations)}
      }
    `,
  };
}, {}) as Record<DeviceType, any>;

export { media };
