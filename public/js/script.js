const showSpinner = () =>
  document.querySelector(".spinner").classList.add("show");
const hideSpinner = () =>
  document.querySelector(".spinner").classList.remove("show");

const generateImageRequest = async (prompt, size) => {
  try {
    showSpinner();

    const response = await fetch("/open-ai/generate-image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
        size,
      }),
    });

    if (!response.ok) {
      hideSpinner();
      throw new Error("That image could not be generated");
    }

    const data = await response.json();
    const imageUrl = data.data;

    document.querySelector("#image").src = imageUrl;
    hideSpinner();
  } catch (error) {
    document.querySelector(".msg").textContent = error;
  } finally {
  }
};

const handleSubmit = (e) => {
  e.preventDefault();

  document.querySelector(".msg").textContent = "";
  document.querySelector("#image").src = "";

  const prompt = document.querySelector("#prompt").value;
  const size = document.querySelector("#size").value;

  if (!prompt) {
    alert("Please add some text");
    return;
  }

  generateImageRequest(prompt, size);
};

document.querySelector("#image-form").addEventListener("submit", handleSubmit);
