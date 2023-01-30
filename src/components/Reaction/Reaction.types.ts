import { AnimationEventCallback } from 'lottie-web';
import { CSSProperties } from 'react';
import { IconScale } from '../Icon/Icon.types';

export interface Props {
  /**
   * Custom boolean to autoplay SVG or not.
   */
  autoPlay?: boolean;

  /**
   * Custom class for overriding this component's CSS.
   */
  className?: string;

  /**
   * Custom id for overriding this component's CSS.
   */
  id?: string;

  /**
   * Custom prop for how many times to loop or true false for no loop vs. infinite loop
   */
  loop?: boolean | number;

  /**
   * Name of the specific emoji to render.
   * valid names: https://github.com/momentum-design/momentum-ui/tree/master/animations/lottie/reactions
   */
  name: string;

  /**
   * Size index of this Reaction.
   */
  size?: IconScale;

  /**
   * Custom style for overriding this component's CSS.
   */
  style?: CSSProperties;

  /**
   * Callback that gets called after animation has finished.
   */
  onComplete?: AnimationEventCallback;
}
