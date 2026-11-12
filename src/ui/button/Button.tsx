import { Spinner } from '../icon/src/Spinner';
import './button.scss';
import type { ReactNode, CSSProperties } from 'react';
type ButtonSize = 'default' | 'small' | 'large';
type ButtonType = 'default' | 'primary' | 'secondary' | 'tertiary' | 'danger' | 'warning';


type ButtonProps = {
    children?: ReactNode;
    icon?: ReactNode;
    style?: CSSProperties;
    block?: boolean;
    loading?: boolean;
    size?: ButtonSize;
    type?: ButtonType;
    htmlType?: 'button' | 'submit' | 'reset'
    backgroundType?: ButtonType | 'transparent';
    outline?: boolean;
    disabled?: boolean;
    rounded?: boolean;
    fontNormal?: boolean;
    iconPosition?: 'left' | 'right';
    onClick?: () => void
}

export function Button({ children, htmlType, icon, fontNormal, loading, iconPosition = 'left', style, block, size = 'default', type, outline, backgroundType, rounded, disabled, onClick }: ButtonProps) {

    const classes = [
        'button',
        `button-size-${size}`,
        !backgroundType && `button-${type}`,
        backgroundType && `button-${backgroundType}-background`,

        disabled && type && `button-${type}-disabled`,
        disabled && backgroundType && `button-${backgroundType}-background-disabled`,
        disabled && !type && !backgroundType && 'button-disabled',

        block && 'button-block',
        outline && 'button-outline',
        rounded && 'button-rounded',

        fontNormal && 'button-font-weight-normal',

        icon && children && 'button-icon-with-text',
        icon && !children && 'button-icon-only',

    ].filter(Boolean).join(' ')

    const isDisabled = disabled || loading

    const buttonIcon = loading
        ? <Spinner />
        : icon

    const hasChildren =
        children !== undefined && children !== null

    return (
        <button
            type={htmlType}
            className={classes}
            disabled={isDisabled}
            aria-busy={loading || undefined}
            style={style}
            onClick={onClick}
        >
            {buttonIcon && iconPosition === 'left' && (
                <span className="button-icon" aria-hidden="true">
                    {buttonIcon}
                </span>
            )}

            {hasChildren && (
                <span className="button-content">
                    {children}
                </span>
            )}

            {buttonIcon && iconPosition === 'right' && (
                <span className="button-icon" aria-hidden="true">
                    {buttonIcon}
                </span>
            )}
        </button>
    )
}

/*
import type {
    ReactNode,
    ButtonHTMLAttributes
} from 'react'

import { Spinner } from '../icon/src/Spinner'

import './button.scss'

type ButtonVariant =
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'danger'
    | 'warning'

type ButtonSize =
    | 'small'
    | 'default'
    | 'large'

type ButtonProps = Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    'type' | 'children'
> & {
    children?: ReactNode

    variant?: ButtonVariant

    size?: ButtonSize

    htmlType?: 'button' | 'submit' | 'reset'

    icon?: ReactNode

    iconPosition?: 'left' | 'right'

    loading?: boolean

    block?: boolean

    outline?: boolean

    rounded?: boolean
}

export function Button({
    children,
    variant = 'primary',
    size = 'default',
    htmlType = 'button',

    icon,
    iconPosition = 'left',

    loading = false,
    disabled = false,

    block = false,
    outline = false,
    rounded = false,

    className = '',

    ...rest
}: ButtonProps) {

    const classes = [
        'button',
        `button-${variant}`,
        `button-size-${size}`,

        block && 'button-block',
        outline && 'button-outline',
        rounded && 'button-rounded',

        icon && children && 'button-icon-with-text',
        icon && !children && 'button-icon-only',

        className

    ].filter(Boolean).join(' ')

    const isDisabled = disabled || loading

    const buttonIcon = loading
        ? <Spinner />
        : icon

    const hasChildren =
        children !== undefined && children !== null

    return (
        <button
            type={htmlType}
            className={classes}
            disabled={isDisabled}
            aria-busy={loading || undefined}
            {...rest}
        >
            {buttonIcon && iconPosition === 'left' && (
                <span className="button-icon" aria-hidden="true">
                    {buttonIcon}
                </span>
            )}

            {hasChildren && (
                <span className="button-content">
                    {children}
                </span>
            )}

            {buttonIcon && iconPosition === 'right' && (
                <span className="button-icon" aria-hidden="true">
                    {buttonIcon}
                </span>
            )}
        </button>
    )
}

*/