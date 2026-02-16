
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
export async function getPeruData() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/name/peru?fullText=true");
    if (!response.ok) throw new Error("Error retrieving data from Peru");
    const data = await response.json();
    return data[0]; 
  } catch (error) {
    console.error("Rest Countries API Error:", error);
  }
}
// Reemplaza 'TU_API_KEY' con tu clave real de ipstack
const IPSTACK_KEY = '589141b468aedb1faff98a71be46def6'; 

export async function getUserLocation() {
  try {
    const response = await fetch(`http://api.ipstack.com/check?access_key=${IPSTACK_KEY}`);
    if (!response.ok) throw new Error("Error");
    const data = await response.json();
    return data; // Contiene ciudad, país, etc.
  } catch (error) {
    console.warn("ipstack API Error :", error);
  }
}