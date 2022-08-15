import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import ChangeMapView from './ChangeMapView'

function Map({position}) {

   return   <MapContainer 
                style={{width: '100%', height: '100%'}} 
                center={position} 
                zoom={12} 
                zoomControl={false}
                /* scrollWheelZoom={false} */
                attributionControl={false}
                doubleClickZoom={false}
                dragging={false}
                > 

                <ChangeMapView position={position} />
                <TileLayer
                attribution=' <a href="https://www.openstreetmap.org/copyright"></a> '
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker position={position}> </Marker>

            </MapContainer> 

}

export default Map