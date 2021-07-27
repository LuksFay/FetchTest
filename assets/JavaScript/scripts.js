const divContainer = document.querySelector('.div');

function llamarApi(){
    fetch('https://reqres.in/api/users?per_page=12')
    .then(res => res.json())
    .then( data => {
        tarjetas(data.data)
    })
};
function tarjetas(data){
    console.log('esto es data', data)

    data.forEach(element => {
        console.log(element.first_name)
        
        divContainer.innerHTML += 
        `<div class="completeCard">
            <div class="borderBox"> 
               <div class="imgBg"> <img src="${element.avatar}" alt="Profile Pic" class="profilePic"> </div>
                <div>
                    <h5>${element.first_name}</h5>
                    <button>EXTREME LIKE</button>
                </div>
            </div>    
        </div>`
    });

};

llamarApi()





