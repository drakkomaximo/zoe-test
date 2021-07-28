/**
 * @param props props
 * @param props.url url
 * @param props.alt alt
 * @param props.w w
 * @param props.h h
 * @param props.r r
 * @param props.o o
 * @param props.borderImage borderImage
 * @param props.marginImage marginImage
 * @param props.bShadow bShadow
 * @param props.paddingImage paddingImage
 * @param props.zIndexImage zIndexImage
 * @param props.backgroundColorImage backgroundColorImage
 * @param props.filterImage filterImage
 * @returns image component
 */
export const CustomImage = ({
  url = '',
  alt = 'image',
  w = '324',
  h = '468',
  r = '0px',
  o = '1',
  borderImage = 'none',
  marginImage = '0px',
  bShadow = 'none',
  paddingImage = '0px',
  zIndexImage = 0,
  backgroundColorImage = 'transparent',
  filterImage = 'none',
}: {
  url?: string
  alt?: string
  w?: string
  h?: string
  r?: string
  o?: string
  borderImage?: string
  marginImage?: string
  bShadow?: string
  paddingImage?: string
  zIndexImage?: number
  backgroundColorImage?: string
  filterImage?: string
}): JSX.Element => {
  return (
    <img
      src={url}
      alt={alt}
      width={w}
      height={h}
      style={{
        borderRadius: r,
        opacity: o,
        border: borderImage,
        boxShadow: bShadow,
        objectFit: 'cover',
        margin: marginImage,
        padding: paddingImage,
        zIndex: zIndexImage,
        backgroundColor: backgroundColorImage,
        transition: '0.25s',
        filter: filterImage,
      }}
    />
  )
}
