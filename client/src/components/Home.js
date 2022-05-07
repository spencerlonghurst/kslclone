import { useNavigate } from 'react-router';

export default function Home() {

  const navigate = useNavigate();

  const announcements = () => {
    navigate('/announcements')
  }
  const appliances = () => {
    navigate('/appliances')
  }
  const autoParts = () => {
    navigate('/auto-parts')
  }
  const baby = () => {
    navigate('/baby')
  }
  const booksAndMedia = () => {
    navigate('/books-and-media')
  }
  const clothingAndApparel = () => {
    navigate('/clothing-and-apparel')
  }
  const computers = () => {
    navigate('/computers')
  }
  const cycling = () => {
    navigate('/cycling')
  }
  const electronics = () => {
    navigate('/electronics')
  }
  const fitnessEquipment = () => {
    navigate('/fitness-equipment')
  }
  const forTradeOrBarter = () => {
    navigate('/for-trade-or-barter')
  }
  const free = () => {
    navigate('/free')
  }
  const furniture = () => {
    navigate('/furniture')
  }
  const general = () => {
    navigate('/general')
  }
  const homeAndGarden = () => {
    navigate('/home-and-garden')
  }
  const huntingAndFishing = () => {
    navigate('/hunting-and-fishing')
  }
  const industrial = () => {
    navigate('/industrial')
  }
  const livestock = () => {
    navigate('/livestock')
  }
  const musicalInstruments = () => {
    navigate('/musical-instruments')
  }
  const otherRealEstate = () => {
    navigate('/other-real-estate')
  }
  const OutdoorsAndSporting = () => {
    navigate('/outdoors-and-sporting')
  }
  const pets = () => {
    navigate('/pets')
  }
  const recreationalVehicles = () => {
    navigate('/recreational-vehicles')
  }
  const services = () => {
    navigate('/services')
  }
  const tickets = () => {
    navigate('/tickets')
  }
  const toys = () => {
    navigate('/toys')
  }
  const waterSports = () => {
    navigate('/water-sports')
  }
  const weddings = () => {
    navigate('/weddings')
  }
  const winterSports = () => {
    navigate('/winter-sports')
  }


  return (
   <div></div>
  )
}