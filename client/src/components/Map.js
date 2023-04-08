// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import Routing from "./Routing";

// const icon = L.icon({
//   iconUrl: "../marker.png",
//   iconSize: [38, 38],
// });

// const position = [11.186979,77.308708];
// const Map = () => {
//   return (
//     <div>
//       <MapContainer center={position} zoom={13} scrollWheelZoom={true} className="map">
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={position} icon={icon}>
//           <Popup>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup>
//         </Marker>
//         <Routing />
//       </MapContainer>
//     </div>
//   );
// };

// export default Map;
//------------------------------------------------------------------------------------------------

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Routing from "./Routing";
import L from "leaflet";
import "leaflet-routing-machine";

const icon = L.icon({
  iconUrl: "../LiveMarker.png",
  iconSize: [60, 90],
});

const icon1 = L.icon({
  iconUrl: "../marker1.png",
  iconSize: [38, 38],
});

const Map = (props) => {
  const allLat = props.arr1;
  const allLng = props.arr2;
  const route = props.route;
  const position = props.position;
  const time = [];
  time[0] = -1;
  var currentStop = 0;

  for (let i = 0; i < route.length - 1; i++) {
    if (
      (Number(position[0]) > Number(allLat[i]) &&
        Number(position[0]) < Number(allLat[i + 1])) ||
      (Number(position[0]) < Number(allLat[i]) &&
        Number(position[0]) > Number(allLat[i + 1]))
    ) {
      currentStop = i;
      break;
    }
  }

  for (let i = 0; i < route.length - 1; i++) {
    if (i >= currentStop) {
      var a = position[0] - allLat[i + 1];
      var b = position[1] - allLng[i + 1];
      var c = Math.sqrt(a * a + b * b);
      c = (c + c / 5) * 100;
      c = Math.round((c / 20) * 60);
      if (c < 60) {
        time[i + 1] = "Approximately " + c + " mins";
      } else if (c % 60 === 0) {
        c=c/60;
        time[i + 1] = "Approximately " + c + " hr";
      } else {
        c = c / 60;
        c = c.toFixed(1);
        time[i + 1] = "Approximately " + c + " hrs";
      }
    } else {
      time[i + 1] = -1;
    }
  }

  return (
    <MapContainer
      doubleClickZoom={false}
      id="mapId"
      className="map"
      zoom={11}
      center={position}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri"
      />
      <Marker position={props.position} icon={icon} draggable="true">
        <Popup>Bus is Here</Popup>
      </Marker>

      {allLat.map((l, i) => {
        return (
          <Marker position={[l, allLng[i]]} icon={icon1}>
            <Popup>
              <b>{route[i].place}</b>
              <br />
              {time[i] !== -1 ? time[i] : "Crossed"}
            </Popup>
          </Marker>
        );
      })}

      <Routing arr1={props.arr1} arr2={props.arr2} />
    </MapContainer>
  );
};

export default Map;
