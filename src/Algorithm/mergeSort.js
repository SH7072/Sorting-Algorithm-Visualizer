let sortedarr = [];

const merge = (duplicatearr, low, mid, high) => {
    let i = low;
    let j = mid + 1;

    const temp = [];

    while ((i <= mid) && (j <= high)) {

        sortedarr.push([i, j, null, null]);

        if (duplicatearr[i] <= duplicatearr[j]) {
            temp.push(duplicatearr[i]);
            i++;
        }
        else {
            temp.push(duplicatearr[j]);
            j++;
        }
    }

    while (i <= mid) {

        sortedarr.push([i, null, null, null]);
        temp.push(duplicatearr[i]);
        i++;
    }

    while (j <= high) {
        sortedarr.push([j, null, null, null]);
        temp.push(duplicatearr[j]);
        j++;
    }

    for (let k = low; k <= high; k++) {
        duplicatearr[k] = temp[k - low];
        sortedarr.push([k, null, null, null]);
    }

}


const mergeSortHelper = (duplicatearr, low, high) => {
    if (low >= high) {
        return;
    }
    const mid = Math.floor((low + high) / 2);
    mergeSortHelper(duplicatearr, low, mid);
    mergeSortHelper(duplicatearr, mid + 1, high);
    merge(duplicatearr, low, mid, high);
}



const mergeSort = (bars) => {
    sortedarr = [];
    const duplicatearr = bars.slice();
    mergeSortHelper(duplicatearr, 0, duplicatearr.length - 1);

    for (let i = 0; i < duplicatearr.length; i++) {
        sortedarr.push([ null, null, null,i]);
    }
    return sortedarr;
}

export default mergeSort;
