function addHashToNavbarLinks() {
    var prev;
    prev = document.getElementById("navbar_name").getAttribute("href");
    document.getElementById("navbar_name").setAttribute("href", prev + window.location.hash);
    prev = document.getElementById("navbar_about").getAttribute("href");
    document.getElementById("navbar_about").setAttribute("href", prev + window.location.hash);
    prev = document.getElementById("navbar_projects").getAttribute("href");
    document.getElementById("navbar_projects").setAttribute("href", prev + window.location.hash);
    prev = document.getElementById("navbar_resume").getAttribute("href");
    document.getElementById("navbar_resume").setAttribute("href", prev + window.location.hash);
    prev = document.getElementById("navbar_contact").getAttribute("href");
    document.getElementById("navbar_contact").setAttribute("href", prev + window.location.hash);
}

async function changeContent() {
    // Selecting the desired language-data
    var response;
    var language;

    switch (window.location.hash) {
        case "#en":
            response = await fetch("lang/en.json");
            language = await response.json();
            break;

        case "#de":
            response = await fetch("lang/de.json");
            language = await response.json();
            break;

        case "#jp":
            response = await fetch("lang/jp.json");
            language = await response.json();
            break;

        default:
            window.location.hash = "#en";
            response = await fetch("lang/en.json");
            language = await response.json();
            break;
    }

    // Filling in all of the content in the desired language
    document.getElementById("navbar_about").textContent = language.navbar_about;
    document.getElementById("navbar_projects").textContent = language.navbar_projects;
    document.getElementById("navbar_resume").textContent = language.navbar_resume;
    document.getElementById("navbar_contact").textContent = language.navbar_contact;

    document.getElementById("homepage_title").textContent = language.homepage_title;
    document.getElementById("homepage_paragraph1").textContent = language.homepage_paragraph1;
    document.getElementById("homepage_paragraph2").textContent = language.homepage_paragraph2;
}



addHashToNavbarLinks();
changeContent();
window.onhashchange = function()
{
    window.location.reload();
}