//Criar os objetos/arrays para os elementos que serão manipulados//
const array_rb_sel_ling = document.querySelectorAll('[name="rb_sel_ling"]')
const obj_img_ling = document.querySelector('#img_ling')
const obj_pre_ling = document.querySelector('#pre_ling')

//Adicionar o evento para chamar a função//
for (const obj_rb_sel_ling of array_rb_sel_ling) {
    obj_rb_sel_ling.addEventListener('click', funMudaImgLing)
}

//Declarar a função para executar as ações://
function funMudaImgLing() {
    for (const obj_rb_sel_ling of array_rb_sel_ling) {
        if (obj_rb_sel_ling.checked) {
            obj_img_ling.setAttribute('src', 'imagens/' + obj_rb_sel_ling.value + '.png')
            obj_img_ling.setAttribute('alt', obj_rb_sel_ling.value)
            obj_img_ling.setAttribute('title', obj_rb_sel_ling.value)
            obj_pre_ling.innerHTML = 'Logo ' + obj_rb_sel_ling.value    
        }
    }
}

//Criar os objetos para os elementos que serão manipulados//
const array_img_figuras = document.querySelectorAll('.figuras')
const obj_div_adiciona_figura = document.querySelector('#div_adiciona_figura')

//Criar novos objetos para serem manipulados//
const obj_img_nova = document.createElement('img')
const obj_input_novo = document.createElement('input')

//Adicionar os eventos para chamar a função//
for (const obj_img_fig of array_img_figuras) {
    obj_img_fig.addEventListener('click', function() {funAdicionaFigura(this.src, this.alt)})
}

//Declarar a função para executar as ações//
function funAdicionaFigura(par_src, par_alt) {
    obj_img_nova.setAttribute('src', par_src)
    obj_img_nova.setAttribute('alt', par_alt)
    obj_img_nova.setAttribute('title', par_alt )
    obj_div_adiciona_figura.appendChild(obj_img_nova)
    obj_input_novo.setAttribute('value', par_alt)
    obj_input_novo.setAttribute('disable', true)
    obj_input_novo.setAttribute('type','text')
    obj_input_novo.setAttribute('class', 'novo_input')
    obj_div_adiciona_figura.appendChild(obj_input_novo)
}

// Criar os objetos para os elementos que serão manipulados//
const array_titulos = document.querySelectorAll('.titulo')

//Adicionar o evento para chamar a função//
for (const obj_titulo of array_titulos) {
    obj_titulo.addEventListener('click', function() {funExibeTexto(this)})
}

//Declarar a função para executar as ações//
function funExibeTexto(par_titulo) {
    const obj_texto = par_titulo.children[0]
    if (obj_texto.style.display == 'block') {
        obj_texto.style.display = 'none'
    }
    else {
        obj_texto.style.display = 'block'
    }  
}

//Criar os objetos para os elementos que serão manipulados//
const obj_div_modal = document.querySelector('#div_modal')
const obj_bt_fechar = document.querySelector('#p_fechar span')
const array_imagens = document.querySelectorAll('#linguagens img')
const obj_img_modal = document.querySelector('#img_modal')
const obj_p_modal = document.querySelector('#p_modal')

//Adicionar os eventos para chamar as funções//
for (const obj_img_ling of array_imagens) {
    obj_img_ling.addEventListener('click', function() {funExibeModal(this.src, this.alt)})
}

obj_bt_fechar.addEventListener('click', funFechaModal)

//Declarar a função para executar as ações//
function funExibeModal(par_src, par_alt) {
    obj_img_modal.setAttribute('src', par_src)
    obj_img_modal.setAttribute('alt', par_alt)
    obj_img_modal.setAttribute('title', par_alt)
    obj_p_modal.innerHTML = par_alt
    obj_div_modal.style.display = 'block'
}

function funFechaModal() {
    obj_div_modal.style.display = 'none'
}
