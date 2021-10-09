// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


import Mail from '@ioc:Adonis/Addons/Mail';

export default class EmailsController {


    public async confirmationCodeEmail( { request, response } ){
        //aqui se recibe la data del request
        const { data }  = request.all();

        //codigo para enviar correos
        await Mail.use('smtp').send( (message) => {
            message.from('deuna@gmail.com').to(`${data.email}`).
            subject('Bienvenido a deuna!').htmlView('emails/verify',  { data: data } )
        });

        response.status(200).send( { success: "verification email sent successfully"} );
        
    }

    public async passwordRecoverEmail( { request, response } ){
        //aqui se recibe la data del request
        const { data } = request.all();

        //  codigo para enviar correos
        await Mail.use('smtp').send( (message) => {
            message.from('deuna@gmail.com').to(`${data.email}`).
            subject('Bienvenido a deuna!').htmlView('emails/recover',  { data: data } )
        });

        response.status(200).send( { success: "recovery code sent successfully"} );
    }

    public async passwordResetEmail( { request, response } ){
        //aqui se recibe la data del request
        const { data } = request.all();

        //  codigo para enviar correos
        await Mail.use('smtp').send( (message) => {
            message.from('deuna@gmail.com').to(`${data.email}`).
            subject('Bienvenido a deuna!').htmlView('emails/new_password',  { data: data } )
        });

        response.status(200).send( { success: "recovery code sent successfully"} );
    }

}
