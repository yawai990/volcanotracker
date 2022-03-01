import { Icon } from '@iconify/react';

const LocationInfo = ({ info, setLocatinInfoBox }) => {
    const { id, title } = info;

    return <div className="location-card">
        <h2>Event Location Info</h2>
        <h5><strong>ID:</strong>{id}</h5>
        <p><strong>title:</strong> {title}</p>

        <button className="btn"
            onClick={() => setLocatinInfoBox('')}
        >
            <Icon icon="fa-solid:times-circle" className='times' />
        </button>

    </div>
}
export default LocationInfo;