import html from "html-literal";

export default st => `
  <table id="myRiders">
    <tr>
      <th>Group</th>
      <th>Meetup</th>
      <th>Time</th>
      <th>SuggestedItems</th>
      <th>Creator</th>
    </tr>

    ${st.myRiders
      .map(myRider => {
        return `<tr><td>${myRider.group}</td><td>${myRider.meetup}</td><td>${
          myRider.time
        }</td><td>${myRider.suggestedItems.join(" & ")}</td><td>${
          myRider.creator
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
