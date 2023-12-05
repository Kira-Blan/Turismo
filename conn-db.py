
#Importando la librería mysql.connector para conectar Mysql con python
import mysql.connector
from mysql.connector import Error

try:
    conexion =mysql.connector.connect(
        host="localhost",
        port=3306,
        user="root",
        password="",
        db="clientes"
    )

    if conexion.is_connected():
        print("Conexión exitosa.")
        infoServer = conexion.get_server_info()
        print("Info del servidor", infoServer)
except Error as ex:
    print("Error de conexión:", ex)
finally:
    if conexion.is_connected():
        conexion.close() #Cierra la conexión a la DB
        print("La conexión ha finalizado")




#def connectionDB():
    #mydb = mysql.connector.connect(
        #mysql = "localhost",
        #user = "root",
        #password = "",
        #database = "clientes"
        #)
    #if mydb:
        #print ("Conexión exitosa")
    #else:
        #print ("Error en conexión a DB")
    #return mydb


#import mysql.connector

import datetime

#class Mensaje:

    #def __init__(self, host, user, password, database):
        #self.conn = mysql.connector.connect(
            #host=host,
            #user=user,
            #assword=password,
            #database=database
            #)
        #self.cursor = self.conn.cursor()
        #try:
            #self.cursor.execute(f"USE {database}")
        #except mysql.connector.Error as err:
            #if err.errno == mysql.connector.errorcode.ER_BAD_DB_ERROR:
                #self.cursor.execute(f"CREATE DATABASE {database}")
                #self.conn.database = database
            #else:
                #raise err
           

