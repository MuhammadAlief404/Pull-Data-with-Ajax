function getDetail(userId)
{
  var link = "https://jsonplaceholder.typicode.com/users/" + userId;

  var opt =
  {
      type:'GET',
      url : link
  };

  var request = $.ajax(opt);
  request.done(function(res)
  {
    $('#name').text(res.name);
    $('#username').text(res.username);
    $('#email').text(res.email);
  });
}

$(function ()
{
  //ambil paramater di link mulai dari ?
  var params = window.location.search;
  var search = new URLSearchParams(params);

  //cara 1 untuk ambil user_id / GET paramater dari URL
  var id = search.get('user_id');

  //cara 2
  // var id = search.has('user_id');
  getDetail(id);
});
