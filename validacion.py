def es_contrasenia_segura(contrasenia):
    largo = True
    mayuscula = True
    numero = True

    if len(contrasenia) > 7:
        largo = False
    for i in range(len(contrasenia)):
        if contrasenia[i].isupper():
            mayuscula = False
            if contrasenia[i].isnumeric():
             numero = False

        if largo and mayuscula and numero:
            return False
    else:
        return True   

contrasenia = input("Ingrese su contraseña: ")
verificacion = es_contrasenia_segura(contrasenia)
if verificacion:
    print("Su contraseña es segura")
else:
    print("Su contaseña no es segura")
