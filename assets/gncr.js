var app = new function(){
    this.init = function(){
        handleForm();
    };
    
    var handleForm = function(){
        $('button[type=submit]').click(function(event){
            event.preventDefault();
        });
    };
};

$(app.init);