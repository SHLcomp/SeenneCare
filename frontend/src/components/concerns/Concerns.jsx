import './Concerns.scss'
import { Link } from 'react-router'

const Concerns = () => {
  return (
    <div className='concerns'>
        <div className="cont">
            <Link className='link' to={""}><div className="circle">
                <h4>Dryness</h4>
            </div></Link>
            <Link className='link' to={""}><div className="circle">
                <h4>Sensitivity</h4>
            </div></Link>
            <Link className='link' to={""}><div className="circle">
                <h4>Redness</h4>
            </div></Link>
            <Link className='link' to={""}><div className="circle">
                <h4>Wrinkles</h4>
            </div></Link>
            <Link className='link' to={""}><div className="circle">
                <h4>Pigmentation</h4>
            </div></Link>
        </div>
    </div>
  )
}

export default Concerns