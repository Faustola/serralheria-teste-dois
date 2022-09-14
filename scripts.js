let botaoHamburgao = document.getElementById("hamburgao");
let botaoXis = document.getElementById("x-menu");
let imgXis = document.getElementById("x");
let botaoInicio = document.getElementById("inicio");
let botaoServicos = document.getElementById('ferramentas');
let botaoTelefone = document.getElementById('telefone');
let botaoEndereco = document.getElementById('endereco');

botaoHamburgao.addEventListener('click', function() {

   botaoInicio.style.cssText="top: 20px";
   botaoServicos.style.cssText="left: -160px";
   botaoTelefone.style.cssText="left: 160px";
   botaoEndereco.style.cssText="top: 160px";

   botaoHamburgao.style.cssText="width: 0; height: 0; top: 100px";
   botaoXis.style.cssText="width: 55px; height: 50px; top: 90px";
   imgXis.style.cssText="width: 55px; height: 35px";
});

botaoXis.addEventListener('click', function() {

   botaoInicio.style.cssText="top: 90px";
   botaoServicos.style.cssText="left: 0";
   botaoTelefone.style.cssText="left: 0";
   botaoEndereco.style.cssText="top: 90px";

   botaoHamburgao.style.cssText="width: 55px; height: 50px; top: 90px";
   botaoXis.style.cssText="width: 0; height: 0; top: 100px";
   imgXis.style.cssText="width: 0; height: 0";
});

function fechaMenu() {

   botaoInicio.style.cssText="top: 90px";
   botaoServicos.style.cssText="left: 0";
   botaoTelefone.style.cssText="left: 0";
   botaoEndereco.style.cssText="top: 90px";

   botaoHamburgao.style.cssText="width: 55px; height: 50px; top: 90px";
   botaoXis.style.cssText="width: 0; height: 0; top: 100px";
   imgXis.style.cssText="width: 0; height: 0";

};

/*funções pra abrir as imagens da seção serviços*/

function abreGrade() {

      let grade = document.getElementById("grade");
   
      grade.style.cssText="width: 80%; height:80%";
  
};

function abrePortao() {

   let portao = document.getElementById("portao");

   portao.style.cssText="width: 80%; height:80%";

};

function abreEstrutura() {

   let estrutura = document.getElementById("estrutura");

   estrutura.style.cssText="width: 80%; height:80%";

};

function abreMotores() {

   let motores = document.getElementById("motores");

   motores.style.cssText="width: 80%; height:80%";

};

function thanks() {

   let header = document.getElementById('header');
   let sectionInicio = document.getElementById('section-inicio');
   let sectionServicos = document.getElementById('section-servicos');
   let sectionLocalizacao = document.getElementById('section-localizacao');
   let sectionContato = document.getElementById('section-contato');
   let footer = document.getElementById('footer');
   let thanks = document.getElementById('thanks');

   header.style.opacity="0.4";
   sectionInicio.style.opacity="0.4";
   sectionServicos.style.opacity="0.4";
   sectionLocalizacao.style.opacity="0.4";
   sectionContato.style.opacity="0.4";
   footer.style.opacity="0.4";

   thanks.style.display="block";
}

function reinicia() {

   location.reload()

}