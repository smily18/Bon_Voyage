import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutingLayer = (props) => {
  const allLat = props.arr1;
  const allLng = props.arr2;

  const instance = L.Routing.control({
    waypoints: allLat.map((l, i) => L.latLng(l, allLng[i])),
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 8 }],
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: false,
    showAlternatives: true,
    createMarker: function (i, waypoint, n) {
      const marker = L.marker(waypoint.latLng, {
        bounceOnAdd: false,
        icon: L.icon({
          iconUrl: "../marker.png",
          iconSize: [1,1],
          iconAnchor: [1,1],
        }),
      });
      return marker;
    },
  });

  // instance.on("routesfound", function (e) {
  //   const d = e.routes[0].summary.totalDistance;
  //   console.log("---->"+d);
  // });

  //instance.hide();

  return instance;
};

const Routing = createControlComponent(createRoutingLayer);

export default Routing;
