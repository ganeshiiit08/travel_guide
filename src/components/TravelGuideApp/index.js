import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TravelItem from '../TravelItems'
import {
  AppContainer,
  Heading,
  TravelAppListItem,
  AppLoaderDiv,
} from './styledComponents'

class TravelGuide extends Component {
  state = {
    travelItemsList: [],
    isLoading: false,
  }

  componentDidMount() {
    this.renderTravelPackages()
  }

  renderTravelPackages = async () => {
    this.setState({isLoading: true})
    const apiUrl = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.packages.map(eachItem => ({
        id: eachItem.id,
        name: eachItem.name,
        imageUrl: eachItem.image_url,
        description: eachItem.description,
      }))
      this.setState({
        travelItemsList: updatedData,
        isLoading: false,
      })
    }
  }

  renderLoadingView = () => (
    <AppLoaderDiv data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </AppLoaderDiv>
  )

  getTravelPackages = () => {
    const {travelItemsList} = this.state
    return (
      <TravelAppListItem>
        {travelItemsList.map(each => (
          <TravelItem key={each.id} TravelItemDetails={each} />
        ))}
      </TravelAppListItem>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <AppContainer>
        <Heading>Travel Guide</Heading>
        {isLoading ? this.renderLoadingView() : this.getTravelPackages()}
      </AppContainer>
    )
  }
}

export default TravelGuide
