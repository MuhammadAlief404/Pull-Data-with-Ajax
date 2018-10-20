function doLogin(e)
{
  // kalau dalam 1 form ada 2 input submit
    // value = $('#f_login').val();
  // if(value == "save")
  // {
  //   //logic save
  // }
  // else if(value == "del")
  // {
  //   //logic delete
  // }

  //fungsi dari javascript, untuk disable ajax,
  // data-ajax = false di form HTML, buat override data yang di post
  //agar menggunakan funsi sendiri, kalau tidak pakai data-ajax = false
  // data yang di kirim di convert dahulu ke ajax
  e.preventDefault();


  //simpan username ke localStorage
  var user = $('#username').val();
  localStorage.setItem("user",user);

  window.location.href = "home.html";

}

$(function()
{
  $('#f_login').submit(doLogin);
});
