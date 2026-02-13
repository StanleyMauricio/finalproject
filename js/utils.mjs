
async function getTemplate(path) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`No se pudo encontrar el template en: ${path}`);
  }
  const text = await response.text();
  return text;
}


export async function loadHeaderFooter() {

  const headerPath = "public/partials/header.html"; 
  const footerPath = "public/partials/footer.html";

  try {
    // Descargamos los templates
    const headerTemplate = await getTemplate(headerPath);
    const footerTemplate = await getTemplate(footerPath);

    // Buscamos los contenedores en el HTML
    const headerElement = document.querySelector("#main-header");
    const footerElement = document.querySelector("#main-footer");

    // Inyectamos el contenido
    if (headerElement) headerElement.innerHTML = headerTemplate;
    if (footerElement) footerElement.innerHTML = footerTemplate;

    console.log("Header y Footer cargados correctamente.");
  } catch (error) {
    console.error("Error al cargar los componentes (partials):", error);
  }
}