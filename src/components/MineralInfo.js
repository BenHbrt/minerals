import './MineralInfo.scss'
import { useState } from 'react'

const MineralInfo = ({ mineral, func }) => {

    const [hover, setHover] = useState(false)

    return (
        <div className="mineralinfo">
            <div className="mineralinfo_close" onClick={() => func(mineral.name)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                {hover ? 
                <img src={require(`../img/icons/cancel_fill.png`)} /> :
                <img src={require(`../img/icons/cancel_nofill.png`)} />
                }
            </div>
            <div className="mineralinfo_name">{mineral.name}</div>
            <img className="mineralinfo_image"src={require(`../img/${mineral.image}`)} alt={mineral.image}/>
            <div className="mineralinfo_notes">{mineral.notes}</div>
            {mineral.link && <div className="mineralinfo_link"><span>Link: </span><a href={mineral.link}>{mineral.name}</a></div>}
        </div>
    )
}

export default MineralInfo