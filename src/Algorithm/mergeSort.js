let sortedarr = []

const merge = (dupbars, low, mid, high) => {
    let i = low, j = mid + 1

    const arr = [] 

    while((i <= mid) && (j <= high)){
        sortedarr.push([i, j, null, null])      
        if(dupbars[i] <= dupbars[j]){
            arr.push(dupbars[i++])
        } else {
            arr.push(dupbars[j++])
        }
    }

    while(i <= mid){
        sortedarr.push([i, null, null, null])
        arr.push(dupbars[i++])
    }

    while(j <= high){
        sortedarr.push([null, j, null, null])
        arr.push(dupbars[j++])
    }
    
    for(i=low;i<=high;i++){
        dupbars[i] = arr[i - low]
        sortedarr.push([i, null, dupbars.slice(), null]) 
    }

}

const mergeSortHelper = (dupbars, low, high) => {
    if(low >= high) 
        return 
    
    const mid = Math.floor((low + high) / 2)

    mergeSortHelper(dupbars, low, mid)
    mergeSortHelper(dupbars, mid + 1, high) 
    
    merge(dupbars, low, mid, high)
}

const mergeSort = (bars) => {
    sortedarr = []
    const dupbars = bars.slice() 
    
    mergeSortHelper(dupbars, 0, dupbars.length - 1)
    
    for(let i=0;i<dupbars.length;i++){
        sortedarr.push([null, null, null, i]) 
    }

    return sortedarr
}

export default mergeSort