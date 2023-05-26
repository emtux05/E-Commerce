import React, { useState } from 'react'
import { Container, LeftSection, RightSection, WebContainer,BannerText, BannerDiv, BannerText2, BannerButton } from './HomeStyle'
import ProductCard from '../../components/ProductCard/ProductCard'
import FilterSection from '../../components/FilterSection/FilterSection'

const Home = () => {

  const [selectedButton, setSelectedButton] = useState('all');
  const [filterDataProp, setFilterDataProp] = useState({
    color: null,
    material: null
  }) 

  const handleButtonSelection = (button) => {
    setSelectedButton(button)
  }

  const handleFilterChange = (newFilterData) => {
    setFilterDataProp(newFilterData);
  }

  return (
    <WebContainer>
        <img 
            src='/images/home.svg'
            alt=""
            style={{ width: '1349px', boxShadow:'box-shadow: inset 0 30px 30px -10px rgba(0, 0, 0, 0.8)' }}
        />
        <BannerDiv>
          <BannerText>Latest Styles</BannerText>
          <BannerText2>At yesterday's price</BannerText2>
          <BannerButton>BROWSE ALL STYLES</BannerButton>

        </BannerDiv>
        <Container>
        <LeftSection>
            <FilterSection onFilterChange={handleFilterChange}/>
        </LeftSection>
        <RightSection className='thisisrightsection'>
            <ProductCard filterDataProp={filterDataProp} selectedButton={selectedButton}/>
        </RightSection>
        </Container>
    </WebContainer>
  )
}

export default Home