import React, {FC} from 'react'
import { CustomImage } from '../../../assets/images/custom.image'
import { MainHeader } from '../styles'

const zoe_logo = 'https://s3-alpha-sig.figma.com/img/6d74/aed7/3955dd3f6b85dcfd43f839ac1d9ed1b4?Expires=1628467200&Signature=SquoNXQwjoImEqmFVR4aAwQMy87ARVpicuXrGeSyrlpBhRqQT-1T1-kh6olbHND5FjSZ5BJspiQkN4mggGsDKpv1sSDTmDXOYK0M-CrnfoknEWHPOvgATdbT0Eqmk-Epkeqq1iItihLMXbfi6CUS6WOUHq6j0MlhlEgFygXo4zI5~SJFiy0-bqu2Fr-NIsi4LKGHapxQmbCaqbZ960IEe0xmsHTM62G3F42AduFG2ozUVgQfbckhxJwmwnztP2sJc4hFBaUQzU1QGeudSp68pz65TYHfXVPH34MpjqT5RNJBCIyVeAubyLkqLLNj2VExfGUztLFw5BzDapcreShwiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'

const Header:FC = () => {
    return (
        <MainHeader>
            <CustomImage 
                url={zoe_logo}
                w={'73,85px'}
                h={'32px'}
                marginImage={'0.5rem'}
            />
        </MainHeader>
    )
}

export default Header
