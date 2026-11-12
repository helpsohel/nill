import { Icon } from "../Icon"

import type { IconSize } from "../Icon"

type _IconType = { 
    size?:IconSize 
};

export function Spinner2(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>spinner-3</title><path fill="currentColor" d="M41.9 23.9c-.3-6.1-4-11.8-9.5-14.4c-6-2.7-13.3-1.6-18.3 2.6c-4.8 4-7 10.5-5.6 16.6c1.3 6 6 10.9 11.9 12.5c7.1 2 13.6-1.4 17.6-7.2c-3.6 4.8-9.1 8-15.2 6.9s-11.1-5.7-12.5-11.7c-1.5-6.4 1.5-13.1 7.2-16.4c5.9-3.4 14.2-2.1 18.1 3.7c1 1.4 1.7 3.1 2 4.8c.3 1.4.2 2.9.4 4.3c.2 1.3 1.3 3 2.8 2.1c1.3-.8 1.2-2.5 1.1-3.8c0-.4.1.7 0 0">
            <animateTransform attributeName="transform" attributeType="XML" dur="460ms" from="0,25,25" repeatCount="indefinite" to="360,25,25" type="rotate"></animateTransform>
        </path>
        </svg>)
}

export function Spinner( { size = 'md'}: _IconType ) {
    return (
        <Icon size={size}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><title>spin6</title><path fill="currentColor" d="M854.569 841.338c-188.268 189.444-519.825 171.223-704.157-13.109c-190.56-190.56-200.048-493.728-28.483-695.516c10.739-12.623 21.132-25.234 34.585-33.667c36.553-22.89 85.347-18.445 117.138 13.347c30.228 30.228 35.737 75.83 16.531 111.665c-4.893 9.117-9.221 14.693-16.299 22.289c-140.375 150.709-144.886 378.867-7.747 516.005c152.583 152.584 406.604 120.623 541.406-34.133C914.324 605.585 950.26 430.827 885.4 277.179C801.785 79.109 580.193-14.011 374.924 54.703l-.226-.226c235.803-82.501 492.218 23.489 588.42 251.384c70.374 166.699 36.667 355.204-71.697 493.53c-11.48 14.653-23.724 28.744-36.852 41.948z">
            <animateTransform attributeName="transform" attributeType="XML" dur="460ms" from="0,500,500" repeatCount="indefinite" to="360,500,500" type="rotate"></animateTransform>
        </path>
        </svg>
        </Icon>
        )
}
