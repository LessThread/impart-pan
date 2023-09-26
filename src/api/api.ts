function getFileList(filelist:any)
{

    class FileUnit {
        num:number;
        filename: string;
        link: string;
      
        constructor(num:number|string,filename: string, link: string) {
          this.num = Number(num)
          this.filename = filename;
          this.link = link;
        }
      }

    let fileunits:any = []

    fetch("http://140.210.195.77:8000/list")
        .then(response => response.json())
        .then(json => {
            for(const i in json){
                let link = "http://140.210.195.77:8000/files/"+json[i];
                let fname = json[i]
                filelist.value[i] = new FileUnit(i,fname.slice(16),link)
            }
            //console.log(filelist)
        })
        .catch((e)=>{console.log(e)})

    
}

async function getDisk(){
    const t:any = await fetch("http://140.210.195.77:8000/disk")
    .then(res=>res.json())
    .then(res => {return res})
    return t;
}

export{
    getFileList,
    getDisk
}