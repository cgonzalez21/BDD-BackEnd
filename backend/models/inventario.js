var Inventario = function (data) {
    this.id_in = data['ID_in'].value
    this.nombre_em = data['FechaRegistro_in'].value
    this.descripcion_em = data['Almacen_in'].value
    this.nombre_al = data['Nombre_al'].value
    this.nombre_su = data['Nombre_su'].value
    this.descripcion_em = data['Disponible_in'].value
    this.descripcion_em = data['Articulo_id'].value
}

module.exports = Inventario
