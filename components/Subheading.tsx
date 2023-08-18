import React from 'react';
import { StyledText } from './Text';
import { StitchesVariants, CSS } from '../stitches.config';

import * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'h4';

type SubheadingCSSProp = { css?: CSS };
type SubheadingVariants = Omit<StitchesVariants<typeof StyledText>, 'size'>;
type SubheadingOwnProps = SubheadingCSSProp & SubheadingVariants;

type SubheadingComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, SubheadingOwnProps>;

export const Subheading = React.forwardRef((props, forwardedRef) => (
  <StyledText
    as={DEFAULT_TAG}
    {...props}
    ref={forwardedRef}
    size={
      {
        initial: '4',
        bp2: '5',
      } as any // TODO: Fix when this is merged https://github.com/modulz/stitches/issues/421
    }
    css={{
      fontWeight: 500,
      fontVariantNumeric: 'proportional-nums',
      lineHeight: '20px',
      ...(props.css as any),

      when: {
        ...(props.css?.when as any),
        bp2: {
          lineHeight: '23px',
          ...(props.css?.when?.bp2 as any),
        },
      },
    }}
  />
)) as SubheadingComponent;
