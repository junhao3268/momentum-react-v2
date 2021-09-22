import { CSSProperties, ReactNode } from 'react';

export type Color = 'primary' | 'secondary' | 'tertiary' | 'quaternary';
export type Elevation = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface Props {
  /**
   * Child components of this ModalContainer.
   */
  children?: ReactNode;

  /**
   * Custom class for overriding this component's CSS.
   */
  className?: string;

  /**
   * Color of this ModalContainer.
   */
  color?: Color;

  /**
   * The elevation of this ModalContainer.
   */
  elevation?: Elevation;

  /**
   * Custom id for overriding this component's CSS.
   */
  id?: string;

  /**
   * If this ModalContainer is padded.
   */
  isPadded?: boolean;

  /**
   * If this ModalContainer is round.
   */
  isRounded?: boolean;

  /**
   * Custom style for overriding this component's CSS.
   */
  style?: CSSProperties;
}