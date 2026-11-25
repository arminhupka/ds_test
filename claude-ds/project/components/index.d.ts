import * as React from 'react';

/**
 * Avatar — from @mini-ui/base@0.0.0 (./packages/base/src/components/avatar/Avatar.stories.tsx).
 */
export interface AvatarProps {
  ref?: React.Ref;
  id?: string;
  /** The person's full name: announced to screen readers and turned into initials. */
  name: string;
  /** The person's picture; the initials show while it is missing, loading or failed. */
  src?: string;
  /** The person's status, shown as a dot on the circle. `none` shows no dot. */
  status?: "none" | "active" | "inactive";
}

export declare const Avatar: React.ComponentType<AvatarProps>;

/**
 * Button — from @mini-ui/base@0.0.0 (./packages/base/src/components/button/Button.stories.tsx).
 * @replaces button
 */
export interface ButtonProps {
  ref?: React.Ref;
  id?: string;
  children?: React.ReactNode;
  /** Whether the button should be focusable when disabled. */
  focusableWhenDisabled?: boolean;
  /** Whether the component renders a native `<button>` element when replacing it via the `render` prop. Set to `false` if the */
  nativeButton?: boolean;
  /** Visual weight: filled, outlined, or a text-only link style. */
  variant?: "primary" | "secondary" | "tertiary";
  /** What the action means: a regular, a destructive, a neutral one, or one AI carries out. */
  intent?: "automation" | "positive" | "danger" | "neutral";
  /** Control height and type size. */
  size?: "sm" | "md";
  /** `full` stretches the button across its container, as for the one action closing a form or panel. */
  width?: "auto" | "full";
  /** Shows a spinner over the label and ignores clicks, keeping the button's size. */
  loading?: boolean;
}

export declare const Button: React.ComponentType<ButtonProps>;

/**
 * Checkbox — from @mini-ui/base@0.0.0 (./packages/base/src/components/checkbox/Checkbox.stories.tsx).
 * @replaces input[type=checkbox]
 */
export interface CheckboxProps {
  [key: string]: unknown;
}

export declare const Checkbox: {
  Root: React.ComponentType<any>;
  Indicator: React.ComponentType<any>;
};

/**
 * Input — from @mini-ui/base@0.0.0 (./packages/base/src/components/input/Input.stories.tsx).
 * @replaces input
 */
export interface InputProps {
  /** The default value of the input. Use when uncontrolled. */
  defaultValue?: string | number | readonly string[];
  ref?: React.Ref;
  id?: string;
  children?: React.ReactNode;
  /** The value of the input. Use when controlled. */
  value?: string | number | readonly string[];
}

export declare const Input: React.ComponentType<InputProps>;
