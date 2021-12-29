(function(){
    let btn = document.querySelector("#myFirstButton");
    let divContainer = document.querySelector("#container");
    let myTemplates = document.querySelector("#myTemplates");

    btn.addEventListener("click", function(){
        let fname = prompt("enter a folder's name");
        if(fname == null){
            return;
        }

        let divFolderTemplate = myTemplates.content.querySelector(".folder");
        let divFolder = document.importNode(divFolderTemplate, true);

        divFolder.innerHTML = fname;
        divContainer.appendChild(divFolder);
    })

})();

// (function(){
//     let btn = document.querySelector("#myFirstButton");
//     let divContainer = document.querySelector("#container");
//     let myTemplates = document.querySelector("#myTemplates");

//     btn.addEventListener("click", function(){
//         let fname = prompt("Enter a folder's name");
        
//         let divFolderTemplate = myTemplates.content.querySelector(".folder");
//         let divFolder = document.importNode(divFolderTemplate, true);

//         divFolder.innerHTML = fname;
//         divContainer.appendChild(divFolder);

        
//     })

// })();