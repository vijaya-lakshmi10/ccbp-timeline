/* Write your CSS here */
import styled from 'styled-components/macro'

export const TimelineContainer=styled.div`
display:flex;
justify-content:space-around;
align-items:center;
min-height:100vh;
`
export const ContentContainer=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:100vh;
max-width:1110px;
`

export const HeaderContainer=styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin-bottom:30px;
`

export const Heading=styled.h1`
color:#171f46;
text-align:center;
font-family:'Roboto';
font-size:18px;
font-weight:600;
line-height:2.5;
@media screen and (min-width:768px){
    font-size:20px;
}
`
export const CCBPHeading=styled.span`
color:#2b237c;
font-family:'Roboto';
font-size:24px;
font-weight:500;
@media screen and (min-width:768px){
    font-size:30px;
}
` 