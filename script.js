const input=document.getElementById('radius');
const disp=document.getElementById('disp');
const clickButton=document.getElementById('but');
clickButton.addEventListener('click',function(){
   
    let volume;
    volume= 1.33333 * 3.14 * (input.value) * (input.value) * (input.value);
    disp.value=volume.toFixed(4);
})