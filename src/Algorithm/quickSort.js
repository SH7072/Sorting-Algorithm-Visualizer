let sortedarr = [];

const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
const partition = (duplicatearr, low, high) => {
    const pivot = 1;
    let j = 1;
    for (let i = low + 1; i <= high; i++) {
        sortedarr.push([i, pivot, null, null]);
        if (duplicatearr[i] < duplicatearr[pivot]) {
            j++;
            swap(duplicatearr, i, j);
            sortedarr.push([i, j, duplicatearr.slice(), null]);
        }
    }

    swap(duplicatearr, pivot, j);
    sortedarr.push([pivot, j, duplicatearr.slice(), null]);
    sortedarr.push([null, null, null, j]);
    return j;
}

const quickSortHelper = (dupbars, low, high) => {
    if(low >= high) {
        if(low === high) sortedarr.push([null, null, null, low])
        return
    } 

    const pivot = low + Math.floor(Math.random() * (high - low))

    swap(dupbars, low, pivot)
    sortedarr.push([low, pivot, dupbars.slice(), null])

    const m = partition(dupbars, low, high)

    quickSortHelper(dupbars, low, m - 1)
    quickSortHelper(dupbars, m + 1, high)

    return
}

const quickSort = (bars) => {
    const dupbars = bars.slice() // Copying blocks array
    sortedarr = []
    
    quickSortHelper(dupbars, 0, dupbars.length - 1)
    
    return sortedarr;
}

export default quickSort;