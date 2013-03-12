var socket = io.connect('http://localhost/');
             $(document).ready(function() {
            console.log("start");
            
            var content = $('#content');

            socket.on('connect', function() {
                 alert("connected");

            });
            socket.on('message', function(data){
                  $('#mmm').append($('<li></li>').text(data));
            }) ;

            socket.on('disconnect', function() {
                console.log('disconnected');
                content.html("<b>Disconnected!</b>");
            });
           });

