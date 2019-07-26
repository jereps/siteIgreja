<!DOCTYPE html>
<html lang="pt-br">

<head>

  <!-- Global site tag (gtag.js) -  -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-144568948-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-144568948-1');
</script>

  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>
    INSEJEC - Igreja Nacional do Senhor Jesus Cristo - São José Dos Campos
  </title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" type="text/css" media="screen" href="../assets/css/main.css" />
  <link rel="stylesheet" type="text/css" media="screen" href="../assets/css/contato.css" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />


</head>
<?php

    if(isset($_POST['nome']) && !empty($_POST['nome'])) {
      $nome = addslashes($_POST['nome']);
      $tel = addslashes($_POST['tel']);
      $replayto = addslashes($_POST['replyto']);
      $comentarios = addslashes($_POST['comentarios']);

      $para = "igrejanacionalsj@yahoo.com.br";
      $assunto = "Mensagem do Site";
      $corpo = "Nome: ".$nome."\r\n E-Mail: ".$replayto."\r\n Mensagem: ".$comentarios;
      $cabecalho = "From: comunicacao@insejecsjc.com.br"."\r\n".
      "Reply-To: ".$replayto."\r\n"."X-Mailer: PHP/".phpversion();

      mail($para, $assunto, $corpo, $cabecalho);

      // echo "<h2>E-Mail enviado com sucesso!</h2>";

    }

?>
<body>
  <div id="fb-root"></div>
  <script async defer crossorigin="anonymous" src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v3.2">
  </script>

  <header id="header" role="banner"></header>


  <div class="container">
    <div class="lateral1"></div>

    <div class="header">
      <section class="logo">
        <img class="img" src="../assets/img/logo-insejec.png" />
      </section>

      <input id="menu-mobile" type="checkbox">

      <label for="menu-mobile" class="menumobile">
        <div class="icon-mobile">
          <span class="hamburguer"></span>
        </div>
      </label>

      <nav class="nav-mobile">
        <h3> <a href="../index.html">home</a> </h3>
        <!-- <h3> <a href="#">Ensino</a> </h3> -->
        <!-- <h3> <a href="#">Médias</a> </h3> -->
        <h3> <a href="../igreja/celulas.html">Células</a> </h3>
        <h3> <a href="https://www.palavradafe.com.br/" target="_blank">produtos</a> </h3>
        <h3> <a href="#">contato</a> </h3>

        <ul>
          <h3><a href="../igreja/pastores.html">pastores</a></h3>
          <!-- <li> <a href="../pastores/rosivaldo.html">Rosivaldo</a> </li>
          <li> <a href="#">Priscila</a> </li> -->
        </ul>

        <ul>
          <h3>Ensino</h3>
          <li> <a href="../ensino/carreiracrista.html">Carreira Cristã</a> </li>
        </ul>

        <ul>
          <h3>Mídias</h3>
          <li> <a href="https://www.facebook.com/pg/insejecsjcampos/photos" target="_blank">fotos</a> </li>
          <li> <a href="http://www.insejec.com.br/categoria/galeria-de-videos" target="_blank">Vídeos</a>
          </li>
        </ul>

        <ul>
          <h3>Sobre</h3>
          <li> <a href="../igreja/decretos.html">decretos</a> </li>
          <!-- <li> <a href="#">liderenças</a> </li> -->
          <li> <a href="../sobre/quemsomos.html">Quem somos</a> </li>
          <li> <a href="../sobre/visaocelular.html">visão celular</a> </li>
          <li> <a href="../sobre/visaoemissao.html">visão e missão</a> </li>
          <li> <a href="../sobre/nossahistoria.html">nossa história</a> </li>
          <li> <a href="../sobre/emquecremos.html">em que cremos</a> </li>
          <li> <a href="../sobre/nossosvalores.html">nossos valores</a> </li>
          <li> <a href="http://www.insejec.com.br/insejecs-no-mundo/" target="_blank">insejecs no mundo</a> </li>
          <li> <a href="../sobre/visaodecompromisso.html">visão de compromisso</a> </li>
          <li> <a href="http://www.insejec.com.br/sobre-valnice/" target="_blank">Valnice Milhomens</a> </li>
        </ul>
      </nav>

      <!-- <section class="social">
          
          <div class="icons">
              <p>Siga-nos!</p>
            <a class="btn-social" href="https://www.facebook.com/insejecsjcampos" target="_blank"><i class="fab fa-facebook-f"></i></a>
            <a class="btn-social" href="#"><i class="fab fa-youtube"></i></a>
            <a class="btn-social" href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </section> -->
    </div>

    <div class="lateral2"></div>

    <nav class="nav">
      <ul class="menu">
        <li> <a href="../index.html">Home</a> </li>
        <li>
          <a href="#">Sobre</a>
          <ul>
            <li> <a href="../igreja/decretos.html">decretos</a> </li>
            <!-- <li> <a href="#">liderenças</a> </li> -->
            <li> <a href="../sobre/quemsomos.html">Quem somos</a> </li>
            <li> <a href="../sobre/visaocelular.html">visão celular</a> </li>
            <li> <a href="../sobre/visaoemissao.html">visão e missão</a> </li>
            <li> <a href="../sobre/nossahistoria.html">nossa história</a> </li>
            <li> <a href="../sobre/emquecremos.html">em que cremos</a> </li>
            <li> <a href="../sobre/nossosvalores.html">nossos valores</a> </li>
            <li> <a href="http://www.insejec.com.br/insejecs-no-mundo/" target="_blank">insejecs no mundo</a> </li>
            <li> <a href="../sobre/visaodecompromisso.html">visão de compromisso</a> </li>
            <li> <a href="http://www.insejec.com.br/sobre-valnice/" target="_blank">Valnice Milhomens</a> </li>
          </ul>
        </li>
        <li>
          <a href="../igreja/pastores.html">Pastores</a>
          <!-- <ul>
            <li> <a href="../pastores/rosivaldo.html">Rosivaldo</a> </li>
            <li> <a href="#">Priscila</a> </li>
            <li><a href="#"></a></li>
          </ul> -->
        </li>
        <!-- <li> <a href="#">Mídias</a> </li>-->
        <li>
          <a href="#">Mídias</a>
          <ul>
            <li> <a href="https://www.facebook.com/pg/insejecsjcampos/photos" target="_blank">fotos</a>
            </li>
            <li> <a href="http://www.insejec.com.br/categoria/galeria-de-videos" target="_blank">Vídeos</a>
            </li>
          </ul>
        </li>

        <li> <a href="../igreja/celulas.html">Células</a> </li>
        <li>
          <a href="https://www.palavradafe.com.br/" target="_blank"> produtos </a>
        </li>

        <!-- <li> <a href="#">ensino</a> </li> -->
        <li>
          <a href="#">ensino</a>
          <ul>
            <li> <a href="../ensino/carreiracrista.html">Carreira Cristã</a> </li>
          </ul>
        </li>

        <li> <a href="#">contato</a> </li>
      </ul>
    </nav>

    <div class="FotoGrande">
      <h1>BEM-VINDO!</h1>
      <h4>A FAMÍLIA DE DEUS</h4>
    </div>

    <section class="social">
      <div class="icons">
        <!-- <p>Siga-nos!</p>  -->
        <ul>
          <li title="Facebook">
            <a class="btn-social" href="https://www.facebook.com/insejecsjcampos" target="_blank">
              <i class="fab fa-facebook-f"></i> </a>
          </li>

          <li title="YouTube">
            <a class="btn-social" href="https://www.youtube.com/channel/UCbEzKNxd0pdJdkao0hO9sTw" target="_blank"> <i
                class="fab fa-youtube"></i> </a>
          </li>

          <li title="Instagram">
            <a class="btn-social" href="https://www.instagram.com/insejec_sjc" target="_blank"> <i
                class="fab fa-instagram"></i> </a>
          </li>

          <!-- <li title="Flickr">
            <a class="btn-social" href="#" target="_blank"> <i class="fab fa-flickr"></i> </a>
          </li> -->
        </ul>
      </div>
    </section>

    <!-- <div class="container2"> -->
    <section class="main">

      <div class="wrapper">
        <h2> envie-nos uma mensagem, pedidos de oração</h2>

        <form method="POST">

            <!-- email enviado atraves do formmail.cgi do kinghost -->
        <!-- <form action="http://formmail.kinghost.net/formmail.cgi" method="POST"> -->
          <!-- <input type="hidden" name="recipient" value="jeremiason2911@gmail.com">
          // Pode ser qualquer endereço de email
          <input type="hidden" name="redirect" value="192.168.1.109:5500/contato.html">
          // Após o envio, o usuário será redirecionado para a página configurada aqui
          <input type="hidden" name="subject" value="teste de assunto"> //Assunto da mensagem
          <input type="hidden" name="email" value="jeremiason2911@gmail.com"> -->
          <!-- Deve ser uma conta de email ativa em seu domínio -->

          <div class="input-field">
            <input type="text" name="nome" required>
            <label>Nome</label>
          </div>

          <div class="input-field">
            <input type="tel" name="tel" required>
            <label>Telefone</label>
          </div>

          <div class="input-field">
            <input type="email" name="replyto" required>
            <label>E-mail</label>
          </div>

          <div class="input-field">
            <textarea rows="7" name="comentarios" required></textarea>
            <label>mensagem</label>
          </div>

          <p>
            <input type="submit" name="BTEnvia" value="Enviar" class="btn">
            <input type="reset" name="BTApaga" value="Apagar" class="btn"> </p>
        </form>

      </div>
      <!-- <h2 class="title">UM TÍTULO PARA A SECTION</h2>

        <article class="article-main">
          <a href="#">
            <img src="https://source.unsplash.com/random/702x360" />
            <h2 class="caption">Caption</h2>
          </a>
        </article> -->

    </section>

    <aside class="aside">
      <div class="fb1">
        <div class="fb-page" data-href="https://www.facebook.com/insejecsjcampos" data-tabs="timeline,events,messages"
          data-height="700" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false"
          data-show-facepile="true">
          <blockquote cite="https://www.facebook.com/insejecsjcampos" class="fb-xfbml-parse-ignore">
            <a href="https://www.facebook.com/insejecsjcampos">
              Igreja Nacional do Senhor Jesus Cristo em São José dos Campos
            </a>

          </blockquote>
        </div>
      </div>

      <div class="fb2">
        <div class="fb-page" data-href="https://www.facebook.com/insejecsjcampos" data-tabs="" data-width=""
          data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false"
          data-show-facepile="false">
          <blockquote cite="https://www.facebook.com/insejecsjcampos" class="fb-xfbml-parse-ignore"><a
              href="https://www.facebook.com/insejecsjcampos">Igreja Nacional do Senhor Jesus Cristo em São José dos
              Campos</a></blockquote>
        </div>
      </div>
    </aside>
    <!-- </div> //container 2-->

    <footer class="footer">
      <nav class="siteMap">
        <h3> <a href="../index.html">home</a> </h3>
        <!-- <h3> <a href="#">Ensino</a> </h3> -->
        <!-- <h3> <a href="#">Médias</a> </h3> -->
        <h3> <a href="../igreja/celulas.html">Células</a> </h3>
        <h3> <a href="https://www.palavradafe.com.br/" target="_blank">produtos</a> </h3>
        <h3> <a href="#">contato</a> </h3>

        <ul>
          <h3><a href="../igreja/pastores.html">pastores</a></h3>
          <!-- <li> <a href="../igreja/pastores.html">Rosivaldo</a> </li>
          <li> <a href="#">Priscila</a> </li> -->
        </ul>

        <ul>
          <h3>Ensino</h3>
          <li> <a href="../ensino/carreiracrista.html">Carreira Cristã</a> </li>
        </ul>

        <ul>
          <h3>Mídias</h3>
          <li> <a href="https://www.facebook.com/pg/insejecsjcampos/photos" target="_blank">fotos</a> </li>
          <li> <a href="http://www.insejec.com.br/categoria/galeria-de-videos" target="_blank">Vídeos</a>
          </li>
        </ul>

        <ul>
          <h3>Sobre</h3>
          <li> <a href="../igreja/decretos.html">decretos</a> </li>
          <!-- <li> <a href="#">liderenças</a> </li> -->
          <li> <a href="../sobre/quemsomos.html">Quem somos</a> </li>
          <li> <a href="../sobre/visaocelular.html">visão celular</a> </li>
          <li> <a href="../sobre/visaoemissao.html">visão e missão</a> </li>
          <li> <a href="../sobre/nossahistoria.html">nossa história</a> </li>
          <li> <a href="../sobre/emquecremos.html">em que cremos</a> </li>
          <li> <a href="../sobre/nossosvalores.html">nossos valores</a> </li>
          <li> <a href="http://www.insejec.com.br/insejecs-no-mundo/" target="_blank">insejecs no mundo</a> </li>
          <li> <a href="../sobre/visaodecompromisso.html">visão de compromisso</a> </li>
          <li> <a href="http://www.insejec.com.br/sobre-valnice/" target="_blank">Valnice Milhomens</a> </li>
        </ul>

      </nav>

      <div class="endereco">
        <section class="logo">
          <!-- <img src="http://placehold.it/60x60/09f/fff.png" alt=""> -->
          <a href="https://goo.gl/maps/ysbrcXshC61zavVt5" target="_blank" class="decorationnone"><img
              src="../assets/img/logo-insejec.png" alt="logo" /></a>
        </section>
        <address>
          <!-- <p><strong> IGREJA NACIONAL DO SENHOR JESUS CRISTO </strong></p> -->
          <a href="https://goo.gl/maps/ysbrcXshC61zavVt5" target="_blank" class="decorationnone">
            <p> <strong>São José Dos Campos</strong> </p>
            <p>
              Rua Fernando Costa, 182 Jardim Esplanada II<br>
              CEP: 12.242-570 Telefone: (12) 3302.6442
              <br> Cultos: <br> Sexta-Feira: 20h e Domingos: 10h
            </p>
          </a>
        </address>
      </div>

      <div class="copySocial">
        <section class="social-footer">
          <div class="icons-footer">
            <!-- <p>Siga-nos!</p>  -->
            <ul>
              <li title="Facebook">
                <a class="btn-social-footer" href="https://www.facebook.com/insejecsjcampos" target="_blank">
                  <i class="fab fa-facebook-f"></i> </a>
              </li>

              <li title="YouTube">
                <a class="btn-social-footer" href="https://www.youtube.com/channel/UCbEzKNxd0pdJdkao0hO9sTw"
                  target="_blank"> <i class="fab fa-youtube"></i> </a>
              </li>
              <li title="Instagram">
                <a class="btn-social-footer" href="https://www.instagram.com/insejec_sjc" target="_blank"> <i
                    class="fab fa-instagram"></i> </a>
              </li>
              <!-- <li title="Flickr">
                <a class="btn-social-footer" href="#" target="_blank"> <i class="fab fa-flickr"></i> </a>
              </li> -->
            </ul>
          </div>
        </section>

        <p class="copy">&copy; INSEJEC 2019 - Todos os direitos reservados</p>
      </div>
    </footer>

    <div> <a class="btn-topo" href="#header"> <i class="fas fa-angle-up"></i> </a> </div>
  </div>

  <script src="../assets/js/main.js"></script>

</body>

</html>