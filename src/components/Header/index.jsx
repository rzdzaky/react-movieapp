import React from 'react'
import {Wrapper, Content, LogoImg, TMDBLogoImg} from './Header.styles'
import RMDBLogo from '../../images/react-movie-logo.svg'
import TMDBLogo from '../../images/tmdb_logo.svg'

const Header = () => {
    return (
        <Wrapper>
            <Content>
                <LogoImg src={RMDBLogo} />
                <TMDBLogoImg src={TMDBLogo} />
            </Content>
        </Wrapper>
    )
}

export default Header
