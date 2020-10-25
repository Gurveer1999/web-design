function submitVal() {
    var firstName = $("#first").val();
    var lastName = $("#last").val();
    var phone = $("#phone").val();
    var studentId = $("#idd").val();
    var address = $("#address").val();
    var age = $("#age").val();
    var vehicle = $(".radio:checked").val();
    var gender = $( "#gender option:selected" ).val();
    var life = $( "#life option:selected" ).val();
    var group = $("#bloodGroup option:selected")
            $("#user").submit(function(e){
    e.preventDefault();
});
    $("#dataBoard").empty();
    addData(firstName, lastName, phone, studentId, address, age, vehicle, gender, life, group);
}

function addData(firstName, lastName, phone, studentId, address, age, vehicle, gender, life, group){
    $("#dataBoard").append('<li>First Name: '+ firstName + '</li>');
    $("#dataBoard").append('<li>Last Name: '+ lastName + '</li>');
    $("#dataBoard").append('<li>Phone Number: ' + phone + '</li>');
    $("#dataBoard").append('<li>Student Id: ' + studentId + '</li>');
    $("#dataBoard").append('<li>Address: ' + address + '</li>');
    $("#dataBoard").append('<li>Age: ' + age +'</li>');
    $("#dataBoard").append('<li>Own a car: ' + vehicle + '</li>');
    $("#dataBoard").append('<li>Gender: ' + gender + '</li>');
    $("#dataBoard").append('<li>Martial Status: ' + life + '</li>');
    $("#dataBoard").append('<li>Blood Group: ' + group + '</li>');
}    