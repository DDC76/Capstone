import html from "html-literal";

export default st => `
    <table id="maps">
      <tr>
        <th>Created Rides</th>
        <th>Rides Created by Users</th>
        <th>Create New Ride</th>
        <th>Planned Rides</th>
        <th>Open Roads</th>
      </tr>
</table>
<section id="maps">;`;

// ${st.maps
//   .map(maps => {
//     return `<tr><td>${maps.createRide}</td><td>${maps.meetup}</td><td>${
//       maps.time
//     }</td><td>${maps.rsvp.join(" & ")}</td><td>${maps.creator}</td></tr>`;
//   })
//   .join("")}
