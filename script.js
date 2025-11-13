document
  .getElementById("nameForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the values from input fields
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    // Save the names in localStorage
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);

    // Redirect to the welcome page
    window.location.href = "welcome.html";
  });
