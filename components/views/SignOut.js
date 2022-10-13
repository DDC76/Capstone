import html from "html-literal";

export default state => `
<section id="sign-out">
  <input type="submit" class="btn btn-green btn-sm pull-right" value="Submit">

  <div>
    <script>
      let inactivityTime = function() {
        let time;
        window.onload = resetTimer;
        document.onmousemove = resetTimer;
        document.onkeypress = resetTimer;
        function logout() {
          alert("You are now logged out.")
        }
        function resetTimer() {
          clearTimeout(time);
          time = setTimeout(logout, 2000)
        }
      };
      window.onload = function() {
        inactivityTime();
      }
    </script>
    </section>
    `;
