var url='http://localhost:5000/amigos';

var agregarlista = function(){

    $.get(`${url}`, function(friends){
        console.log(friends);

        friends.forEach(elemento => {
            $('#lista').append(`<li id="${elemento.id}"> ${elemento.name} X </li>`) 
        });
    })
};

$('#boton').click(agregarlista);


$('#search').click(function(){
    let id=$('#input').val();
    if(id){
        $.get(`${url}/${id}`, function(friends){
            $('#amigo').text(`${friends.name} ${friends.age} ${friends.email}`);
            $('#imput').val("");

        })
    }else{
        $('#amigo').text('Tenes que ingresar un ID')
    }
});

var deletefriend = function(){
    let id=$('#inputDelete').val();
    let firend;
    if(id){
        $.get(`${url}/${id}`, function(f){
            firend = f;
        });
        $.ajax({
            url: `${url}/${id}`,
            type: "DELETE",
            success: function(){
                $('#success').text(`Tu amigo, ${firend.name} fue eliminado con exito`);
                $('#inputDelete').val("");
                agregarlista();
            } 
        })
    }else{
        $('#success').text('Tenes que usar un ID.')
    }
}

$('#delete').click(deletefriend);