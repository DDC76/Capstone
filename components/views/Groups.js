import html from "html-literal";

export default state => html`
  <section id="groups">
    <form id="groups" method="POST" action="">
      <h2>Create a Group</h2>
      <div>
        <label for="invite">Invite Riders:</label>
        <select id="groups" name="groups">
          <option value="">Select Group</option>
          <option value="family">Family</option>
          <option value="friends">Friends</option>
          <option value="create">Make Group</option>
          <option value="locate">Area Riders</option>
        </select>
      </div>
      <div>
        <label for="meetup">Location:</label>
        <input
          type="text"
          name="meetup"
          id="meetup"
          placeholder="Meetup Location"
          required
        />
      </div>
      <div>
        <label for="time">Time:</label>
        <input
          type="text"
          name="time"
          id="time"
          placeholder="Meetup Time"
          required
        />
      </div>
      <div>
        <label for="rsvp">Participants:</label>
        <input
          type="checkbox"
          id="id_of_checkbox1"
          class="items1"
          name="rsvp"
          value="Denver"
        />
        <label for="top1">Denver</label>
        <input
          type="checkbox"
          id="id_of_checkbox2"
          class="items1"
          name="rsvp"
          value="Nikki"
        />
        <label for="top2">Nikki</label>
        <input
          type="checkbox"
          id="id_of_checkbox3"
          class="items1"
          name="rsvp"
          value="Brian"
        />
        <label for="top3">Brian</label>
        <input
          type="checkbox"
          id="id_of_checkbox4"
          class="items1"
          name="rsvp"
          value="Adam"
        />
        <label for="top4">Adam</label>
        <input
          type="checkbox"
          id="id_of_checkbox5"
          class="items1"
          name="rsvp"
          value="Lisa"
        />
        <label for="top5">Lisa</label>
      </div>
      <input
        type="hidden"
        name="creator"
        id="creator"
        value="Group Organizer"
      />
      <input type="submit" name="submit" value="Submit Group Invite" />
    </form>
  </section>
`;
