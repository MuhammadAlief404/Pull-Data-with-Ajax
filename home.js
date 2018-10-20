function save(userId)
{
  var username = localStorage.getItem("user");

  var data = localStorage.getItem('u_'+username);

  var arr;

  if(!data)
  {
      arr = [];
  }
  else
  {
      //karena localStorage tidak bisa simpan array, jadi DATA harus di convert dulu jadi JSON
      arr = JSON.parse(data);
  }
  arr.push(userId);

  data = JSON.stringify(arr);
  localStorage.setItem('u_' + username, data);
}

function AddList(userData)
{
  for (var i = 0; i < userData.length; i++)
  {
    var temp = userData[i];
    var name = temp.name;
    var userId = temp.id;

    //cara 1
    // var hName = '<h3>' + name + '</h3>';

    //cara 2, menggunakan apostle symbol
    var hName = `<h3>${name}</h3>`;
    var aDetail = `<a data-ajax="false" href="detail.html?user_id=${userId}" data-role="button">Detail</a>`;
    var aSave = `<a data-role="button" onClick="save(${userId})">Save</a>`;

    //jadiin satu komponen list
    var item = `<li><div>${hName}${aDetail}${aSave}</div></li>`;

    //tambahkan list nya
    //menggunakan listview('refresh'); karena jQuery meng-construt komponen2
    // yang ada saat di create, sedangkan kita menambakan komponen baru di listview
    // saat jQuery sudah selesai render

    //cara 1
    // $('#lv_user').append(item).listview('refresh');

    //cara 2
    //kalau mau re-construt komponen biasa, bisa menggunakan trigger('create') aja
    $('#lv_user').append(item);
    $('#lv_user').trigger('create');

    //kalau mau re-construct listview menggunakan ini
    $('#lv_user').listview('refresh');
  }
}

function getData()
{
  var link = "https://jsonplaceholder.typicode.com/users";

  //masukin format ke variable
  var opt = {
    type: "GET",
    url: link
    // dataType: "script"
  }

   var request = $.ajax(opt);

   //ketika data sudah terambil / request sudah done
   //paramater di dalam function untuk mengambil hasil request
   request.done(function (response)
   {
     AddList(response);
   });
}

$(function(){
  getData();
})
