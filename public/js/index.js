function sendData(){
    var description = document.getElementById('mydescription').value;
    var author = document.getElementById('myauthor').value;
    console.log(description);
    $.ajax({
        url: '/test',
        success: function(res){
            console.log(res);
            $('#notes').html(
                '<div>'+res.note.description+'</div><br>'+
                '<div>'+res.note.createdDate+'</div><br>'+
                '<div>'+res.note.author+'</div><br>'
            )
        },
        method: 'POST',
        data: {description: description,
              author: author}
    })
}

$('#btn').click(()=>sendData());
