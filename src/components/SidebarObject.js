import './SidebarObject.scss'
import { useState } from 'react'

const SidebarObject = ({ name, data, func }) => {
    
    const [selected, setSelected] = useState(false)

    const handleSelect = () => {
        setSelected(!selected)
    }

    return (
        <div className="sidebarObject">
            <div className={`sidebarObject_title${selected ? "-selected" : ""}`} onClick={handleSelect}>{name + 's'}</div>
            <div className={`sidebarObject_list ${selected ? "selected" : ""}`}>
                {
                    data.map((mineral) => {
                        return (<div className="sidebarObject_mineral" onClick={() => func(mineral)}>
                            <img src={require(`../img/${mineral.image}`)} />
                            <div>{mineral.name}</div>
                        </div>)
                    })
                }
            </div>
        </div>
    )
}
export default SidebarObject