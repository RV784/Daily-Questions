(function(){
    let btnAddFolder = document.querySelector("#btnAddFolder");
    let divContainer = document.querySelector("#divContainer");
    let pageTemplates = document.querySelector("#pageTemplates");
    let fid = 0;
    let folders = []; //this array will store all folder we create, so they would not be deleted when we refresh the page

    btnAddFolder.addEventListener("click", function(){
        let fname = prompt("Folder name?");
        if(fname == null){
            return;
        }

        let divFolderTemplate = pageTemplates.content.querySelector(".folder");
        let divFolder = document.importNode(divFolderTemplate, true);

        let divName = divFolder.querySelector("[purpose='name']");
        divName.innerHTML = fname;
        divFolder.setAttribute("fid", ++fid); //every folder will have attribute fid with values

        divContainer.appendChild(divFolder);

        let spanEdit = divFolder.querySelector("span[action='edit']");
        spanEdit.addEventListener("click", function(){
           let fname = prompt("Enter new folder name");
           if(!fname){
               return;
           }

           let divName = divFolder.querySelector("[purpose='name']");
           divName.innerHTML = fname;

           let folder = folders.find(f => f.id == parseInt(divFolder.getAttribute("fid")));
           folder.name = fname;
           persistFolders();
        });

        let spanDelete = divFolder.querySelector("span[action='delete']");
        spanDelete.addEventListener("click", function(){
           let flag = confirm("Do you want to delete this folder?" + divName.innerHTML);
           if(flag == true){
               divContainer.removeChild(divFolder);
           }

           let idx = folders.findIndex(f => f.id == parseInt(divFolder.getAttribute("fid")));
           folders.splice(idx, 1);
           persistFolders();
        });

        divContainer.appendChild(divFolder);
        folders.push({
            id: fid,
            name: fname
        });
        persistFolders();

    });

    function persistFolders(){
        console.log(folders);
        let fjson = JSON.stringify(folders);
        localStorage.setItem("data", fjson);
    }
})();