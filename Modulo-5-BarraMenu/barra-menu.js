function addNewLinkVertical() {
    var newLinkText = document.getElementById("newLinkVertical").value;
    var navList = document.getElementById("nav-list");
    var newListItem = document.createElement("li");
    var newLink = document.createElement("a");
    newLink.href = "#";
    newLink.textContent = newLinkText;
    newListItem.appendChild(newLink);
    navList.appendChild(newListItem);
    
    // Actualizar el código fuente vertical
    updateCodeSnippetVertical();
  }
  
  function updateCodeSnippetVertical() {
    var codeSnippetVertical = document.getElementById("codeSnippetVertical");
    codeSnippetVertical.textContent = document.getElementById("nav-list").outerHTML;
  }
  
  function addNewLinkHorizontal() {
    var newLinkText = document.getElementById("newLinkHorizontal").value;
    var navList = document.getElementById("nav-list-horizontal");
    var newListItem = document.createElement("li");
    var newLink = document.createElement("a");
    newLink.href = "#";
    newLink.textContent = newLinkText;
    newListItem.appendChild(newLink);
    navList.appendChild(newListItem);
    
    // Actualizar el código fuente horizontal
    updateCodeSnippetHorizontal();
  }
  
  function updateCodeSnippetHorizontal() {
    var codeSnippetHorizontal = document.getElementById("codeSnippetHorizontal");
    codeSnippetHorizontal.textContent = document.getElementById("nav-list-horizontal").outerHTML;
  }
  