//1º Criar os objetos/arrays para os elementos que serão manipulados://
const obj_tab_carros = document.querySelector('#tab_carros')

const obj_img_det = document.querySelector('#img_det')
const obj_p_nome= document.querySelector('#p_nome')
const obj_p_ano = document.querySelector('#p_ano')

const obj_card_ant = document.querySelector('#card_ant')
const obj_card_prox = document.querySelector('#card_prox')
const obj_img_card = document.querySelector('#img_card')
const obj_titulo_card = document.querySelector('#titulo_card')
const obj_p_ano_card = document.querySelector('#p_ano_card')
const obj_link_card = document.querySelector('#link_card')

let num_card = 0

const obj_txt_busca = document.querySelector('#txt_busca')
const obj_img_buscar = document.querySelector('#img_buscar')
const obj_sel_result= document.querySelector('#sel_result')
const obj_img_limpar = document.querySelector('#img_limpar')



//2º Adicionar os eventos para chamar as funções://
obj_card_ant.addEventListener('click', funCardAnterior)
obj_card_prox.addEventListener('click', funProximoCard)

obj_img_buscar.addEventListener('click', funBuscaCarro)
obj_img_limpar.addEventListener('click', funLimpaSelect)




//3º Declarar as funções para executar as ações://
function funLimpaSelect() {
    for (let i = (obj_sel_result.options.length - 1); i >= 0; i--){
        obj_sel_result.remove(i)
    }
}
function funBuscaCarro() {
    if(obj_txt_busca.value != '') {
        for (let i = 0; i < infos.length; i++){
            if(infos[i]['nome'].toLowerCase().includes(obj_txt_busca.value.toLowerCase())){
                const obj_option = document.createElement('option')
                obj_option.innerHTML = infos[i]['nome']
                obj_option.setAttribute('value', i)
                obj_sel_result.appendChild(obj_option)
            }
        }
    } else {
        alert('Digite algo no campo')
    }
}

function funProximoCard() {
    num_card++
    if(num_card == infos.length) {
        num_card = 0
    }
    funExibeCard(num_card)
}

function funCardAnterior() {
    num_card._card--
    if (num_card) {
        num_card = (infos.length - 1)
    }
    funExibeCard(num_card)
}

function funExibeCard(par_ind) {
    obj_img_card.setAttribute('src', infos[par_ind]['foto'])
    obj_img_card.setAttribute('alt', infos[par_ind]['mo,e'])
    obj_img_card.setAttribute('title', infos[par_ind]['nome'])
    obj_titulo_card.innerHTML = infos[par_ind]['nome']
    obj_titulo_card.style.color = infos[par_ind]['cor']
    obj_p_ano_card.innerHTML = 'Ano: ' + infos[par_ind]['ano']
    obj_link_card.setAttribute('href', infos[par_ind]['foto'])
}
funExibeCard(0)

function funMostraDetalhes(par_ind) {
    obj_img_det.setAttribute('src', infos[par_ind]['foto'])
    obj_img_det.setAttribute('alt', infos[par_ind]['nome'])
    obj_img_det.setAttribute('title', infos[par_ind]['nome'])
    obj_p_nome.innerHTML = infos[par_ind]['nome']
    obj_p_ano.innerHTML = 'Ano ' + infos[par_ind]['ano']
}



function funCarregaTabCarros() {
    for (let i = 0; i < infos.length; i++) {
        const obj_tr_novo = document.createElement('tr')
        const obj_td_novo = document.createElement('td')
        obj_td_novo.innerHTML = infos[i]['nome']
        obj_tr_novo.appendChild(obj_td_novo)
        obj_tab_carros.appendChild(obj_tr_novo)

        obj_td_novo.addEventListener('click', function() {funMostraDetalhes(i)})
    }
}

funCarregaTabCarros() 
