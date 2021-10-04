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
        html: `<h4> Anuncio: El ganador de la Loteria fue ${ganador.nombre} . <br/> Gracias a todos por participar</h4>`
    };
try {
    const result = await transporter.sendMail(mailOptions);
    return result;
} catch (e) {
    throw e;
}
};

module.exports = { send };


