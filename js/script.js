
//search btn
const searchPhone = () =>{
  const searchText = document.getElementById('search-input').value;
  const searchTextNew = searchText.toLowerCase();
    // spinnerFunction call
    toggleSpinner('block')
    //clear search
    document.getElementById('search-input').value = '';
    if (searchText === '') {
      displayError('block');
    }
    else if(searchTextNew) {
        //fetch phone api
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhone(data.data))
  }  
}
// error display on UI
const displayError = displayError =>{
    document.getElementById('error-result').style.display = displayError;
}
// display phone
const displayPhone = phones =>{
      const searchResult = document.getElementById('display-phone');
      document.getElementById('display-phone').textContent = '';
      document.getElementById('display-details').textContent = '';
      phones.slice(0,20).forEach(phone => {
          const div = document.createElement('div');
          div.classList.add('row');
          div.innerHTML = `
          <div class="col">
          <div class="card mt-2 shadow-lg border border-info rounded">
            <img style="width:150px;" src="${phone.image}" class="card-img-top m-auto pt-2 " alt="...">
            <div class="card-body">
              <h4 class="card-title">${phone.phone_name} </h4>
              <h5 class="card-text">Brand: ${phone.brand} </h5>
              <button onclick="exploreDetailes('${phone.slug}')" type="button" class="btn btn-outline-info fw-bold m-3">Explore...</button>
            </div>
          </div>
        </div>
          `;
          searchResult.appendChild(div);
      });
      //spinnerFunction call
      toggleSpinner('none')
      displayError('none')
    }
// exploring phone details
const exploreDetailes = phoneId =>{
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
    .then(res =>res.json())
    .then(data => displayDetails(data.data))
}
//display phone detailes
const displayDetails = (details) =>{
    const detailsResult = document.getElementById('display-details');
    document.getElementById('display-details').textContent ='';
    const div = document.createElement('div');
    div.classList.add('row');
    div.innerHTML = `
    <div class="col-lg-6 col-12 mx-auto">
    <div class="card mt-2 shadow-lg border border-info rounded">
      <img style="width:150px;" class="card-img-top m-auto pt-2" src="${details.image}" alt="Card image">
      <div class="card-body">
        <h3 class="card-title text-success ">${details.name} </h3></br>
        <h4 class="card-title"><span class="text-primary">Brand</span>: ${details.brand} </h4>
        <h3 class="card-title"><span class="text-primary">ReleaseDate:</span> ${details.releaseDate ? details.releaseDate: ''} </h3>
        <h4 class="card-title"><span class="text-primary">Chipset:</span> ${details.mainFeatures.chipset ? details.mainFeatures.chipset: ''} </h4>
        <h4 class="card-title"><span class="text-primary">Display Size:</span> ${details.mainFeatures.displaySize ? details.mainFeatures.displaySize: ''} </h4>
        <h4 class="card-title"><span class="text-primary">Memory:</span> ${details.mainFeatures.memory ? details.mainFeatures.memory: ''} </h4></br>
        <h3 class="text-center text-danger">Sensors</h3></br>
        <h4 class="card-title"><span class="text-primary">Sensors:</span> ${details.mainFeatures.sensors ? details.mainFeatures.sensors: ''} </h4>
        <h4 class="card-title"><span class="text-primary">Storage:</span> ${details.mainFeatures.storage ? details.mainFeatures.storage: ''} </h4></br>
        <h3 class="text-center text-danger">Others</h3></br>
        <h4 class="card-title"><span class="text-primary">Bluetooth:</span> ${details.others.Bluetooth ? details.others.Bluetooth: ''} </h4>
        <h4 class="card-title"><span class="text-primary">GPS:</span> ${details.others.GPS ? details.others.GPS: ''} </h4>
        <h4 class="card-title"><span class="text-primary">NFC:</span> ${details.others.NFC ? details.others.NFC: ''} </h4>
        <h4 class="card-title"><span class="text-primary">Radio:</span> ${details.others.Radio ? details.others.Radio: ''} </h4>
        <h4 class="card-title"><span class="text-primary">USB:</span> ${details.others.USB ? details.others.USB: ''} </h4>
        <h4 class="card-title"><span class="text-primary">WLAN:</span> ${details.others.WLAN ? details.others.WLAN: ''} </h4>
        
      </div>
    </div>
  </div>
    `;
    detailsResult.appendChild(div);
}
  //toggle spinner
  const toggleSpinner = displayStyle =>{
    document.getElementById('spinner').style.display = displayStyle;
  } 