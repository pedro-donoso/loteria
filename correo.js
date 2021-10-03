const nodemailer = require("nodemailer")

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "correopruebas765@gmail.com",
        pass: "nodemailer",
    },
});

const send = async(ganador, correos, premio) => {
    let mailOptions = {
        from: "correopruebas765@gmail.com",
        to: ["correopruebas765@gmail.com"].concat(correos),
        subject: `¡${ganador.nombre} ha ganado!`,
        html: `<h3> Anuncio: El ganador de ¿Quién ganará? fue ${ganador.nombre} y ha ganado: ${premio}. <br/> Gracias a todos por participar</h3>`
    };
try {
    const result = await transporter.sendMail(mailOptions);
    return result;
} catch (e) {
    throw e;
}
};

module.exports = { send };


