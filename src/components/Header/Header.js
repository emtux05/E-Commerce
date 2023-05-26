import React from 'react'
import { Container, LeftSection, RightSection, SubContainer } from './HeaderStyle'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import {ShoppingCartOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { getProductFeatured } from '../../action/getProductFeaturedAction';
import { handleButtonSelection } from '../../action/handleButtonSelectionAction';

const Header = (props) => {

    const { cartCount, getProductFeatured, handleButtonSelection } = props

    const handleFeaturedProducts = () => {
        props.handleButtonSelection('featured')
        getProductFeatured();
    }

    const handleAllProducts = () => {
        handleButtonSelection('all')
    }

    return (
    <Container>
        <SubContainer>
            <LeftSection>
        <h2 style={{ color: 'white'}}>RIGHTFIT.COM</h2>
            </LeftSection>
            <RightSection>
                <Link src="/">
                    <Button type = "text" onClick={handleAllProducts}>
                        <p style={{ color: 'white',}}>All Products</p>
                    </Button>
                </Link>
                <Link src="/">
                    <Button type = "text" onClick={handleFeaturedProducts}>
                        <p style={{ color: 'white', marginRight: "25px"}}>Featured Products</p>
                    </Button>
                </Link>
                <Link className='icons' style={{marginRight: '-14px' }}>
                <ShoppingCartOutlined />
                </Link>
                <h3 style={{color: 'white', marginTop: "38px"}}>{cartCount}</h3>
            </RightSection>
        </SubContainer>
    </Container>
  )
}


const mapStateToProps = (state) => ({
    cartCount: state.cart.cartCount,
})

const mapDispatchToProps = (dispatch) => ({
    getProductFeatured: (params) => dispatch(getProductFeatured(params)),
    handleButtonSelection: (params) => dispatch(handleButtonSelection(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)