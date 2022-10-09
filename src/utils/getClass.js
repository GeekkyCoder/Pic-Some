export default function getClass(i){
    if(i%2===0){
        return "wide"
    }else if(i%2!==0){
        return "big"
    }else {
        return "tall"
    }
}