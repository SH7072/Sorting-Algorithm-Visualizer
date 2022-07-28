let sortedarr = []

const swap = (arr, i, j) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const partition = (dupbars, low, high) => {
    const pivot = low 
    let j = low 

    for(let i = low + 1;i<=high;i++){
        sortedarr.push([i, pivot, null, null])
        if(dupbars[i] < dupbars[pivot]){
            j += 1 
            swap(dupbars, i, j)
            sortedarr.push([i, j, dupbars.slice(), null])
        }
    }

    swap(dupbars, pivot, j)
    sortedarr.push([pivot, j, dupbars.slice(), null])
    sortedarr.push([null, null, null, j])
    return j
}


const quickSortHelper = (dupbars, low, high) => {
    if(low >= high) {
        if(low === high) sortedarr.push([null, null, null, low])
        return
    } 

    const pivot = low + Math.floor(Math.random() * (high - low))

    swap(dupbars, low, pivot)
    sortedarr.push([low, pivot, dupbars.slice(), null])

    const mid = partition(dupbars, low, high)

    quickSortHelper(dupbars, low, mid - 1)
    quickSortHelper(dupbars, mid + 1, high)

    return
}

const quickSort = (blocks) => {
    const dupbars = blocks.slice() // Copying blocks array
    sortedarr = []
    
    quickSortHelper(dupbars, 0, dupbars.length - 1)
    
    return sortedarr
}

export default quickSort

