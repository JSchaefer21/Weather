import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import ChangeMapView from './ChangeMapView'

function Map(props) {

    const position = props.position 

    const MapEvents = () => {
        useMapEvents({
          click(e) {
            props.onNewLocation(e.latlng.lat, e.latlng.lng)
          }
        })
        return false
    }

    return  <MapContainer 
                style={{width: '100%', height: '100%'}} 
                center={position} 
                zoom={12} 
                zoomControl={false}
                scrollWheelZoom={true}
                attributionControl={false}
                doubleClickZoom={true}
                dragging={true}
                > 

                <ChangeMapView position={position} />
                <TileLayer
                attribution=' <a href="https://www.openstreetmap.org/copyright"></a> '
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker position={position}> </Marker>
                <MapEvents/>

            </MapContainer> 

}

export default Map