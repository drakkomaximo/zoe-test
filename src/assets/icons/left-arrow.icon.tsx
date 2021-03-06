import { SVGProps } from 'react'

/**
 * @param props props
 * @param props.size size
 * @param props.color color
 * @returns component
 */
export const LeftArrowIcon = ({
  size = 16,
  color = 'white',
  ...props
}: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7.69922 0.575195L6.99609 1.24316C6.82031 1.41895 6.82031 1.7002 6.99609 1.84082L12.4453 7.3252L0.421875 7.3252C0.210938 7.3252 0 7.50098 0 7.74707V8.73145C0 8.94238 0.210938 9.15332 0.421875 9.15332L12.4453 9.15332L6.99609 14.6025C6.82031 14.7432 6.82031 15.0244 6.99609 15.2002L7.69922 15.8682C7.83984 16.0439 8.12109 16.0439 8.29688 15.8682L15.6445 8.52051C15.8203 8.34473 15.8203 8.09863 15.6445 7.92285L8.29688 0.575195C8.12109 0.399414 7.83984 0.399414 7.69922 0.575195Z" fill={color}/>
</svg>
)
