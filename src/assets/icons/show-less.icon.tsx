import { SVGProps } from 'react'

/**
 * @param props props
 * @param props.wSize wSize
 * @param props.hSize hSize
 * @param props.color color
 * @returns component
 */
export const ShowLessIcon = ({
  wSize = 12,
  hSize = 7,
  color = '#5C7BEB',
  ...props
}: SVGProps<SVGSVGElement> & {
  wSize?: number
  hSize?: number
}): JSX.Element => (
  <svg width={wSize} height={hSize} viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10.585 7L5.99999 2.67161L1.415 7L0 5.6642L5.99999 0L12 5.6642L10.585 7Z" fill={color}/>
</svg>


)
