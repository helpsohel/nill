
import type { ReactNode, HTMLAttributes } from 'react'

import './icon.scss'

type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type IconProps = HTMLAttributes<HTMLSpanElement> & {
    children: ReactNode
    size?: IconSize
}

export type {IconSize};

export function Icon({
    children,
    size = 'md',
    className = '',
    ...rest
}: IconProps) {

    const classes = [
        'icon',
        `icon-${size}`,
        className
    ].filter(Boolean).join(' ')

    return (
        <span
            className={classes}
            {...rest}
        >
            {children}
        </span>
    )
}
