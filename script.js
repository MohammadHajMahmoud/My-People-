function appendInfo() {
  $.ajax({
    method: "GET",
    url: `https://randomuser.me/api/`,
    success: function (data) {
      render(data)
    },
    error: function (xhr, text, error) {
      console.log(text);
    },
  });
}
const render = function (data) {
  const source = $('#mypeople-template').html();
  const template = Handlebars.compile(source)
  const somehtml = template(data);
  $("#cards").append(somehtml)
}

function postCards(numOfCards) {
  for (let i = 0; i < numOfCards; i++) {
    appendInfo();
  }
}

postCards(9);

