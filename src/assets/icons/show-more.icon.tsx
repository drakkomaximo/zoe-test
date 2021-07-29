import { SVGProps } from 'react'

/**
 * @param props props
 * @param props.wSize wSize
 * @param props.hSize hSize
 * @param props.color color
 * @returns component
 */
export const ShowMoreIcon = ({
  wSize = 12,
  hSize = 7,
  color = '#8B8B8B',
  ...props
}: SVGProps<SVGSVGElement> & {
  wSize?: number
  hSize?: number
}): JSX.Element => (
  <svg width={wSize} height={hSize} viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M1.415 0L6.00001 4.32839L10.585 0L12 1.3358L6.00001 7L0 1.3358L1.415 0Z" fill={color}/>
</svg>

)
