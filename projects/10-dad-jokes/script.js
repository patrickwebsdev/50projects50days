document.getElementById("getJoke").addEventListener("click", () => getJoke());

const getJoke = () => {
  try {
    fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((result) => result.json())
      .then((result) => {
        document.getElementById("joke").innerHTML = result.joke;
      });
  } catch (error) {
    document.getElementById("joke").innerHTML =
      "Error when requesting the joke to the server. Error: " + error;
  }
};
