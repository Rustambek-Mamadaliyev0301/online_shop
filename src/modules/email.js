const nodemailer = require("nodemailer");

module.exports.email = async function email(to, subject, mail_body, mail_html) {
	const transport = await nodemailer.createTransport({
		host: "smtp.yandex.ru",
		port: 465,
		secure: true,
		auth: {
			user: "rustambek01uz",
			pass: "931487733RMS",
		},
	});

	return await transport.sendEmail({
		from: '"Bizning kompaniya" <rustambek01uz>',
		to,
		subject,
		text: mail_body,
		html: mail_html,
	});
};
