const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
const bubbleSort = (bars) => {
    const duplicatearr = bars.slice();
    const sortedarr = [];
    let i,j;
    for ( i = 0; i < duplicatearr.length; i++) {

        for ( j = 0; j < duplicatearr.length-i-1; j++) {
            sortedarr.push([j, j + 1, null, null]);

            if (duplicatearr[j] > duplicatearr[j + 1]) {
                swap(duplicatearr, j, j + 1);
                sortedarr.push([j, j + 1, duplicatearr.slice(), null]);
            }
        }
        sortedarr.push([null, null, null, j]);

    }
    return sortedarr;
}
export default bubbleSort;