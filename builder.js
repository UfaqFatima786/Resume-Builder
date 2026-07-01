

const selectedTemplate = localStorage.getItem("selectedTemplate") || "modern";
const templateTitle = document.getElementById("templateTitle");

const templateNames = {
    modern: "Modern Resume",
    professional: "Professional Resume",
    classic: "Classic Resume",
    creative: "Creative Resume",
    simple: "Simple Resume",
    executive: "Executive Resume"
};

templateTitle.innerText = templateNames[selectedTemplate];

const builderContainer = document.querySelector(".builder-container");
const resume = document.querySelector(".resume");

builderContainer.classList.add(selectedTemplate);
resume.classList.add(selectedTemplate);

const nameInput = document.getElementById("name");
const jobInput = document.getElementById("job");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const addressInput = document.getElementById("address");
const linkedinInput = document.getElementById("linkedin");
const githubInput = document.getElementById("github");
const portfolioInput = document.getElementById("portfolio");
const summaryInput = document.getElementById("summary");


const previewName = document.getElementById("previewName");
const previewJob = document.getElementById("previewJob");
const previewEmail = document.getElementById("previewEmail");
const previewPhone = document.getElementById("previewPhone");
const previewAddress = document.getElementById("previewAddress");
const previewLinkedin = document.getElementById("previewLinkedin");
const previewGithub = document.getElementById("previewGithub");
const previewSummary = document.getElementById("previewSummary");

nameInput.addEventListener("input", () => {

    previewName.innerText =
        nameInput.value || "Your Name";

});

jobInput.addEventListener("input", () => {

    previewJob.innerText =
        jobInput.value || "Frontend Developer";

});

emailInput.addEventListener("input", () => {

    previewEmail.innerText =
        emailInput.value || "your@email.com";

});

phoneInput.addEventListener("input", () => {

    previewPhone.innerText =
        phoneInput.value || "+92 300 0000000";

});

addressInput.addEventListener("input", () => {

    previewAddress.innerText =
        addressInput.value || "Your Address";

});

linkedinInput.addEventListener("input", () => {

    previewLinkedin.innerText =
        linkedinInput.value || "linkedin.com";

});

githubInput.addEventListener("input", () => {

    previewGithub.innerText =
        githubInput.value || "github.com";

});

summaryInput.addEventListener("input", () => {

    previewSummary.innerText =
        summaryInput.value ||
        "Write your professional summary...";

});

const photoInput = document.getElementById("photo");

const previewPhoto =
document.getElementById("previewPhoto");

photoInput.addEventListener("change", function () {

    const file = this.files[0];

    if (file) {

        const reader = new FileReader();

        reader.onload = function (e) {

            previewPhoto.src = e.target.result;

        }

        reader.readAsDataURL(file);

    }

});

const addEducation = document.getElementById("addEducation");
const educationContainer = document.getElementById("educationContainer");
const previewEducation = document.getElementById("previewEducation");

function updateEducation() {

    previewEducation.innerHTML = "";

    const items = document.querySelectorAll(".education-item");

    items.forEach((item) => {

        const degree = item.querySelector(".degree").value;
        const institute = item.querySelector(".institute").value;
        const year = item.querySelector(".eduYear").value;

        previewEducation.innerHTML += `
            <div class="education-box">
                <h4>${degree || "Degree"}</h4>
                <span>${institute || "Institute"}</span>
                <span>${year || "Year"}</span>
            </div>
        `;

    });

}

addEducation.addEventListener("click", () => {

    const div = document.createElement("div");

    div.className = "education-item";

    div.innerHTML = `

        <input type="text" class="degree" placeholder="Degree">

        <input type="text" class="institute" placeholder="Institute">

        <input type="text" class="eduYear" placeholder="Year">

    `;

    educationContainer.appendChild(div);

    div.querySelectorAll("input").forEach(input => {

        input.addEventListener("input", updateEducation);

    });

});

document.querySelectorAll(".education-item input").forEach(input => {

    input.addEventListener("input", updateEducation);

});


const addExperience = document.getElementById("addExperience");
const experienceContainer = document.getElementById("experienceContainer");
const previewExperience = document.getElementById("previewExperience");

function updateExperience() {

    previewExperience.innerHTML = "";

    const items = document.querySelectorAll(".experience-item");

    items.forEach((item) => {

        const company = item.querySelector(".company").value;
        const position = item.querySelector(".position").value;
        const duration = item.querySelector(".duration").value;
        const desc = item.querySelector(".expDesc").value;

        previewExperience.innerHTML += `

        <div class="experience-box">

            <h4>${position || "Job Position"}</h4>

            <span>${company || "Company Name"}</span>

            <span>${duration || "Duration"}</span>

            <p>${desc}</p>

        </div>

        `;

    });

}

addExperience.addEventListener("click", () => {

    const div = document.createElement("div");

    div.className = "experience-item";

    div.innerHTML = `

        <input type="text" class="company" placeholder="Company Name">

        <input type="text" class="position" placeholder="Job Position">

        <input type="text" class="duration" placeholder="Duration">

        <textarea class="expDesc" rows="4"
        placeholder="Describe your work"></textarea>

    `;

    experienceContainer.appendChild(div);

    div.querySelectorAll("input,textarea").forEach(field => {

        field.addEventListener("input", updateExperience);

    });

});

document.querySelectorAll(".experience-item input,.experience-item textarea")
.forEach(field => {

    field.addEventListener("input", updateExperience);

});

const addSkill = document.getElementById("addSkill");
const skillContainer = document.getElementById("skillContainer");
const previewSkills = document.getElementById("previewSkills");

function updateSkills() {

    previewSkills.innerHTML = "";

    document.querySelectorAll(".skill").forEach((skill) => {

        if (skill.value.trim() != "") {

            previewSkills.innerHTML += `
                <li>${skill.value}</li>
            `;

        }

    });

}

addSkill.addEventListener("click", () => {

    const input = document.createElement("input");

    input.type = "text";

    input.className = "skill";

    input.placeholder = "Enter Skill";

    skillContainer.appendChild(input);

    input.addEventListener("input", updateSkills);

});

document.querySelectorAll(".skill").forEach(skill => {

    skill.addEventListener("input", updateSkills);

});

const addProject = document.getElementById("addProject");
const projectContainer = document.getElementById("projectContainer");
const previewProjects = document.getElementById("previewProjects");

function updateProjects() {

    previewProjects.innerHTML = "";

    document.querySelectorAll(".project-item").forEach((project) => {

        const title = project.querySelector(".projectTitle").value;
        const desc = project.querySelector(".projectDesc").value;

        previewProjects.innerHTML += `

        <div class="project-box">

            <h4>${title || "Project Name"}</h4>

            <p>${desc}</p>

        </div>

        `;

    });

}

addProject.addEventListener("click", () => {

    const div = document.createElement("div");

    div.className = "project-item";

    div.innerHTML = `

        <input type="text"
        class="projectTitle"
        placeholder="Project Name">

        <textarea
        class="projectDesc"
        rows="4"
        placeholder="Project Description"></textarea>

    `;

    projectContainer.appendChild(div);

    div.querySelectorAll("input,textarea").forEach(field => {

        field.addEventListener("input", updateProjects);

    });

});

document.querySelectorAll(".project-item input,.project-item textarea")
.forEach(field => {

    field.addEventListener("input", updateProjects);

});

const addCertificate = document.getElementById("addCertificate");
const certificateContainer = document.getElementById("certificateContainer");
const previewCertificates = document.getElementById("previewCertificates");

function updateCertificates() {

    previewCertificates.innerHTML = "";

    document.querySelectorAll(".certificate").forEach((certificate) => {

        if (certificate.value.trim() !== "") {

            previewCertificates.innerHTML += `
                <li>${certificate.value}</li>
            `;

        }

    });

}

addCertificate.addEventListener("click", () => {

    const input = document.createElement("input");

    input.type = "text";
    input.className = "certificate";
    input.placeholder = "Certificate Name";

    certificateContainer.appendChild(input);

    input.addEventListener("input", updateCertificates);

});

document.querySelectorAll(".certificate").forEach((certificate) => {

    certificate.addEventListener("input", updateCertificates);

});

const addLanguage = document.getElementById("addLanguage");
const languageContainer = document.getElementById("languageContainer");
const previewLanguages = document.getElementById("previewLanguages");

function updateLanguages() {

    previewLanguages.innerHTML = "";

    document.querySelectorAll(".language").forEach((language) => {

        if (language.value.trim() !== "") {

            previewLanguages.innerHTML += `
                <li>${language.value}</li>
            `;

        }

    });

}

addLanguage.addEventListener("click", () => {

    const input = document.createElement("input");

    input.type = "text";
    input.className = "language";
    input.placeholder = "Language";

    languageContainer.appendChild(input);

    input.addEventListener("input", updateLanguages);

});

document.querySelectorAll(".language").forEach((language) => {

    language.addEventListener("input", updateLanguages);

});

const referenceInput = document.getElementById("reference");
const previewReference = document.getElementById("previewReference");

referenceInput.addEventListener("input", () => {

    previewReference.innerText =
        referenceInput.value || "Available upon request.";

});

const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", () => {

    setTimeout(() => {

        previewName.innerText = "Your Name";
        previewJob.innerText = "Frontend Developer";
        previewEmail.innerText = "your@email.com";
        previewPhone.innerText = "+92 300 0000000";
        previewAddress.innerText = "Your Address";
        previewLinkedin.innerText = "linkedin.com";
        previewGithub.innerText = "github.com";
        previewSummary.innerText = "Write your professional summary...";
        previewReference.innerText = "Available upon request.";

        previewEducation.innerHTML = "";
        previewExperience.innerHTML = "";
        previewProjects.innerHTML = "";
        previewSkills.innerHTML = "";
        previewCertificates.innerHTML = "";
        previewLanguages.innerHTML = "";

        previewPhoto.src = "images/profile.png";

    }, 100);

});

updateEducation();
updateExperience();
updateSkills();
updateProjects();
updateCertificates();
updateLanguages();