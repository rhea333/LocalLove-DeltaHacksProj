import "./Map.css";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import react, { useEffect, useState } from "react";
// import consume from "DeltaHacks9-main";
import axios from "axios";
const libraries = ["places"];
const mapContainerStyle = {
  width: "50vw",
  height: "50vh",
};

const center = {
  lat: 43.6532,
  lng: -79.3832,
};

function Map() {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [bigBox, setBigBox] = useState([]);
  const [searchStore, setSearchStore] = useState([]);
  const [location, setLocation] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  function removeItemAll(arr, value) {
    var i = 0;
    while (i < arr.length) {
      if (arr[i] === value) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    return arr;
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=43.6532,-79.3832&radius=500&types=food&name=${search}&key=APIKEY`
      )
      .then((response) => {
        console.log(response.data.results);
        setMarkers(response.data.results);
        console.log(markers);
      });

    console.log(markers);

    // consume.RemoveBigCompanies(markers);
    // {
    //   markers.map(
    //     (marker) => (
    //       console.log(marker),
    //       console.log(marker.name),
    //       console.log(marker.photos),
    //       console.log(marker.rating),
    //       axios({
    //         method: "post",
    //         url: "http://localhost:8000/DeltaHacks9Small",
    //         data: {
    //           name: marker.name,
    //           photos: marker.photos,
    //           rating: marker.rating,
    //         },
    //       })
    //     )
    //   );
    // }
    // axios({
    //   method: "post",
    //   url: "http://localhost:8000/DeltaHacks9Small",
    //   data: {
    //     data: markers,
    //   },
    // });

    axios.get("http://localhost:8000/DeltaHacks9Big/").then((response) => {
      console.log(response.data);
      response.data.map((store) => bigBox.push(store.name));
    });

    // searchStore = searchStore.filter(function (el) {
    //   return !bigBox.includes(el);
    // });
    console.log(markers.length);
    for (let i = 0; i < markers.length; i++) {
      console.log("hi");
      if (bigBox.includes(markers[i].name)) {
        markers.splice(i);
        console.log(markers);
      }
    }
    console.log(markers);
    setSearchStore(markers);
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBF4Cv2BD8upA_-1t-ZrqPQ5KARWKiTqm4",
    libraries,
  });
  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      <rect id="space"> </rect>
      <rect id="nav"> </rect>
      <rect id="list"> </rect>
      <div id="EnterLoc">Enter Your Location:</div>
      <div id="EnterFood">Enter Your Desired Meal:</div>
      <div id="output">Here's a list of small restaurants:</div>
      <input
        className="Food"
        value={search}
        onChange={handleChange}
        placeholder="Search Food"
      />
      <button className="Food" onClick={handleSearch}>
        Enter
      </button>
      <input
        className="Location"
        value={location}
        onChange={handleLocationChange}
        placeholder="Search Location"
      />
      <button className="Location" onClick={handleSearch}>
        Enter
      </button>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
      >
        {searchStore.map((marker) => (
          <Marker
            key={marker.name}
            position={{
              lat: marker.geometry.location.lat,
              lng: marker.geometry.location.lng,
            }}
            onClick={() => {
              setSelect(marker);
              console.log(select);
            }}
          />
        ))}
      </GoogleMap>
      {select ? (
        <div>
          <h2>{select.name}</h2>
          <h3></h3>
        </div>
      ) : null}
    </div>
  );
}

export default Map;
