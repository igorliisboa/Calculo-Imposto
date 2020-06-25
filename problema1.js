var sm = 1045

function calc1() {
    if(renda.value < sm*2){
        window.alert('Insento de impostos!')
    } else if (renda.value > sm*2 ||
                renda.value < sm*3){
                    var alq = (renda.value*5)/100
                   window.alert(`Salário = ${renda.value}R$
Alíquota de 5% = ${alq}R$
Valor final = ${renda.value - alq}R$`) 
                } else if (parseInt(renda.value) > sm*3 ||
                    parseInt(renda.value) == sm*4 ||
                    parseInt(renda.value) < sm*5){
                        var alq = (renda.value*10)/100
                        var new2 = renda.value - alq
                       window.alert(`Salário = ${renda.value}R$
Alíquota de 10% = ${alq}R$
Valor final ${renda.value - alq}R$`) 
                    } else if (parseInt(renda.value) > sm*5 ||
                    parseInt(renda.value) == sm*6 ||
                    parseInt(renda.value) <= sm*7){
                            var alq = (renda.value*15)/100
                            var new3 = renda.value - alq
                           window.alert(`Salário = ${renda.value}R$
Alíquota de 15% = ${alq}R$
Valor final = ${renda.value - alq}R$`) 
                        } else if (parseInt(renda.value) > sm*7){
                                var alq = (renda.value*20)/100
                                var new4 = renda.value - alq
                               window.alert(`Salário = ${renda.value}R$
Alíquota de 20% = ${alq}R$
Valor final ${renda.value - alq}R$`)
                            }

}
