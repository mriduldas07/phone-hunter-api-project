const searchPhone = () =>{
    const searchText = document.getElementById('search-input').value;
    //clear search
    document.getElementById('search-input').value = '';
    //fetch phone api
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhone(data.data))
}
// display phone
const displayPhone = phones =>{
    const searchResult = document.getElementById('display-phone');
    document.getElementById('display-phone').innerHTML = '';
    phones.forEach(phone => {
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('row');
        div.innerHTML = `
        <div class="col">
        <div class="card mt-2 shadow-lg border border-info rounded">
          <img style="width:150px;" src="${phone.image}" class="card-img-top m-auto pt-2 " alt="...">
          <div class="card-body">
            <h4 class="card-title">${phone.phone_name} </h4>
            <h5 class="card-text">Brand: ${phone.brand} </h5>
            <button  type="button" class="btn btn-outline-info fw-bold m-3">Explore...</button>
          </div>
        </div>
      </div>
        `;
        searchResult.appendChild(div);
    });
}