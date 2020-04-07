var Articulo = function (data) {
    this.id_ar = data['ID_ar'].value
    this.fecha_reg = data ['FechaRegistro_ar'].value
    this.descripcion_ar = data['Descripcion_ar'].value
    this.precio_ar = data['Precio_ar'].value
    this.porcentajeimp_ar = data['PorcentajeImpuesto_ar'].value
    this.estatus_ar = data['Estatus_ar'].value
}

module.exports = Articulo
