setInterval(function(){
  if(document.getElementById('refresh').checked == true && document.page.position.options[document.page.position.selectedIndex].value != 0){
    refresh();
  }
},1000)
function gacha(){
  async function fetchitem() {
    var respond = document.page.position.options[document.page.position.selectedIndex].className;
    if(respond != 0){
      var btsg = 0;
      var full = 0;
      for(var bts = 1; bts <= 10; bts++){
        const url = 'https://spreadsheets.google.com/feeds/cells/1JYI6SQtEwy8DSIkb75FNUds5Trc6OnThncZ6nykUlJ0/1/public/full/R' +  respond + 'C' + bts + '?alt=json';
        const response = await fetch(url);
        const data = await response.json();
        var gtv = data.entry.content.$t;
        var voltage = parseFloat(gtv);
        console.log(gtv);
        console.log(voltage);
        if(voltage > 0.5){
          btsg +=1;
        }
        if(voltage > 1.4){
          full +=1;
        }
      }
      document.getElementById('result1').textContent = btsg;
      document.getElementById('result2').textContent = full;
      var i = document.page.position.options[document.page.position.selectedIndex].value;
      const urllatitude = 'https://spreadsheets.google.com/feeds/cells/1IzQF21IN5CYe_8bHOACKPZMfaQSGmkxOsr4xEKWEMJM/1/public/full/R' +  i + 'C2?alt=json';
      const responselatitude = await fetch(urllatitude);
      const datalatitude = await responselatitude.json();
      var latitude = datalatitude.entry.content.$t;
      const urllongitude = 'https://spreadsheets.google.com/feeds/cells/1IzQF21IN5CYe_8bHOACKPZMfaQSGmkxOsr4xEKWEMJM/1/public/full/R' +  i + 'C3?alt=json';
      const responselongitude = await fetch(urllongitude);
      const datalongitude = await responselongitude.json();
      var longitude = datalongitude.entry.content.$t;
      const urlmap = "https://www.google.com/maps/d/u/0/embed?mid=19P06bxrF_KkMGpVOeqQlluoYafzRHG4M&ll=" + latitude + "%2C" + longitude +"&z=18";
      document.getElementById('link').src = urlmap;
    }
    else{
      document.getElementById('result1').textContent = '0';
      document.getElementById('result2').textContent = '0';
      document.getElementById('link').src = 'https://www.google.com/maps/d/embed?mid=19P06bxrF_KkMGpVOeqQlluoYafzRHG4M&usp';
    }
  }
  fetchitem();
};
function refresh(){
  async function newvalue() {
    var respond = document.page.position.options[document.page.position.selectedIndex].className;
    if(respond != 0){
      var btsg = 0;
      var full = 0;
      for(var bts = 1; bts <= 10; bts++){
        const url = 'https://spreadsheets.google.com/feeds/cells/1JYI6SQtEwy8DSIkb75FNUds5Trc6OnThncZ6nykUlJ0/1/public/full/R' +  respond + 'C' + bts + '?alt=json';
        const response = await fetch(url);
        const data = await response.json();
        var gtv = data.entry.content.$t;
        var voltage = parseFloat(gtv);
        console.log(gtv);
        console.log(voltage);
        if(voltage > 0.5){
          btsg +=1;
        }
        if(voltage > 1.4){
          full +=1;
        }
      }
      document.getElementById('result1').textContent = btsg;
      document.getElementById('result2').textContent = full;
    }
  }
  newvalue();
};