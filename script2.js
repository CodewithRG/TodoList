alert("hellos");
var elm = document.getElementById("tableBody" );
var add = document.getElementById("add" );
let elmTr = document.getElementById("tr");
let i=2;


add.addEventListener('click' , addContent );

function addContent(){
    let Tval = document.getElementById("title").value;
    let discrip = document.getElementById("description" ).value;
    console.log(Tval)
    console.log(discrip)


    let tr  = document.createElement('tr');

    // apends in tr
    let th  = document.createElement('th');
    th.textContent = i;
    i++;

    let td1  = document.createElement('td');
    td1.textContent = Tval;

    let td2  = document.createElement('td');
    td2.textContent = discrip;

    let td3  = document.createElement('td');
    let btn = document.createElement('button');
    btn.className = "btn btn-sm btn-primary";
    btn.textContent = "delete";
    td3.appendChild(btn);

    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    // apends in  titleBody
    elm.appendChild(tr)
}
