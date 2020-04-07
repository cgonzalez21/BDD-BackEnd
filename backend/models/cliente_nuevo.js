var NewClient = function (data) {
    this.id_cl = data['ID_cl'].value
    this.fecha_reg = data ['FechaRegistro_cl'].value
    this.nombre_cl = data['Nombre_cl'].value
    this.apellido_cl = data['Apellido_cl'].value
    this.telefono_cl = data['Telefono_cl'].value
    this.correo_cl = data['Correo_cl'].value
    this.cedula_cl = data['Cedula_cl'].value
}

module.exports = NewClient
