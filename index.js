import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv";

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

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });

  if (state.view === "Direction") {
    const formEntry = document.querySelector("form");
    const directionList = document.querySelector(".directions");

    formEntry.addEventListener("submit", async event => {
      event.preventDefault();

      console.log("matsinet-event:", event);

      // directionList.classList.toggle("directions");
      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      const from = {
        street: inputList.fromStreet.value,
        city: inputList.fromCity.value,
        state: inputList.fromStreet.value
      };

      store.Direction.from = from;
      store.Map.from = from;

      const to = {
        street: inputList.toStreet.value,
        city: inputList.toCity.value,
        state: inputList.toStreet.value
      };

      store.Direction.to = to;
      store.Map.to = to;

      if (event.submitter.name === "showDirections") {
        axios
          .get(
            `http://www.mapquestapi.com/directions/v2/route?key=${process.env.MAPQUEST_API_KEY}&from=${from.street},${from.city},${from.state}&to=${to.street},+${to.city},+${to.state}`
          )
          .then(response => {
            store.Direction.directions = response.data;
            store.Direction.directions.maneuvers =
              response.data.route.legs[0].maneuvers;
            router.navigate("/Direction");
          })
          .catch(error => {
            console.log("It puked", error);
          });
      }

      if (event.submitter.name === "showRoute") {
        router.navigate("/Map");
      }
    });
  }

  if (state.view === "Groups") {
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
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();
