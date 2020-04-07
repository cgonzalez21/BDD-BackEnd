var Empresa = function (data) {
    this.id_em = data['ID_em'].value
    this.nombre_em = data['Nombre_em'].value
    this.descripcion_em = data['Descripcion_em'].value
}

module.exports = Empresa
