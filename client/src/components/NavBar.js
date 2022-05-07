import { useNavigate } from 'react-router';

export default function NavBar() {

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
    <div>
      <h1 className='headerName'>KSL.com News Sports Yada Yada Ya</h1>
      <nav>
        <a href={announcements} onClick={announcements}>Announcements</a>
        <a href={appliances} onClick={appliances}>Appliances</a>
        <a href={autoParts} onClick={autoParts}>Auto Parts and Accessories</a>
        <a href={baby} onClick={baby}>Baby</a>
        <a href={booksAndMedia} onClick={booksAndMedia}>Books and Media</a>
        <a href={clothingAndApparel} onClick={clothingAndApparel}>Clothing and Apparel</a>
        <a href={computers} onClick={computers}>Computers</a>
        <a href={cycling} onClick={cycling}>Cycling</a>
        <a href={electronics} onClick={electronics}>Electronics</a>
        <a href={fitnessEquipment} onClick={fitnessEquipment}>Fitness Equipment</a>
        <a href={forTradeOrBarter} onClick={forTradeOrBarter}>For Trade or Barter</a>
        <a href={free} onClick={free}>FREE</a>
        <a href={furniture} onClick={furniture}>Furniture</a>
        <a href={general} onClick={general}>General</a>
        <a href={homeAndGarden} onClick={homeAndGarden}>Home and Garden</a>
        <a href={huntingAndFishing} onClick={huntingAndFishing}>Hunting and Fishing</a>
        <a href={industrial} onClick={industrial}>Industrial</a>
        <a href={livestock} onClick={livestock}>Livestock</a>
        <a href={musicalInstruments} onClick={musicalInstruments}>Musical Instruments</a>
        <a href={otherRealEstate} onClick={otherRealEstate}>Other Real Estate</a>
        <a href={OutdoorsAndSporting} onClick={OutdoorsAndSporting}>Outdoors and Sporting</a>
        <a href={pets} onClick={pets}>Pets</a>
        <a href={recreationalVehicles} onClick={recreationalVehicles}>Recreational Vehicles</a>
        <a href={services} onClick={services}>Services</a>
        <a href={tickets} onClick={tickets}>Tickets</a>
        <a href={toys} onClick={toys}>Toys</a>
        <a href={waterSports} onClick={waterSports}>Water Sports</a>
        <a href={weddings} onClick={weddings}>Weddings</a>
        <a href={winterSports} onClick={winterSports}>Winter Sports</a>
      </nav>
      
    </div>
  )
}