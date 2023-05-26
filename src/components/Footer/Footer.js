import React from 'react'
import { FooterCard, InnerCard, LeftSection, RightFit, RightSection, UsefulLinks,StyledLink, List,ListItem, MiddleSection, Image, FooterText } from './FooterStyle'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <FooterCard>
      <InnerCard>
      <LeftSection>
        <RightFit>RIGHTFIT.COM</RightFit>
        <UsefulLinks>
          <List>
            <ListItem>
               <StyledLink to="/"> Home</StyledLink>
            </ListItem>
            <ListItem>
               <StyledLink> All products</StyledLink>
            </ListItem>
            <ListItem>
               <StyledLink to="/"> Featured Products</StyledLink>
            </ListItem>
            <ListItem>
               <StyledLink to="/"> Contact</StyledLink>
            </ListItem>
            <ListItem>
               <StyledLink to="/"> About Us</StyledLink>
            </ListItem>
          </List>
        </UsefulLinks>
      </LeftSection>

      <MiddleSection>
      <FooterText>We are a registered E-Commerce seller and we support a variety of Local and International payment modes</FooterText>
      <Image src='images/footer-payment.svg' />
      </MiddleSection>

      <RightSection>
        <FooterText>Website protected by</FooterText>
        <Image src='images/footer-logo.svg'></Image>
      </RightSection>
      </InnerCard>
    </FooterCard>
  )
}

export default Footer