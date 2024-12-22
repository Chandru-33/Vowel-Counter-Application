function checkvowels(){
    let text=document.getElementById("input").value;
    let vowels=0;
    text=text.toLowerCase();
    for (let i=0 ; i<text.length; i++){
        let char=text.charAt(i);
        if (isvowel(char)){
            vowels++;
        }
    }
    const res=document.getElementById("res");
    res.textContent="Total Vowel :"+vowels;
}
function isvowel(char){
    const v=["a","e","i","o","u"];
    return v.includes(char);
}