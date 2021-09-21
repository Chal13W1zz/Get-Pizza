// Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }

                    form.classList.add('was-validated')
                }, false)
            })
    })()

    $(document).ready(function(){

        $("#get-pizza").click(function(e){
            e.preventDefault();
            var pizzaType = $("#pType option:selected").text();
            var pizzaSize = $("#pSize option:selected").text();
            var pizzaCrust = $("#pCrust option:selected").text();
            var topping = $('form input[type=radio]:checked').val();

            class PlaceOrder{
                constructor(type, size, crust, topping){
                    this.type = type;
                    this.size = size;
                    this.crust = crust;
                    this.topping = topping;
                }
            }

            var sizes = {
                small : 500,
                medium : 700,
                large : 900,
                ultralarge : 1100
            }

            var crusts = {
                gluten_free : 100,
                cracker : 150,
                crispy : 200,
                stuffed :250
            }

            var order = new PlaceOrder(pizzaType, pizzaSize, pizzaCrust, topping);
    
        });
    
    });
    
