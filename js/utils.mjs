
async function getTemplate(path) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`N: ${path}`);
  }
  const text = await response.text();
  return text;
}


export async function loadHeaderFooter() {

  const headerPath = "public/partials/header.html"; 
  const footerPath = "public/partials/footer.html";

  try {

    const headerTemplate = await getTemplate(headerPath);
    const footerTemplate = await getTemplate(footerPath);

   
    const headerElement = document.querySelector("#main-header");
    const footerElement = document.querySelector("#main-footer");

  
    if (headerElement) headerElement.innerHTML = headerTemplate;
    if (footerElement) footerElement.innerHTML = footerTemplate;

    console.log("Header and footer ");
  } catch (error) {
    console.error("Error", error);
  }
}