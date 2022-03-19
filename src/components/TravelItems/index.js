import {
  TravelListItem,
  TravelDescription,
  TravelName,
  TravelGuideContainer,
  TravelImage,
} from './styledComponents'

const TravelItem = props => {
  const {TravelItemDetails} = props
  const {name, imageUrl, description} = TravelItemDetails

  return (
    <TravelListItem>
      <TravelImage src={imageUrl} alt={name} />
      <TravelGuideContainer>
        <TravelName>{name}</TravelName>
        <TravelDescription>{description}</TravelDescription>
      </TravelGuideContainer>
    </TravelListItem>
  )
}

export default TravelItem
