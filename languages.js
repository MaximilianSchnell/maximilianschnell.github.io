// Content Strings
var content =
{
    // English
    en:
    {
        navbar_about: "About Me",
        navbar_projects: "Projects",
        navbar_resume: "Resume",
        navbar_contact: "Contact",

        homepage_title: "Hey, I'm Max.",
        homepage_paragraph1: "Welcome to my portfolio website.",
        homepage_paragraph2: "I'm a mechanical engineering student from Germany. My interests include engineering as well as software and game developement.",
    },
    // German
    de:
    {
        navbar_about: "Über Mich",
        navbar_projects: "Projekte",
        navbar_resume: "Lebenslauf",
        navbar_contact: "Kontakt",

        homepage_title: "Hi, ich bin der Max.",
        homepage_paragraph1: "Willkommen auf meiner Portfolio-Webseite.",
        homepage_paragraph2: "Ich bin ein Maschinenbaustudent aus Deutschland. Ich interessiere mich unter anderem für Software- und Spieleentwicklung und natürlich Maschinenbau.",
    }
};

// Selecting the desired language-array
var language = content.en;

switch (window.location.hash) {
    case "#en":
        language = content.en;
        break;

    case "#de":
        language = content.de;
        break;

    default:
        language = content.en;
        break;
}

// Filling in all of the content in the desired language
navbar_about.textContent = language.navbar_about;
navbar_projects.textContent = language.navbar_projects;
navbar_resume.textContent = language.navbar_resume;
navbar_contact.textContent = language.navbar_contact;

homepage_title.textContent = language.homepage_title;
homepage_paragraph1.textContent = language.homepage_paragraph1;
homepage_paragraph2.textContent = language.homepage_paragraph2;

// Reload the page if the hash (i.e. the language) has changed
window.onhashchange = function()
{
    window.location.reload();
}