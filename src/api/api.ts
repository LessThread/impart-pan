function getFileList(filelist:any)
{
    fetch("http://localhost:8000")
        .then(response => response.json())
        .then(json => {
            for(const i in json){
                filelist.value[i] = json[i]
            }
            console.log(filelist)
        })
        .catch(()=>{console.log(filelist)})
}

export{
    getFileList
}