/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

// ========================================================================
// ya se instaló mailer de adonis ❤️                                       
// ya se instaló el motor de plantillas (edge) 🎃                          
// se hará uso de los eventos para que los correos se envíen asyncronos ✨   
// instalado mongoose 🦄
// ========================================================================

Route.get('/', async () => {
  return { hello: 'world' }
})

//rutas para recuperar contraseña
Route.post('/confirmation/code/email', 'EmailsController.confirmationCodeEmail');
Route.post('/password/recover/email',   'EmailsController.passwordRecoverEmail');
Route.post('/password/reset',   'EmailsController.passwordResetEmail');




