import html from "html-literal";

export default state => html`
  <section id="About">
<<<<<<< HEAD
  <h2>MotoMeetup</h2>
    <img
      src="assets/Group_rider1.jpeg"
      alt="Let's Roll"
    />
=======
  <div class="box">
  <div class="float">
  <h2>MotoMeetup - Social Network for Motorcyclists</h2>
  <img class="groupRider"
      src="assets/motorcycle-group1.jpeg"
      alt="Let's Roll"/>
      </div>
>>>>>>> development
    <p>
    Our mission at MotoMeetup is to create an awesome networking experience for motorcyclists who love to ride.
    MotoMeetup combines social, tracking and safety functions. Communicate with other riders, create group rides and invite friends, find new roads, create your own routes, and track you rides.
    </p>

    <p>
        <ol>
            <li>Track and save your miles, speed, time and every lean angle. Save and review your rides.</li>
            <li>Share your rides with other user, post pictures, routes, stories and places.</li>
            <li>Set up group rides and create events.</li>
            <li>Find and create a route</li>
            <li>Find other motorcyclists to ride with</li>
        </ol>

    </p>
    </div>
  </section>
`;
