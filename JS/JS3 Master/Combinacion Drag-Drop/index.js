const zona = document.querySelector(".zona-arrastre");

zona.addEventListener("dragover", e => {
    e.preventDefault();
    changeStyle(e.srcElement, "#444");
})
zona.addEventListener("dragleave", e=> {
    e.preventDefault();
    changeStyle(e.srcElement, "888")
})
zona.addEventListener("drop", e=>{
    e.preventDefault();
    changeStyle(e.srcElement, "#888");
    cargarArchivo(e.dataTransfer.files[0]);
})

const changeStyle = (obj, color)=> {
    obj.style.color = color ;
    obj.style.border = `4px dashed ${color}`;
}

const cargarArchivo = ar => {
    const reader = new FileReader();
    reader.readAsText(ar);
    reader.addEventListener("load", e=> {
        document.querySelector(".resultado").textContent = e.currentTarget.result;
    })
}

//Para una imagen hacemos lo siguiente
//const cargarArchivo = ar => {
//      const reader = new FileReader();    
//      reader.readAsDataURL(ar);
//      reader.addEventListener("load", e=>{
//          let url = URL.createObjectURL(ar);
//          let img = document.createElement ("IMG");
//          img.setAttribute("src", url);
//          document.querySelector(".resultado").appendChild(img);
//  })
//}


//Para un video hacemos lo siguiente
//const cargarArchivo = ar => {
//      const reader = new FileReader();    
//      reader.readAsArrayBuffer(ar);
//      reader.addEventListener("load", e=>{
//          let video = new Blob([new Uint8Array(e.currentTarget.result)],{type: `video/mp4`})
//          let url = URL.createObjectURL(video);
//          let img = document.createElement ("VIDEO");
//          img.setAttribute("src", url);
//          document.querySelector(".resultado").appendChild(img);
//          img.play()
//  })
//}