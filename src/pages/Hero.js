import '../styles/Hero.css'
import CallToAction from '../components/CallToAction'

export default function Hero() {
  return (
    <>
      <div className='Hero-container'>
        <CallToAction linkTo='groceries'/>
        <h1>El mayorista en tu casa</h1>
      </div>
    </>
  )
}
