import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ListItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding-left: 40px;
  }
`
export const ThumbnailImage = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`
export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-right: 20px;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const VideoDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`
export const NavLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  outline: none;
`
export const Heading = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
  font-family: 'Roboto';
  font-size: 15px;
`
export const ChannelName = styled.p`
  color: #616e7c;
  font-family: 'Roboto';
  font-size: 13px;
  margin-top: 0px;
`
export const ViewsAndDate = styled.p`
  color: #616e7c;
  font-family: 'Roboto';
  font-size: 12px;
  margin-top: 0px;
`
export const Dot = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`