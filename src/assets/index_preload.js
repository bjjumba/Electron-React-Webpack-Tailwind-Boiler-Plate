const { contextBridge, ipcMain, ipcRenderer } = require('electron')

let indexBridge={ 
    doSomething:async()=>{
      var result = await ipcRenderer.invoke("doSomething");
    },
    //our fetch with node fetch
    doSomethingFetch: async() => {
        var result = await ipcRenderer.invoke("doSomethingFetch");
        return JSON.parse(result)
        console.log(result)
    },
    doSomethingAxios: async() => {
        var result = await ipcRenderer.invoke("doSomethingAxios");
        return result
    }
}

ipcRenderer.on("gotData", (event, json) => {
    console.log(json);
})

contextBridge.exposeInMainWorld("indexBridge", indexBridge);