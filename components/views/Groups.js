import html from "html-literal";

export default () => html`
  <section id="groups">
    <form id="groups" method="POST" action="">
      <h2>Create Group!</h2>
      <div class="inviteForm">
        <div>
          <label for="groups">Invite Riders:</label>
          <select id="groups" name="groups">
            <option value="">Select Group</option>
            <option value="Family">Family</option>
            <option value="Friends">Friends</option>
            <option value="New Group">New Group</option>
            <option value="Solo Rider">Solo Rider</option>
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
          <label for="suggestedItems">Suggested Items:</label>
          <input
            type="checkbox"
            id="id_of_checkbox1"
            class="items1"
            name="suggestedItems"
            value="Helmet"
          />
          <label for="top1">Helmet</label>
          <input
            type="checkbox"
            id="id_of_checkbox2"
            class="items1"
            name="suggestedItems"
            value="Gloves"
          />
          <label for="top2">Gloves</label>
          <input
            type="checkbox"
            id="id_of_checkbox3"
            class="items1"
            name="suggestedItems"
            value="Jacket"
          />
          <label for="top3">Jacket</label>
          <input
            type="checkbox"
            id="id_of_checkbox4"
            class="items1"
            name="suggestedItems"
            value="Boots"
          />
          <label for="top4">Boots</label>
          <input
            type="checkbox"
            id="id_of_checkbox5"
            class="items1"
            name="suggestedItems"
            value="Backpack"
          />
          <label for="top5">Backpack</label>
        </div>
        <input
          type="hidden"
          name="creator"
          id="creator"
          value="Group Organizer"
        />
        <input type="submit" name="submit" value="Submit Invite" />
      </div>
    </form>
  </section>
`;
