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
  const pos = props.position;
  const time = new Array(pos.length).fill().map(_ => new Array(pos.length).fill(-1))
  var currentStop = 0;

  for (let i = 0; i < pos.length; i++) {
    const position = pos[i];
    time[i][0]=-1;    

    for (let j = 0; j < route.length - 1; j++) {
      if (
        (Number(position[0]) > Number(allLat[j]) &&
          Number(position[0]) < Number(allLat[j + 1])) ||
        (Number(position[0]) < Number(allLat[j]) &&
          Number(position[0]) > Number(allLat[j + 1]))
      ) {
        currentStop = j;
        break;
      }
    }

    for (let j = 0; j < route.length - 1; j++) {
      if (j >= currentStop) {
        var a = position[0] - allLat[j + 1];
        var b = position[1] - allLng[j + 1];
        var c = Math.sqrt(a * a + b * b);
        c = (c + c / 5) * 100;
        c = Math.round((c / 30) * 60);
        if (c === 0) {
          time[i][j + 1] = "Bus has arrived\n";
        } else if (c < 60) {
          time[i][j + 1] = "In " + c + " mins \n";
        } else if (c % 60 === 0) {
          c = c / 60;
          time[i][j + 1] = "In " + c + " hr \n";
        } else {
          c = c / 60;
          c = c.toFixed(1);
          time[i][j + 1] = "In " + c + " hrs \n";
        }
      } else {
        time[i][j + 1] = -1;
      }
    }
  }

  return (
    <MapContainer
      doubleClickZoom={false}
      id="mapId"
      className="map"
      zoom={11}
      center={pos[0]}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Tiles &copy; Esrj&mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri"
      />
      {pos.map((p,i) => {
        return (
          <Marker position={p} icon={icon}>
          </Marker>
        );
      })}

      {allLat.map((l, i) => {
        return (
          <Marker position={[l, allLng[i]]} icon={icon1}>
            <Popup className="popup">
              <b>{route[i].place}</b>
              <p>Next Bus</p>
              {time.map((t)=>{
                return (
                  <div>{t[i]!==-1 && <div className="bus-time">{t[i]}</div>}</div>
                )
              })}
            </Popup>
          </Marker>
        );
      })}

      <Routing arr1={props.arr1} arr2={props.arr2} />
    </MapContainer>
  );
};

export default Map;

//------------------------------------------------------------------------------------------------
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
