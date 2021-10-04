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
                    <td><img width="50" src="${u.foto}"/></td>
                    <td>${u.id}</td>
                          <td>${u.nombre}</td>
                    <td>${u.correo}</td>
                    <td>${u.pais}</td>
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
 
        fetch("http://localhost:8080/ganador")
          .then((res) => res.json())
          .then((ganador) => {
            $(".ganador").removeClass("d-none");
            console.log(ganador);
            $("#ganador").html(`
              <h5>${ganador.nombre}</h5>
              <img class="d-block m-auto" src="${ganador.foto}"/>
            `);
          });
      }

