// About JSON
// obj = [ "harry","I m harry"]
// jso = JSON.stringify(obj);
// console.log(jso);
// paresd = JSON.parse(`[ "harry","I m harry"]`);
// console.log(paresd)


// add = document.getElementById("add");
 // table body add
 add=document.getElementById("add");
 add.addEventListener("click", getAndUpdate());
 update();

 function deleted(itemIndex){
     console.log("delete",itemIndex);
     itemJsonArrayStr = localStorage.getItem('itemJson');
     itemJsonArray = JSON.parse(itemJsonArrayStr);
     // delete index of array
     itemJsonArray.splice(itemIndex , 1);
     localStorage.setItem('itemJson' , JSON.stringify(itemJsonArray));
     update();
 
 }


function getAndUpdate(){
    console.log("Udateing...");
    tit = document.getElementById('title').value;
    descri = document.getElementById('description').value;

    if(localStorage.getItem('itemJson')==null){
        itemJsonArray = [];
        itemJsonArray.push([tit,descri]);
        localStorage.setItem('itemJson' , JSON.stringify(itemJsonArray));

    }
    else
    {
        itemJsonArrayStr = localStorage.getItem('itemJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr)
        itemJsonArray.push([tit,descri]);
        localStorage.setItem('itemJson' , JSON.stringify(itemJsonArray));

    }

    update();
}

function update(){

        if(localStorage.getItem('itemJson')==null){
            itemJsonArray = [];
            localStorage.setItem('itemJson' , JSON.stringify(itemJsonArray))
        }

        else
        {
            itemJsonArrayStr = localStorage.getItem('itemJson')
            itemJsonArray = JSON.parse(itemJsonArrayStr)
        
        }
        let tableBody = document.getElementById('tableBody');
        let str = "";

        itemJsonArray.forEach((element , index)=> {
            str+= `
        <tr>

        <th scope="row">${index+1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-sm btn-primary" onclick="deleted(&{index})"> delete </button>
        <td>

        </tr>
        `
    });
    tableBody.innerHTML = str;
}
   

