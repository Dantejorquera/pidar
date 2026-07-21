// ========================================
// INICIAR SESIÓN
// ========================================

async function login(email, password) {

    const { error } = await supabaseClient.auth.signInWithPassword({

        email: email,
        password: password

    });

    if (error) {

        alert(error.message);
        return false;

    }

    window.location.href = "privado.html";

}


// ========================================
// CERRAR SESIÓN
// ========================================

async function logout(){

    await supabaseClient.auth.signOut();

    window.location.href="login.html";

}


// ========================================
// VERIFICAR SI EXISTE SESIÓN
// ========================================

async function verificarSesion(){

    const { data } = await supabaseClient.auth.getSession();

    if(!data.session){

        window.location.href="login.html";

    }

}