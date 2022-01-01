(function(){ //iffy
    let btnAddFolder = document.querySelector("#btnAddFolder");
    let divContainer = document.querySelector("#divContainer");
    let pageTemplates = document.querySelector("#pageTemplates");
    let folders = [];
    let fid = -1;

    btnAddFolder.addEventListener("click", addFolder);

    function addFolder(){
       let fname = prompt("Enter a new folder name");
       if(!!fname){
           let fidx = folders.findIndex(f => f.name == fname);
           if(fidx == -1){
               fid++;
               folders.push({
                   id: fid,
                   name: fname
               });
               addFolderHTML(fname, fid);
               saveToStorage();
           }else{
               alert(fname + " already exists!");
           }
       }else{
           alert("Please enter something");
       }
    }

    function editFolder(){

    }

    function deleteFolder(){
        let divFolder = this.parentNode;
        let divName = divFolder.querySelector("[purpose = 'name']");

        let flag = confirm("Are you sure you want to delete " + divName.innerHTML + " ?");
        if(flag == true){
            //ram 
            let fidx = folders.findIndex(f => f.name == divName.innerHTML);
            folders.splice(fidc, 1);

            //html
            divContainer.removeChild(divFolder);

            //storage
            saveToStorage();
        }

    }

    function addFolderHTML(fname, fid){
        let divFolderTemplate = pageTemplates.content.querySelector(".folder");
        let divFolder = document.importNode(divFolderTemplate, true);

        let divName = divFolder.querySelector("[purpose = 'name']");
        let spanEdit = divFolder.querySelector("[action = 'edit']");
        let spanDelete = divFolder.querySelector("[action = 'delete']");

        divFolder.setAttribute("fid", fid);
        divName.innerHTML = fname;
        spanEdit.addEventListener("click", editFolder);
        spanDelete.addEventListener("click", deleteFolder);

        divContainer.appendChild(divFolder);
    }

    function saveToStorage(){
        let fjson = JSON.stringify(folders);
        localStorage.setItem("data", fjson);

    }

    function loadFromStorage(){
        let fjson = localStorage.getItem("data");
        if(!!fjson){
            folders = JSON.parse(fjson);
            folders.forEach(f => addFolderHTML(f.name, f.if));
        }
    }

    loadFromStorage();
})();