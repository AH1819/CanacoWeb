const btnenvio = document.getElementById('enviarcorreo');
 btnenvio.addEventListener('click',function(e){
    e.preventDefault();
    const nombre_empresa = document.getElementsByName('nombre-empresa',value);
    const representante = document.getElementsByName('representante',value);
    const telefono = document.getElementsByName('telefono',value);
    const direccion = document.getElementsByName('direccion',value);
    const correo = document.getElementsByName('email',value);
    window.location.href='mailto:adolforv1819@hotmail.com?subject=Contacto&body=Empresa%3A%20${nombre_empresa}%0ANombre%3A%20${representante}%0ATelefono%3A%20${telefono}%0ADireccion%3A%20${direccion}%0ACorreo%3A%20${correo}';
 });