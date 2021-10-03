      let Premio = {};
      //  Premio
      function getPremio() {
        fetch("http://localhost:8080/premio")
          .then((res) => res.json())
          .then((premio) => {
            Premio = premio;
            imprimirPremio();
          });
      }

      function imprimirPremio() {
        $(".premio h4").html(Premio.nombre);
        $(".premio img").attr("src", Premio.img);
      }

      getPremio();
      // Modificar Premio
      function cambiarPremio() {
        let nuevoPremio = {
          nombre: $("#nuevoPremio").val(),
          img: $("#nuevoPremioImg").val(),
        };
        fetch("http://localhost:8080/premio", {
          method: "PUT",
          body: JSON.stringify(nuevoPremio),
        }).then(() => {
          $("#exampleModal").modal("hide");
          getPremio();
        });
      }

      //   Participantes
      let participantes = [];

      function getParticipantes() {
        fetch("http://localhost:8080/usuarios")
          .then((res) => res.json())
          .then((data) => {
            participantes = data.usuarios;
            imprimir();
          });
      }

      function imprimir() {
        $("tbody").html("");
        participantes.forEach((u) => {
          $("tbody").append(`
                <tr>
                    <td>${u.id}</td>
                    <td>${u.correo}</td>
                    <td>${u.nombre}</td>
                    <td>${u.pais}</td>
                    <td><img width="50" src="${u.foto}"/></td>
                </tr>
              `);
        });
      }

      function nuevoUsuario() {
        fetch("http://localhost:8080/usuario", {
            method: "POST"
          })
          .then((res) => res.json())
          .then(() => {
            getParticipantes();
          });
      }

      getParticipantes();

      function generarGanador() {
        $('.spinner').removeClass('d-none')
        fetch("http://localhost:8080/ganador")
          .then((res) => res.json())
          .then((ganador) => {
            $(".ganador").removeClass("d-none");
            console.log(ganador);
            $("#ganador").html(`
              <h3>${ganador.nombre}</h3>
              <img class="100 d-block m-auto" src="${ganador.foto}"/>
            `);
            $('.spinner').addClass('d-none')
          });
      }

