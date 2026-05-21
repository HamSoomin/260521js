//プロフィール更新
$("#updateBtn").click(function() {
    const name= $("#nameInput").val();
    const text= $("#textInput").val();
    const img= $("#imgInput").val();

    $("#name").html(name);
    $("#profile").html(text);

    if (img !== "") {
        $("#profileImg").attr("src", img);
    }
});

// プロフィール更新
$("#updateBtn").click(function() {
  const name = $("#nameInput").val();
  const text = $("#textInput").val();
  const img = $("#imgInput").val();

  $("#name").html(name);
  $("#profile").html(text);

  if (img !== "") {
    $("#profileImg").attr("src", img);
  }
});

$("#addHobby").click(function() {
    const hobby= $("#hobbyInput").val();
    $("#hobbyList").append(`
        <li>
            <span>${hobby}</span>
            <button class="deleteBtn">削除</button>
        </li>    
    `);
});

$(document).on("click", "deleteBtn", function() {
    $(this).parent().remove();
});

$("#hideDeleteBtn").click(function() {
    $(".deleteBtn").hide();
});

$("#showDeleteBtn").click(function() {
    $(".deleteBtn").show();
});