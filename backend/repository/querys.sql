SELECT * FROM Sucursal

SELECT * FROM Almacen

INSERT Sucursal (EmpresaID_su, Codigo_su, Nombre_su, Direccion_su)
VALUES ('97DC7F59-2EAF-4864-8D84-1125E55ED6AA', 'S2-2', 'Tienda Pro Retailers Multicentro', 'Mall Multicentro')

INSERT Almacen (SucursalID_al, Codigo_al, Nombre_al, Direccion_al)
VALUES ('CCF31882-15B9-4170-AEB9-1C40C8402D5E', 'A2-2', 'Piso de Venta Multricentro', 'Mall Multicentro. Local 16A tercer piso')
---------------------------------------------------------------------------------------------------------------------------------

SELECT * FROM Articulo

INSERT Articulo (Descripcion_ar, Precio_ar, PorcentajeImpuesto_ar, Referencia_ar)
VALUES ('asador a gas', 150.00, 7, '')

INSERT Articulo (Descripcion_ar, Precio_ar, PorcentajeImpuesto_ar, Referencia_ar)
VALUES ('sombrilla para sol', 15.00, 7, '')

INSERT Articulo (Descripcion_ar, Precio_ar, PorcentajeImpuesto_ar, Referencia_ar)
VALUES ('microondas para calentar comida', 55.00, 7, '')

----------------------------------------------------------------------------------------------------------------------------------
SELECT * FROM Inventario

INSERT Inventario (AlmacenID_in, Disponible_in, ArticuloID_in)
VALUES ('BF0B9871-B3C5-4DBA-BB14-307200C50E7C', 20, '22D60E1E-62A2-44BD-837E-CECBFDF0AF68')


INSERT Inventario (AlmacenID_in, Disponible_in, ArticuloID_in)
VALUES ('BF0B9871-B3C5-4DBA-BB14-307200C50E7C', 5, 'F1C5E712-7548-4524-A193-60C59999331A')


INSERT Inventario (AlmacenID_in, Disponible_in, ArticuloID_in)
VALUES ('236EA6C1-AFA2-4B4D-AA92-4939A1808262', 30, '22D60E1E-62A2-44BD-837E-CECBFDF0AF68')


INSERT Inventario (AlmacenID_in, Disponible_in, ArticuloID_in)
VALUES ('236EA6C1-AFA2-4B4D-AA92-4939A1808262', 50, 'F1C5E712-7548-4524-A193-60C59999331A')

INSERT Inventario (AlmacenID_in, Disponible_in, ArticuloID_in)
VALUES ('236EA6C1-AFA2-4B4D-AA92-4939A1808262', 50, '92C638C1-D33B-4C72-9CEC-A20BA5EE3E77')

----------------------------------------------------------------------------------------------------------------------------------

SELECT * FROM Caja

INSERT Caja (AlmacenID_ca, Codigo_ca, Nombre_ca)
VALUES ('BF0B9871-B3C5-4DBA-BB14-307200C50E7C', 'C1-1', 'Caja Mall Multiplaza Pacific')

INSERT Caja (AlmacenID_ca, Codigo_ca, Nombre_ca)
VALUES ('236EA6C1-AFA2-4B4D-AA92-4939A1808262', 'C2-2', 'Caja Mall Multicentro')
