const md = window.markdownit();

const url =
  "https://raw.githubusercontent.com/moraxborax/moraxborax/refs/heads/main/README.md";

fetch(url)
  .then(res => {
    if (!res.ok) throw new Error("Failed to load markdown");
    return res.text();
  })
  .then(text => {
    const html = md.render(text);
    document.getElementById("content").innerHTML =
      DOMPurify.sanitize(html);
  })
  .catch(err => {
    document.getElementById("content").textContent = err.message;
  });