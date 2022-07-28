const swap=(arr,i,j)=>{
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}
const bubbleSort=(bars)=>{
    const duplicatearr=bars.slice();
    const sortedarr=[];

    for (let i = 0; i < duplicatearr.length; i++) {

            for (let j = 0; j < duplicatearr.length; j++) {
                sortedarr.push([j,j+1,null,null]);
            
                if (duplicatearr[j] > duplicatearr[j + 1]) {
                    swap(duplicatearr, j, j + 1);
                    sortedarr.push([j,j+1,duplicatearr[j],duplicatearr[j+1]]);
                }
            }
            sortedarr.push([null,null,null,i]);

    }
    return sortedarr;
}
export default bubbleSort;