document.querySelector('#btn-logout').addEventListener('click',()=>{
    window.open('./login.html','_self')
})

function addBtn(){
    let itemName = document.querySelector('#name').value;
    let itemPrice = document.querySelector('#price').value;
    let image = document.querySelector('#imageUrl').value
    let cardDiv = document.querySelector('#main-card');

    if(itemName === '' || itemPrice === ''){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Enter given Requirements",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    } else {
        cardDiv.innerHTML += `
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">${itemName}</h5>
              <p class="card-text">${itemPrice}</p>
              <a href="#" class="btn btn-success">Buy Now</a>
            </div>
          </div>
        </div>
        `;
        document.querySelector('#name').value = '';
        document.querySelector('#price').value = '';
        document.querySelector('#imageUrl').value = '';
    }
}
