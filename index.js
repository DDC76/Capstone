import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv";
import { Loader } from "@googlemaps/js-api-loader";

dotenv.config();

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
        ${Header(state)}
        ${Nav(store.Links)}
        ${Main(state)}
        ${Footer()}
      `;

  afterRender(state);

  router.updatePageLinks();
}

function afterRender(st) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });

  if (st.view === "Groups") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      const suggestedItems = [];
      // Interate over the items input group elements
      for (let input of inputList.suggestedItems) {
        // If the value of the checked attribute is true then add the value to the items array
        if (input.checked) {
          suggestedItems.push(input.value);
        }
      }

      const requestData = {
        creator: inputList.creator.value,
        groups: inputList.groups.value,
        meetup: inputList.meetup.value,
        time: inputList.time.value,
        suggestedItems: suggestedItems
      };
      console.log("request Body", requestData);

      axios
        .post(`${process.env.MOTO_MEETUP_API_URL}`, requestData)
        .then(response => {
          // Push the new group onto the Groups state groups attribute, so it can be displayed in the myRiders list
          store.Myriders.myRiders.push(response.data);
          router.navigate("/Myriders");
        })
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }
}
    router.hooks({
      before: (done, params) => {
        const view =
          params && params.data && params.data.view
            ? capitalize(params.data.view)
            : "Home";

        // Add a switch case statement to handle multiple routes
        switch (view) {
          case "Home":
            axios
              .get(
                `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st%20louis`
              )
              .then(response => {
                const kelvinToFahrenheit = kelvinTemp =>
                  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

                store.Home.weather = {};
                store.Home.weather.city = response.data.name;
                store.Home.weather.temp = kelvinToFahrenheit(
                  response.data.main.temp
                );
                store.Home.weather.feelsLike = kelvinToFahrenheit(
                  response.data.main.feels_like
                );
                store.Home.weather.description = response.data.weather[0].main;

                console.log(response.data);
                done();
              })
              .catch(err => console.log(err));

              switch (view) {
                case "Maps":
                  axios
                    .get(
                      `https://maps.googleapis.com/maps/api/js?key=${process.env.Map_API_KEY}&map_ids=f33fe6fe4f3894f4&callback=initMap`)
              /* Options for how the map should initially render. */
              const mapOptions = {
                center: {
                  lat: 47.649196,
                  lng: -122.350384
                },
                zoom: 12
              };
              /* Options for loading the Maps JS API. */
              const apiOptions = {
                version: "weekly",
                libraries: ["places"]
              };
              /*
               * Set ID of the div where the map will be loaded,
               * and whether to append to that div.
               */
              const mapLoaderOptions = {
                apiKey: googleMapsAPIKey,
                divId: "map",
                append: true, // Appends to divId. Set to false to init in divId.
                mapOptions: mapOptions,
                apiOptions: apiOptions
              };
              const mapLoader = new GoogleMap();
              // Load the map
              mapLoader.initMap(mapLoaderOptions).then(googleMap => {
                // returns instance of google.maps.Map
                console.log(response.data);
                done();
              })
              .catch(err => console.log(err));

            break;
          case "Myriders":
            axios
              .get(`${process.env.MOTO_MEETUP_API_URL}`)
              .then(response => {
                store.Myriders.myRiders = response.data;
                done();
              })
              .catch(error => {
                console.log("It puked", error);
                done();
              });
            break;
          default:
            done();
        }
      }

    router
      .on({
        "/": () => render(),
        ":view": params => {
          let view = capitalize(params.data.view);
          render(store[view]);
        }
      })
      .resolve();
