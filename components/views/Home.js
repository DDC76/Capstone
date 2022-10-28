import html from "html-literal";

export default state => html`
  <section id="motoMeetup">
    <h2>MotoMeetup: <i>Connect and Ride!</i></h2>
    <button class="registerButton" type="button">
      <a href="/Register" title="Register/Sign-in" data-navigo="">Register</a>
    </button>
  </section>

  <div class="weather">
    <h3>
      The weather in ${state.weather.city} is ${state.weather.description}.
      Temperature is ${state.weather.temp}F, and it feels like
      ${state.weather.feelsLike}F.
    </h3>
  </div>
`;
