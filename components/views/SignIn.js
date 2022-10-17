import html from "html-literal";

export default state => html`
  <div class="openBtn">
    <button class="openButton" onclick="openForm()">
      <strong>Open Form</strong>
    </button>
  </div>
  <div class="loginPopup">
    <div class="formPopup" id="popupForm">
      <form action="/action_page.php" class="formContainer">
        <h2>Please Log in</h2>
        <label for="email">
          <strong>E-mail</strong>
        </label>
        <input
          type="text"
          id="email"
          placeholder="Your Email"
          name="email"
          required
        />
        <label for="psw">
          <strong>Password</strong>
        </label>
        <input
          type="password"
          id="psw"
          placeholder="Your Password"
          name="psw"
          required
        />
        <button type="submit" class="btn">Log in</button>
        <button type="button" class="btn cancel" onclick="closeForm()">
          Close
        </button>
      </form>
    </div>
  </div>

  <div class="popupForm">  </div>
      function openForm() {
        document.getElementById("popupForm").style.display = "block";
      }
      function closeForm() {
        document.getElementById("popupForm").style.display = "none";
      }
    </div>
`;
