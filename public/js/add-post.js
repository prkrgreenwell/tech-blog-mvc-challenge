/** @format */

async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector("#post-title").value;
  const post_content = document.querySelector("#post-content").value;

  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      post_content,
    }),
    headers: {
      "Content-type:": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}
