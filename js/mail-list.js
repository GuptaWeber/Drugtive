function postEmailToGoogle() {
                var field1 = $("#subscribeemail").val();
                 
                if(field1 == ""){
                    alert('Please Fill your Email');
                    document.getElementById("email").focus();
                    return false;
                }

                
    
                $.ajax({
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSegmnxsc-a1-gSKtZhq3GoVhNznE37jdyceY1WjO95tuRkMIw/formResponse?",
                    data: {"entry.1282620113": field1},
                    type: "POST",
                    dataType: "xml",
                    success: function(d)
                    {
                        location.reload();
                    },
                    error: function(x, y, z)
                        {
                            location.reload();
                        }
                });
                return false;
            }