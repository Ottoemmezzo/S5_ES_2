var btnBudget=document.getElementById("btnBudget");


btnBudget.addEventListener("click",startSpese);

function startSpese(){
    let msg=document.getElementById("msg");
    let lista=document.getElementById("lista");
    let budget=document.getElementById("budget").value;
    let spesa=[];
    let i=0;
    
    lista.innerHTML+=`<li>inizio</li>`;
    do{ 
        spesa[i]=Math.floor(Math.random()*100)+1;
        spesaTot=spesa.reduce(somma);
        lista.innerHTML+=`<li> ${i+1}°importo: ${spesa[i]}</li>\n
                          nuovo budget aggiornato: ${budget-spesaTot} <br>`;
        i++;
    } while(spesaTot<=budget-200)
    msg.innerHTML=`Hai speso:${spesaTot}!===>Hai raggiunto il tetto di spesa Massima!\n
                   Hai acquistato n°:${i+1}oggetti `;


}

function somma(total,num){
    return total+num;
}

