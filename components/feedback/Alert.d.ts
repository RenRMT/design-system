import * as React from 'react';
/** Error box listing what went wrong, in plain words, with the exact offending value. */
export interface AlertProps {
  title?: string;
  /** One line per problem */
  items?: string[];
  children?: React.ReactNode;
}
export function Alert(props: AlertProps): JSX.Element;
