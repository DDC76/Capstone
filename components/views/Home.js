import html from "html-literal";

export default state => html`
  <section id="motoMeetup">
    <h2>MotoMeetup: Social Network for Motorcyclists</h2>
    <a href="index.html">"Register Here!"</a>
  </section>
  <div class="weather">
    <h3>
      The weather in ${state.weather.city} is ${state.weather.description}.
      Temperature is ${state.weather.temp}F, and it feels like
      ${state.weather.feelsLike}F.
    </h3>
  </div>
`;
