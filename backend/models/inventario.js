var Inventario = function (data) {
    this.id_in = data['ID_in'].value
    this.nombre_em = data['FechaRegistro_in'].value
    this.descripcion_em = data['Almacen_in'].value
    this.nombre_al = data['Nombre_al'].value
    this.articulo_id = data['ArticuloID_in'].value
    this.descripcion_ar = data['Descripcion_ar'].value
    this.disponible_in = data['Disponible_in'].value
}

module.exports = Inventario
