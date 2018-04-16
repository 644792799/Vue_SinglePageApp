export const GetGlobalConfig = function(vpath, Axios){
    let config = {};
    Axios.get(vpath + Math.random()).then(response => {
        if (200 == response.status) {
            for(let i in response.data){
                config[i] = response.data[i];
            }
        }
    }).catch(err => {
        console.error(err);
    });
    return config;
}

export const GetGlobalConfigAsync = async function(vpath, Axios){
    let config = {};
    let res = await Axios.get(vpath + Math.random()).then(response => {
        if (200 == response.status) {
            for(let i in response.data){
                config[i] = response.data[i];
            }
        }
    }).catch(err => {
        console.error(err);
    });
    return config;
}
