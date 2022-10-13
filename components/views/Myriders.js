import html from "html-literal";

export default st => html`
  <table id="myRiders">
    <tr>
      <th>Group</th>
      <th>Riders</th>
      <th>Location</th>
      <th>Time</th>
      <th>SuggestedItems</th>
      <th>InvitedBy</th>
    </tr>

    ${st.myRiders
      .map(myRider => {
        return `<tr><td>${myRider.group}</td><td>${myRider.riders}</td><td>${
          myRider.location
        }</td><td>${myRider.time}</td><td>${myRider.suggestedItems.join(
          " & "
        )}</td><td>${myRider.invitedBy}</td></tr>`;
      })
      .join("")}
  </table>
`;
