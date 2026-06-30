function useTemplate(template){

    localStorage.setItem("selectedTemplate", template);

    window.location.href = "builder.html";

}