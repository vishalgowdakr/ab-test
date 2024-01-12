import './companies.css'
import image1 from '../assets/companies-logo/att.svg'
import image2 from '../assets/companies-logo/cisco.svg'
import image3 from '../assets/companies-logo/citi.svg'
import image4 from '../assets/companies-logo/ericsson.svg'
import image5 from '../assets/companies-logo/hewlett_packard_enterprise.svg'
import image6 from '../assets/companies-logo/procter_gamble.svg'
import image7 from '../assets/companies-logo/samsung.svg'
import image8 from '../assets/companies-logo/volkswagen.svg'
export default function Companies(){
    return (
        <div className='flex flex-col mx-10'>
        <div className="text text-gray-500">
            Trusted by over 15,000 companies and millions of learners around the world
        </div>
        <ul className='flex flex-row justify-around items-center my-10'>
            <li><img src={image1} alt="" /></li>
            <li><img src={image2} alt="" /></li>
            <li><img src={image3} alt="" /></li>
            <li><img src={image4} alt="" /></li>

        </ul>
        <ul className='flex flex-row justify-around items-center my-10'>
            <li><img src={image5} alt="" /></li>
            <li><img src={image6} alt="" /></li>
            <li><img src={image7} alt="" /></li>
            <li><img src={image8} alt="" /></li>
        </ul>
        </div>
    )
}